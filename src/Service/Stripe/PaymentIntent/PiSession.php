<?php
namespace App\Service\Stripe\PaymentIntent;

use Symfony\Component\HttpFoundation\RequestStack;

class PiSession
{
    public const CURRENT_PI_SESSION_KEY = 'pi';

    public function __construct(
        private RequestStack $requestStack
    )
    {
        
    }

    /**
     * Get paymentIntent id stored in session
     *
     * @return string|null $paymentIntentId
     */
    public function get(): ?string
    {
       return $this->requestStack->getSession()->get(self::CURRENT_PI_SESSION_KEY);
    }

    /**
     * Store paymentIntent id in session
     *
     * @param string $paymentIntentId
     * @return void
     */
    public function set(string $paymentIntentId): void
    {
        $this->requestStack->getSession()->set(self::CURRENT_PI_SESSION_KEY, $paymentIntentId);
    }
}