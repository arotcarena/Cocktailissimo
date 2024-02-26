<?php
namespace App\TrafficAnalytics;

use App\Entity\Visitor;
use App\Helper\UniqueStringGenerator;
use App\Repository\VisitorRepository;
use App\Service\GeolocCountry\GeolocCountryStorage;
use App\TrafficAnalytics\Storage\TrafficAnalyticsCookie;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class VisitorResolver
{
    public function __construct(
        private VisitorRepository $visitorRepository,
        private TrafficAnalyticsCookie $taCookie,
        private UniqueStringGenerator $uniqueStringGenerator,
        private EntityManagerInterface $em,
        private RequestStack $requestStack,
    )
    {
        
    }

    public function resolve(): Visitor
    {
        $visitor = $this->getVisitor();
        if(!$visitor)
        {
            $visitor = $this->createVisitor($this->requestStack->getCurrentRequest());
            $this->em->persist($visitor);
            $this->em->flush();
        }
        return $visitor;
    }

    public function getVisitor(): ?Visitor
    {
        $cookieId = $this->taCookie->get();
        if($cookieId)
        {
            return $this->visitorRepository->findOneBy(['cookieId' => $cookieId]);
        }
        return null;
    }

    public function createVisitor(Request $request): Visitor
    {
        $cookieId = $this->uniqueStringGenerator->generate(20);
        $this->taCookie->set($cookieId);
        $visitor = (new Visitor)
                    ->setCookieId($cookieId)
                    ->setUserAgent($request->headers->get('User-Agent', 'unknown_user-agent'))
                    ->setGeolocCountry(
                        $request->hasSession() ? $request->getSession()->get(GeolocCountryStorage::GEOLOC_COUNTRY_SESSION_KEY): null
                    )
                    ->setLang($request->getLocale())
                    ->setCreatedAt(new DateTimeImmutable())
                    ;
        if($origin = $request->query->get('origin'))
        {
            $visitor->setOrigin($origin);
        }
        return $visitor;
    }
}