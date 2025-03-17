<template>



    <div class="col-12 ">

        <!-- Card -->

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
                    <div class="row ">
                        <div class="d-flex justify-content-between align-items-center health-metrics-card p-2">
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
                        <div class="d-flex justify-content-between align-items-center health-metrics-card p-2">
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
                        <div class="d-flex justify-content-between align-items-center health-metrics-card p-2">
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
                        <div class="d-flex justify-content-between align-items-center health-metrics-card p-2">
                            <div class="">
                                <p class="mb-0 fw-medium">Saturation</p>
                            </div>
                            <div>
                                <p class="mb-0 pb-0 text-end fw-semibold">82%</p>
                                <small class="mt-0 pt-0">(95-100)</small>
                            </div>

                        </div>
                    </div>

                    <button class="btn btn-custom   w-100 mt-2" data-bs-toggle="modal"
                        data-bs-target="#nursingEventModal">Adverse Event Report</button>
                    <button class="btn btn-custom  w-100 mt-2" data-bs-toggle="modal"
                        data-bs-target="#warningModal">Physicians Alert</button>
                    <button class="btn btn-custom  w-100 mt-2" data-bs-toggle="modal"
                        data-bs-target="#intakeOutputModal">Intake Output Chart</button>


                    <!-- Modal -->
                    <div class="modal fade" id="intakeOutputModal" tabindex="-1"
                        aria-labelledby="intakeOutputModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <p class="modal-title fs-4 fw-bold" id="intakeOutputModalLabel">Intake and Output
                                        Tracker</p>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="container">
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label for="typeSelect" class="form-label fw-bold mb-2">Type</label>
                                                <select id="typeSelect" class="form-select">
                                                    <option selected>Intake</option>
                                                    <option>Output</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6">
                                                <label for="subtypeSelect"
                                                    class="form-label fw-bold mb-2">Subtype</label>
                                                <select id="subtypeSelect" class="form-select">
                                                    <option selected>Select</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mt-2">
                                                <label for="amountInput" class="form-label fw-bold mb-2">Amount</label>
                                                <input type="text" id="amountInput" class="form-control"
                                                    placeholder="Enter amount">
                                            </div>
                                            <div class="col-md-6 mt-2">
                                                <label for="timeSelect" class="form-label fw-bold  mb-2">Time</label>
                                                <select id="timeSelect" class="form-select">
                                                    <option selected>Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary w-100 mb-3">Add Record</button>

                                        <div class="row  ">
                                            <div class="col-md-4 ">
                                                <div class="card text-center" style="background: #34C38F38;">
                                                    <div class="card-body text-center">
                                                        <h5>Total Intake</h5>
                                                        <h2>1030 ml</h2>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-4 ">
                                                <div class="card text-center" style="background: #73F85142;">
                                                    <div class="card-body">
                                                        <h5>Total Output</h5>
                                                        <h2>1030 ml</h2>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-4">
                                                <div class="card text-center" style="background: #FF26261A;">
                                                    <div class="card-body">
                                                        <h5>Net Balance</h5>
                                                        <h2>1030 ml</h2>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>Time</th>
                                                        <th>Intake (ML)</th>
                                                        <th>Intake Details</th>
                                                        <th>Output (ML)</th>
                                                        <th>Output Details</th>
                                                        <th>Balanced</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1h:22m:3s</td>
                                                        <td class="text-primary">500</td>
                                                        <td>IV Fluids 500ML</td>
                                                        <td class="text-danger">200</td>
                                                        <td>Urine Output 200ml</td>
                                                        <td>300</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1h:22m:3s</td>

                                                        <td>500</td>
                                                        <td>IV Fluids 500ML</td>
                                                        <td class="text-danger">200</td>
                                                        <td>Urine Output 200ml</td>
                                                        <td>300</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1h:22m:3s</td>

                                                        <td>500</td>
                                                        <td>IV Fluids 500ML</td>
                                                        <td class="text-danger">200</td>
                                                        <td>Urine Output 200ml</td>
                                                        <td>300</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1h:22m:3s</td>

                                                        <td>500</td>
                                                        <td>IV Fluids 500ML</td>
                                                        <td class="text-danger">200</td>
                                                        <td>Urine Output 200ml</td>
                                                        <td>300</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modal Physicians Alert -->
                    <div class="modal fade custom-modal" id="warningModal" tabindex="-1"
                        aria-labelledby="warningModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <p class="modal-title fs-4 fw-bold" id="warningModalLabel">Physician’s Alert
                                    </p>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h6 class="fw-bold">Nurse Requested Dashboard - RN Tayseer</h6>
                                        <button class="btn btn-primary" @click="openTrendModal">Request New</button>
                                    </div>

                                    <!-- Medication Alert -->
                                    <div class="card mb-3 border rounded p-3">
                                        <h6 class="fw-bold">Medication <span class="badge bg-danger">High</span></h6>
                                        <p class="text-muted fs-5">Patient Name: James Wilson (MRN:12345)</p>
                                        <p><strong>Need Clarification on Metoprolol Dosage</strong></p>
                                        <div class="alert alert-primary p-2 fs-5">
                                            AI Suggested Action: Review current dosage of 25mg q6h and confirm if
                                            adjustment needed based on BP trending down.
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <p class="text-muted small">10:30 AM</p>
                                            <p class="text-primary small">Status: Pending</p>

                                        </div>

                                    </div>

                                    <!-- Lab Review Alert -->
                                    <div class="card mb-3 border rounded p-3">
                                        <h6 class="fw-bold">Lab Review <span
                                                class="badge bg-warning text-dark">Medium</span></h6>
                                        <p class="text-muted fs-5">Patient Name: James Wilson (MRN:12345)</p>
                                        <p><strong>Cardiac Enzymes Results Ready</strong></p>
                                        <div class="alert alert-primary p-2 fs-5">
                                            AI Suggested Action: Review current dosage of 25mg q6h and confirm if
                                            adjustment needed based on BP trending down.
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <p class="text-muted small">10:30 AM</p>
                                            <p class="text-primary small">Status: Pending</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- New Request Modal -->
                    <div class="modal fade" id="trendModal" tabindex="-1" aria-labelledby="trendModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title fw-bold" id="trendModalLabel">Physician’s Alert</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label">Priority Level</label>
                                            <select class="form-select">
                                                <option selected disabled>Select Priority</option>
                                                <option>Low</option>
                                                <option>Medium</option>
                                                <option>High</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Request Type</label>
                                            <select class="form-select">
                                                <option selected disabled>Select Request Type</option>
                                                <option>Medication</option>
                                                <option>Lab Review</option>
                                                <option>Patient Assessment</option>
                                                <option>Care Plan Update</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Patient</label>
                                            <input type="text" class="form-control" placeholder="Name(MRN)">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Request Title</label>
                                            <input type="text" class="form-control" placeholder="Brief Description">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Details</label>
                                            <textarea class="form-control" rows="3"
                                                placeholder="Provide detailed information about the request"></textarea>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" class="btn btn-primary">Submit Request</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Modal Adverse Event Report -->
                    <div class="modal fade" id="nursingEventModal" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="nursingEventModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <p class="modal-title fs-4 fw-bold" id="nursingEventModalLabel">
                                        <i class="bi bi-exclamation-triangle-fill text-primary"></i> Nursing Interface
                                        Note-Adhere Event Report
                                    </p>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <!-- Patient Information -->
                                        <h5 class="fw-bold">Patient Information</h5>
                                        <div class="row mb-3 mt-3">
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">Patient Name</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Patient Name">
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">MERN</label>
                                                <input type="text" class="form-control" placeholder="Enter MERN">
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">Date of Birth</label>
                                                <input type="date" class="form-control">
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">Room No</label>
                                                <input type="text" class="form-control" placeholder="Enter Room No">
                                            </div>
                                        </div>

                                        <!-- Event Details -->
                                        <h5 class="fw-bold">Event Details</h5>
                                        <div class="row mb-3 mt-3">
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">Event Type</label>
                                                <select class="form-select">
                                                    <option selected disabled>Select Event Type</option>
                                                    <option>Fall</option>
                                                    <option>Medication Error</option>
                                                    <option>Equipment Malfunction</option>
                                                    <option>Death Event</option>
                                                    <option>Code Blue/CPR</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">Location Of Event</label>
                                                <input type="text" class="form-control" placeholder="Enter Location">
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <label class="form-label fw-bold mb-2">Description</label>
                                                <textarea class="form-control" rows="3"
                                                    placeholder="Describe the event"></textarea>
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <label class="form-label fw-bold mb-2">Health Care Providers
                                                    Notified</label>
                                                <input type="text" class="form-control" placeholder="Enter Names">
                                            </div>
                                        </div>

                                        <!-- Documentation -->
                                        <h5 class="fw-bold">Documentation</h5>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="photoAdded">
                                            <label class="form-check-label" for="photoAdded">Photo/Documentation
                                                Added</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="familyNotified">
                                            <label class="form-check-label" for="familyNotified">Family Notified</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="riskManagement">
                                            <label class="form-check-label" for="riskManagement">Risk Management
                                                Notified</label>
                                        </div>

                                        <!-- Patient Assessment -->
                                        <h5 class="fw-bold mt-3">Patient Assessment</h5>
                                        <div class="row mb-3 mt-3">
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label mb-2 fw-bold">BP</label>
                                                <input type="text" class="form-control" placeholder="Enter BP">
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label mb-2 fw-bold">HR</label>
                                                <input type="text" class="form-control" placeholder="Enter HR">
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold">Level of Consciousness</label>
                                                <select class="form-select">
                                                    <option selected disabled>Select Level</option>
                                                    <option>Alert</option>
                                                    <option>Confused</option>
                                                    <option>Drowsy</option>
                                                    <option>Unresponsive</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">Pain Level (0-10)</label>
                                                <input type="text" class="form-control" placeholder="Enter Pain Level">
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <label class="form-label fw-bold mb-2">Immediate Action Taken</label>
                                                <textarea class="form-control" rows="2"
                                                    placeholder="Describe Actions Taken"></textarea>
                                            </div>
                                            <div class="col-md-12 mb-2">
                                                <label class="form-label fw-bold mb-2">Health Provider Notified</label>
                                                <input type="text" class="form-control" placeholder="Enter Name">
                                            </div>
                                        </div>

                                        <!-- Nurse Signatures -->
                                        <h5 class="fw-bold ">Nurse Signatures</h5>
                                        <div class="row mb-3 mt-3">
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">Nurse Name</label>
                                                <input type="text" class="form-control" placeholder="Enter Nurse Name">
                                            </div>
                                            <div class="col-md-6 mb-2">
                                                <label class="form-label fw-bold mb-2">Badge Number</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Enter Badge Number">
                                            </div>
                                        </div>

                                        <div class="text-end">
                                            <button type="submit" class="btn btn-primary">Submit Report</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>





    </div>






