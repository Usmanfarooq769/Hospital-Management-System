<template>

    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4 mt-4">
        <p class="mb-0">
            <strong>{{ patientData.name }} </strong>, #12345, <strong>Dr. Sarah Thompson</strong>
        </p>
    </div>

    <!-- Patient Info -->
    <div v-if="patientData">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <img :src="patientData.image" alt="Profile" class="rounded-circle" style="width: 50px; height: 50px;" />
                <div class="px-3">
                    <p class="mb-0 fs-6 fw-semibold">{{ patientData.name }}</p>
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




    <!-- Buttons -->
    <div class="mt-4">
        <div v-if="!generatingSummary && !recordingMode" class="d-flex mt-3">
            <button class="btn btn-generate-summary me-3 w-15" @click="startGenerateSummary">
                <i class="bi bi-file-earmark-text me-1"></i> Generate Summary
            </button>
            <button class="btn btn-record-summary w-15" @click="toggleRecording">
                <i class="bi bi-mic me-1"></i> {{ isRecording ? 'Stop Recording' : 'Start Recording' }}
            </button>
        </div>
    </div>

    <!-- Summary Input Field (After Generating Summary) -->
    <div v-if="generatingSummary" class="mt-3">
        <textarea v-model="workingSummary" rows="5" class="form-control mb-3"></textarea>
        <div class="d-flex gap-2">
            <button class="btn btn-primary btn-sm" @click="saveSummary">Save</button>
            <button class="btn  btn-secondary btn-sm" @click="cancelSummary">Cancel</button>
        </div>
    </div>

    <!-- Recording Input Field (After Clicking "Record a Summary") -->
    <div v-if="recordingMode" class="mt-3">
        <textarea v-model="summaryText" rows="5" class="form-control mb-3"></textarea>
        <div class="d-flex gap-2">
            <button class="btn btn-danger btn-sm" @click="toggleRecording">
                {{ isRecording ? 'Stop Recording' : 'Start Recording' }}
            </button>
            <button class="btn btn-primary btn-sm" @click="saveSummary">Save</button>
            <button class="btn btn-secondary btn-sm" @click="cancelSummary">Cancel</button>
        </div>
    </div>


    <div class="row mt-4 px-2">

        <div class="card p-4 mt-4">
            <p class="mb-3 fs-4 fw-bold">Summary History</p>
            <div class="list-group px-2">
                <div class="row mt-2" v-for="(summary, index) in patientData.summary" :key="summary.id">
                    <div class="list-group-item d-flex justify-content-between align-items-center"
                        @click="toggleDetails(index)" style="cursor: pointer; background: #EEF6FF; border: none;">
                        <div>
                            <p class="mb-0">
                                <strong>Summary #{{ summary.id }}</strong>
                                <span class="text-muted">({{ summary.title }})</span>
                            </p>
                        </div>
                        <div>
                            <small class="text-muted">{{ summary.date }} | {{ summary.doctor }}</small>
                        </div>
                        <i class="bi" :class="expandedIndex === index ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
                    </div>

                    <!-- Dropdown details (toggle visibility) -->
                    <div v-if="expandedIndex === index" class="p-3   rounded" style="background: #EEF6FF;">
                        <p class="mb-0"><strong>Description:</strong> {{ summary.description }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Table for Pending Items -->
    <div class="row mt-2 px-2">
        <PendingItemsTable :pendingItems="patientData.pending_items" :patientName="patientData.name"
            @openModal="openModal" />
    </div>

    <!-- Bootstrap Modal -->
    <div class="modal fade" id="pendingItemModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="pendingItemModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-4 fw-bold" id="pendingItemModalLabel">Pending Item Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="fs-5"><strong>Type:</strong> {{ selectedItem?.type }}</p>
                    <p class="fs-5"><strong>Description:</strong> {{ selectedItem?.description }}</p>
                    <p class="fs-5"><strong>Requested by:</strong> {{ selectedItem?.requested_by }}</p>
                    <p class="fs-5">
                        <strong>Status:</strong>
                        <span :class="statusClass(selectedItem?.status)">{{ selectedItem?.status }}</span>
                    </p>
                    <p class="fs-5"><strong>Due Date:</strong> {{ selectedItem?.due_date }}</p>

                    <!-- Update Status Dropdown -->
                    <div class="form-group">
                        <label for="status" class="mb-2 fw-bold mt-3">Update Status:</label>
                        <select v-model="updatedStatus" class="form-control" id="status">
                            <option value="">Select status</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="Urgent">Urgent</option>
                        </select>
                        <p v-if="errorMessage" class="error-message fw-semibold">{{ errorMessage }}</p>
                    </div>

                    <!-- Clinical Notes -->
                    <div class="form-group">
                        <label for="clinicalNotes" class="mb-2 fw-bold mt-3">Clinical Notes:</label>
                        <textarea v-model="clinicalNotes" class="form-control" id="clinicalNotes"
                            placeholder="Add your clinical notes..."></textarea>
                    </div>

                    <!-- Follow-up Instructions -->
                    <div class="form-group">
                        <label for="followUp" class="mb-2 fw-bold mt-3">Follow-up Instructions:</label>
                        <textarea v-model="followUpInstructions" class="form-control" id="followUp"
                            placeholder="Add follow-up instructions if needed..."></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-sm" @click="submitUpdate">Submit</button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import PendingItemsTable from "@/components/PendingItemsTable.vue";
import Swal from "sweetalert2";

import { Modal } from "bootstrap";

export default {
    components: {
        PendingItemsTable,
    },
    props: {
        patientData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            selectedItem: null,
            updatedStatus: "",
            clinicalNotes: "",
            followUpInstructions: "",
            workingSummary: this.patientData.workingSummary,
            errorMessage: "",
            expandedIndex: null, // Stores the index of the currently expanded summary
            summaryText: this.patientData.workingSummary, // Stores the summary text
            generatingSummary: false, // Controls "Generate Summary"
            recordingMode: false, // Controls "Recording Summary"
            recognition: null, // Speech Recognition Instance
            isRecording: false, // Checks if recognition is running
           
        };

       
    },

    watch: {
    // Watch for changes in patientData and update the local workingSummary if necessary
    'patientData.workingSummary'(newValue) {
      this.workingSummary = newValue;
    },
},
    methods: {

        startGenerateSummary() {
            this.generatingSummary = true;
            this.recordingMode = false; // Hide recording button
            Swal.fire({
                title: "Generating Summary...",
                text: "Please wait while we generate the summary.",
                icon: "info",
                timer: 3000,
                showConfirmButton: false,
                didOpen: () => Swal.showLoading(),
            }).then(() => {
                this.summaryText = ""; // Clear text for user input
            });
        },

        toggleRecording() {
            if (this.isRecording) {
                this.stopRecording();
            } else {
                this.startRecording();
            }
        },

        startRecording() {
            this.recordingMode = true;
            this.generatingSummary = false; // Hide generate button
            this.isRecording = true;

            Swal.fire({
                title: "Recording Summary...",
                text: "Start speaking, we are recording your summary.",
                icon: "info",
                timer: 1000,
                showConfirmButton: false,
                didOpen: () => Swal.showLoading(),
            }).then(() => {
                if (!("webkitSpeechRecognition" in window)) {
                    Swal.fire("Error", "Speech Recognition is not supported in this browser.", "error");
                    return;
                }

                this.recognition = new window.webkitSpeechRecognition();
                this.recognition.continuous = true; // Keep listening
                this.recognition.interimResults = false; // Final results only
                this.recognition.lang = "en-US";

                this.recognition.onresult = (event) => {
                    let transcript = "";
                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        transcript += event.results[i][0].transcript;
                    }

                    this.summaryText += " " + transcript;
                };

                this.recognition.onend = () => {
                    if (this.isRecording) {
                        this.recognition.start(); // Restart if still recording
                    }
                };

                this.recognition.start();
            });
        },

        stopRecording() {
            if (this.recognition && this.isRecording) {
                this.recognition.stop();
                this.isRecording = false;
            }
        },

        saveSummary() {
            Swal.fire({
                title: "Success!",
                text: "Summary saved successfully!",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                this.resetUI();
            });
        },

        cancelSummary() {
            this.resetUI();
        },

        resetUI() {
            this.generatingSummary = false;
            this.recordingMode = false;
            this.isRecording = false;
            if (this.recognition) {
                this.recognition.stop();
                this.recognition = null;
            }
        },



        toggleDetails(index) {
            // If the same index is clicked again, collapse it
            if (this.expandedIndex === index) {
                this.expandedIndex = null;
            } else {
                this.expandedIndex = index; // Expand the clicked item
            }
        },
        openModal(item) {
            // Hide any existing open modals
            const existingModal = document.getElementById("pendingItemModal");
            if (existingModal) {
                const modalInstance = Modal.getInstance(existingModal) || new Modal(existingModal);
                modalInstance.hide();
            }

            // Update selectedItem data before showing modal
            this.selectedItem = item;
            this.updatedStatus = item.status; // Pre-fill status
            this.clinicalNotes = "";
            this.followUpInstructions = "";
            this.errorMessage = "";

            // Open Bootstrap modal
            this.$nextTick(() => {
                const modalElement = document.getElementById("pendingItemModal");
                const modalInstance = new Modal(modalElement);
                modalInstance.show();
            });
        },
        statusClass(status) {
            switch (status?.toLowerCase()) {
                case "urgent":
                    return "badge-urgent";
                case "pending":
                    return "badge-pending";
                case "completed":
                    return "badge-completed";
                case "in progress":
                    return "badge-in-progress";
                default:
                    return "badge-default";
            }
        },
        submitUpdate() {
            if (!this.updatedStatus) {
                this.errorMessage = "Please select a status before submitting.";
                return;
            }

            this.errorMessage = "";

            Swal.fire({
                title: "Success!",
                text: `Status updated to ${this.updatedStatus} successfully!`,
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                this.selectedItem.status = this.updatedStatus;
                this.selectedItem.notes = this.clinicalNotes;
                this.selectedItem.followUp = this.followUpInstructions;

                // Close Bootstrap Modal
                const modalElement = document.getElementById("pendingItemModal");
                if (modalElement) {
                    const modalInstance = Modal.getInstance(modalElement) || new Modal(modalElement);
                    modalInstance.hide();
                }
            });
        },
    },


};
</script>



