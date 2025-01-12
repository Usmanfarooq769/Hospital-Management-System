<template>

    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4 mt-4">
        <p class="mb-0">
            <strong>James Wilson</strong>, #12345, <strong>Dr. Sarah Thompson</strong>
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


    <div class="mt-4">
        <!-- Generating Summary -->
        <div class="card px-4" v-if="loadingSummary">
            <div class="card-body">
                <p class="text-center text-muted fw-bold mt-4">Generating Summary......</p>
            </div>
        </div>

        <!-- Summary View Mode -->
        <div class="card px-4" v-else-if="summaryViewMode">
            <div class="d-flex justify-content-between align-items-center mt-3">
                <p class="mb-0 sub-heading">Progress Summary</p>
                <div>
                    <button class="btn btn-link text-decoration-none" @click="enableEdit">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-link text-decoration-none" @click="resetSummary">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
            <p class="mt-4 mb-3">{{ summaryText }}</p>
        </div>

        <!-- Edit Summary -->
        <div class="card px-4" v-if="editMode">
            <div class="d-flex justify-content-between align-items-center">
                <h6 class="fw-bold mt-4 mb-3">Edit Summary</h6>
                <button class="btn btn-save btn-sm mb-4 mt-3" @click="saveSummary">Save</button>
            </div>
            <!-- <textarea v-model="mergedText" rows="5" class="form-control mb-3" :readonly="recordingMode"></textarea> -->
            <textarea v-model="mergedText" rows="5" class="form-control mb-3" :readonly="recordingMode"
                ref="editTextarea"></textarea>

            <div class="d-flex mt-3 mb-3 gap-2">
                <button class="btn btn-cancel btn-sm" @click="cancelEdit">Cancel</button>
                <button v-if="recordingMode" class="btn btn-stop btn-sm" @click="stopRecording">
                    Stop Recording
                </button>
            </div>
        </div>

        <!-- Buttons -->
        <div v-if="!summaryGenerated && !editMode && !loadingSummary" class="d-flex mt-3">
            <button class="btn btn-generate-summary me-3 w-15" @click="generateSummary">
                <i class="bi bi-file-earmark-text me-1"></i> Generate Summary
            </button>
            <button class="btn btn-record-summary w-15" @click="recordSummary">
                <i class="bi bi-mic me-1"></i> Record a Summary
            </button>
        </div>
    </div>


    <div class="row mt-4 px-2">

        <div class="card p-4  mt-4">
            <p class="mb-3 fs-4 fw-bold">Summary History</p>
            <div class="list-group px-2">
                <div class="row mt-2">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><strong>Summary #101</strong> <span class="text-muted">(Cardiac
                                    Evolution)</span></p>

                        </div>
                        <div class="div">
                            <small class="text-muted">2024-12-22 14:30:00 | John Doe</small>
                        </div>
                        <i class="bi bi-chevron-right text-muted"></i>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><strong>Summary #102</strong> <span class="text-muted">(Follow up
                                    Visit)</span>
                            </p>

                        </div>
                        <div class="div">
                            <small class="text-muted">2024-12-22 14:30:00 | Dr. Sarah Smith</small>
                        </div>
                        <i class="bi bi-chevron-right text-muted"></i>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0"><strong>Summary #103</strong> <span class="text-muted">(Diabetes's
                                    management)</span></p>

                        </div>
                        <div class="div">
                            <small class="text-muted">2024-12-22 14:30:00 | John Doe</small>
                        </div>
                        <i class="bi bi-chevron-right text-muted"></i>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="row mt-2 px-2">

        <PendingItemsTable />
    </div>


</template>

<script>
import Swal from "sweetalert2";
import PendingItemsTable from "@/doctor/PendingItemsTable.vue";

export default {
    name: "WorkingProgressSummary",
    components: {
        PendingItemsTable,
    },
    props: {
        patientData: {
            type: Object,
            default: () => ({}),
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
            editMode: false, // Controls the edit input field
            summaryViewMode: false, // Controls the modal where edit/delete buttons are shown
            recordingMode: false,
            summaryGenerated: false, // Indicates whether the summary has been generated
            loadingSummary: false, // Controls the loading modal
            recognition: null,
            isRecording: false,
            interimText: "", // Holds live speech-to-text results
        };
    },
    methods: {
        generateSummary() {
            this.resetSummary(); // Reset all states
            this.loadingSummary = true;
            setTimeout(() => {
                this.loadingSummary = false; // Stop the loading modal
                this.summaryGenerated = true;
                this.summaryViewMode = true; // Open the modal with edit/delete buttons
            }, 2000); // Simulate 2 seconds loading
        },

        enableEdit() {
    this.summaryViewMode = false; // Close the edit/delete modal
    this.editMode = true; // Open the edit input field

    // Use ref to focus the input field when entering edit mode
    this.$nextTick(() => {
      const inputField = this.$refs.editTextarea;
      if (inputField) inputField.focus();
    });
  },
        recordSummary() {
            this.resetSummary(); // Reset all states
            this.loadingSummary = true;
            setTimeout(() => {
                this.loadingSummary = false;
                this.summaryGenerated = true;
                this.editMode = true; // Directly enable edit mode for recording
                this.enableVoiceInput();
            }, 2000); // Simulate 2 seconds loading
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
                this.summaryViewMode = false;
            });
        },

        cancelEdit() {
            this.editMode = false;
            if (this.recordingMode) {
                this.recordingMode = false;
                this.summaryGenerated = false;
                this.interimText = "";
            }
            this.stopRecording();
            this.summaryViewMode = true; // Go back to edit/delete modal
        },

        resetSummary() {
            // Reset all states and return to initial view
            this.editMode = false;
            this.recordingMode = false;
            this.summaryGenerated = false;
            this.loadingSummary = false;
            this.summaryViewMode = false;
            this.interimText = "";
            this.$emit("update-summary", ""); // Clear the summary
        },
    },
};
</script>



<style scoped>
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
    background: #9e0909;
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
    border: 1px solid #EBEBEB;
}
</style>