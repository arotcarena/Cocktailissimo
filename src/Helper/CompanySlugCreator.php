<?php
namespace App\Helper;

use App\Entity\Company;
use Symfony\Component\String\Slugger\SluggerInterface;


class CompanySlugCreator
{
    public function __construct(
        private SluggerInterface $slugger
    )
    {

    }

    public function create(Company $company): void
    {
        $company->setSlug(
            strtolower($this->slugger->slug($company->getUsualName())) . '-' . substr(str_shuffle(str_repeat('0123456789', 5)), 0, 4)
        );
    }

    public function isSynchronized(Company $company): bool 
    {
        $usualNameSlug = strtolower($this->slugger->slug($company->getUsualName()));

        if(str_contains($company->getSlug(), $usualNameSlug))
        {
            return true;
        }
        return false;
    }
}