<template>
 
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-3 mt-4">
      <p class="mb-0">
        <strong>James Wilson</strong>, #12345, <strong>Dr. Sarah Thompson</strong>
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


    <div class="row g-2 mt-4">
      <!-- Upcoming Appointments -->
      <div class="col-md-4">
        <div class="card h-100">
          
          <div class="card-body"
            v-if="patientData.communicationPlan && patientData.communicationPlan.appointmentReminders && patientData.communicationPlan.appointmentReminders.length > 0">
            <p class=" fw-bold" style="color: #4588E0;">
            <i class="bi bi-calendar-event me-1"></i>Upcoming Appointments
          </p>
            <ul class="list-unstyled  " >
              <li v-for="(appointment, index) in patientData.communicationPlan.appointmentReminders" :key="index">
                <p class="mb-0 pb-0 small-word">
                  <strong class="typo-strong">{{ appointment.name }}</strong>
                </p>
                <p class="text-muted small-word mt-0 pt-0">
                  <i class="bi bi-clock me-1"></i>{{ appointment.date }}
                </p>
              </li>
            </ul>
          </div>
          <p v-else class="small-word">No upcoming appointments</p>
        </div>
      </div>


      <!-- Communication Method -->
      <div class="col-md-4">
        <div class="card  h-100">
          
          <div class="card-body" v-if="patientData.communicationPlan && patientData.communicationPlan.communicationMethod">
            <p class="fw-bold   " style="color: #4588E0;">
            <i class="bi bi-telephone me-1"></i>Communication Method
          </p>
            <p class="small-word mb-0 pb-0">
              <strong class="typo-strong">Primary:</strong> {{ patientData.communicationPlan.communicationMethod.Primary
              }}
            </p>
            <p class="small-word mb-0 pb-0 mt-0 pt-0">
              <strong class="typo-strong">Secondary:</strong> {{
                patientData.communicationPlan.communicationMethod.Secondary }}
            </p>
            <p class="small-word mb-0 pb-0 mt-0 pt-0">
              <strong class="typo-strong">Emergency:</strong> {{
                patientData.communicationPlan.communicationMethod.Emergency }}
            </p>
            <p class="small-word mt-0 pt-0">
              <strong class="typo-strong">Language:</strong> {{
                patientData.communicationPlan.communicationMethod.Language }}
            </p>
          </div>
          <p v-else class="small-word">No communication method specified</p>
        </div>
      </div>
      <!-- Medication Schedule -->
      <div class="col-md-4">
        <div class="card  h-100">
          
          <div class="card-body" v-if="patientData.communicationPlan && patientData.communicationPlan.medicationSchedule">
            <p class="fw-bold" style="color: #4588E0;">
            <i class="bi bi-calendar4-week me-1"></i>Medication Schedule
          </p>
            <p v-for="(schedule, index) in patientData.communicationPlan.medicationSchedule" :key="index"
              class="small-word mb-0 pb-0">
              <small class="small-word">{{ schedule.split(':')[0] }}</small> {{ schedule.split(':')[1] }}
            </p>
          </div>
          <p v-else class="small-word">No medication schedule specified</p>
        </div>
      </div>

      <!-- Special Instructions -->
      <div class="col-md-4">
        <div class="card  h-100 ">
          <div class="card-body">
            <div class="card-body">
              <p class="fw-bold " style="color: #4588E0;">
            <i class="bi bi-file-earmark-text me-1"></i>Special Instructions
          </p>
           
          <ul class="mb-0">
            <li v-for="(instruction, index) in patientData.communicationPlan.specialInstructions" :key="index"
              class="small-word">
              {{ instruction }}
            </li>
          </ul>
          <p v-if="!patientData.communicationPlan.specialInstructions || patientData.communicationPlan.specialInstructions.length === 0"
            class="small-word">
            No special instructions available
          </p>
        </div>
        </div>
        </div>
      </div>
    </div>


    <div class="row mt-2 px-2 ">

      <PendingItemsTable />
    </div>

 
</template>

<script>
import PendingItemsTable from "@/doctor/PendingItemsTable.vue";
export default {
  name: "FollowUpCommunication",
  components: {
    PendingItemsTable,
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
};
</script>

<style scoped>
.activ-badge {
  background: #73f85142;
  color: #297711 !important;
  border-radius: 12px;
}
.card{
  border: 1px solid #EBEBEB;
}
</style>