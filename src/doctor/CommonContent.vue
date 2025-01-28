<template>
    <div>
        <div class="row">
            <div class="col-12">

                <!-- Card -->
                <div class="card px-3 pt-4 pb-2 shadow-sm" style="border: 1px solid #EBEBEB;">
                    <div class="row">
                        <div class="col-md-6 col-xl-12">

                            <!-- Date and Time -->
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <p class="mb-0"><i class="bi bi-calendar"></i> Dec 14, 2024</p>
                                </div>
                                <div>
                                    <p class="mb-0"><i class="bi bi-clock"></i> 8:00 am</p>
                                </div>
                            </div>


                            <button class="btn w-100 " style="background: #00A0DA; color: #FFFFFF;">Vital Signs</button>

                        </div>
                        <div class="col-md-6 col-xl-12">
                            <!-- Health Metrics -->
                            <div class=" col-xl-p-3 mt-2 px-2">


                                <div v-for="(item, key) in vitalSignsData" :key="key" class="row mt-2">
                                    <div
                                        class="d-flex justify-content-between align-items-center health-metrics-card p-2">
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="icon-div">
                                                <i :class="getIcon(key)" style="color: #00A0DA; font-weight: bold;"></i>
                                            </div>
                                            <p class="mb-0 fw-medium">{{ getTitle(key) }}</p>
                                        </div>
                                        <div>
                                            <p class="mb-0 pb-0 text-end fw-semibold"
                                                :style="{ color: getColor(item.value, key) }">
                                                {{ item.value }}
                                            </p>
                                            <small class="mt-0 pt-0 text-muted">{{ item.unit }} ({{ item.normal_range
                                                }})</small>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
                <div class="row">
                    <!-- Buttons -->
                    <div class="col-md-6 col-xl-12  ">
                        <div class="card h-100" style="border: none; border-radius: none; background: transparent;">
                            <button class="btn w-100 mt-2" style="background: #00A0DA; color: #FFFFFF;">Lab
                                Investigations</button>
                            <!-- <button class="btn btn-custom  w-100 mt-2" data-bs-toggle="modal"
                                data-bs-target="#nursingAlertsModal"> Nursing Alerts</button> -->
                            <button class="btn btn-custom w-100 mt-2" data-bs-toggle="modal"
                                data-bs-target="#physicianAlertsModal">
                                Nurse Alerts
                            </button>
                            <button class="btn btn-custom   w-100 mt-2" data-bs-toggle="modal"
                                data-bs-target="#medicationsModal">Medications</button>
                            <button class="btn btn-custom  w-100 mt-2" data-bs-toggle="modal"
                                data-bs-target="#allergiesModal">Allergies</button>
                            <button class="btn btn-custom  w-100 mt-2" data-bs-toggle="modal"
                                data-bs-target="#familyHistoryModal">Family History</button>
                            <button class="btn btn-custom  w-100 mt-2" data-bs-toggle="modal"
                                data-bs-target="#personalHistoryModal">Personal History</button>

                        </div>

                    </div>
                </div>


                <!-- Modal -->
                <div class="modal fade" id="physicianAlertsModal" tabindex="-1" aria-labelledby="physicianAlertsModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title fs-4 fw-bold" id="physicianAlertsModalLabel">Nurse Alerts</p>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <!-- Dynamic Alert Cards -->
            <div v-if="physician_alerts.length > 0">
              <div v-for="(alert, index) in physician_alerts" :key="index" class="card mb-3">
                <div class="card-body">
                  <p class="card-title fw-bold">
                    <i class="bi bi-bell"></i> {{ alert.title }}
                    <span class="text-muted float-end"><i class="bi bi-clock"></i> {{ alert.time }}</span>
                  </p>
                  <p class="card-text fs-6 mb-0 pb-0">
                    <strong>Description:</strong> {{ alert.details.description }}
                  </p>
                  <p class="fw-bold mt-2">
                    <strong>Action Required:</strong> {{ alert.details.action_required }}
                  </p>
                  <p class="text-muted"><strong>Nurse:</strong> {{ alert.details.nurse }}</p>

                  <!-- Status Badge -->
                  <p class="mt-3">
                    <strong>Status:</strong>
                    <span :class="statusClass(alert.status)">{{ alert.status }}</span>
                  </p>

                  <!-- Approve / Deny Buttons -->
                  <div class="d-flex align-items-center justify-content-end gap-2 mt-3">
                    <button type="button" class="btn btn-danger btn-sm" @click="denyAlert(alert)">Decline</button>
                    <button type="button" class="btn btn-success btn-sm" @click="approveAlert(alert)">Approve</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Show Message If No Alerts Available -->
            <div v-else>
              <p class="text-center text-muted">No Physician Alerts Available</p>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

                <!-- Modal Medications -->
                <div class="modal fade" id="medicationsModal" tabindex="-1" aria-labelledby="medicationsModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="modal-title fs-4 fw-bold" id="medicationsModalLabel">
                                    <i class="bi bi-file-medical icon-color-modal"></i> Medications
                                </p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group">
                                    <li v-for="(med, index) in medications" :key="index" class="list-group-item fs-5">
                                        {{ med }}
                                    </li>
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-sm"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal FamilyHistory -->
                <div class="modal fade" id="familyHistoryModal" tabindex="-1" aria-labelledby="familyHistoryModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="modal-title fs-4 fw-bold" id="familyHistoryModalLabel">
                                    <i class="bi bi-people icon-color-modal"></i> Family History
                                </p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group">
                                    <li v-for="(condition, relation) in familyHistory" :key="relation"
                                        class="list-group-item fs-5">
                                        <strong>{{ relation }}:</strong> {{ condition }}
                                    </li>
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-sm"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal personal History -->
                <div class="modal fade" id="personalHistoryModal" tabindex="-1"
                    aria-labelledby="personalHistoryModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-4 fw-bold" id="personalHistoryModalLabel">
                                    <i class="bi bi-person-lines-fill icon-color-modal"></i> Personal History
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group">
                                    <li v-for="(item, index) in personalHistory" :key="index"
                                        class="list-group-item fs-5">
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-sm"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Allergies Modal -->
                <div class="modal fade" id="allergiesModal" tabindex="-1" aria-labelledby="allergiesModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="modal-title fs-4 fw-bold" id="allergiesModalLabel">
                                    <i class="bi bi-exclamation-circle icon-color-modal"></i> Allergies
                                </p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group">
                                    <li v-for="(allergy, index) in allergies" :key="index" class="list-group-item fs-5">
                                        <strong>{{ allergy.substance }}:</strong> {{ allergy.reaction }}
                                    </li>
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-sm"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>



