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
var SquareComponent = (function () {
    function SquareComponent() {
    }
    SquareComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    SquareComponent.prototype.valueSquared = function () {
        return this.params.value * this.params.value;
    };
    SquareComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying SquareComponent");
    };
    SquareComponent = __decorate([
        core_1.Component({
            selector: 'square-cell',
            template: "{{valueSquared()}}"
        }), 
        __metadata('design:paramtypes', [])
    ], SquareComponent);
    return SquareComponent;
}());
exports.SquareComponent = SquareComponent;
//# sourceMappingURL=square.component.js.map