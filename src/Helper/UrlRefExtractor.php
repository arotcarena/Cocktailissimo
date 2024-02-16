<?php
namespace App\Helper;

class UrlRefExtractor
{
    public function extractRef(string $url): ?string
    {
        if (preg_match('/_(.*?)\.html/', $url, $matches)) {
            $result = $matches[1];
            return $result;
        }
        return null;
    }

    public function extractVendorShopCompanySlug(string $vendorShopUrl): ?string
    {
        $parts = explode('/shop/', $vendorShopUrl);
        if(!isset($parts[1]))
        {
            return null;
        }
        $companySlug = $parts[1];
        $companySlug = explode('/', $companySlug)[0];
        $companySlug = explode('?', $companySlug)[0];

        return $companySlug;
    }
}