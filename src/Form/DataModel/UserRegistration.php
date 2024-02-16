<?php
namespace App\Form\DataModel;

use App\Config\SecurityConfig;
use App\Config\SiteConfig;
use App\Validator\UniqueUserEmail;
use Symfony\Component\Validator\Constraints as Assert;

class UserRegistration
{
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\NotBlank(message: 'assert.notBlank.firstName')]
    public ?string $firstName = null;

    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    #[Assert\NotBlank(message: 'assert.notBlank.lastName')]
    public ?string $lastName = null;

    #[Assert\Choice(choices: [SiteConfig::CIVILITY_M, SiteConfig::CIVILITY_F, ''], message: 'assert.choice')]
    #[Assert\NotNull(message: 'assert.notNull.civility')]
    public ?string $civility = null;

    #[UniqueUserEmail(['message' => 'assert.notUnique.email'])]
    #[Assert\Email(message: 'assert.email')]
    #[Assert\NotBlank(message: 'assert.notBlank.email')]
    #[Assert\Length(max: 200, maxMessage: 'assert.maxLength')]
    public ?string $email;

    #[Assert\EqualTo(propertyPath: 'passwordConfirm', message: '')]
    #[Assert\NotBlank(message: 'assert.notBlank.password')]
    #[Assert\Length(min: SecurityConfig::PASSWORD_MIN_CARACTERS, max: 50, minMessage: 'assert.minLength', maxMessage: 'assert.maxLength')]
    public ?string $plainPassword;

    #[Assert\EqualTo(propertyPath: 'plainPassword', message: 'assert.samePasswords')]
    #[Assert\NotBlank(message: 'assert.notBlank.passwordConfirm')]
    public ?string $passwordConfirm = '';

    public ?string $type = 'user'; // user | pro

    public ?string $socialName = null;

    public ?string $identificationNumber = null;

    public ?string $country = null;

    public ?string $vatNumber = null;

    /**
     * Get the value of email
     */ 
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */ 
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of plainPassword
     */ 
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * Set the value of plainPassword
     *
     * @return  self
     */ 
    public function setPlainPassword($plainPassword)
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    /**
     * Get the value of passwordConfirm
     */ 
    public function getPasswordConfirm()
    {
        return $this->passwordConfirm;
    }

    /**
     * Set the value of passwordConfirm
     *
     * @return  self
     */ 
    public function setPasswordConfirm($passwordConfirm)
    {
        $this->passwordConfirm = $passwordConfirm;

        return $this;
    }

    /**
     * Get the value of civility
     */ 
    public function getCivility()
    {
        return $this->civility;
    }

    /**
     * Set the value of civility
     *
     * @return  self
     */ 
    public function setCivility($civility)
    {
        $this->civility = $civility;

        return $this;
    }

    /**
     * Get the value of lastName
     */ 
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set the value of lastName
     *
     * @return  self
     */ 
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get the value of firstName
     */ 
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set the value of firstName
     *
     * @return  self
     */ 
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get the value of type
     */ 
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set the value of type
     *
     * @return  self
     */ 
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get the value of companyName
     */ 
    public function getSocialName()
    {
        return $this->socialName;
    }

    /**
     * Set the value of companyName
     *
     * @return  self
     */ 
    public function setSocialName($socialName)
    {
        $this->socialName = $socialName;

        return $this;
    }

    /**
     * Get the value of identificationNumber
     */ 
    public function getIdentificationNumber()
    {
        return $this->identificationNumber;
    }

    /**
     * Set the value of identificationNumber
     *
     * @return  self
     */ 
    public function setIdentificationNumber($identificationNumber)
    {
        $this->identificationNumber = $identificationNumber;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): static
    {
        $this->country = $country;

        return $this;
    }

    public function getVatNumber(): ?string
    {
        return $this->vatNumber;
    }

    public function setVatNumber(?string $vatNumber): static
    {
        $this->vatNumber = $vatNumber;

        return $this;
    }

}