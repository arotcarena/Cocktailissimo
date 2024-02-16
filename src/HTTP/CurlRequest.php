<?php
namespace App\HTTP;

use Exception;

class CurlRequest
{
    /**
     * Undocumented function
     *
     * @param string $entrypoint
     * @param array $options
     * @return mixed throw Exception if curl error
     */
    public function get(string $endpoint, array $headers = []): mixed
    {
        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => $endpoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array_merge(
                ["Accept: application/json"],
                $headers
            ),
        ]);

        //DELETE_FOR_PROD
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        $response = curl_exec($curl);
        $error = curl_error($curl);

        curl_close($curl);

        if($error) 
        {
            throw new Exception('cURL Error #:' . $error);
        } 
        else 
        {
            return json_decode($response);
        }
    }

    public function post(string $endpoint, array $params, array $headers = []): mixed 
    {
        $curl = curl_init();

        curl_setopt_array($curl, [
        CURLOPT_URL => $endpoint,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode($params),
        CURLOPT_HTTPHEADER => array_merge(
            $headers,
            [
                "Accept: application/json",
                "Content-Type: application/json",
            ]
        ),
        ]);

        //DELETE_FOR_PROD
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        $response = curl_exec($curl);
        $error = curl_error($curl);

        curl_close($curl);

        if($error) 
        {
            throw new Exception('cURL Error #:' . $error);
        } 
        else 
        {
            return json_decode($response);
        }
        

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
    }

}