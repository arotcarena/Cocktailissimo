<?php

namespace App\Controller\Tests;

use App\Cart\CartService;
use App\Convertor\CartToArrayConvertor;
use App\Entity\Cart;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Ce controller sert uniquement pour le test CartServiceTest  et le CartOrderImportantTest
 */
class CartServiceTestController extends AbstractController
{
    public function __construct(
        private CartService $cartService,
        private CartToArrayConvertor $cartToArrayConvertor
    )
    {

    }

    /**
     * Sert à tester le nb de database queries de la function onLoginUpdate du CartService
     *
     * @return Response
     */
    #[IsGranted('ROLE_USER')]
    #[Route('/tests/cartService/onLoginUpdate', name: 'tests_cartService_onLoginUpdate')]
    public function onLoginUpdate(): Response
    {
        $this->cartService->onLoginUpdate($this->getUser());
        return new Response('');
    }

    /**
     * Sert à tester le nb de database query de la function getFullCart
     *
     * @return Response
     */
    #[IsGranted('ROLE_USER')]
    #[Route('/tests/cartService/getFullCart', name: 'tests_cartService_getFullCart')]
    public function getFullCart(): Response
    {
        /** @var Cart $cart */
        [$cart, $stockStatus] = $this->cartService->getFullCart();
        $cartArray = $this->cartToArrayConvertor->convert($cart, 'en');

        return $this->render('tests/database_query_count/cart.html.twig', [
            'cart' => $cartArray,
        ]);
    }

    /**
     * Sert à tester le nb de database query de la function getLightCart
     *
     * @return Response
     */
    #[IsGranted('ROLE_USER')]
    #[Route('/tests/cartService/getLightCart', name: 'tests_cartService_getLightCart')]
    public function getLightCart(): Response
    {
        $cart = $this->cartService->getLightCart();
        $return = [
            'count' => $cart->getCount(),
            'totalPrice' => $cart->getTotalPrice()
        ];
        return $this->render('tests/database_query_count/cart.html.twig', [
            'cart' => $return
        ]);
    }

    
    #[IsGranted('ROLE_USER')]
    #[Route('/tests/cartService/empty', name: 'tests_cartService_empty')]
    public function empty(): Response
    {
        $this->cartService->empty();
        return new Response('');
    }

}