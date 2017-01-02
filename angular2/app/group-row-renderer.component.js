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
var medal_renderer_component_1 = require("./medal-renderer.component");
var WithGroupRowComponent = (function () {
    function WithGroupRowComponent() {
        var _this = this;
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.groupUseEntireRow = true;
        this.gridOptions.groupRowInnerRendererFramework = medal_renderer_component_1.MedalRendererComponent;
        this.gridOptions.onGridReady = function () {
            _this.gridOptions.api.sizeColumnsToFit();
        };
    }
    WithGroupRowComponent.prototype.createColumnDefs = function () {
        return [
            {
                headerName: "Country",
                field: "country",
                width: 100,
                rowGroupIndex: 0
            },
            {
                headerName: "Name",
                field: "name",
                width: 100
            },
            {
                headerName: "Gold",
                field: "gold",
                width: 100,
                aggFunc: 'sum'
            },
            {
                headerName: "Silver",
                field: "silver",
                width: 100,
                aggFunc: 'sum'
            },
            {
                headerName: "Bronze",
                field: "bronze",
                width: 100,
                aggFunc: 'sum'
            },
        ];
    };
    WithGroupRowComponent.prototype.createRowData = function () {
        return [
            { country: "United States", name: "Bob", gold: 1, silver: 0, bronze: 0 },
            { country: "United States", name: "Jack", gold: 0, silver: 1, bronze: 1 },
            { country: "United States", name: "Sue", gold: 1, silver: 0, bronze: 1 },
            { country: "United Kingdom", name: "Mary", gold: 1, silver: 1, bronze: 0 },
            { country: "United Kingdom", name: "Tess", gold: 0, silver: 1, bronze: 1 },
            { country: "United Kingdom", name: "John", gold: 0, silver: 2, bronze: 1 },
            { country: "Jamaica", name: "Bob", gold: 1, silver: 1, bronze: 0 },
            { country: "Jamaica", name: "Jack", gold: 1, silver: 1, bronze: 0 },
            { country: "Jamaica", name: "Mary", gold: 1, silver: 1, bronze: 0 },
            { country: "South Africa", name: "Bob", gold: 1, silver: 0, bronze: 1 },
            { country: "South Africa", name: "Jack", gold: 1, silver: 0, bronze: 1 },
            { country: "South Africa", name: "Mary", gold: 1, silver: 0, bronze: 1 },
            { country: "South Africa", name: "John", gold: 1, silver: 0, bronze: 1 },
            { country: "New Zealand", name: "Bob", gold: 1, silver: 0, bronze: 0 },
            { country: "New Zealand", name: "Jack", gold: 0, silver: 1, bronze: 1 },
            { country: "New Zealand", name: "Sue", gold: 1, silver: 0, bronze: 1 },
            { country: "Australia", name: "Mary", gold: 1, silver: 1, bronze: 0 },
            { country: "Australia", name: "Tess", gold: 0, silver: 1, bronze: 1 },
            { country: "Australia", name: "John", gold: 0, silver: 2, bronze: 1 },
            { country: "Canada", name: "Bob", gold: 1, silver: 1, bronze: 0 },
            { country: "Canada", name: "Jack", gold: 1, silver: 1, bronze: 0 },
            { country: "Canada", name: "Mary", gold: 1, silver: 1, bronze: 0 },
            { country: "Switzerland", name: "Bob", gold: 1, silver: 0, bronze: 1 },
            { country: "Switzerland", name: "Jack", gold: 1, silver: 0, bronze: 1 },
            { country: "Switzerland", name: "Mary", gold: 1, silver: 0, bronze: 1 },
            { country: "Switzerland", name: "John", gold: 1, silver: 0, bronze: 1 },
            { country: "Spain", name: "Bob", gold: 1, silver: 0, bronze: 0 },
            { country: "Spain", name: "Jack", gold: 0, silver: 1, bronze: 1 },
            { country: "Spain", name: "Sue", gold: 1, silver: 0, bronze: 1 },
            { country: "Portugal", name: "Mary", gold: 1, silver: 1, bronze: 0 },
            { country: "Portugal", name: "Tess", gold: 0, silver: 1, bronze: 1 },
            { country: "Portugal", name: "John", gold: 0, silver: 2, bronze: 1 },
            { country: "Zimbabwe", name: "Bob", gold: 1, silver: 1, bronze: 0 },
            { country: "Zimbabwe", name: "Jack", gold: 1, silver: 1, bronze: 0 },
            { country: "Zimbabwe", name: "Mary", gold: 1, silver: 1, bronze: 0 },
            { country: "Brazil", name: "Bob", gold: 1, silver: 0, bronze: 1 },
            { country: "Brazil", name: "Jack", gold: 1, silver: 0, bronze: 1 },
            { country: "Brazil", name: "Mary", gold: 1, silver: 0, bronze: 1 },
            { country: "Brazil", name: "John", gold: 1, silver: 0, bronze: 1 }];
    };
    WithGroupRowComponent = __decorate([
        core_1.Component({
            selector: 'ag-group-row-renderer-component',
            templateUrl: 'group-row-renderer.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WithGroupRowComponent);
    return WithGroupRowComponent;
}());
exports.WithGroupRowComponent = WithGroupRowComponent;
//# sourceMappingURL=group-row-renderer.component.js.map