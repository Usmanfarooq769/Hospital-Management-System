<template>

    <div class="d-flex justify-content-between align-items-center ">
        <p>
            <strong>{{ patientData.name }}</strong>, #{{ patientData.id }} <strong>Dr. Sarah Thompson</strong>
        </p>
    </div>
    <div class="row g-3">
        <!-- Card 1 -->
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-1  h-100" data-bs-toggle="modal" data-bs-target="#treatmentManagementModal">
                <div class="card-body text-center">
                    <i class="bi bi-activity bold-icon"></i>
                    <p class="fw-bold">Treatment Dashboard</p>
                </div>
            </div>
        </div>
        <!-- Card 2 -->
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-2 h-100" data-bs-toggle="modal" data-bs-target="#electrolyteManagementModal">
                <div class="card-body text-center">
                    <i class="bi bi-droplet bold-icon"></i>
                    <p class="fw-bold">Electrolyte Management</p>
                </div>
            </div>
        </div>
        <!-- Card 3 -->
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-3  h-100" data-bs-toggle="modal" data-bs-target="#medicationScheduleModal">
                <div class="card-body text-center">
                    <i class="bi bi-capsule bold-icon"></i>
                    <p class="fw-bold">Medication Schedule</p>
                </div>
            </div>
        </div>

    </div>

    <div class="row g-2 mt-2">


        <TreatMentComponent />

    </div>


    <!----------Medication Schedule Modal----------------->
    <div class="modal fade" id="medicationScheduleModal" tabindex="-1" aria-labelledby="medicationScheduleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title fs-4 fw-bold" id="medicationScheduleModalLabel"> <i class="bi bi-capsule bold-icon"></i> Medication Schedule</p>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div v-if="patientData">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <img :src="patientData.image" alt="Profile" class="rounded-circle"
                                        style="width: 50px; height: 50px;" />
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

                        <form @submit.prevent="submitMedicationForm">
                            <div class="card p-3 mb-3 mt-4">
                                <h5 class="fw-bold">Aspirin 81mg</h5>
                                <label class="fw-bold">Schedule: Daily | Duration: 30 days</label>
                                <select class="form-select" aria-label="Add notes">
                                    <option selected>Add notes (e.g. sites, lot number)</option>
                                </select>
                                <div class="d-flex align-items-center mt-2">
                                    <input class="form-check-input me-2" type="checkbox" id="aspirinAdministered">
                                    <label class="form-check-label fw-bold" for="aspirinAdministered">8:00</label>
                                </div>
                            </div>

                            <div class="card p-3 mb-3">
                                <h5 class="fw-bold">Clopidogrel 75mg</h5>
                                <label class="fw-bold">Schedule: Daily | Duration: 30 days</label>
                                <select class="form-select" aria-label="Add notes">
                                    <option selected>Add notes (e.g. sites, lot number)</option>
                                </select>
                                <div class="d-flex align-items-center mt-2">
                                    <input class="form-check-input me-2" type="checkbox" id="clopidogrelAdministered">
                                    <label class="form-check-label fw-bold" for="clopidogrelAdministered">8:00</label>
                                </div>
                            </div>

                            <div class="card p-3 mb-3">
                                <h5 class="fw-bold">Metoprolol</h5>
                                <lable class="fw-bold">Schedule: Daily | Duration: 30 days</lable>
                                <select class="form-select" aria-label="Add notes">
                                    <option selected>Add notes (e.g. sites, lot number)</option>
                                </select>
                                <div class="d-flex align-items-center mt-2">
                                    <input class="form-check-input me-2" type="checkbox" id="metoprololAdministered">
                                    <label class="form-check-label fw-bold" for="metoprololAdministered">8:00</label>
                                </div>
                            </div>

                            <div class="card p-3 mb-3">
                                <h6>Insulin Regular</h6>
                                <label class="fw-bold">Schedule: Daily | Duration: 30 days</label>
                                <select class="form-select" aria-label="Add notes">
                                    <option selected>Add notes (e.g. sites, lot number)</option>
                                </select>
                                <div class="d-flex align-items-center mt-2">
                                    <input class="form-check-input me-2" type="checkbox" id="insulinAdministered">
                                    <label class="form-check-label fw-bold" for="insulinAdministered">8:00</label>
                                </div>
                            </div>

                            <div class="alert alert-danger mt-3" role="alert">
                                <h6 class="fw-bold">Important Alerts</h6>
                                <ul>
                                    <li>Monitor blood glucose q4h and adjust insulin per sliding scale</li>
                                    <li>Check BP before each beta blocker dose</li>
                                    <li>Monitor I/O strictly—maintain neutral balance</li>
                                    <li>Daily electrolyte panel required</li>
                                </ul>
                            </div>


                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Electrolyte Management Modal -->
    <div class="modal fade" id="electrolyteManagementModal" tabindex="-1"
        aria-labelledby="electrolyteManagementModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title fs-4 fw-bold" id="electrolyteManagementModalLabel"> <i class="bi bi-droplet bold-icon"></i> Electrolyte Management</p>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div v-if="patientData">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <img :src="patientData.image" alt="Profile" class="rounded-circle"
                                        style="width: 50px; height: 50px;" />
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


                        <h5 class="fw-bold mt-4">Potassium</h5>
                        <div class="card p-3 mb-3">
                            <label class="form-label fw-bold mb-2">Current level (mEq/l)</label>
                            <select class="form-select">
                                <option selected>3.5-5.0</option>
                            </select>
                            <label class="form-label mt-2 mb-2 fw-bold">Replacement Ordered</label>
                            <select class="form-select">
                                <option selected>Kcl 40mEq</option>
                            </select>
                            <div class="form-check mt-2">
                                <input class="form-check-input" type="checkbox" id="potassiumAdministered">
                                <label class="form-check-label fw-bold" for="potassiumAdministered">Administered</label>
                            </div>
                        </div>

                        <h5 class="fw-bold">Magnesium</h5>
                        <div class="card p-3 mb-3">
                            <label class="form-label fw-bold mb-2">Current level (mEq/l)</label>
                            <select class="form-select">
                                <option selected>3.5-5.0</option>
                            </select>
                            <label class="form-label mt-2 mb-2 fw-bold">Replacement Ordered</label>
                            <select class="form-select">
                                <option selected>Kcl 40mEq</option>
                            </select>
                            <div class="form-check mt-2">
                                <input class="form-check-input" type="checkbox" id="magnesiumAdministered">
                                <label class="form-check-label fw-bold" for="magnesiumAdministered">Administered</label>
                            </div>
                        </div>

                        <h5 class="fw-bold">Calcium</h5>
                        <div class="card p-3 mb-3">
                            <label class="form-label fw-bold mb-2">Current level (mEq/l)</label>
                            <select class="form-select">
                                <option selected>3.5-5.0</option>
                            </select>
                            <label class="form-label mt-2 mb-2 fw-bold">Replacement Ordered</label>
                            <select class="form-select">
                                <option selected>Kcl 40mEq</option>
                            </select>
                            <div class="form-check mt-2">
                                <input class="form-check-input" type="checkbox" id="calciumAdministered">
                                <label class="form-check-label fw-bold " for="calciumAdministered">Administered</label>
                            </div>
                        </div>

                        
                           

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <!---treatment Management Modal--->
    <div class="modal fade" id="treatmentManagementModal" tabindex="-1" aria-labelledby="treatmentManagementModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title fs-4 fw-bold" id="treatmentManagementModalLabel"> <i
                            class="bi bi-activity bold-icon"></i> Treatment Management Dashboard</p>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div v-if="patientData">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <img :src="patientData.image" alt="Profile" class="rounded-circle"
                                        style="width: 50px; height: 50px;" />
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
                        <h4 class="fw-bold mt-4">Fluid Management</h4>


                        <h5 class="fw-bold mb-3 mt-3">Normal Saline</h5>
                        <label class="form-label fw-bold mb-2">Rate (ml/hr)</label>
                        <select class="form-select">
                            <option selected>75</option>
                        </select>
                        <label class="form-label mt-2 fw-bold mb-2">Total Volume (ml)</label>
                        <select class="form-select">
                            <option selected>23</option>
                        </select>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="salineStarted">
                            <label class="form-check-label fw-bold" for="salineStarted">Started</label>
                        </div>



                        <h5 class="fw-bold mb-3 mt-3">DSW</h5>
                        <label class="form-label fw-bold mb-2">Rate (ml/hr)</label>
                        <select class="form-select">
                            <option selected>75</option>
                        </select>
                        <label class="form-label fw-bold mb-2 mt-2">Total Volume (ml)</label>
                        <select class="form-select">
                            <option selected>23</option>
                        </select>
                        <div class="form-check mt-2">
                            <input class="form-check-input" type="checkbox" id="dswStarted">
                            <label class="form-check-label fw-bold" for="dswStarted">Started</label>
                        </div>



                        <h5 class="fw-bold mb-3 mt-3">Input/Output</h5>
                        <label class="form-label fw-bold mb-2">Rate (ml/hr)</label>
                        <select class="form-select">
                            <option selected>75</option>
                        </select>
                        <label class="form-label  fw-bold mb-2">Total Volume (ml)</label>
                        <select class="form-select">
                            <option selected>23</option>
                        </select>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="ioStarted">
                            <label class="form-check-label fw-bold" for="ioStarted">Started</label>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>



