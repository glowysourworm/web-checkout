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
var core_1 = require("@angular/core");
var styled_renderer_component_1 = require("./styled-renderer.component");
var WithFloatingRowComponent = (function () {
    function WithFloatingRowComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.floatingTopRowData = [
            { row: "Top Row", number: "Top Number" }
        ];
        this.gridOptions.floatingBottomRowData = [
            { row: "Bottom Row", number: "Bottom Number" }
        ];
    }
    WithFloatingRowComponent.prototype.createColumnDefs = function () {
        return [
            {
                headerName: "Row",
                field: "row",
                width: 400,
                floatingCellRendererFramework: styled_renderer_component_1.StyledComponent,
                floatingCellRendererParams: {
                    style: { 'font-weight': 'bold' }
                }
            },
            {
                headerName: "Number",
                field: "number",
                width: 399,
                floatingCellRendererFramework: styled_renderer_component_1.StyledComponent,
                floatingCellRendererParams: {
                    style: { 'font-style': 'italic' }
                }
            },
        ];
    };
    WithFloatingRowComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 15; i++) {
            rowData.push({
                row: "Row " + i,
                number: Math.round(Math.random() * 100)
            });
        }
        return rowData;
    };
    WithFloatingRowComponent = __decorate([
        core_1.Component({
            selector: 'ag-floating-row-renderer-component',
            templateUrl: 'floating-row-renderer.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WithFloatingRowComponent);
    return WithFloatingRowComponent;
}());
exports.WithFloatingRowComponent = WithFloatingRowComponent;
//# sourceMappingURL=floating-row-renderer.component.js.map