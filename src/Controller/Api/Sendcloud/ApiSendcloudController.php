<?php
namespace App\Controller\Api\Sendcloud;

use App\Config\SecurityConfig;
use App\HTTP\CurlRequest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApiSendcloudController extends AbstractController
{
    public function __construct(
        private CurlRequest $curlRequest
    )
    {
        
    }

    private function curlGet(string $endpoint): mixed
    {
        return $this->curlRequest->get($endpoint, [
            'Authorization: Basic ' . base64_encode(SecurityConfig::SENDCLOUD_PUBLIC_KEY . ':' . SecurityConfig::SENDCLOUD_PRIVATE_KEY)
        ]);
    }

    #[Route('/api/sendcloud', name: 'api_sendcloud', methods: ['POST'])]
    public function index(Request $request): JsonResponse
    {
        $content = json_decode($request->getContent());

        $method = $content->method;
        $endpoint = $content->endpoint;
        $data = $content->data;

        if($method === 'GET')
        {
            $result = $this->curlGet($endpoint);
            return $this->json($result);
        }
    }

    // #[Route('/tests/relay', name: 'tests_apiSendcloud_relay')]
    // public function apiSendcloudRelay(Request $request): JsonResponse
    // {
    //     $curl = curl_init();

    //     curl_setopt_array($curl, [
    //         CURLOPT_URL => "https://servicepoints.sendcloud.sc/api/v2/carriers",
    //         CURLOPT_RETURNTRANSFER => true,
    //         CURLOPT_ENCODING => "",
    //         CURLOPT_MAXREDIRS => 10,
    //         CURLOPT_TIMEOUT => 30,
    //         CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    //         CURLOPT_CUSTOMREQUEST => "GET",
    //         CURLOPT_HTTPHEADER => [
    //           "Accept: application/json",
    //           'Authorization: Basic ' . base64_encode(SecurityConfig::SENDCLOUD_PUBLIC_KEY . ':' . SecurityConfig::SENDCLOUD_PRIVATE_KEY)
    //         ],
    //     ]);

    //     //DELETE_FOR_PROD
    //     curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    //     $response = curl_exec($curl);
    //     $error = curl_error($curl);

    //     curl_close($curl);

    //     if($error) 
    //     {
    //         throw new Exception('cURL Error #:' . $error);
    //     } 
    //     else 
    //     {
    //         return $this->json($response);
    //     }
    // }

    
}