</template>



<script>
import HeartRateChart from "@/nurse/LineChart.vue";
import { Modal } from 'bootstrap';

export default {
    name: "CommonContent",
    components: {
        HeartRateChart,
    },
    data() {
        return {
            warningModal: null, // Store modal instance 
            chartLabels: [
                "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00",
            ],
            chartData: [
                75, 75, 70, 80, 70, 80, 70, 80, 70, 70,
            ],
        };
    },

    methods: {

        openTrendModal() {
            // Get the first modal instance
            const warningModalEl = document.getElementById('warningModal');
            this.warningModal = Modal.getInstance(warningModalEl) || new Modal(warningModalEl);

            if (this.warningModal) {
                // Close the first modal and wait for it to fully hide
                this.warningModal.hide();

                warningModalEl.addEventListener('hidden.bs.modal', () => {
                    // Remove any lingering backdrops
                    this.removeBackdrop();

                    // Open the second modal
                    const trendModal = new Modal(document.getElementById('trendModal'));
                    trendModal.show();

                    // When the second modal closes, reset the first modal instance
                    document.getElementById('trendModal').addEventListener('hidden.bs.modal', () => {
                        this.removeBackdrop();
                        this.resetFirstModal();
                    }, { once: true });
                }, { once: true });
            }
        },

        resetFirstModal() {
            // Reset first modal instance so it can be opened again
            const warningModalEl = document.getElementById('warningModal');
            this.warningModal = new Modal(warningModalEl); // Reinitialize instance
        },

        removeBackdrop() {
            // Find and remove any lingering modal backdrops
            const backdrops = document.getElementsByClassName('modal-backdrop');
            while (backdrops.length > 0) {
                backdrops[0].remove();
            }

            // Remove "modal-open" class from body to fix scrolling issues
            document.body.classList.remove('modal-open');
        },


    },
};



</script>


<style scoped>
.btn-custom {
    border: 1px solid #00A0DA;
    color: #00A0DA;
}

.btn-custom:hover {
    background: #00A0DA;
    border: 1px solid #00A0DA;
    color: #ffffff;
}

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