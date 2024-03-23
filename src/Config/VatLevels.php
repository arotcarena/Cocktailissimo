<?php
namespace App\Config;

class VatLevels
{
    public const STANDARD = 'vat_level_standard';

    public const REDUCE_1 = 'vat_level_reduce_1';

    public const REDUCE_2 = 'vat_level_reduce_2';

    public const SUPER_REDUCE = 'vat_level_super_reduce';

    public const ZERO = 'vat_level_zero';


    public const CHOICES = [
        self::STANDARD, self::REDUCE_1, self::REDUCE_2, self::SUPER_REDUCE, self::ZERO
    ];

    public const ADMIN_CHOICES = [
        'Taux standard' => self::STANDARD,
        'Taux réduit 1' => self::REDUCE_1,
        'Taux réduit 2' => self::REDUCE_2,
        'Taux super-réduit' => self::SUPER_REDUCE,
        'Taux zéro' => self::ZERO
    ];
}