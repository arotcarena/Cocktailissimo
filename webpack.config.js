const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or subdirectory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/entrypoints/app.js')
    
    .addEntry('admin', './assets/entrypoints/admin.js')

    .addEntry('header', './assets/entrypoints/header.js')
    .addEntry('home', './assets/entrypoints/home.js')

    .addEntry('searchIndex', './assets/entrypoints/searchIndex.js')
    .addEntry('categoryShow', './assets/entrypoints/categoryShow.js')
    .addEntry('recipeCategoryShow', './assets/entrypoints/recipeCategoryShow.js')
    .addEntry('articleCategoryShow', './assets/entrypoints/articleCategoryShow.js')
    .addEntry('productShow', './assets/entrypoints/productShow.js')
    .addEntry('recipeShow', './assets/entrypoints/recipeShow.js')
    .addEntry('articleShow', './assets/entrypoints/articleShow.js')

    .addEntry('vendorShop', './assets/entrypoints/vendorShop.js')

    .addEntry('checkout', './assets/entrypoints/checkout.js')
    .addEntry('paymentSuccess', './assets/entrypoints/paymentSuccess.js')
    .addEntry('securityForm', './assets/entrypoints/securityForm.js')
    .addEntry('becomeVendorForm', './assets/entrypoints/becomeVendorForm.js')
    .addEntry('customerAccount', './assets/entrypoints/customerAccount.js')
    .addEntry('vendorAccount', './assets/entrypoints/vendorAccount.js')

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.23';
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use React
    .enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
