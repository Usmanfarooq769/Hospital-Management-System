<template>

    <!-- Header Section -->

    <div class="d-flex justify-content-between align-items-center mb-4 mt-4">
        <p class="mb-0">
            <strong>{{ patientData.name }} </strong>, #12345, <strong>Dr. Sarah Thompson</strong>
        </p>
    </div>
    <div class=" mt-4">
        <div class="d-flex align-item-center gap-2 no-print">

            <button class="btn btn-report "   @click="generateReport">
                <i class="bi bi-file-earmark-text"></i> Generate Report
            </button>

            <button class="btn btn-group ">
                <i class="bi bi-link-45deg"></i> Attach Template
            </button>
            <button class="btn btn-group ">
                <i class="bi bi-envelope "></i> Email Report
            </button>
            <button class="btn btn-group "  @click="confirmPrint">
                <i class="bi bi-printer"></i> Print
            </button>
            <button class="btn btn-group " @click="confirmExtract">
                <i class="bi bi-download "></i> Extract Report
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
                        <li v-for="condition in patientData.medicalReport.medicalHistory.conditions" :key="condition"
                            class="small-word">
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
                        <li v-for="medication in patientData.medicalReport.treatmentPlan.medications" :key="medication"
                            class="small-word">
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

           
        <PendingItemsTable
        :pendingItems="patientData.pending_items"
        :patientName="patientData.name"
        @openModal="openModal"
    />
   
        </div>

    </div>



     <!-- Report Content (To be printed) -->
     <div id="report-content " style="display: none;">
            <div class="h-100 m-auto">
                <div class="row g-2 mt-4">
                    
                    <div class="col-md-4">
                        <div class="card p-3 h-100"  style="border: none;">
                            <p class="fw-bold" style="color:#4588E0;">
                                <i class="bi bi-file-earmark-text me-1"></i> Patient Information
                            </p>
                            <p><strong>Name:</strong> {{ patientData.name }}</p>
                            <p><strong>DOB:</strong> {{ patientData.medicalReport.patientInformation.dob }}</p>
                            <p><strong>MRN:</strong> {{ patientData.mrn }}</p>
                            <p><strong>Primary Physician:</strong> {{ patientData.medicalReport.patientInformation.primaryPhysician }}</p>
                            <p class="fw-bold" style="color:#4588E0;">
                                <i class="bi bi-file-earmark-text me-1"></i> Diagnosis
                            </p>
                            <p><strong>Primary:</strong> {{ patientData.medicalReport.diagnosis.primary }}</p>
                            <p><strong>Secondary:</strong> {{ patientData.medicalReport.diagnosis.Secondary }}</p>
                            <p class="fw-bold" style="color:#4588E0;">
                                <i class="bi bi-file-earmark-text me-1"></i> Treatment Plan
                            </p>
                            <p><strong>Procedure:</strong> {{ patientData.medicalReport.treatmentPlan.procedure }}</p>
                            <p><strong>Medications:</strong></p>
                            <ul>
                                <li v-for="medication in patientData.medicalReport.treatmentPlan.medications" :key="medication">
                                    {{ medication }}
                                </li>
                            </ul>
                    
                        </div>
                    </div>

 
                </div>
            </div>
        </div>

 

       




</template>



<script>
import PendingItemsTable from "@/components/PendingItemsTable.vue";
import Swal from "sweetalert2";
import jsPDF from "jspdf";


