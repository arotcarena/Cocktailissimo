<?php
namespace App\Security;

use Doctrine\ORM\EntityManagerInterface;
use Exception;

class TokenVerificator
{
    public function __construct(
        private EntityManagerInterface $em
    )
    {

    }
 
    public function resolve(string $fullToken, string $tokenName, Object $repository): ?Object
    {
        try 
        {
            $id = explode('==', $fullToken)[0];
            $token = explode('==', $fullToken)[1];
            $object = $repository->find($id);
            if($object === null)
            {
                return null;
            }
            $getToken = 'get'. ucfirst($tokenName);
            $getTokenExpireAt = 'get' . ucfirst($tokenName) . 'ExpireAt';
            
            // parfois dans les tests le tokenExpireAt est créé avec une valeur inférieure à time ce qui fait échouer le test  (pourquoi ??? aucune idée)

            if(
                $object->$getToken() === $token && 
                $object->$getTokenExpireAt() > time()
            )
            {
                return $object;
            }
        }
        catch(Exception $e)
        {
            //
        }
        return null;
    }
}