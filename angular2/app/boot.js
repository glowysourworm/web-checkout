"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var app_module_1 = require("./app.module");
function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('../images/flags', true, /\.png$/));
requireAll(require.context('../images/skills', true, /\.png$/));
requireAll(require.context('../images', true, /\.png$/));
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=boot.js.map