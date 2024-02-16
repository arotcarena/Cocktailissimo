<?php
namespace App\Convertor;

use App\Entity\Answer;
use App\Convertor\ConvertorTrait;
use App\Helper\DateTimeToString;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class AnswerToArrayConvertor
{
    use ConvertorTrait;

    private string $lang;

    private array $vendor = []; //[vendorEmail => vendorTarget, vendorEmail => vendorTarget...]

    private ?string $userEmail = null;

    public function __construct(
        private DateTimeToString $dateTimeToString,
        private UrlGeneratorInterface $urlGenerator
    )
    {
        
    }

    /**
     * @param Answer[]|Answer $data
     * @return array
     */
    public function convert($data, ?string $userEmail, string $lang): array 
    {
        $this->lang = $lang;

        $this->userEmail = $userEmail;

        return $this->convertOneOrMore($data);
    }

    /**
     * Undocumented function
     *
     * @param Answer $address
     * @return array
     */
    private function convertOne(Answer $answer): array 
    {
        $email = $answer->getEmail();

        $vendorTarget = null;
        //permet de récupérer une seule fois la target pour chaque vendeur
        if($answer->getType() === 'vendor')
        {
            if(isset($this->vendor[$email]))
            {
                $vendorTarget = $this->vendor[$email];
            }
            else 
            {
                $vendorTarget = $this->urlGenerator->generate('vendorShop', [
                    'companySlug' => $answer->getUser()->getCompany()->getSlug(),
                    '_locale' => $this->lang
                ]);
                $this->vendor[$email] = $vendorTarget;
            }
        }

        //vérifie si le user actuel peut supprimer cette Answer
        $canRemove = $this->userEmail === $email ? true: false;

        return [
            'id' => $answer->getId(),
            'type' => $answer->getType(),
            'target' => $vendorTarget,
            'fullName' => $answer->getFullName(),
            'content' => $answer->getContent(),
            'createdAt' => $this->dateTimeToString->getDateString($answer->getCreatedAt(), $this->lang),
            'email' => $email,
            'canRemove' => $canRemove
        ];
    }
    
}