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
                            <!-- Heart Rate and Graph -->
                            <div class=" card p-2" style="background: #F8F8F8;">

                                <div class="d-flex align-item-center justify-content-center">

                                    <HeartRateChart :labels="chartLabels" :data="chartData" />
                                </div>
                            </div>
                        
                        </div>
                        <div class="col-md-6 col-xl-12">
                            <!-- Health Metrics -->
                            <div class=" col-xl-p-3 mt-2 px-2">
                                <div class="row">
                                    <div
                                        class="d-flex justify-content-between align-items-center health-metrics-card p-2">
                                        <div class="">
                                            <p class="mb-0 fw-medium">Blood Count</p>
                                        </div>
                                        <div>
                                            <p class="mb-0 pb-0 text-end fw-semibold" style="color:#FF2626;">80-90</p>
                                            <small class="mt-0 pt-0">cells/mcl (125-285)</small>
                                        </div>

                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div
                                        class="d-flex justify-content-between align-items-center health-metrics-card p-2">
                                        <div class="">
                                            <p class="mb-0  fw-medium">Cholesterol</p>
                                        </div>
                                        <div>
                                            <p class="mb-0 pb-0 text-end fw-semibold" style="color:#FF2626;">225 ↑</p>
                                            <small class="mt-0 pt-0">mg/dl (125-200)</small>
                                        </div>

                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div
                                        class="d-flex justify-content-between align-items-center health-metrics-card p-2">
                                        <div class="">
                                            <p class="mb-0 fw-medium">Blood Glucose level</p>
                                        </div>
                                        <div>
                                            <p class="mb-0 pb-0 text-end fw-semibold">85</p>
                                            <small class="mt-0 pt-0">mg/dl (70-100)</small>
                                        </div>

                                    </div>
                                </div>

                                <div class="row mt-2">
                                    <div
                                        class="d-flex justify-content-between align-items-center health-metrics-card p-2">
                                        <div class="">
                                            <p class="mb-0 fw-medium">Saturation</p>
                                        </div>
                                        <div>
                                            <p class="mb-0 pb-0 text-end fw-semibold">82%</p>
                                            <small class="mt-0 pt-0">(95-100)</small>
                                        </div>

                                    </div>
                                </div>





                            </div>

                        </div>
                    </div>

                </div>


                <div class="row">

                    <!-- Working Progress Summary -->
                    <div class=" col-md-6 col-xl-12">
                        <div class="mt-2 card p-3 h-100  shadow-sm" style="border: 1px solid #EBEBEB;">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <div class="mt-2"><i class="bi bi-person-circle text-success"></i> Active Patients
                                </div>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-2 mt-2">
                                <div><i class="bi bi-file-earmark-plus text-warning"></i> Attach
                                    Template</div>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-2 mt-2">
                                <div><i class="bi bi-people text-primary"></i> Similar Patients</div>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <div><i class="bi bi-graph-up text-danger"></i> Analytical Report</div>
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>




</template>



<script>
import HeartRateChart from "@/doctor/LineChart.vue";

export default {
    components: {
        HeartRateChart,
    },
    data() {
        return {
            chartLabels: [
                "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
            ], // X-axis labels
            chartData: [
                75, 75, 70, 80, 70, 80, 70, 80, 70, 70,
            ], // Y-axis data
        };
    },


};
</script>


<style scoped>
.health-metrics-card {
    background: #F8F8F8;
    border-radius: 8px;
}

.btn {
    border: 1px solid #00A0DA;
    color: #00A0DA;
}

.btn:hover {
    background: #00A0DA;
    border: 1px solid #00A0DA;
    color: #ffffff;
}

.card {
    border: none;
}
</style>