<?php
namespace App\DataFixtures\Tests;

use App\Entity\Visit;
use App\Entity\Visitor;
use App\Entity\VisitorAction;
use DateTimeImmutable;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class VisitTestFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        //visitor with one visit and one action
        $visitor = new Visitor;
        $visitor->setCookieId('visitor_1')
                ->setLang('en')
                ->setUserAgent('user_agent_of_visitor_1')
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $visit = new Visit;
        $visit->setRoute('product_show')
                ->setUrl('/category-slug/subcategory-slug/product-slug_publicRef.html')
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $action = new VisitorAction;
        $action->setType(VisitorAction::TYPE_PRE_REGISTER)
                    ->setCreatedAt(new DateTimeImmutable())
                    ;
        $visitor->addVisit($visit)
                ->addAction($action)
                ;
        $manager->persist($visit);
        $manager->persist($visitor);
        $manager->persist($action);


        //Visitor without visit and action
        $visitor = new Visitor;
        $visitor->setCookieId('visitor_2')
                ->setLang('en')
                ->setUserAgent('user_agent_of_visitor_2')
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($visitor);

        //Visitor without visit and action
        $visitor = new Visitor;
        $visitor->setCookieId('visitor_3')
                ->setLang('en')
                ->setUserAgent('user_agent_of_visitor_3')
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($visitor);

        //Visitor without visit and action
        $visitor = new Visitor;
        $visitor->setCookieId('visitor_4')
                ->setLang('en')
                ->setUserAgent('user_agent_of_visitor_4')
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($visitor);

        //Visitor without visit and action
        $visitor = new Visitor;
        $visitor->setCookieId('visitor_5')
                ->setLang('en')
                ->setUserAgent('user_agent_of_visitor_5')
                ->setCreatedAt(new DateTimeImmutable())
                ;
        $manager->persist($visitor);


        $manager->flush();
    }
}