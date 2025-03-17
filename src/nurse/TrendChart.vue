<template>
    <div>
      <LineChart :chart-data="chartData" :chart-options="chartOptions" class="chart-container"/>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  import { LineChart } from "vue-chart-3";
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from "chart.js";
  
  // Register Chart.js components
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);
  
  export default defineComponent({
    components: {
      LineChart
    },
    setup() {
      // Chart Data
      const chartData = ref({
        labels: ["8:00", "10:00", "12:00", "14:00", "16:00"], // X-axis time labels
        datasets: [
          {
            label: "Vital Signs",
            data: [92, 92, 92, 92, 92], // Sample data points
            borderColor: "#6A5ACD",
            backgroundColor: "rgba(106, 90, 205, 0.2)",
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: "Lab Values",
            data: [12.0, 12.1, 12.3, 12.4, 12.5],
            borderColor: "#3CB371",
            backgroundColor: "rgba(60, 179, 113, 0.2)",
            borderWidth: 2,
            tension: 0.4
          },
          {
            label: "Risk Score",
            data: [7.5, 7.8, 8.0, 8.2, 8.5],
            borderColor: "#FF4500",
            backgroundColor: "rgba(255, 69, 0, 0.2)",
            borderWidth: 2,
            tension: 0.4
          }
        ]
      });
  
      // Chart Options
      const chartOptions = ref({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom"
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          y: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 25
            }
          }
        }
      });
  
      return {
        chartData,
        chartOptions
      };
    }
  });
  </script>
  
  <style scoped>
  .chart-container {
    height: 300px;
    width: 100%;
  }
  </style>
  