<?php
namespace App\Helper;

class ObjectArrayByIdIndexor
{
    /**
     * Undocumented function
     *
     * @param Object[] $objectArray
     * @return Object[] [id => object, ...]
     */
    public static function index($objects)
    {
        $objectsById = [];
        foreach($objects as $object)
        {
            $objectsById[$object->getId()] = $object;
        }
        return $objectsById;
    }
}