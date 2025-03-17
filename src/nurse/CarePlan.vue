<template>

  <!-- Header -->
  <div class="d-flex justify-content-between align-items-center  mt-2">
    <p class="mb-0">
      <strong>{{ patientData.name }}</strong>, #{{ patientData.id }} <strong>Dr. Sarah Thompson</strong>
    </p>
  </div>

  <!-- Patient Info -->
  <div class="row mt-4 nav nav-tabs ">
    <!-- Tabs Navigation -->


    <!-- Patient Info -->

    <!-- Tabs Navigation -->
    <!-- Sample Collection Card -->
    <div class="col-md-4">
      <div class="card border-2  d-flex align-items-center justify-content-center w-100 h-100"
        :class="{ 'active-card': activeTab === 'sample' }">
        <div class="card-body text-center">
          <p class="fw-bold">Sample Collection</p>
          <button class="nav-link active nav-btn btn-sm" id="sample-tab" data-bs-toggle="tab" data-bs-target="#sample"
            type="button" role="tab" aria-controls="sample" :aria-selected="activeTab === 'sample'"
            @click="setActiveTab('sample')" style="font-size: 14px;">
            Collection Details
          </button>
        </div>
      </div>
    </div>

    <!-- Supportive Procedures Card -->
    <div class="col-md-4">
      <div class="card border-2  d-flex align-items-center justify-content-center w-100 h-100"
        :class="{ 'active-card': activeTab === 'supportive' }">
        <div class="card-body text-center">
          <p class="fw-bold">Supportive Procedures</p>
          <button class="nav-link btn-sm nav-btn" id="supportive-tab" data-bs-toggle="tab" data-bs-target="#supportive"
            type="button" role="tab" aria-controls="supportive" :aria-selected="activeTab === 'supportive'"
            @click="setActiveTab('supportive')"  style="font-size: 14px;">
            Procedures Details
          </button>
        </div>
      </div>
    </div>

    <!-- Patient Education Card -->
    <div class="col-md-4">
      <div class="card border-2  d-flex align-items-center justify-content-center w-100 h-100"
        :class="{ 'active-card': activeTab === 'education' }">
        <div class="card-body text-center">
          <p class="fw-bold">Patient Education</p>
          <button class="nav-link btn-sm nav-btn" id="education-tab" data-bs-toggle="tab" data-bs-target="#education"
            type="button" role="tab" aria-controls="education" :aria-selected="activeTab === 'education'"
            @click="setActiveTab('education')"  style="font-size: 14px;">
            Education Details
          </button>
        </div>
      </div>
    </div>
  </div>
    <!-- Tabs Content -->
    <div class="tab-content mt-3">
      <!-- Sample Collection Card -->
      <div class="tab-pane fade show active" id="sample" role="tabpanel" aria-labelledby="sample-tab">
        <div class="card">
          <div class="card-body">
            <SampleCollectionTabContent />
          </div>
        </div>
      </div>

      <!-- Supportive Procedures Card -->
      <div class="tab-pane fade" id="supportive" role="tabpanel" aria-labelledby="supportive-tab">
        <div class="card">
          <div class="card-body">
            <SupportiveProcedureComponent />
          </div>
        </div>
      </div>

      <!-- Patient Education Card -->
      <div class="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
        <div class="card">
          <div class="card-body">
            <PatientEducationComponent />
          </div>
        </div>

      </div>
    </div>
 





</template>

<script>

import SampleCollectionTabContent from "@/nurse/SampleCollectionTabContent.vue";
import SupportiveProcedureComponent from "@/nurse/SupportiveViewTab.vue";
import PatientEducationComponent from "@/nurse/PatientEduction.vue";


export default {
  name: "CarePlan",
  components: {

    SampleCollectionTabContent,
    SupportiveProcedureComponent,
    PatientEducationComponent,
  },
  props: {
    patientData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isDataAvailable() {
      return Object.keys(this.patientData).length > 0;
    },
  },
  data() {
    return {
      activeTab: "sample", // Default active tab
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab; // Set the active tab
    },
  },
};
</script>

<style scoped>
.card{
  border: none;
}
.activ-badge {
  background: #73f85142;
  color: #297711 !important;
  border-radius: 12px;
}

.nav-tabs .nav-link.active {
  background-color: #00A0DA;
  color: white;
  border-color: #00A0DA;
}

.nav-tabs .nav-link {
  border: 1px solid #00A0DA;
  color: #00A0DA;
  background: transparent;
  border-radius: 4px
}

.nav-tabs {
  border: none;
}

.active-card {
  border: 1px solid #00A0DA;
}



</style>