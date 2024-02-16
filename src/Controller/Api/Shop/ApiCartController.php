<?php
namespace App\Controller\Api\Shop;

use App\Cart\CartService;
use App\Convertor\CartToArrayConvertor;
use App\Convertor\CustomPriceToArrayConvertor;
use App\Exception\NotEnoughStockException;
use App\Price\PriceResolver;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Twig\Runtime\PriceFormaterExtensionRuntime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;


class ApiCartController extends AbstractController
{
    public function __construct(
        private CartService $cartService,
        private CartToArrayConvertor $cartConvertor,
        private PriceFormaterExtensionRuntime $priceFormater,
        private PriceResolver $priceResolver,
    )
    {

    }

    #[Route(
        '/{_locale}/api/cart/setQuantity/id-{packagingId}_quantity-{quantity}', 
        name: 'api_cart_setQuantity', 
        methods: ['GET'], 
        requirements: [
            'packagingId' => '\d+',
            'quantity' => '\d+',
            '_locale' => '%app.supported_locales%'
        ]
    )]
    public function setQuantity(int $packagingId, int $quantity): JsonResponse
    {
        try 
        {
            $this->cartService->setQuantity($packagingId, $quantity);
        } 
        catch(NotEnoughStockException $e) 
        {
            return new JsonResponse([
                'errors' => [
                    'type' => 'notEnoughStock',
                    'message' => $e->getMessage(),
                ],
            ], 500);
        }
        return new JsonResponse('ok');
    }

    #[Route(
        '/{_locale}/api/cart/add/id-{packagingId}_quantity-{quantity}', 
        name: 'api_cart_add', 
        methods: ['GET'], 
        requirements: [
            'packagingId' => '\d+',
            'quantity' => '\d+',
            '_locale' => '%app.supported_locales%'
        ]
    )]
    public function add(int $packagingId, int $quantity): JsonResponse
    {
        try 
        {
            $this->cartService->add($packagingId, $quantity);
        } 
        catch(NotEnoughStockException $e) 
        {
            return new JsonResponse([
                'errors' => [
                    'type' => 'notEnoughStock',
                    'message' => $e->getMessage(),
                    'quantityNotAdded' => $e->getQuantityNotAdded() // la quantité qui n'a pas pu être ajoutée (ex: on voulait ajouter 4 mais il ne restait que 3, quantityNotAdded = 1)
                ],
            ], 500);
        }
        return new JsonResponse('ok');
    }

    #[Route(
        '/{_locale}/api/cart/remove/id-{packagingId}', 
        name: 'api_cart_remove',
        methods: ['GET'],
        requirements: [
            'packagingId' => '\d+',
            '_locale' => '%app.supported_locales%'
        ]
    )]
    public function remove(int $packagingId): JsonResponse 
    {
        $this->cartService->remove($packagingId);
        return new JsonResponse('ok');
    }

    #[Route('/{_locale}/api/cart/getFullCart', name: 'api_cart_getFullCart', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getFullCart(Request $request): JsonResponse 
    {
        [$cart, $stockStatus] = $this->cartService->getFullCart();

        return new JsonResponse(
            $this->cartConvertor->convert($cart, $request->getLocale())
        );
    }

    #[Route('/{_locale}/api/cart/getLightCart', name: 'api_cart_getLightCart', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function getLightCart(): JsonResponse
    {
        $cart = $this->cartService->getLightCart();

        return new JsonResponse([
            'count' => $cart->getCount(),
            'totalPrice' => (new CustomPriceToArrayConvertor)->convert($cart->getTotalPrice())
        ]);
    }

    #[Route('/{_locale}/api/cart/count', name: 'api_cart_count', methods: ['GET'], requirements: [
        '_locale' => '%app.supported_locales%'
    ])]
    public function count(): JsonResponse 
    {
        $count = $this->cartService->count();
        return new JsonResponse($count);
    }
}