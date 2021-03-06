"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MedalRendererComponent = (function () {
    function MedalRendererComponent() {
    }
    MedalRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.country = params.node.key;
        this.gold = params.data.gold;
        this.silver = params.data.silver;
        this.bronze = params.data.bronze;
    };
    MedalRendererComponent = __decorate([
        core_1.Component({
            selector: 'group-row-cell',
            template: "{{country}} Gold: {{gold}}, Silver: {{silver}}, Bronze: {{bronze}}"
        }), 
        __metadata('design:paramtypes', [])
    ], MedalRendererComponent);
    return MedalRendererComponent;
}());
exports.MedalRendererComponent = MedalRendererComponent;
//# sourceMappingURL=medal-renderer.component.js.map