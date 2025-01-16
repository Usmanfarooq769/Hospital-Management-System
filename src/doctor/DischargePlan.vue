
<template>
   


   <div class="d-flex justify-content-between align-items-center mb-4 mt-4">
        <p class="mb-0">
            <strong>James Wilson</strong>, #12345, <strong>Dr. Sarah Thompson</strong>
        </p>
    </div>
            <div class="mb-mt-4">
                <div class="d-flex align-item-center ">

                    <button class="btn btn-report me-1 ">
                        <i class="bi bi-file-earmark-text me-1"></i>Generate Discharge Plan
                    </button>
                    <button class="btn btn-group me-1">
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

                <PendingItemsTable />
            </div>



</template>

<script>
import PendingItemsTable from "@/doctor/PendingItemsTable.vue";
export default {
    name: "DischargePlan",
    props: {
        dischargePlan: {
            type: Object,
            required: true,
        },
    },
    components: {
        PendingItemsTable,
    }
};
</script>

<style scoped>

.card{
    border: 1px solid #EBEBEB;
}

</style>
  