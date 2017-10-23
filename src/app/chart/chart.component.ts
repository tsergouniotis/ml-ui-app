import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DataPoint, SeriesOptions, ChartObject, LegendOptions, Options } from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() title: string;

  @Input() subtitle: string;

  @Input() type: string = 'line';

  @Input() yAxisTitle: string;

  @Input() xAxisTitle: string;


  legend: LegendOptions;

  chart: Chart;

  constructor() { }

  ngOnInit() {

    var self = this;

    self.chart = new Chart(self.options());



  }

  series() {
    return [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }];
  }

  options(): Options {
    var self = this;

    return {

      title: {
        text: self.title
      },

      subtitle: {
        text: self.subtitle
      },

      yAxis: {
        title: {
          text: self.yAxisTitle
        }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          allowPointSelect: true
        }
      },

      series: self.series()
    };
  }

}