<style scoped>

textarea {
    width: 100%;
    border-radius: 6px;
    padding: 10px;
    font-size: 14px;
}



/* Custom Badges */
.badge-urgent {
    background: #FF26261A;
    color: #FF2626;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 5px;
}

.badge-pending {
    background-color: #FFAC261A;
    color: #FFAC26;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

.badge-completed {
    background-color: #d4edda;
    color: #155724;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

.badge-in-progress {
    background-color: #cce5ff;
    color: #004085;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

/* Edit & Delete Icons */
.edit-icon {
    color: #007bff;
    margin-right: 5px;
    cursor: pointer;
    transition: color 0.3s ease;
}

.edit-icon:hover {
    color: #0056b3;
}

.delete-icon {
    color: #dc3545;

    cursor: pointer;
    transition: color 0.3s ease;
}

.delete-icon:hover {
    color: #a71d2a;
}





.custom-badge.urgent {
    background: #FF26261A;
    color: #FF2626;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

.custom-badge.pending {
    background-color: #FFAC261A;
    color: #FFAC26;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

.custom-badge.completed {
    background-color: #d4edda;
    color: #155724;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

.custom-badge.in-progress {
    background-color: #cce5ff;
    color: #004085;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

.custom-badge.default {
    background-color: #f8f9fa;
    color: #6c757d;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
}

.list-group-item {
    transition: background 0.3s ease;
}

.list-group-item:hover {
    background: #f8f9fa;
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












