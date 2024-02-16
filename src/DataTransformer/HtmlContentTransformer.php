<?php
namespace App\DataTransformer;

use Genert\BBCode\BBCode;
use App\Parser\LinkTagsParser;
use Symfony\Component\Form\DataTransformerInterface;

class HtmlContentTransformer implements DataTransformerInterface
{
    private BBCode $bbCodeParser;

    public function __construct(
        private string $lang,
        private LinkTagsParser $convertor
    )
    {
        $this->bbCodeParser = new BBCode;
    }

    public function transform(mixed $html)
    {
        if(!is_string($html))
        {
            return;
        }
        
        $html = $this->convertor->masterToNoob($html, $this->lang);
        return $this->bbCodeParser->convertFromHtml($html);
    }

    public function reverseTransform(mixed $bbCode)
    {
        if(!is_string($bbCode))
        {
            return;
        }
        
        $html = $this->bbCodeParser->convertToHtml($bbCode);
        return $this->convertor->noobToMaster($html, $this->lang);
    }

 
}