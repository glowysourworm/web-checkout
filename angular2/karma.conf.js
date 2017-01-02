module.exports = function (config) {

    var appBase = 'app/';      // transpiled app JS and map files
    var appSrcBase = 'app/';      // app source TS files
    var appAssets = 'base/app/'; // component assets fetched by Angular's compiler

    // Testing helpers (optional) are conventionally in a folder called `testing`
    var testingBase = 'testing/'; // transpiled test JS and map files
    var testingSrcBase = 'testing/'; // test source TS files

    config.set({
        basePath: '',
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter')
        ],

        frameworks: ['jasmine'],

        client: {
            builtPaths: [appSrcBase, testingBase], // add more spec base paths as needed
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },

        customLaunchers: {
            // From the CLI. Not used here but interesting
            // chrome setup for travis CI using chromium
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },

        files: [
            'karma-test-shim.js',

            // transpiled application & spec code paths loaded via module imports
            {pattern: appBase + '**/*.js', included: false, watched: true},
            {pattern: testingBase + '**/*.js', included: false, watched: true},


            // Asset (HTML & CSS) paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            {pattern: appBase + '**/*.html', included: false, watched: true},
            {pattern: appBase + '**/*.css', included: false, watched: true},

            // Paths for debugging with source maps in dev tools
            {pattern: appSrcBase + '**/*.ts', included: false, watched: false},
            {pattern: appBase + '**/*.js.map', included: false, watched: false},
            {pattern: testingSrcBase + '**/*.ts', included: false, watched: false},
            {pattern: testingBase + '**/*.js.map', included: false, watched: false}
        ],

        // Proxied base paths for loading assets
        proxies: {
            // required for component assets fetched by Angular's compiler
            "/app/": appAssets
        },

        exclude: [],
        preprocessors: {},
        reporters: ['progress', 'kjhtml'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    })
}
