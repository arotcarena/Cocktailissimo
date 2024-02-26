<?php
namespace App\Config;

class SiteConfig
{
    /**project */
    //DELETE_FOR_PROD
    // public const PUBLIC_DIR = 'public';
    public const PUBLIC_DIR = 'www';

    /**site */
    public const SITE_NAME = 'Cocktailissimo';
    public const SITE_URL = 'https://localhost:8000';
    // public const SITE_URL = 'https://cocktailissimo.com';

    public const SITE_DOMAIN = 'localhost';
    // public const SITE_DOMAIN = 'cocktailissimo.com';

    public const COCKTAILISSIMO_IDENTIFICATION_NUMBER = '97853641500018';
    public const COCKTAILISSIMO_VAT_NUMBER = 'FR93978536415';

    public const SUPPORTED_LOCALES = ['en', 'fr', 'es', 'it'];
    public const DEFAULT_LOCALE = 'en';

    public const DEFAULT_CURRENCY_SYMBOL = '€';
    
    /**emails */

    public const EMAIL_CONTACT = 'contact@cocktailissimo.com'; 
    public const EMAIL_NOREPLY = 'noreply@cocktailissimo.com';
    public const EMAIL_ADMIN = 'admin@cocktailissimo.com';
    public const EMAIL_NOREPLY_ADMIN = 'noreplyadmin@cocktailissimo.com';

    /**geoloc */
    public const DEFAULT_GEOLOCATION_COUNTRY = 'FR'; 

    /**commission */
    public const COCKTAILISSIMO_COMMISSION = 0.01;

    /**token time validity */
    // public const TOKEN_TIME_VALIDITY = 3600 * 48;
    public const TOKEN_TIME_VALIDITY = 3600 * 24 * 365 * 10;   // 10 ans uniquement pour les tests (car dans les tests parfois le time est antérieur au vrai time et provoque des erreurs)

    /**purchase status */
    public const STATUS_PENDING = 'status_pending';
    public const STATUS_PAID = 'status_paid';
    public const STATUS_TERMINATED = 'status_terminated';

    /*parcel shipping status */
    public const SHIPPING_STATUS_PENDING = 'shipping_status.pending';
    public const SHIPPING_STATUS_SENT = 'shipping_status.sent';
    public const SHIPPING_STATUS_DELIVERED = 'shipping_status.delivered';
    public const SHIPPING_STATUS_CANCELED = 'shipping_status.canceled';
    public const SHIPPING_STATUS_RETURN_SENT = 'shipping_status.return_sent';
    public const SHIPPING_STATUS_RETURN_DELIVERED = 'shipping_status.return_delivered';

    /**shippingMethod/shippingInfo type */
    public const SHIPPING_TYPE_HOME = 'shipping_type.home';
    public const SHIPPING_TYPE_RELAY = 'shipping_type.relay';

    /** review status */
    public const MODERATION_STATUS_PENDING = 'moderation_status_pending';
    public const MODERATION_STATUS_PENDING_LABEL = 'En attente';
    public const MODERATION_STATUS_ACCEPTED = 'moderation_status_accepted';
    public const MODERATION_STATUS_ACCEPTED_LABEL = 'Accepté';
    public const MODERATION_STATUS_REFUSED = 'moderation_status_refused';
    public const MODERATION_STATUS_REFUSED_LABEL = 'Refusé';

    /**user roles */
    public const ROLE_USER = 'ROLE_USER';
    public const ROLE_PRO = 'ROLE_PRO';
    public const ROLE_VENDOR = 'ROLE_VENDOR';
    public const ROLE_ADMIN = 'ROLE_ADMIN';
    public const ROLE_USER_RESTRICTED = 'ROLE_USER_RESTRICTED';

    
    /** civilities */
    public const CIVILITY_M = 'civility_m';
    public const CIVILITY_F = 'civility_f';

    /**lang */
    public const LANG_CHOICES = [
        'en',
        'fr',
        'es',
        'it'
    ];

    public const LANG_CHOICES_WITH_LABELS = [
        'EN' => 'en',
        'FR' => 'fr',
        'ES' => 'es',
        'IT' => 'it'
    ];

    public const ADMIN_LANG = 'fr'; //utilisé dans urlCustomTagsConvertor

    //utilisé dans RecipeAndProductForCarouselItemConvertor
    public const RECIPE_TRANS = [
        'en' => 'Recipes',
        'fr' => 'Recettes',
        'es' => 'Recetas',                                                 
        'it' => 'Ricette'
    ];
    //utilisé dans urlCustomTagsConvertor et dans RecipeController
    public const RECIPE_SLUG_TRANS = [
        'en' => 'recipes',
        'fr' => 'recettes',
        'es' => 'recetas',                                               
        'it' => 'ricette'
    ];
    //utilisé dans urlCustomTagsConvertor et dans ArticleController
    public const ARTICLE_SLUG_TRANS = [
        'en' => 'newspaper',
        'fr' => 'gazette',
        'es' => 'gazeta',
        'it' => 'gazzetta'
    ];


    /** delivery mode */
    public const DELIVERY_MODE_HOME = 'delivery_mode_home';
    public const DELIVERY_MODE_RELAY = 'delivery_mode_relay';


    /* pictures */
    public const UPLOAD_MAX_SIZE = 300000;
    public const UPLOAD_MAX_SIZE_STRING = '300k';
    public const UPLOAD_MAX_SIZE_MESSAGE = 'Upload max size of 300k exceeded';

    
    /** stockage */
    public const MAX_REGISTERED_ADDRESSES_PER_USER = 10;


    /** VALEURS MAXIMALES */
    public const REVIEW_MAX_ANSWERS = 6;


    /*TRAFIC ANALYTICS*/

    public const TA_COOKIE_EXPIRATION_TIME = 3600 * 24 * 30 * 13; // 13 mois

    /** routes qui donnent lieu à la création d'une Visit */
    public const TA_TRACKED_ROUTES = [
        'home',
        'account_index',
        'customerAccount_details',
        'customerAccount_address',
        'customerAccount_purchase',
        'article_show',
        'article_index',
        'article_subCategoryShow',
        'recipe_show',
        'recipe_index',
        'recipe_subCategoryShow',
        'contact_becomeVendor',
        'checkout_index',
        'checkout_paymentSuccess',
        'search_index',
        'security_login',
        'security_askResetPassword',
        'security_resetPassword',
        'security_changePassword',
        'security_register',
        'security_accountDelete',
        'category_show',
        'subCategory_show',
        'product_show',
        'vendorShop',
        'static_aPropos',
        'static_legal',
        'static_cgv',
        'static_cgu',
    ];


}