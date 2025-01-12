<template>

            <!-- Header Section -->

            <div class="mb-4 mt-4">
                <p class="md-paragraph"> <strong> Wilson</strong>, <strong> #12345</strong>,<strong>Dr. Sarah
                        Thompson</strong></p>
            </div>
            <div class=" mt-4">
                <div class="d-flex align-item-center gap-2">

                    <button class="btn btn-report me-1">
                        <i class="bi bi-file-earmark-text me-1"></i> Generate Report
                    </button>

                    <button class="btn btn-group me-1">
                        <i class="bi bi-link-45deg me-1"></i> Attach Template
                    </button>
                    <button class="btn btn-group me-1">
                        <i class="bi bi-envelope me-1"></i> Email Report
                    </button>
                    <button class="btn btn-group me-1">
                        <i class="bi bi-printer me-1"></i> Print
                    </button>
                    <button class="btn btn-group me-1">
                        <i class="bi bi-download me-1 "></i> Extract Report
                    </button>
                </div>

            </div>

            <div class="h-100 m-auto">

            <div class="row g-2 mt-4">

                <!-- Patient Information -->
                <div class="col-md-4 ">
                    <div class="card p-3 h-100">
                        <p class="  fw-bold" style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1 "></i>Patient Information
                        </p>
                        <div>
                            <p class="mb-0 small-word">
                                <strong>Name:</strong> {{ patientData.name }}
                            </p>
                            <p class="mb-0 small-word">
                                <strong>DOB:</strong> {{ patientData.medicalReport.patientInformation.dob }}
                            </p>
                            <p class="mb-0 small-word">
                                <strong>MRN:</strong> {{ patientData.mrn }}
                            </p>
                            <p class="mb-0 small-word">
                                <strong>Primary Physician:</strong> {{
                                    patientData.medicalReport.patientInformation.primaryPhysician }}
                            </p>
                            <p class="small-word">
                                <strong>Contact:</strong> {{ patientData.medicalReport.patientInformation.contact }}
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Diagnosis -->
                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <p class="fw-bold" style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Diagnosis
                        </p>
                        <p class="mb-0 small-word">
                            <strong>Primary:</strong> {{ patientData.medicalReport.diagnosis.primary }}
                        </p>
                        <p class="mb-0 small-word">
                            <strong>Primary:</strong> {{ patientData.medicalReport.diagnosis.Secondary }}
                        </p>
                    </div>
                </div>

                <!-- Medical History -->
                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <p class="fw-bold" style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Medical History
                        </p>
                        <p class="mb-0 small-word">
                            <strong>Conditions:</strong>
                        </p>
                        <ul>
                            <li v-for="condition in patientData.medicalReport.medicalHistory.conditions"
                                :key="condition" class="small-word">
                                {{ condition }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <p class="fw-bold" style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Treatment Plan
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong">Procedure:</strong> {{
                                patientData.medicalReport.treatmentPlan.procedure }}
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong">Medications:</strong>
                        </p>
                        <ul class="mb-t pt-0 mb-0 pb-0 small-word">
                            <li v-for="medication in patientData.medicalReport.treatmentPlan.medications"
                                :key="medication" class="small-word">
                                {{ medication }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <p class="fw-bold" style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Vital Signs
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong me-1">BP:</strong> {{
                                patientData.medicalReport.examinationFindings.bp }}
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong mee-2">HR:</strong> {{
                                patientData.medicalReport.examinationFindings.hr }}
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong me-1">RR:</strong> {{
                                patientData.medicalReport.examinationFindings.rr }}
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong me-1">O2 Sat:</strong> {{
                                patientData.medicalReport.examinationFindings.o2 }}
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong me-1">Temperature:</strong> {{
                                patientData.medicalReport.examinationFindings.temperature }}
                        </p>
                    </div>
                </div>




                <div class="col-md-4">
                    <div class="card p-3 h-100">
                        <p class="fw-bold" style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Investigations
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong me-1">ECG:</strong> {{
                                patientData.medicalReport.investigations.ECG }}
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong me-1">TROPONIN:</strong> {{
                                patientData.medicalReport.investigations.troponin }}
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word">
                            <strong class="typo-strong me-1">CKMB:</strong> {{
                                patientData.medicalReport.investigations.CKMB }}
                        </p>
                        <p class="mb-t pt-0 mb-0 pb-0 small-word" v-if="patientData.medicalReport.investigations.CBC">
                            <strong class="typo-strong me-1">CBC:</strong> {{
                                patientData.medicalReport.investigations.CBC }}
                        </p>
                    </div>
                </div>



            </div>

            <div class="row mt-2 px-2 ">

                <PendingItemsTable />
            </div>
            
        </div>

      


</template>

<script>
import PendingItemsTable from "@/doctor/PendingItemsTable.vue";
export default {
    name: "GenerateMedicalReport",
    props: {
        patientData: {
            type: Object,
            required: true,
        },
    },
    components: {
        PendingItemsTable,
    },
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
    

}

.btn-group:hover {
    background: #4588e0;
    border: none;
    color: #ffff;
    border-radius: 10px;
    

}
.card{
    border: 1px solid #EBEBEB;
}
</style>