</template>

<script>

import TreatMentComponent from "@/nurse/TreatmentComponent.vue";
export default {
    name: "TreatmentTab",
    props: {
        dischargePlan: {
            type: Object,
            required: true,
        },

        patientData: {
            type: Object,
            required: true,
        },
    },
    components: {
        TreatMentComponent,
    }
};
</script>

<style scoped>
.btn-report {
    background: #4588e0;
    border-radius: 10px;
    color: white;
    border: none;

}

.btn-report:hover {
    background: #4588e0;
    border-radius: 10px;
    color: white;
    border: none;

}

.btn-group {
    background: #E6EAEF;
    border: none;
    color: #161B21;
    border-radius: 10px;
    font-size: 14px;

}

.btn-group:hover {
    background: #4588e0;
    border: none;
    color: #ffff;
    border-radius: 10px;
    font-size: 14px;

}




.card-1 {

    color: #007bff;
    border-color: #007bff;
}

.card-2 {

    color: #28a745;
    border-color: #28a745;
}

.card-3 {

    color: #6f42c1;
    border-color: #6f42c1;
}

.card-4 {

    color: #fd7e14;
    border-color: #fd7e14;
}

/* Hover effect */
.custom-card:hover {
    transform: scale(1.05);
    cursor: pointer;
}

.bold-icon {
    font-weight: bold !important;
}
</style>