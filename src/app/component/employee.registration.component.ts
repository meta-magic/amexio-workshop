import { Component } from "@angular/core";
import { EmployeeModel } from "../model/employee.mode";
import { AmexioTabComponent } from "amexio-ng-extensions";
import { DyanamicComponent } from "./dyanamic.component";


@Component({
    selector : 'employee-registration',
    templateUrl : "./employee.registration.component.html"
})
export class EmployeeRegistrationComponent{

    employee : EmployeeModel;

    constructor(){
        this.employee = new EmployeeModel();
    }

    onRowSelect(row:EmployeeModel, amexiotab:AmexioTabComponent){
        this.employee = row;
        debugger;
        amexiotab.setActiveTab(2);
    }

    raiseTravelRequest(row:EmployeeModel,amexiotab:AmexioTabComponent){
        debugger;
        const component : DyanamicComponent = amexiotab.addDynamicTab(row.firstname,'red',true,DyanamicComponent);
        component.data = row;
    }
}