export default {
    name: "GenerateMedicalReport",
    components: {
        PendingItemsTable,
    },
    props: {
        patientData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            loading: false, // Loading state for generating report
        };
    },

  
    methods: {

        async generateReport11() {
            // Show loading SweetAlert
            Swal.fire({
                title: "Generating Report...",
                text: "Please wait while the report is being generated.",
                icon: "info",
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                timer: 1000, // 5 seconds
                didOpen: () => {
                    Swal.showLoading(); // Show loading animation
                },
            });
            // Wait for 5 seconds
            setTimeout(() => {
                // Show success SweetAlert after 5 seconds
                Swal.fire({
                    title: "Success!",
                    text: "Report Generated Successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            }, 2000);
        },
        async confirmPrint() {
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to print the report?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Print",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.printReport();
                }
            });
        },
       
        generateReport() {
            Swal.fire({
                title: "Generating Report...",
                text: "Please wait while the report is being generated.",
                icon: "info",
                timer: 2000,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            }).then(() => {
                this.$nextTick(() => {
                    this. reportprint();
                });
            });
        },
       



        reportprint() {
    const content = `
        <html>
        <head>
            <title>Medical Report</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .card { border: 1px solid #EBEBEB; padding: 15px; margin-bottom: 15px; }
                p { font-size: 14px; }
                ul { margin: 5px 0; padding-left: 20px; }
            </style>
        </head>
        <body>
            <h2>Medical Report</h2>
            
           
            <div class="card" style="border:none;">
                
                <p><strong>Name:</strong> ${this.patientData.name}</p>
                <p><strong>DOB:</strong> ${this.patientData.medicalReport.patientInformation.dob}</p>
                <p><strong>DOB:</strong> ${this.patientData.medicalReport.patientInformation.dob}</p>
                <p><strong>MRN:</strong> ${this.patientData.mrn}</p>
                <p><strong>Primary Physician:</strong> ${this.patientData.medicalReport.patientInformation.contact}</p>
                  
                 
            </div>

        </body>
        </html>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
},









        // Print only the report content
        printReport() {
    const content = `
        <html>
        <head>
            <title>Medical Report</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .card { border: 1px solid #EBEBEB; padding: 15px; margin-bottom: 15px; }
                p { font-size: 14px; }
                ul { margin: 5px 0; padding-left: 20px; }
            </style>
        </head>
        <body>
            <h2>Medical Report</h2>
            
            <!-- Patient Information -->
            <div class="card" style="border:none;">
                <h3>Patient Information</h3>
                <p><strong>Name:</strong> ${this.patientData.name}</p>
                <p><strong>DOB:</strong> ${this.patientData.medicalReport.patientInformation.dob}</p>
                <p><strong>MRN:</strong> ${this.patientData.mrn}</p>
                <p><strong>Primary Physician:</strong> ${this.patientData.medicalReport.patientInformation.primaryPhysician}</p>
                   <h3>Diagnosis</h3>
                <p><strong>Primary:</strong> ${this.patientData.medicalReport.diagnosis.primary}</p>
                <p><strong>Secondary:</strong> ${this.patientData.medicalReport.diagnosis.Secondary}</p>
                 <h3>Medical History</h3>
                <ul>
                    ${this.patientData.medicalReport.medicalHistory.conditions.map(condition => `<li>${condition}</li>`).join('')}
                </ul>
                <h3>Treatment Plan</h3>
                <p><strong>Procedure:</strong> ${this.patientData.medicalReport.treatmentPlan.procedure}</p>
                <p><strong>Medications:</strong></p>
                <ul>
                    ${this.patientData.medicalReport.treatmentPlan.medications.map(med => `<li>${med}</li>`).join('')}
                </ul>
                <h3>Vital Signs</h3>
                <p><strong>BP:</strong> ${this.patientData.medicalReport.examinationFindings.bp}</p>
                <p><strong>HR:</strong> ${this.patientData.medicalReport.examinationFindings.hr}</p>
                <p><strong>RR:</strong> ${this.patientData.medicalReport.examinationFindings.rr}</p>
                <p><strong>O2 Sat:</strong> ${this.patientData.medicalReport.examinationFindings.o2}</p>
                <p><strong>Temperature:</strong> ${this.patientData.medicalReport.examinationFindings.temperature}</p>
                 <h3>Investigations</h3>
                <p><strong>ECG:</strong> ${this.patientData.medicalReport.investigations.ECG}</p>
                <p><strong>Troponin:</strong> ${this.patientData.medicalReport.investigations.troponin}</p>
                <p><strong>CKMB:</strong> ${this.patientData.medicalReport.investigations.CKMB}</p>
                ${this.patientData.medicalReport.investigations.CBC ? `<p><strong>CBC:</strong> ${this.patientData.medicalReport.investigations.CBC}</p>` : ''}
            </div>

        </body>
        </html>
    `;

    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
},

        async confirmExtract() {
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to download the report as PDF?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Download",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    this.extractReport();
                }
            });
        },
        // Extract Report as PDF
       

       // Extract Report as PDF
       extractReport() {
    Swal.fire({
        title: "Generating PDF...",
        text: "Preparing the report for download.",
        icon: "info",
        timer: 2000,
        showConfirmButton: false,
    }).then(() => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Medical Report", 10, 10);

        doc.setFontSize(12);
        let y = 20;

        // Patient Information
        doc.text("Patient Information:", 10, y);
        doc.text(`Name: ${this.patientData.name}`, 10, y + 10);
        doc.text(`MRN: ${this.patientData.mrn}`, 10, y + 20);
        doc.text(`Primary Physician: ${this.patientData.medicalReport.patientInformation.primaryPhysician}`, 10, y + 30);
        y += 40;

        // Diagnosis
        doc.text("Diagnosis:", 10, y);
        doc.text(`Primary: ${this.patientData.medicalReport.diagnosis.primary}`, 10, y + 10);
        doc.text(`Secondary: ${this.patientData.medicalReport.diagnosis.Secondary}`, 10, y + 20);
        y += 30;

        // Medical History
        doc.text("Medical History:", 10, y);
        this.patientData.medicalReport.medicalHistory.conditions.forEach((condition) => {
            doc.text(`- ${condition}`, 15, y + 10);
            y += 10;
        });
        y += 10;

        // Treatment Plan
        doc.text("Treatment Plan:", 10, y);
        doc.text(`Procedure: ${this.patientData.medicalReport.treatmentPlan.procedure}`, 10, y + 10);
        doc.text("Medications:", 10, y + 20);
        y += 30;
        this.patientData.medicalReport.treatmentPlan.medications.forEach((medication) => {
            doc.text(`- ${medication}`, 15, y);
            y += 10;
        });
        y += 10;

        // Vital Signs
        doc.text("Vital Signs:", 10, y);
        doc.text(`BP: ${this.patientData.medicalReport.examinationFindings.bp}`, 10, y + 10);
        doc.text(`HR: ${this.patientData.medicalReport.examinationFindings.hr}`, 10, y + 20);
        doc.text(`RR: ${this.patientData.medicalReport.examinationFindings.rr}`, 10, y + 30);
        doc.text(`O2 Sat: ${this.patientData.medicalReport.examinationFindings.o2}`, 10, y + 40);
        doc.text(`Temperature: ${this.patientData.medicalReport.examinationFindings.temperature}`, 10, y + 50);
        y += 60;

        // Investigations
        doc.text("Investigations:", 10, y);
        doc.text(`ECG: ${this.patientData.medicalReport.investigations.ECG}`, 10, y + 10);
        doc.text(`Troponin: ${this.patientData.medicalReport.investigations.troponin}`, 10, y + 20);
        doc.text(`CKMB: ${this.patientData.medicalReport.investigations.CKMB}`, 10, y + 30);
        if (this.patientData.medicalReport.investigations.CBC) {
            doc.text(`CBC: ${this.patientData.medicalReport.investigations.CBC}`, 10, y + 40);
        }

        // Save the PDF
        doc.save("Medical_Report.pdf");
    });
}

    
    

    },
};
</script>

<style scoped>
/* Hide buttons when printing */
@media print {
    .no-print {
        display: none;
    }
}
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

.card {
    border: 1px solid #EBEBEB;
}
</style>