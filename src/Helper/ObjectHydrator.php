<?php
namespace App\Helper;

use stdClass;

/**
 * @return Object l'objet hydraté
 */
class ObjectHydrator
{
    /**
     * @param array|stdClass $data
     */
    public function hydrate(Object $object, $data, array $exemptedFields = []): Object
    {
        if(!is_array($data))
        {
            $data = (array)$data;
        }

        foreach($data as $field => $value)
        {
            if(!in_array($field, $exemptedFields))
            {
                $setField = 'set' . ucfirst($field);

                if(method_exists($object, $setField))
                {
                    $object->$setField($value);
                }
            }
        }
        return $object;
    }

}