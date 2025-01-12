<template>
    <div class="card" style="background: #F8F8F8;">
        <div class="card-body">


            <div class="mt-2">
                <p class="fw-bold"> <strong> Wilson</strong>, <strong> #12345</strong>,<strong>Dr. Sarah
                        Thompson</strong></p>
            </div>
            <div class="mt-4">


                <div class="row g-3">
                    <!-- Card 1 -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card card-1  h-100">
                            <div class="card-body text-center">
                                <i class="bi bi-activity bold-icon"></i>
                                <p class="fw-bold">Treatment Dashboard</p>
                            </div>
                        </div>
                    </div>
                    <!-- Card 2 -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card card-2 h-100">
                            <div class="card-body text-center">
                                <i class="bi bi-droplet bold-icon"></i>
                                <p class="fw-bold">Electrolyte Management</p>
                            </div>
                        </div>
                    </div>
                    <!-- Card 3 -->
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card card-3  h-100">
                            <div class="card-body text-center">
                                <i class="bi bi-capsule bold-icon"></i>
                                <p class="fw-bold">Medication Schedule</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

           

            <div class="row g-2 mt-2">

               <TreatMentComponent />

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
.bold-icon{
    font-weight: bold !important;
}
</style>