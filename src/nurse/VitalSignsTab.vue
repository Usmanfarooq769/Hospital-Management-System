<template>


    <!-- Header Section -->

    <div class="mt-2 px-1 ">
        <p>
            <strong>James Wilson</strong>, #12345, <strong>Dr. Sarah Thompson</strong>
        </p>
    </div>
    <div class=" mt-4 px-1">
        <div class="d-flex align-item-center">

            <button class="btn btn-report me-2" data-bs-toggle="modal" data-bs-target="#virtualSignsModal">
                <i class="bi bi-plus"></i> Record New Vital Signs
            </button>



<!-- Modal -->
<div class="modal fade custom-modal" id="virtualSignsModal" tabindex="-1" aria-labelledby="virtualSignsModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-4 fw-bold" id="virtualSignsModalLabel">24-Hours Virtual Signs Chart</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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

    <P class="fs-5 mt-3">Date: 27/4/2012</P>

    <div class="table-responsive custom-scrollbar mt-4 " style="max-height: 200px; padding-right:10px">
        <table class="table  ">
            <thead class="table-light">
                <tr>
                 <th>Time</th>
              <th>Temperature</th>
              <th>Pulse (bpm)</th>
              <th>BP (mmHg)</th>
              <th>RR (Min)</th>
              <th>SpO2 (%)</th>
              <th>Glucose (mg/dl)</th>
              <th>Initial</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="record in history" :key="record.time">
                    <td>{{ record.time }}</td>
                    <td>{{ record.temperature }}</td>
                    <td>{{ record.hr }}</td>
                    <td>{{ record.bp }}</td>
                    <td>{{ record. rr }}</td>
                    <td>{{ record.spo2 }}</td>
                    <td>{{ record. glucose }}</td>
                    <td>{{ record.initial }}</td>
                </tr>
            </tbody>

        </table>

    </div>
      
        <div class="alert-thresholds">
          <p class="fw-bold mt-4">Normal Ranges & Alert Thresholds:</p>
          <ul class="row d-flex align-item-center">
            <div class="col-md-6"><li><strong>Temperature:</strong> 36.5-37.5</li></div>
            <div class="col-md-6"><li><strong>BP:</strong> &lt;140/90 mmHg</li></div>
            <div class="row d-flex align-item-center">
                <div class="col-md-6"><li><strong>Pulse:</strong> 60-100 bpm</li></div>
                <div class="col-md-6"> <li><strong>Respiratory Rate:</strong> 12-20/min</li></div>
            </div>
            <div class="row d-flex align-item-center">
                <div class="col-md-6"><li><strong>SpO2:</strong> &gt;94%</li></div>
                <div class="col-md-6"><li><strong>Glucose:</strong> 70-180 mg/dl</li></div>
            </div>
          </ul>
          <p class="alert-text text-danger mt-2"><strong>Alert:</strong> Provider for any values outside these changes</p>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>








            <button class="btn btn-group me-2">
                <i class="bi bi-mic"></i> Record from Device
            </button>
            <button class="btn btn-group me-2">
                <i class="bi bi-file-text"></i> Generate Vital Signs Summary
            </button>

        </div>

    </div>


    <div class="row mt-2 g-3 px-1">


        <div class="col-12 col-md-4" v-for="vital in vitals" :key="vital.id">
            <VitalCard :title="vital.title" :value="vital.value" :time="vital.time" :status="vital.status" />
        </div>


    </div>

    <div class="row mt-2  px-3">
        <div class="card p-3">
            <div class="card-body">
                <RecentSummaries />
            </div>
        </div>
    </div>
    <div class="row mt-2  px-3">
        <div class="card p-3 ">
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
            history: [
            { time: "8:00 AM", temperature: "36.8", hr: "70", bp: "120/80", rr: "18", spo2: "98", glucose: "-", initial: "-" },
    { time: "9:00 AM", temperature: "37.0", hr: "72", bp: "125/85", rr: "19", spo2: "97", glucose: "70-180", initial: "RN" },
    { time: "10:00 AM", temperature: "36.7", hr: "68", bp: "118/78", rr: "17", spo2: "99", glucose: "90-120", initial: "RN" },
    { time: "11:00 AM", temperature: "37.1", hr: "74", bp: "130/88", rr: "20", spo2: "96", glucose: "40-110", initial: "RN" },
    { time: "12:00 PM", temperature: "36.9", hr: "69", bp: "122/80", rr: "18", spo2: "98", glucose: "110-150", initial: "RN" },
    { time: "1:00 PM", temperature: "36.6", hr: "67", bp: "115/75", rr: "16", spo2: "99", glucose: "30-140", initial: "RN" },
    { time: "2:00 PM", temperature: "37.2", hr: "73", bp: "128/82", rr: "19", spo2: "96", glucose: "140-210", initial: "RN" },
    { time: "3:00 PM", temperature: "37.3", hr: "78", bp: "135/90", rr: "21", spo2: "95", glucose: "50-140", initial: "RN" },
    { time: "4:00 PM", temperature: "36.5", hr: "66", bp: "118/76", rr: "16", spo2: "98", glucose: "40-110", initial: "RN" },
    { time: "5:00 PM", temperature: "37.0", hr: "71", bp: "125/84", rr: "18", spo2: "97", glucose: "40-110", initial: "RN" },
    { time: "6:00 PM", temperature: "37.4", hr: "75", bp: "132/86", rr: "20", spo2: "95", glucose: "40-110", initial: "RN" },
    { time: "7:00 PM", temperature: "36.8", hr: "68", bp: "120/78", rr: "17", spo2: "99", glucose: "50-140", initial: "RN" },
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
