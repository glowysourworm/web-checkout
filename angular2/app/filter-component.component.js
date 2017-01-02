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
var partial_match_filter_component_1 = require("./partial-match-filter.component");
var FilterComponentComponent = (function () {
    function FilterComponentComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.enableFilter = true;
        this.gridOptions.suppressMenuColumnPanel = true; // ag-enterprise only
        this.gridOptions.suppressMenuMainPanel = true; // ag-enterprise only
    }
    FilterComponentComponent.prototype.onClicked = function (event) {
        this.gridOptions.api.getFilterInstance("name").getFrameworkComponentInstance().componentMethod("Hello World!");
    };
    FilterComponentComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Row", field: "row", width: 400 },
            {
                headerName: "Filter Component",
                field: "name",
                filterFramework: partial_match_filter_component_1.PartialMatchFilterComponent,
                width: 400
            }
        ];
    };
    FilterComponentComponent.prototype.createRowData = function () {
        return [
            { "row": "Row 1", "name": "Michael Phelps" },
            { "row": "Row 2", "name": "Natalie Coughlin" },
            { "row": "Row 3", "name": "Aleksey Nemov" },
            { "row": "Row 4", "name": "Alicia Coutts" },
            { "row": "Row 5", "name": "Missy Franklin" },
            { "row": "Row 6", "name": "Ryan Lochte" },
            { "row": "Row 7", "name": "Allison Schmitt" },
            { "row": "Row 8", "name": "Natalie Coughlin" },
            { "row": "Row 9", "name": "Ian Thorpe" },
            { "row": "Row 10", "name": "Bob Mill" },
            { "row": "Row 11", "name": "Willy Walsh" },
            { "row": "Row 12", "name": "Sarah McCoy" },
            { "row": "Row 13", "name": "Jane Jack" },
            { "row": "Row 14", "name": "Tina Wills" }
        ];
    };
    FilterComponentComponent = __decorate([
        core_1.Component({
            selector: 'ag-filter-component',
            templateUrl: 'filter-component.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FilterComponentComponent);
    return FilterComponentComponent;
}());
exports.FilterComponentComponent = FilterComponentComponent;
//# sourceMappingURL=filter-component.component.js.map