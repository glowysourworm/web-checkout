import {Component} from '@angular/core';

import {GridOptions, IFilter} from 'ag-grid/main';

import ProficiencyFilter from './proficiencyFilter';
import SkillFilter from './skillFilter';
import {RelocatedVehicle} from './relocated-vehicle';
import RelocatedVehicleData from './relocated-vehicle-data';

// only import this if you are using the ag-Grid-Enterprise
import 'ag-grid-enterprise/main';

@Component({
    selector: 'ag-rich-grid-declarative',
    templateUrl: 'rich-grid-declarative.component.html',
    styles: ['.toolbar button {margin: 2px; padding: 0;}'],
})
export class RichGridDeclarativeComponent {

    public gridOptions:GridOptions;
    public showGrid:boolean;
    private rowData:RelocatedVehicle[];
    public rowCount:string;    

    constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.showGrid = true;
    }

    private createRowData() {

        this.rowData = this.createData();
        this.rowCount = this.rowData.length.toString();
    }

    private toStringSafe(obj) : string {
        return !!obj ? obj.toString() : '';
    }

    private createData() : RelocatedVehicle[] {

        var data = RelocatedVehicleData.RELOCATED_VEHICLES;
        var result = [];

        for (var idx = 0;idx < data.length; idx++)
        {
          var record = new RelocatedVehicle();
          var obj = data[idx];

          record[":sid"] = this.toStringSafe(obj[0]);
          record[":id"] = Number(this.toStringSafe(obj[1]));
          record[":position"] = this.toStringSafe(obj[2]);
          record[":created_at"] = this.toStringSafe(obj[3]);
          record[":created_meta"] = this.toStringSafe(obj[4]);
          record[":updated_at"] = this.toStringSafe(obj[5]);
          record[":updated_meta"] = this.toStringSafe(obj[6]);
          record[":meta"] = ''; //obj[7].toString();
          record["relocated_date"] = new Date(obj[8].toString());
          record["make"] = this.toStringSafe(obj[9]);
          record["color"] = this.toStringSafe(obj[10]);
          record["plate"] = this.toStringSafe(obj[11]);
          record["state"] = this.toStringSafe(obj[12]);
          record["relocated_from_address_number"] = this.toStringSafe(obj[13]);
          record["relocated_from_street_direction"] = this.toStringSafe(obj[14]);
          record["relocated_from_street_name"] = this.toStringSafe(obj[15]);
          record["relocated_from_suffix"] = this.toStringSafe(obj[16]);
          record["relocated_to_address_number"] = this.toStringSafe(obj[17]);
          record["relocated_to_direction"] = this.toStringSafe(obj[18]);
          record["relocated_to_street_name"] = ''; //obj[19].toString();
          record["relocated_to_suffix"] = this.toStringSafe(obj[20]);
          record["service_request_number"] = this.toStringSafe(obj[21]);

          result.push(record);
        }
          return result;        
    }

/*
    private countryCellRenderer(params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
        return flag + " " + params.value;
    }
*/
}

