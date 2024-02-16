<?php
namespace App\TrafficAnalytics\Storage;

use Symfony\Component\HttpFoundation\Request;

class TrafficAnalyticsSession
{
    public const TA_SESS_MEMO_URLS = 'ta_sess_memo_urls';

    /**
     * Mémorise l'url en session
     *
     * @param string $url
     * @return void
     */
    public function memoUrl(Request $request): void
    {
        $memoUrls = $this->getMemoUrls($request);
        $memoUrls[] = $request->getUri();

        $this->setMemoUrls($request, $memoUrls);
    }

    /**
     * Vérifie la mémorisation d'une url en session
     */
    public function urlExist(Request $request): bool
    {
        return in_array(
            $request->getUri(), 
            $this->getMemoUrls($request)
        );
    }

    private function getMemoUrls(Request $request): array
    {
        return $request->getSession()->get(self::TA_SESS_MEMO_URLS, []);
    }
    private function setMemoUrls(Request $request, array $newMemoUrls): void
    {
        $request->getSession()->set(self::TA_SESS_MEMO_URLS, $newMemoUrls);
    }
}