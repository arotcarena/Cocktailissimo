<?php
namespace App\Convertor;

use Stripe\Account;


class StripeAccountToArrayConvertor
{
    public function convert(Account $account)
    {
        return [
            'email' => $account->email,
            'country' => $account->country,
            'defaultCurrency' => strtoupper($account->default_currency),

            'company' => [
                'name' => $account->company->name,
                'phone' => $account->company->phone,
                'address' => [
                    'lineOne' => $account->company->address->line1,
                    'lineTwo' => $account->company->address->line2,
                    'postcode' => $account->company->address->postal_code,
                    'city' => $account->company->address->city,
                    'state' => $account->company->address->state,
                    'country' => $account->company->address->country
                ]
            ],
            'externalAccounts' => $this->convertExternalAccounts($account->external_accounts->data)
        ];
    }

    public function convertExternalAccounts(array $externalAccounts): array 
    {
        $externalAccountsArray = [];
        foreach($externalAccounts as $externalAccount)
        {
            $externalAccountsArray[] = [
                'accountHolderName' => $externalAccount->account_holder_name,
                'accountHolderType' => $externalAccount->account_holder_type,
                'accountType' => $externalAccount->account_type,
                'bankName' => $externalAccount->bank_name,
                'country' => $externalAccount->country,
                'currency' => strtoupper($externalAccount->currency),
            ];
        }
        return $externalAccountsArray;
    }
}