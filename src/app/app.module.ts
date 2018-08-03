import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AmexioWidgetModule, AmexioChartsModule } from 'amexio-ng-extensions';
import { EmployeeRegistrationComponent } from './component/employee.registration.component';
import { ChartComponent } from './component/chart.component';
import { Routes, RouterModule } from '@angular/router';
import { DyanamicComponent } from './component/dyanamic.component';


const routes : Routes = [{
  path : '',component : ChartComponent, pathMatch : 'full'
},{
  path : 'employee',component : EmployeeRegistrationComponent, pathMatch : 'full'
}];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    ChartComponent,
    DyanamicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioChartsModule,
    AmexioWidgetModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  entryComponents:[DyanamicComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

