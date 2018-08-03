import { Component } from "@angular/core";

@Component({
    selector : 'chart-demo',
    templateUrl : "./chart.component.html"
})
export class ChartComponent{
    chartdata : any;

    constructor(){
        this.chartdata = [
            ['City', '2010 Population',],
            ['New York City, NY', 8175000],
            ['Los Angeles, CA', 3792000],
            ['Chicago, IL', 2695000],
            ['Houston, TX', 2099000],
            ['Philadelphia, PA', 1526000]
          ];
    }
}