<script>
import Swal from "sweetalert2";
export default {
    name: "CommonContent",


    props: {
        vitalSigns: Object,
        medications: Array,
        familyHistory: Object,
        personalHistory: Array,
        allergies: Array,
        physician_alerts: {
            type: Array,
            default: () => []
        },

    },
    computed: {
        vitalSignsData() {
            return this.vitalSigns || {};
        }
    },
    methods: {
        getTitle(key) {
            const titles = {
                heart_rate: "Heart Rate",
                blood_pressure: "Blood Pressure",
                respiration_rate: "Respiration Rate",
                temperature: "Temperature",
                spo2: "SpO2",
                peak_flow: "Peak Flow",
                hemoglobin: "Hemoglobin",
                hba1c: "HbA1c",
                wbc: "WBC",
                bleeding: "Bleeding"
            };
            return titles[key] || key;
        },
        getIcon(key) {
            const icons = {
                heart_rate: "bi bi-heart-pulse",
                blood_pressure: "bi bi-activity",
                respiration_rate: "bi bi-lungs",
                temperature: "bi bi-thermometer",
                spo2: "bi bi-droplet-half",
                peak_flow: "bi bi-graph-up",
                hemoglobin: "bi bi-clipboard-data",
                hba1c: "bi bi-clipboard-check",
                wbc: "bi bi-clipboard-pulse",
                bleeding: "bi bi-droplet"
            };
            return icons[key] || "bi bi-file-medical";
        },
        getColor(value, key) {
            // Custom color logic based on conditions
            if (key === "heart_rate" && value > 100) return "red";
            if (key === "blood_pressure" && parseInt(value.split('/')[0]) > 140) return "red";
            if (key === "temperature" && value > 38) return "red";
            if (key === "spo2" && value < 95) return "orange";
            return "#00A0DA";
        },

        // Approve Alert with SweetAlert2
    approveAlert(alert) {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to approve this alert?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Approve",
      }).then((result) => {
        if (result.isConfirmed) {
          alert.status = "Approved"; // Update status
          Swal.fire("Approved!", "The alert has been approved.", "success");
        }
      });
    },

    // Deny Alert with SweetAlert2
    denyAlert(alert) {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to decline this alert?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, Decline",
      }).then((result) => {
        if (result.isConfirmed) {
          alert.status = "Declined"; // Update status
          Swal.fire("Declined!", "The alert has been declined.", "error");
        }
      });
    },

    // Status Badge Class
    statusClass(status) {
      switch (status) {
        case "Approved":
          return "badge bg-success text-white p-2";
        case "Declined":
          return "badge bg-danger text-white p-2";
        default:
          return "badge bg-warning text-dark p-2";
      }
    },
  },
    

};
</script>


<style scoped>
.icon-div {
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background: #83CBEB66;
    display: flex;
    align-items: center;
    justify-content: center;

}

.health-metrics-card {
    background: #F8F8F8;
    border-radius: 8px;
}

.btn-custom {
    border: 1px solid #00A0DA;
    color: #00A0DA;
}

.btn-custom:hover {
    background: #00A0DA;
    border: 1px solid #00A0DA;
    color: #ffffff;
}

.card {
    border: none;
}

.icon-color-modal {
    color: #00A0DA;
}
</style>