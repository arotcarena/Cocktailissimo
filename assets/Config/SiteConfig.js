export class SiteConfig {

    static SITE_URL = 'https://localhost:8000';  // A MODIFIER POUR PROD
    // static SITE_URL = 'https://cocktailissimo.com';

    static SUPPORTED_LOCALES = ['en', 'fr', 'es', 'it'];
    static DEFAULT_LOCALE = 'en';

    //Sendcloud
    static SENDCLOUD_PUBLIC_KEY = '92a43f87-c8f3-4cc8-b9f6-144ade7396d9';
    static SENDCLOUD_PRIVATE_KEY = 'af858a7dfc484684ad2b03c056635df1';

    
    //geolocation
    static DEFAULT_GEOLOCATION_COUNTRY = 'FR'; 

    /**purchase status */
    static STATUS_PENDING = 'status_pending';
    static STATUS_PAID = 'status_paid';
    static STATUS_SENT = 'status_sent';
    static STATUS_DELIVERED = 'status_delivered';
    static STATUS_CANCELED = 'status_canceled';


    /** review status */
    static MODERATION_STATUS_PENDING = 'moderation_status_pending';
    static MODERATION_STATUS_PENDING_LABEL = 'En attente';
    static MODERATION_STATUS_ACCEPTED = 'moderation_status_accepted';
    static MODERATION_STATUS_ACCEPTED_LABEL = 'Accepté';
    static MODERATION_STATUS_REFUSED = 'moderation_status_refused';
    static MODERATION_STATUS_REFUSED_LABEL = 'Refusé';

    
    /** delivery mode */
    static DELIVERY_MODE_HOME = 'delivery_mode_home';
    static DELIVERY_MODE_RELAY = 'delivery_mode_relay';

    
    /** article weight (g) */
    static ARTICLE_WEIGHT = 50;



    /** civilities */
    static CIVILITY_M = 'civility_m';
    static CIVILITY_F = 'civility_f';


    //utilisé dans productIndex/CategoryFilter
    static RECIPE_LABEL_EN = 'Recipes';

    //stripe // clef de test A MODIFIER pour prod
    static STRIPE_PUBLIC_KEY = 'pk_test_51OAr30Hm6nX3nzEA7UD5nnQ0tdIXseGEJ2x37Cm2lkm2JWdUMhQ5x9c9j3BxJQzzRYasMR2wpW4eBBmnvhdArSwf00plU9A1gj';
}
