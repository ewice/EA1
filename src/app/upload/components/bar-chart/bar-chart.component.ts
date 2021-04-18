import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() labels: string[];
  @Input() confidences: number[];

  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins: [];
  barChartData: ChartDataSets[];

  ngOnInit(): void {
    Chart.defaults.global.defaultFontFamily = 'Open Sans';
    Chart.defaults.global.defaultFontColor = '#1B1C1C';
    Chart.defaults.global.defaultFontSize = 14;
    this.barChartData = [
      {
        data: this.confidences,
        backgroundColor: '#02AC53',
        hoverBackgroundColor: '#02AC53',
        borderColor: '#1B1C1C',
        label: 'Confidence in %',
      },
    ];
    this.barChartLabels = this.labels;
  }
}
