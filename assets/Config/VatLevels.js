export class VatLevels {
    static STANDARD = 'vat_level_standard';

    static REDUCE_1 = 'vat_level_reduce_1';

    static REDUCE_2 = 'vat_level_reduce_2';

    static SUPER_REDUCE = 'vat_level_super_reduce';

    static ZERO = 'vat_level_zero';


    static CHOICES = [
        VatLevels.STANDARD, VatLevels.REDUCE_1, VatLevels.REDUCE_2, VatLevels.SUPER_REDUCE, VatLevels.ZERO
    ];

    static ADMIN_CHOICES = {
        ['Taux standard = 20% (FR-2024)']: VatLevels.STANDARD,
        ['Taux réduit 1 = 10% (FR-2024)']: VatLevels.REDUCE_1,
        ['Taux réduit 2 = 5,5% (FR-2024)']: VatLevels.REDUCE_2,
        ['Taux super-réduit = 2,1% (FR-2024)']: VatLevels.SUPER_REDUCE,
        ['Taux zéro = 0% (FR-2024)']: VatLevels.ZERO
    };
}