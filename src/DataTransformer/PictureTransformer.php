<?php
namespace App\DataTransformer;

use App\Entity\Picture;
use App\Image\PictureUploader;
use Symfony\Component\Form\DataTransformerInterface;

class PictureTransformer implements DataTransformerInterface
{
    public function __construct(
        private PictureUploader $pictureUploader,
        private string $originalName,
    )
    {

    }

    public function transform($picture): string
    {
        if($picture === null)
        {
            return '';
        }
        return $this->pictureUploader->getPictureBase64($picture);
    }

    public function reverseTransform($base64): ?Picture
    {
        if($base64 === '' || $base64 === null)
        {
            return null;
        }
       return $this->pictureUploader->uploadBase64($base64, $this->originalName);
    }
}