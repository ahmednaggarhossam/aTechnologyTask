import { Component, ViewChild } from '@angular/core';
import { SerachChartOption } from './../../serach-chart-option';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ApexYAxis,
  ApexGrid,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
  colors: any;
  stroke: ApexStroke;
};
@Component({
  selector: 'app-chart-design',
  templateUrl: './chart-design.component.html',
  styleUrls: ['./chart-design.component.css']
})
export class ChartDesignComponent {
  // p-dropdown in chart section
  chartTimeOption: SerachChartOption[] | undefined;
  selectedTime: SerachChartOption | undefined;
  xAxisColor:string = '#9291A5'
  ngOnInit():void{
    this.chartTimeOption = [
      {id:1, name:"سنوياَ"},
      {id:2, name:"شهرياَ"},
      {id:3, name:"يومياَ"}
    ]
  }
  // chart with type area
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [90, 150, 60, 130, 250, 180, 200, 140, 160, 91, 69, 220]
        }
      ],
      dataLabels: {
        enabled: false
      },
      tooltip: {
        enabled:false,
        x:{
          formatter: (val) => `Custom X-axis label for ${val}`
        },
        style:{
          fontFamily: 'Neo Sans Arabic'
        },
        custom: function({series, seriesIndex, dataPointIndex, w}) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          
          return '<ul>' +
          '<li><b>Price</b>: ' + data.x + '</li>' +
          '<li><b>Number</b>: ' + data.y + '</li>' +
          '<li><b>Product</b>: \'' + data.product + '\'</li>' +
          '<li><b>Info</b>: \'' + data.info + '\'</li>' +
          '<li><b>Site</b>: \'' + data.site + '\'</li>' +
          '</ul>';
        }
      },
      chart: {
        height: 170,
        type: "area",
        background: "#fff",
        zoom: {
          enabled: false
        }
      },
      yaxis: {
        show: false,
        showAlways: false
      },
      xaxis: {
        labels:{
          style:{

            fontFamily: 'Neo Sans Arabic',
            fontWeight: 500,
            colors:['#9291A5'],
          }
        },
        categories: ["ديسمبر", "نوفمبر",  "أكتوبر",  "سبتمبر",  "أغسطس",  "يوليو",  "يونيو",  "مايو", "أبريل", "مارس", "فبرابر", "يناير"]
      },
      fill: {
        colors: ['#8A74F9'],

      },
      stroke:{
        colors: ['#8A74F9'],
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 2,
        dashArray: 0, 
      }

    };
  }
  
}
