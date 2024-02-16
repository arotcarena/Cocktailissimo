<?php
namespace App\Tests\UnitAndIntegration\Helper;

use App\Entity\Company;
use PHPUnit\Framework\TestCase;
use App\Helper\CompanySlugCreator;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\String\UnicodeString;

class CompanySlugCreatorTest extends TestCase
{
    private MockObject|SluggerInterface $slugger;

    private CompanySlugCreator $companySlugCreator;

    public function setUp(): void
    {
        $this->slugger = $this->createMock(SluggerInterface::class);

        $this->companySlugCreator = new CompanySlugCreator($this->slugger);
    }

    public function testWithCompanyHavingOnlySocialName()
    {
        $company = (new Company)
                    ->setSocialName('test name')
                    ;
        $this->slugger->expects($this->once())
                        ->method('slug')
                        ->with('test name')
                        ->willReturn(new UnicodeString('test-name'))
                        ;
        $this->companySlugCreator->create($company);
        $this->assertStringContainsString('test-name', $company->getSlug());
    }

    public function testWithCompanyHavingSocialAndCommercialName()
    {
        $company = (new Company)
                    ->setSocialName('social name')
                    ->setCommercialName('commercial name')
                    ;
        $this->slugger->expects($this->once())
                        ->method('slug')
                        ->with('commercial name')
                        ->willReturn(new UnicodeString('commercial-name'))
                        ;
        $this->companySlugCreator->create($company);
        $this->assertStringContainsString('commercial-name', $company->getSlug());
    }

    public function testGeneratedSlugIsUnique()
    {
        $company = (new Company)
                    ->setSocialName('test name')
                    ;
        $this->slugger->expects($this->any())
                ->method('slug')
                ->with('test name')
                ->willReturn(new UnicodeString('test-name'))
                ;
        $this->companySlugCreator->create($company);
        
        $slug1 = $company->getSlug();
        $this->assertNotNull($slug1, 'le slug n\'est pas créé du tout');
        
        $this->companySlugCreator->create($company);

        $slug2 = $company->getSlug();
        $this->assertNotEquals($slug1, $slug2);
    }
}