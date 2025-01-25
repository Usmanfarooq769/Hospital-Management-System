<template>
    <h6 class="fs-4 fw-bold mb-3">Vital Signs History</h6>
    <div class="table-responsive custom-scrollbar " style="max-height: 200px; padding-right:10px">
        <table class="table  ">
            <thead class="table-light">
                <tr>
                    <th>Time</th>
                    <th>BP</th>
                    <th>HR</th>
                    <th>Temperature</th>
                    <th>SpO2</th>
                    <th>RR</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="record in history" :key="record.time">
                    <td>{{ record.time }}</td>
                    <td>{{ record.bp }}</td>
                    <td>{{ record.hr }}</td>
                    <td>{{ record.temperature }}</td>
                    <td>{{ record.spo2 }}</td>
                    <td>{{ record.rr }}</td>
                </tr>
            </tbody>

        </table>

    </div>
</template>

<script>
export default {
    name: "VitalSignsHistory",
    data() {
        return {
            history: [
                { time: "8:00 AM", bp: "120/80", hr: "70", temperature: "36.8", spo2: "98", rr: "18" },
                { time: "9:00 AM", bp: "125/85", hr: "72", temperature: "37.0", spo2: "97", rr: "19" },
                { time: "10:00 AM", bp: "118/78", hr: "68", temperature: "36.7", spo2: "99", rr: "17" },
                { time: "11:00 AM", bp: "130/88", hr: "74", temperature: "37.1", spo2: "96", rr: "20" },

                { time: "12:00 PM", bp: "122/80", hr: "69", temperature: "36.9", spo2: "98", rr: "18" },
                { time: "1:00 PM", bp: "115/75", hr: "67", temperature: "36.6", spo2: "99", rr: "16" },
                { time: "2:00 PM", bp: "128/82", hr: "73", temperature: "37.2", spo2: "96", rr: "19" },
                { time: "3:00 PM", bp: "135/90", hr: "78", temperature: "37.3", spo2: "95", rr: "21" },

                { time: "4:00 PM", bp: "118/76", hr: "66", temperature: "36.5", spo2: "98", rr: "16" },
                { time: "5:00 PM", bp: "125/84", hr: "71", temperature: "37.0", spo2: "97", rr: "18" },
                { time: "6:00 PM", bp: "132/86", hr: "75", temperature: "37.4", spo2: "95", rr: "20" },
                { time: "7:00 PM", bp: "120/78", hr: "68", temperature: "36.8", spo2: "99", rr: "17" },
            ],
        };
    },
};
</script>

<style scoped>
.table {
    margin-bottom: 0;
    font-size: 0.9rem;
}

th,
td {
    text-align: center;
    vertical-align: middle;
}

.card {
    border: none;
}
</style>