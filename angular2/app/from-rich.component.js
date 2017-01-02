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
var ratio_parent_component_1 = require("./ratio.parent.component");
var clickable_parent_component_1 = require("./clickable.parent.component");
var FromRichComponent = (function () {
    function FromRichComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    FromRichComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Name", field: "name", width: 200 },
            {
                headerName: "Ratio Component",
                field: "ratios",
                cellRendererFramework: ratio_parent_component_1.RatioParentComponent,
                width: 350
            },
            {
                headerName: "Clickable Component",
                field: "name",
                cellRendererFramework: clickable_parent_component_1.ClickableParentComponent,
                width: 250
            }
        ];
    };
    FromRichComponent.prototype.createRowData = function () {
        return [
            { name: 'Homer Simpson', ratios: { top: 0.25, bottom: 0.75 } },
            { name: 'Marge Simpson', ratios: { top: 0.67, bottom: 0.39 } },
            { name: 'Bart Simpson', ratios: { top: 0.82, bottom: 0.47 } },
            { name: 'Lisa Simpson', ratios: { top: 0.39, bottom: 1 } },
            { name: 'Barney', ratios: { top: 0.22, bottom: 0.78 } },
            { name: 'Sideshow Bob', ratios: { top: 0.13, bottom: 0.87 } },
            { name: 'Ned Flanders', ratios: { top: 0.49, bottom: 0.51 } },
            { name: 'Milhouse', ratios: { top: 0.69, bottom: 0.31 } },
            { name: 'Apu', ratios: { top: 0.89, bottom: 0.11 } },
            { name: 'Moe', ratios: { top: 0.64, bottom: 0.36 } },
            { name: 'Smithers', ratios: { top: 0.09, bottom: 0.91 } },
            { name: 'Edna Krabappel', ratios: { top: 0.39, bottom: 0.61 } },
            { name: 'Krusty', ratios: { top: 0.74, bottom: 0.26 } }
        ];
    };
    FromRichComponent = __decorate([
        core_1.Component({
            selector: 'ag-from-rich-component',
            templateUrl: 'from-rich.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FromRichComponent);
    return FromRichComponent;
}());
exports.FromRichComponent = FromRichComponent;
//# sourceMappingURL=from-rich.component.js.map