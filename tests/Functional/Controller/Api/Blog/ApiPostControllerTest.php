<?php
namespace App\Tests\Functional\Controller\Api\Blog;

use App\DataFixtures\Blog\PostFixtures;
use App\Repository\PostRepository;
use App\Tests\Functional\FunctionalTest;
use Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector;

class ApiPostControllerTest extends FunctionalTest
{
    public function setUp(): void
    {
        parent::setUp();

        $this->loadFixtures([PostFixtures::class]);
    }


    //linkedProducts
    public function testLinkedProductsDatabaseQueryCount()
    {
        $post = $this->findEntity(PostRepository::class);

        $this->client->enableProfiler();

        $this->client->request('GET', $this->urlGenerator->generate('api_post_linkedProducts', [
            'id' => $post->getId(),
            '_locale' => 'en'
        ]));
        
        $data = json_decode($this->client->getResponse()->getContent());

        /** @var DoctrineDataCollector */
        $dbCollector = $this->client->getProfile()->getCollector('db');

        $this->assertLessThanOrEqual(4, $dbCollector->getQueryCount());
    }
}