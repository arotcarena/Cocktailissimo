<?php
namespace App\Service\Stripe;

use Stripe\PaymentIntent;
use App\Config\SecurityConfig;
use Stripe\Account;
use Stripe\Customer;
use Stripe\Exception\ApiErrorException;
use Stripe\Refund;
use Stripe\StripeClient;
use Stripe\Transfer;
use Stripe\Webhook;

class StripeService
{
    private StripeClient $stripe;

    public function __construct()
    {
        $this->stripe = new StripeClient(SecurityConfig::STRIPE_SECRET_KEY);
    }

    /**
     * @return string accountId
     */
    public function createConnectAccount(string $countryIso, string $accountTokenId, array $knownData = []): string
    {
        $data = [
            'country' => strtoupper($countryIso),
            'type' => 'custom',
            'capabilities' => [
              'card_payments' => ['requested' => true],
              'transfers' => ['requested' => true],
            ],
            'account_token' => $accountTokenId,
        ];

        $account = $this->stripe->accounts->create(array_merge($data, $knownData));

        return $account->id;
    }

    /**
     * @return string verificationLink
     */
    public function getStripeHostedVerificationLink(string $accountId, string $refreshUrl, string $returnUrl): string 
    {
        $accountLink = $this->stripe->accountLinks->create([
            'account' => $accountId,
            'refresh_url' => $refreshUrl,
            'return_url' => $returnUrl,
            'type' => 'account_onboarding',
            'collect' => 'eventually_due',
        ]);
        return $accountLink->url;
    }

    public function getAccount(string $accountId): Account
    {
        return $this->stripe->accounts->retrieve($accountId);
    }

    /**
     * @param integer $limit
     * @return Account[]
     */
    public function getAllAccounts($limit = 20)
    {
        return $this->stripe->accounts->all(['limit' => $limit])->data;
    }

    public function removeAccount(string $accountId): void
    {
        $this->stripe->accounts->delete($accountId);
    }

    //customer
    public function createCustomer(string $country, string $email, string $fullName): Customer 
    {
        return $this->stripe->customers->create([
            'address' => [
                'country' => $country,
            ],
            'email' => $email,
            'name' => $fullName
        ]);
    }

    //paymentIntent
    public function createPaymentIntent(int $amount, array $metadata = [], string $customerId = null, string $transferGroup = null): PaymentIntent
    {
        $params = [
            'amount' => $amount,
            'currency' => 'eur',
            'metadata' => $metadata,
            'automatic_payment_methods' => [
                'enabled' => true,
            ],
        ];
        if($transferGroup)
        {
            $params['transfer_group'] = $transferGroup;
        }
        if($customerId)
        {
            $params['customer'] = $customerId;
        }

        return $this->stripe->paymentIntents->create($params);
    }

    public function retrievePaymentIntent(string $piSecret, string $piPublic = null): PaymentIntent
    {
        $pi = $piPublic ?: explode('_secret_', $piSecret)[0];

        return $this->stripe->paymentIntents->retrieve($pi);
    }

    public function updatePaymentIntent(string $id, int $amount): ?PaymentIntent
    {
        try 
        {
            return $this->stripe->paymentIntents->update($id, [
                'amount' => $amount
            ]);
        }
        catch(ApiErrorException $e)
        {
            return null;
        }
    }

    public function refundsPaymentIntent(string $id): ?Refund
    {
        try
        {
            return $this->stripe->refunds->create(['paymentIntent' => $id]);
        }
        catch(ApiErrorException $e)
        {
            return null;
        }
    }

    //transfers
    public function createTransfer(int $amount, string $accountId, string $transferGroup = null, $currency = 'eur'): Transfer
    {
        return $this->stripe->transfers->create([
            'amount' => $amount,
            'currency' => $currency,
            'destination' => $accountId,
            'transfer_group' => $transferGroup,
        ]);
    }


    //webhook
    /**
     * @param string ...$eventTypesToListen
     * @return mixed object concerned or null
     */
    public function extractWebhookSubject(string ...$eventTypesToListen): mixed
    {
        //stripe doit être initialisé (fait dans constructor)

        // This is your Stripe CLI webhook secret for testing your endpoint locally.
        $endpoint_secret = SecurityConfig::STRIPE_WEBHOOK_ENDPOINT_SECRET;

        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try 
        {
            $event = Webhook::constructEvent(
                $payload, $sig_header, $endpoint_secret
            );
        } 
        catch(\UnexpectedValueException $e) 
        {
            return null;
        } 
        catch(\Stripe\Exception\SignatureVerificationException $e) 
        {
           return null;
        }

        if(in_array($event->type, $eventTypesToListen))
        {
            return $event->data->object;
        }
        //invalid event type
        return null;
    }
}