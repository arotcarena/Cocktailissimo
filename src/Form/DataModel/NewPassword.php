<?php
namespace App\Form\DataModel;

use App\Config\SecurityConfig;
use Symfony\Component\Validator\Constraints as Assert;

class NewPassword
{
    #[Assert\EqualTo(propertyPath: 'passwordConfirm', message: '')]
    #[Assert\NotBlank(message: 'assert.notBlank.password')]
    #[Assert\Length(min: SecurityConfig::PASSWORD_MIN_CARACTERS, max: 50, minMessage: 'assert.minLength', maxMessage: 'assert.maxLength')]
    public ?string $password;

    #[Assert\EqualTo(propertyPath: 'password', message: 'assert.samePasswords')]
    #[Assert\NotBlank(message: 'assert.notBlank.passwordConfirm')]
    public ?string $passwordConfirm = '';

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
     * Get the value of password
     */ 
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */ 
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }
}