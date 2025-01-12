<template>

    <div class="card h-100 ">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="mb-0 fw-bold">{{ title }}</h6>
                <span :class="statusClass()">{{ status }}</span>
            </div>
            <p class="mt-2 fs-6">{{ value }}</p>
            <div class="d-flex align-items-center text-muted ">
                <i class="bi bi-clock me-1"></i>
                <small>{{ time }}</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VitalCard",
    props: {
        title: { type: String, required: true },
        value: { type: String, required: true },
        time: { type: String, required: true },
        status: { type: String, required: true },
    },
    methods: {
    statusClass() {
      switch (this.status.toLowerCase()) {
        case "stable":
          return "custom-stable badge ";
        case "elevated":
          return "custom-elevated badge ";
        case "decreased":
          return "custom-decreased badge ";
        default:
          return "custom-default badge";
      }
    },
  },
};
</script>

<style scoped>




.custom-stable {
    background-color: #73F85142;
 
    /* Green for stable */
    color:#297711;
   
}

.custom-elevated {
    background-color: #FF26261A;
    /* Red for elevated */
    color: #FF2626;
   
}

.custom-decreased {
    background-color: #FFA8261A;
    /* Yellow for decreased */
    color: #FFA826;
   
}

.custom-default {
    background-color: #6c757d;
    color: white;
   
}
</style>