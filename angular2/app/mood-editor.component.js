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
var MoodEditorComponent = (function () {
    function MoodEditorComponent() {
        this.happy = false;
    }
    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    MoodEditorComponent.prototype.ngAfterViewInit = function () {
        this.container.element.nativeElement.focus();
    };
    MoodEditorComponent.prototype.agInit = function (params) {
        this.params = params;
        this.setHappy(params.value === "Happy");
    };
    MoodEditorComponent.prototype.getValue = function () {
        return this.happy ? "Happy" : "Sad";
    };
    MoodEditorComponent.prototype.isPopup = function () {
        return true;
    };
    MoodEditorComponent.prototype.setHappy = function (happy) {
        this.happy = happy;
    };
    MoodEditorComponent.prototype.toggleMood = function () {
        this.setHappy(!this.happy);
    };
    MoodEditorComponent.prototype.onKeyDown = function (event) {
        var key = event.which || event.keyCode;
        if (key == 37 ||
            key == 39) {
            this.toggleMood();
            event.stopPropagation();
        }
    };
    __decorate([
        core_1.ViewChild('container', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], MoodEditorComponent.prototype, "container", void 0);
    MoodEditorComponent = __decorate([
        core_1.Component({
            selector: 'editor-cell',
            template: "\n        <div #container class=\"mood\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\">\n            <img src=\"images/smiley.png\" (click)=\"setHappy(true)\" [ngClass]=\"{'selected' : happy, 'default' : !happy}\">\n            <img src=\"images/smiley-sad.png\" (click)=\"setHappy(false)\" [ngClass]=\"{'selected' : !happy, 'default' : happy}\">\n        </div>\n    ",
            styles: ["\n        .mood {\n            border-radius: 15px;\n            border: 1px solid grey;\n            background: #e6e6e6;\n            padding: 15px;\n            text-align:center;\n            display:inline-block;\n            outline:none\n        }\n\n        .default {\n            padding-left:10px;\n            padding-right:10px;\n            border: 1px solid transparent;\n            padding: 4px;\n        }\n\n        .selected {\n            padding-left:10px;\n            padding-right:10px;\n            border: 1px solid lightgreen;\n            padding: 4px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], MoodEditorComponent);
    return MoodEditorComponent;
}());
exports.MoodEditorComponent = MoodEditorComponent;
//# sourceMappingURL=mood-editor.component.js.map