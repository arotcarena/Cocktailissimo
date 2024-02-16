<?php 
namespace App\Service;

class ArrayMixer 
{
    /**
     * ex: ratio = 2 ===> on insère 2 valeurs de l'arrayA pour une de l'arrayB
     * 
     * l'arrayA est celui qui contient le plus de valeurs
     * 
     * Une fois toutes les valeurs de l'arrayA insérées, on insère toutes les valeurs restantes de l'arrayB d'affilée (s'il y en a)
     * 
     * @return array $mixedArray
     */
    public function dual(array $arrayA, array $arrayB, int $ratio = 2): array
    {
        $mixedArray = [];
        $step = 0;
        $b = 0;
        for($a = 0; $a < count($arrayA); $a++)
        {
            // si le compteur a dépasse le ratio depuis le dernier palier, il faut ajouter une valeur de l'arrayB
            if(($step + $ratio) <= $a && isset($arrayB[$b]))
            {
                $mixedArray[] = $arrayB[$b];
                $b++;
                $step = $a;
            }
            
            $mixedArray[] = $arrayA[$a];
        }
        // s'il reste des valeurs dans arrayB elles sont insérées d'affilée à la fin de mixedArray
        for ($b; $b < count($arrayB); $b++) { 
            $mixedArray[] = $arrayB[$b];
        }

        return $mixedArray;
    }

    public function fifty(array $arrayA, array $arrayB, $limit = 10)
    {
        $mixedArray = [];
        $i = 0;

        while(count($mixedArray) < (count($arrayA) + count($arrayB)))
        {
            if(isset($arrayA[$i]))
            {
                $mixedArray[] = $arrayA[$i];
            }
            if(count($mixedArray) >= $limit)
            {
                return $mixedArray;
            }
            if(isset($arrayB[$i]))
            {
                $mixedArray[] = $arrayB[$i];
            }
            if(count($mixedArray) >= $limit)
            {
                return $mixedArray;
            }
            $i++;
        }
        return $mixedArray;
    }


    /**
     * @param array $arrayA
     * @param int $ratioA
     * @param array $arrayB
     * @param int $ratioB
     * @param array $arrayC
     * @param int $ratioC
     * @return array $mixedArray
     */
    public function trio(array $arrayA, int $ratioA, array $arrayB, int $ratioB, array $arrayC, int $ratioC, $limit = 10)
    {
        $mixedArray = [];
        $stepA = 0;
        $stepB = 0;
        $stepC = 0;

        $indexA = 0;
        $indexB = 0;
        $indexC = 0;

        $i = 0;
        while(count($mixedArray) < $limit)
        {
            $i++;

            if($i >= ($stepA + $ratioA))
            {
                if(isset($arrayA[$indexA]))
                {
                    $mixedArray[] = $arrayA[$indexA];
                    $indexA++;
                }
                $stepA = $i;
            }

            if($i >= ($stepB + $ratioB))
            {
                if(isset($arrayB[$indexB]))
                {
                    $mixedArray[] = $arrayB[$indexB];
                    $indexB++;
                }
                $stepB = $i;
            }

            if($i >= ($stepC + $ratioC))
            {
                if(isset($arrayC[$indexC]))
                {
                    $mixedArray[] = $arrayC[$indexC];
                    $indexC++;
                }
                $stepC = $i;
            }
        }


        return $mixedArray;
    }

}