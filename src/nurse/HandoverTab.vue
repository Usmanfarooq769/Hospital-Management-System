<template>



    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center ">
        <p>
          <strong>{{ patientData.name }}</strong>, #{{ patientData.id }} <strong>Dr. Sarah Thompson</strong>
        </p>
    </div>

    <!-- Patient Info -->
    <div v-if="patientData">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img :src="patientData.image" alt="Profile" class="rounded-circle" style="width: 50px; height: 50px;" />
                <div class="px-3">
                    <p class="mb-0 md-paragraph">{{ patientData.name }}</p>
                    <small class="text-muted">
                        ID: {{ patientData.id }} • {{ patientData.department }}
                    </small>
                </div>
            </div>
            <span class="badge activ-badge text-light px-3 py-2">Active</span>
        </div>
    </div>
    <div v-else>
        <p>Loading patient data...</p>
    </div>

    <div class="card row-mt-4 p-4">
    <p class="fs-4 fw-bold">Nursing Handover</p>
    <div v-for="(item, index) in handoverItems" :key="index" class="card card-1" @click="toggleDetails(index)">
      <div class="card-header=1 d-flex align-items-center justify-content-between">
        <p class="fw-bold">{{ item.title }}</p>
       
        <span class="arrow-icon">
            <i class="bi bi-chevron-right"></i>
        </span>
      </div>
      <div v-if="item.open" class="card-body border-top">
        <p>{{ item.details }}</p>
      </div>
    </div>
  </div>

    
</template>

<script>
export default {
    name: "HandoverTab",
   
    props: {
        patientData: {
            type: Object,
            default: () => ({}),
        },
    },


    data() {
    return {
      handoverItems: [
        {
          title: "Identify",
          details: "Details about identification go here.",
          name:'usman',
          open: false,
        },
        {
          title: "Situation",
          details: "Details about the current situation go here.",
          open: false,
        },
        {
          title: "Background",
          details: "Details about the background go here.",
          open: false,
        },
        {
          title: "Recommendations",
          details: "Details about recommendations go here.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleDetails(index) {
      this.handoverItems[index].open = !this.handoverItems[index].open;
    },
  },

  
 
};
</script>


<style scoped>
.card {
    border: none;
}

.card-1 {
  background-color: #f0f8ff;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  
}

.arrow-icon {
  transition: transform 0.3s;
}

.card-body {
  margin-top: 10px;
  padding-top: 10px;
 
}
</style>