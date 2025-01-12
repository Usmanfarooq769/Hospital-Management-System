<template>
    <div class="card p-3 mb-3">
      <h6 class="fs-4 fw-bold mb-3">Recent Summaries</h6>
      <div class="summary-item mb-3 px-4" v-for="summary in summaries" :key="summary.id" style="background: #F8F8F8;border-radius: 6px;">
        <div class="d-flex align-items-center mb-2 text-muted">
          <i class="bi bi-clock me-2"></i>
          <span class="fs-6">{{ summary.time }}</span>
          <span class="ms-3 fs-6">{{ summary.date }}</span>
        </div>
        <p class="mb-0 fs-6">{{ summary.text }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RecentSummaries",
    data() {
      return {
        summaries: [
          {
            id: 1,
            time: "10:00 am",
            date: "Today",
            text: "Vital Signs Mostly stable. BP and HR slightly elevated, requiring monitoring",
          },
          {
            id: 2,
            time: "11:00 am",
            date: "Today",
            text: "Vital Signs Mostly stable. BP and HR slightly elevated, requiring monitoring",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

  .summary-item {
    padding: 0.5rem 0;
    border-bottom: 1px solid #e9ecef;
  }
  .summary-item:last-child {
    border-bottom: none;
  }
  </style>
  