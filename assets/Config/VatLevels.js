export class VatLevels {
    static STANDARD = 'vat_level_standard';

    static PARKING = 'vat_level_parking';

    static REDUCE_1 = 'vat_level_reduce_1';

    static REDUCE_2 = 'vat_level_reduce_2';

    static SUPER_REDUCE = 'vat_level_super_reduce';

    static ZERO = 'vat_level_zero';


    static CHOICES = [
        VatLevels.STANDARD, VatLevels.PARKING, VatLevels.REDUCE_1, VatLevels.REDUCE_2, VatLevels.SUPER_REDUCE, VatLevels.ZERO
    ];

    static ADMIN_CHOICES = {
        ['Taux standard']: VatLevels.STANDARD,
        ['Taux parking']: VatLevels.PARKING,
        ['Taux réduit 1']: VatLevels.REDUCE_1,
        ['Taux réduit 2']: VatLevels.REDUCE_2,
        ['Taux super-réduit']: VatLevels.SUPER_REDUCE,
        ['Taux zéro']: VatLevels.ZERO
    };
}