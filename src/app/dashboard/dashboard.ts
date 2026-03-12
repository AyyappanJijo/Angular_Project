import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements AfterViewInit {

  ngAfterViewInit(): void {
    this.loadPieChart();
    this.loadDoughnutChart();
  }

  private loadPieChart(): void {
    const ctx = document.getElementById('taskChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Completed', 'Pending', 'Overdue'],
        datasets: [{
          data: [12, 8, 3],
          backgroundColor: ['#1e88e5', '#42a5f5', '#90caf9'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  private loadDoughnutChart(): void {
    const ctx = document.getElementById('internChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Inactive'],
        datasets: [{
          data: [15, 5],
          backgroundColor: ['#1565c0', '#cfd8dc'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}