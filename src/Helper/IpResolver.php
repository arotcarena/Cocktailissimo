<?php
namespace App\Helper;

use Symfony\Component\HttpFoundation\Request;

class IpResolver
{
    public function resolve(Request $request): ?string 
    {
        if($clientIp = $request->server->get('HTTP_CLIENT_IP'))
        {
            return $clientIp;
        }
        elseif($forwarded = $request->server->get('HTTP_X_FORWARDED_FOR'))
        {
            return $forwarded;
        }
        return $request->server->get('REMOTE_ADDR');
    }
}