<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <span class="chart-title">Heart Rate</span>
      <span class="chart-value">74bpm</span>
    </div>
    <div class="chart-container">
      <canvas ref="chart"></canvas>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  LineController,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  LineController
);

export default {
  name: "HeartRateChart",
  props: {
    labels: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    const ctx = this.$refs.chart.getContext("2d");

    new ChartJS(ctx, {
      type: "line",
      data: {
        labels: this.labels, // Labels passed as props
        datasets: [
          {
            label: "Heart Rate",
            data: this.data, // Data passed as props
            borderColor: "#4588E0",
            backgroundColor: "rgba(0, 123, 255, 0.1)",
            borderWidth: 3,
            pointRadius: 0, // Points on the line
            tension: 0.3, // Smooth line
            fill: true, // Fill area under the line
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "category", // Use category to map labels correctly
            grid: {
              color: "rgba(200, 200, 200, 0.2)", // Subtle gridlines
            },
            ticks: {
              color: "#888",
              font: {
                size: 12,
              },
            },
          },
          y: {
            min: 50, // Fixed minimum value
            max: 100, // Fixed maximum value
            ticks: {
              stepSize: 10, // Step size between ticks
              callback: (value) => `${value} bpm`, // Add "bpm" suffix
              color: "#888",
              font: {
                size: 12,
              },
            },
            grid: {
              color: "rgba(200, 200, 200, 0.2)", // Subtle gridlines
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide legend
          },
          tooltip: {
            enabled: true, // Enable tooltips
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.chart-title {
  color: #333;
}

.chart-value {
  color: #4588E0;
}

.chart-container {
  position: relative;
  height: 200px;
  width: 100%;
}
</style>
