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
var name_age_renderer_component_1 = require("./name-age-renderer.component");
var WithFullWidthComponent = (function () {
    function WithFullWidthComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.isFullWidthCell = function (rowNode) {
            return (rowNode.id === "0") || (parseInt(rowNode.id) % 2 === 0);
        };
        this.gridOptions.fullWidthCellRendererFramework = name_age_renderer_component_1.NameAndAgeRendererComponent;
    }
    WithFullWidthComponent.prototype.createColumnDefs = function () {
        return [
            {
                headerName: "Name",
                field: "name",
                width: 400
            },
            {
                headerName: "Age",
                field: "age",
                width: 399
            },
        ];
    };
    WithFullWidthComponent.prototype.createRowData = function () {
        return [
            { name: "Bob", age: 10 },
            { name: "Harry", age: 3 },
            { name: "Sally", age: 20 },
            { name: "Mary", age: 5 },
            { name: "John", age: 15 },
            { name: "Bob", age: 10 },
            { name: "Harry", age: 3 },
            { name: "Sally", age: 20 },
            { name: "Mary", age: 5 },
            { name: "John", age: 15 },
            { name: "Jack", age: 25 },
            { name: "Sue", age: 43 },
            { name: "Sean", age: 44 },
            { name: "Niall", age: 2 },
            { name: "Alberto", age: 32 },
            { name: "Fred", age: 53 },
            { name: "Jenny", age: 34 },
            { name: "Larry", age: 13 },
        ];
    };
    WithFullWidthComponent = __decorate([
        core_1.Component({
            selector: 'ag-full-width-renderer-component',
            templateUrl: 'full-width-renderer.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WithFullWidthComponent);
    return WithFullWidthComponent;
}());
exports.WithFullWidthComponent = WithFullWidthComponent;
//# sourceMappingURL=full-width-renderer.component.js.map