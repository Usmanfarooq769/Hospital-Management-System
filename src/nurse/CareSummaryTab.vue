<template>



    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center ">
        <p>
            <strong>{{ patientData.name }}</strong>, #{{ patientData.id }} <strong>Dr. Sarah Thompson</strong>
        </p>
    </div>

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

    <div class="row mt-4"  >
        <div class="card">
            <div class="card-body">
                <div class="" v-for="(summary) in patientData.summary" :key="summary.id">
                <p class=" fs-4 fw-bold">Last updated:<span>{{ summary.date }} </span> </p>
                <p class="fs-6"> <span>{{ summary.description }}</span></p>
            </div>

                <div class="d-flex align-item-ceneter gap-4">
                    <div class="div">
                        <button class="btn btn-next-vital">Next Vital Signs Due 10:00 AM</button>
                    </div>
                    <div class="div">
                        <button class="btn btn-next-medication">Next Medication Due 10:00 AM</button>
                    </div>


                </div>
            </div>
        </div>
    </div>

    <div class="row mt-2 ">

        <NursingTasksCard  :patient-data="patientData"/>


    </div>
</template>

<script>
import Swal from "sweetalert2";

import NursingTasksCard from "@/nurse/NursingTasksCard.vue";

export default {
    name: "CareSummaryTab",
    components: {
        NursingTasksCard,
    },
    props: {
        patientData: {
            type: Object,
            default: () => ({}),
            required: true
        },
    },
    computed: {
        summaryText: {
            get() {
                return this.patientData.workingSummary || "No working summary available.";
            },
            set(value) {
                this.$emit("update-summary", value);
            },
        },

        mergedText() {
            return `${this.summaryText || ""} ${this.interimText}`.trim();
        },
    },
    data() {
        return {
            editMode: false,
            recordingMode: false,
            summaryGenerated: false,
            loadingSummary: false,
            recognition: null,
            isRecording: false,
            interimText: "", // Holds live speech-to-text results
        };
    },
    methods: {
        generateSummary() {
            this.recordingMode = false;
            this.summaryGenerated = false;
            this.loadingSummary = true;
            setTimeout(() => {
                this.loadingSummary = false;
                this.summaryGenerated = true;
            }, 1000);
        },

        recordSummary() {
            this.editMode = false;
            this.loadingSummary = true;
            setTimeout(() => {
                this.loadingSummary = false;
                this.summaryGenerated = true;
                this.enableVoiceInput();
            }, 1000);
        },

        enableEdit() {
            this.recordingMode = false;
            this.editMode = true;
        },

        enableVoiceInput() {
            this.editMode = true;
            this.recordingMode = true;
            if (!this.recognition) {
                this.initializeSpeechRecognition();
            }
            this.recognition.start();
            this.isRecording = true;
        },

        initializeSpeechRecognition() {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (!SpeechRecognition) {
                Swal.fire({
                    title: "Error",
                    text: "Speech recognition is not supported in this browser.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
                return;
            }
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;

            this.recognition.onresult = (event) => {
                let finalTranscript = "";
                let interimTranscript = "";

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript + " ";
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }

                // Append final transcript to summaryText
                this.summaryText += finalTranscript.trim();

                // Update interimText for live display
                this.interimText = interimTranscript.trim();
            };

            this.recognition.onerror = (event) => {
                console.error("Speech recognition error:", event.error);
                this.stopRecording();
            };
        },

        stopRecording() {
            if (this.recognition && this.isRecording) {
                this.recognition.stop();
                this.isRecording = false;
                this.recordingMode = false;

                this.interimText = "";
            }
        },

        saveSummary() {
            this.editMode = false;
            this.recordingMode = false;
            this.stopRecording();
            Swal.fire({
                title: "Success!",
                text: "Summary has been saved to patient’s EHR.",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                this.summaryGenerated = false;
            });
        },

        cancelEdit() {
            this.editMode = false;
            this.recordingMode = false;
            this.stopRecording();
        },
    },
};
</script>


<style scoped>
.btn-next-vital {
    background: #FF7F7F;
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    max-width: 182px;
}

.btn-next-medication {
    background: #F3E8FF;
    color: #BA81E2;
    border: none;
    border-radius: 10px;
    max-width: 182px;
}

.btn-next-vital:hover {
    background: #FF7F7F;
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    max-width: 182px;
}

.btn-next-medication:hover {
    background: #F3E8FF;
    color: #BA81E2;
    border: none;
    border-radius: 10px;
    max-width: 182px;
}
.activ-badge {
    background: #73f85142;
    color: #297711 !important;
    border-radius: 12px;
}

.btn-generate-summary {
    background: #4588e0;
    border-radius: 10px;
    color: white;
    border: none;
}

.btn-generate-summary:hover {
    background: #4570c0;
    color: white;
}

.btn-record-summary {
    background: #e6eaef;
    color: #263238;
    border: none;
    border-radius: 10px;
}

.btn-record-summary:hover {
    background: #4588e0;
    color: white;
}

textarea.form-control {
    resize: none;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.alert {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 8px;
    padding: 10px;
}

.btn-save {
    background: #4588e0;
    color: #ffff;
    border: none;
    border-radius: 6px;

}

.btn-save:hover {
    background: #4570c0;
    color: #ffff;
    border: none;
    border-radius: 6px;

}

.btn-cancel {
    height: 25px;
    width: 68px;
    border: none;
    border-radius: 6px;
    background: #FF2626;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
}

.btn-cancel:hover {
    height: 25px;
    width: 68px;
    border: none;
    border-radius: 6px;
    background: #FF2626;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
}

.list-group-item {
    background-color: #F8F8F8;
    border-radius: 8px !important;
}

.btn-stop {
    background: #e94e77;
    color: #fff;
    border: none;

    font-size: 10px;
}

.card {
    border: none;
}
</style>