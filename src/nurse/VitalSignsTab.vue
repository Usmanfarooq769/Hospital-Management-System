<template>


    <!-- Header Section -->

    <div>
        <strong>James Wilson</strong>, #12345, <strong>Dr. Sarah Thompson</strong>
    </div>
    <div class=" mt-4">
        <div class="d-flex align-item-center">

            <button class="btn btn-report me-2">
                <i class="bi bi-plus"></i> Record New Vital Signs
            </button>

            <button class="btn btn-group me-2">
                <i class="bi bi-mic"></i> Record from Device
            </button>
            <button class="btn btn-group me-2">
                <i class="bi bi-file-text"></i> Generate Vital Signs Summary
            </button>

        </div>

    </div>


    <div class="row mt-4 g-3">


        <div class="col-12 col-md-4" v-for="vital in vitals" :key="vital.id">
            <VitalCard :title="vital.title" :value="vital.value" :time="vital.time" :status="vital.status" />
        </div>


    </div>

    <div class="row mt-2 px-2 ">
        <div class="card ">
            <div class="card-body">
                <RecentSummaries />
            </div>
        </div>
        <div class="card mt-2">
            <div class="card-body">
                <VitalSignsHistory />
            </div>
        </div>
    </div>



</template>

<script>
import RecentSummaries from "@/nurse/RecentSummaries.vue";
import VitalSignsHistory from "@/nurse/VitalSignsHistory.vue";
import VitalCard from "@/nurse/VitalCard.vue";
export default {
    name: "VitalSignsTab",
    props: {
        patientData: {
            type: Object,
            required: true,
        },
    },
    components: {
        RecentSummaries,
        VitalSignsHistory,
        VitalCard,
    },
    data() {
        return {
            vitals: [
                { id: 1, title: "Blood Count", value: "150/90 mmHg", time: "10:00 am", status: "Stable" },
                { id: 2, title: "Heart Rate", value: "98 bpm", time: "10:00 am", status: "Elevated" },
                { id: 3, title: "Temperature", value: "37.2C", time: "10:00 am", status: "Stable" },
                { id: 4, title: "SpO2", value: "98%", time: "10:00 am", status: "Elevated" },
                { id: 5, title: "Respiratory Rate", value: "98 bpm", time: "10:00 am", status: "Stable" },
                { id: 6, title: "Blood Glucose", value: "98 bpm", time: "10:00 am", status: "Decreased" },
            ],
        };
    },
};
</script>
<style scoped>
.card {
    border: none;
}
</style>
