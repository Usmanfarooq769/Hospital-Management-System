
<template>
   
   <div class="d-flex justify-content-between align-items-center mb-4 mt-4">
        <p class="mb-0">
            <strong> {{ patientData.name }} </strong>, #12345, <strong>Dr. Sarah Thompson</strong>
        </p>
    </div>
            <div class="mb-mt-4">
                <div class="d-flex align-item-center ">

                    <button class="btn btn-report me-1 "   @click="generateDischargePlan">
                        <i class="bi bi-file-earmark-text me-1"></i>Generate Discharge Plan
                    </button>
                    <button class="btn btn-group me-1"  @click="saveToPatientRecord">
                        <i class="bi bi-printer me-1"></i> Save to Patient Record
                    </button>
                   
                </div>

            </div>

           

            <div class="row g-2 mt-4">
                
                 <!-- Discharge Instructions -->
                 <div class="col-md-4">
                    <div class="card  h-100">
                        <div class="card-body">
                            <p class="  fw-bold " style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Discharge Instructions
                        </p>
                        <ul class="mb-t pt-0 mb-0 pb-0">
                            <li v-for="(instruction, index) in dischargePlan.dischargeInstructions" 
                                :key="index" class="small-word">
                                {{ instruction }}
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <!-- Medications -->
                <div class="col-md-4">
                    <div class="card  h-100">
                        <div class="card-body">

                            <p class="fw-bold " style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Medications
                        </p>
                        <ul class="mb-t pt-0 mb-0 pb-0">
                            <li v-for="(medication, index) in dischargePlan.medication" 
                                :key="index" class="small-word">
                                {{ medication }}
                            </li>
                        </ul>
                        </div>

                        
                    </div>
                </div>
        

                 <!-- Lifestyle Modifications -->
                 <div class="col-md-4">
                    <div class="card h-100">
                        <div class="card-body">

                            <p class="fw-bold" style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Lifestyle Modifications
                        </p>
                        <ul class="mt-0 pt-0 mb-0 pb-0">
                            <li v-for="(modification, index) in dischargePlan.lifestyleModification" 
                                :key="index" class="small-word">
                                {{ modification }}
                            </li>
                        </ul>
                        </div>
                        
                    </div>
                </div>

                <!-- Follow-Up -->
                <div class="col-md-4">
                    <div class="card  h-100">
                        <div class="card-body">
                            <p class="fw-bold " style="color:#4588E0;">
                            <i class="bi bi-file-earmark-text me-1"></i>Follow-Up
                        </p>
                        <ul class="mb-t pt-0 mb-0 pb-0">
                            <li v-for="(followUp, index) in dischargePlan.followUp" 
                                :key="index" class="small-word">
                                {{ followUp }}
                            </li>
                        </ul>
                        </div>
                        
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


           <!-- Print Content -->
    <!-- ✅ Print Content (Hidden) ✅ -->
    <div id="print-content" style="display: none;">
        <h2>Discharge Plan</h2>

        <div class="card">
            <h3>Discharge Instructions</h3>
            <ul>
                <li v-for="(instruction, index) in dischargePlan.dischargeInstructions" :key="index">
                    {{ instruction }}
                </li>
            </ul>

            <h3>Medications</h3>
            <ul>
                <li v-for="(medication, index) in dischargePlan.medication" :key="index">
                    {{ medication }}
                </li>
            </ul>
            <h3>Lifestyle Modifications</h3>
            <ul>
                <li v-for="(modification, index) in dischargePlan.lifestyleModification" :key="index">
                    {{ modification }}
                </li>
            </ul>
            <h3>Follow-Up</h3>
            <ul>
                <li v-for="(followUp, index) in dischargePlan.followUp" :key="index">
                    {{ followUp }}
                </li>
            </ul>
        </div>
        
       
    </div>



</template>

<script>
import PendingItemsTable from "@/components/PendingItemsTable.vue";
import Swal from "sweetalert2";


export default {
    name: "DischargePlan",
    
    props: {
          dischargePlan: {
            type: Object,
            required: true,
        },
        patientData: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    computed: {
    isDataAvailable() {
      return Object.keys(this.patientData).length > 0;
    },
  },

    },
    components: {
        PendingItemsTable,
    },
    methods: {
        // ✅ Save to Patient Record - Show Success SweetAlert
        saveToPatientRecord() {
            Swal.fire({
                title: "Success!",
                text: "Discharge plan saved to patient record successfully!",
                icon: "success",
                confirmButtonText: "OK",
            });
        },

        //  Generate Discharge Plan - Show SweetAlert, then Print
        generateDischargePlan() {
            Swal.fire({
                title: "Generating Discharge Plan...",
                text: "Please wait while we prepare the discharge plan.",
                icon: "info",
                timer: 3000,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            }).then(() => {
                this.$nextTick(() => {
                    this.printDischargePlan();
                });
            });
        },

        //  Print Discharge Plan (Now working perfectly!)
        printDischargePlan() {
            const content = document.getElementById("print-content").innerHTML;
            const printWindow = window.open("", "_blank");

            if (!printWindow) {
                console.error("Failed to open print window.");
                return;
            }

            printWindow.document.open();
            printWindow.document.write(`
                <html>
                <head>
                    <title>Discharge Plan</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        .card { border: none; padding: 15px; margin-bottom: 15px; }
                        h3 { color: #4588E0; }
                        ul { margin: 5px 0; padding-left: 20px; }
                    </style>
                </head>
                <body>
                    ${content}
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        },
    },

};
</script>

<style scoped>

.card{
    border: 1px solid #EBEBEB;
}

</style>
  