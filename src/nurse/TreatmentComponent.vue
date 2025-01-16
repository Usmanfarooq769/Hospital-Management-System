<template>
    <!-- Current Medication Section -->
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="fs-4 fw-bold mb-3">Current Medication</h5>
            <div class="d-flex justify-content-between mb-3">
                <button class="btn btn-primary btn-sm" style="background: #4588E0;">
                    Current Medication
                </button>
                <button class="btn btn-outline-secondary btn-sm">History</button>
            </div>
            <ul class="list-group">
                <li v-for="medication in currentMedication" :key="medication.name"
                    class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <strong>{{ medication.name }}</strong>
                        <span class="text-muted ms-2 fs-6">{{ medication.dosage }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <span class="badge active-bg me-3">{{ medication.status }}</span>
                        <span class="text-muted fs-6">Last given: {{ medication.lastGiven }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- Pending Medications Order -->
    <div class="card mt-2 h-100">
        <div class="card-body">
            <h5 class="card-title fs-4 fw-bold mb-3">Pending Medications Order</h5>
            <div class="row">
                <div v-for="order in pendingOrders" :key="order.id" class="col-12 col-md-6 mb-3">
                    <div class="card p-3 h-100" style="background: #F8F8F8;">
                        <h6 class="fw-bold">{{ order.name }}</h6>
                        <p class="text-muted mb-1 fs-6">{{ order.dosage }}</p>
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="text-muted fs-6">
                                Ordered By: <strong>{{ order.orderedBy }}</strong>
                            </p>
                            <p class="text-muted fs-6">Time: {{ order.time }}</p>
                        </div>
                        <div class="d-flex">

                            <button class="btn btn-primary me-2 w-50 btn-sm" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop" @click="setSelectedOrder(order)">
                                Administer
                            </button>



                            <button class="btn btn-outline-secondary w-50 btn-sm" data-bs-toggle="modal"
                                data-bs-target="#modalTwo" @click="setSelectedOrder(order)">Hold</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Treatment Guidelines -->
    <div class="card mt-2 h-100">
        <div class="card-body">
            <h5 class="fs-4 fw-bold mb-3">Treatment Guidelines</h5>
            <div class="row">
                <div class="col-12 col-md-6" v-for="(protocol, index) in treatmentGuidelines" :key="index">
                    <div class="card p-3 h-100" style="background: #F8F8F8;">
                        <h6 class="fw-bold">{{ protocol.title }}</h6>
                        <ul class="text-muted px-3">
                            <li v-for="(item, itemIndex) in protocol.items" :key="itemIndex">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Modal For Administer Button -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content p-4">
                <div class="modal-header">
                    <h5 class="modal-title fs-4 fw-bold" id="staticBackdropLabel mt-4">Medication Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card p-4" style="background: #F8F8F8; border: none;">
                        <div class="d-flex align-item-center justify-content-between">
                            <div class="div">
                                <p class="mb-0 pb-0 "><small class="mb-0 pb-0 text-muted">Medication</small></p>
                                <strong class="mt-0 pt-0 ">{{ selectedOrder.name }}</strong>
                            </div>
                            <div class="div">
                                <p class="mb-0 pb-0 "> <small class="mb-0 pb-0 text-muted">Dosage</small></p>
                                <strong class="mt-0 pt-0">{{ selectedOrder.dosage }}</strong>
                            </div>


                        </div>
                        <div class="d-flex align-item-center justify-content-between mt-2">
                            <div class="div">
                                <p class="mb-0 pb-0 "> <small class="mb-0 pb-0 text-muted">Ordered By</small></p>

                                <strong class="mt-0 pt-0 ">{{ selectedOrder.orderedBy }}</strong>
                            </div>


                            <div class="div">
                                <p class="mb-0 pb-0 "><small class="mb-0 pb-0 text-muted">Order Time</small></p>

                                <strong class="mt-0 pt-0">{{ selectedOrder.time }}</strong>
                            </div>

                        </div>
                    </div>
                    <p class="mt-2 mb-2 mb-0 fw-bold"> Pre-Administration Checklis</p>
                    <ul class="list-unstyled">
                        <li>
                            <label><input type="checkbox" /> Verify Patient Identity</label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> Check Medication Against Order</label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> Verify Dose and Route</label>
                        </li>
                        <li>
                            <label><input type="checkbox" /> Check Expiry Date</label>
                        </li>
                    </ul>
                    <div class="form-group ">
                        <label for="notes " class="mb-2 fw-bold">Notes</label>
                        <textarea class="form-control" id="notes" rows="2"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>

    <!--Modal For Hold  Button -->
    <div class="modal fade" id="modalTwo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="modalTwoLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content p-4">
                <div class="modal-header">
                    <h5 class="modal-title fs-4 fw-bold" id="staticBackdropLabel mt-4">Medication Hold</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card p-4" style="background: #F8F8F8; border: none;">
                        <div class="d-flex align-item-center justify-content-between">
                            <div class="div">
                                <p class="mb-0 pb-0 "><small class="mb-0 pb-0 text-muted">Medication</small></p>
                                <strong class="mt-0 pt-0 ">{{ selectedOrder.name }}</strong>
                            </div>
                            <div class="div">
                                <p class="mb-0 pb-0 "> <small class="mb-0 pb-0 text-muted">Dosage</small></p>
                                <strong class="mt-0 pt-0">{{ selectedOrder.dosage }}</strong>
                            </div>


                        </div>
                        <div class="d-flex align-item-center justify-content-between mt-2">
                            <div class="div">
                                <p class="mb-0 pb-0 "> <small class="mb-0 pb-0 text-muted">Ordered By</small></p>

                                <strong class="mt-0 pt-0 ">{{ selectedOrder.orderedBy }}</strong>
                            </div>


                            <div class="div">
                                <p class="mb-0 pb-0 "><small class="mb-0 pb-0 text-muted">Order Time</small></p>

                                <strong class="mt-0 pt-0">{{ selectedOrder.time }}</strong>
                            </div>

                        </div>
                    </div>


                    <div class="mb-3 mt-3">
                        <label for="reasonForHold" class="form-label fw-bold">Reason For Hold</label>
                        <select class="form-select" id="reasonForHold" name="reasonForHold">
                            <option value="" selected disabled>Select a reason</option>
                            <option value="vital_signs_out_of_range">Vital Signs Out of Range</option>
                            <option value="awaiting_lab_results">Awaiting Lab Results</option>
                            <option value="npo_status">NPO Status</option>
                            <option value="patient_refusal">Patient Refusal</option>
                            <option value="other_clinical_reasons">Other Clinical Reasons</option>
                        </select>
                    </div>


                    <div class="form-group ">
                        <label for="notes " class="mb-2 fw-bold">Additional Notes</label>
                        <textarea class="form-control" id="notes" rows="2"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>




</template>

<script>
export default {
    name: "TreatMentComponent",
    data() {
        return {
            currentMedication: [
                { name: "Aspirin", dosage: "81 mg-Daily", status: "Active", lastGiven: "6:00 AM" },
                { name: "Metoprolol", dosage: "25mg-BID", status: "Active", lastGiven: "6:00 AM" },
                { name: "Insulin Regular", dosage: "Sliding scale-PRN", status: "Active", lastGiven: "6:00 AM" },
            ],
            pendingOrders: [
                { id: 1, name: "Potassium Chloride", dosage: "40mEq", orderedBy: "Thompson", time: "9:30 AM" },
                { id: 2, name: "Potassium Chloride", dosage: "40mEq", orderedBy: "Thompson", time: "10:30 AM" },
            ],
            treatmentGuidelines: [
                {
                    title: "ACS Protocol",
                    items: ["Monitor vital signs every 4 hours", "Check cardiac enzymes as ordered", "Maintain bed rest with bathroom", "Maintain for chest pain"],
                },
                {
                    title: "Diabetes Management",
                    items: ["Check blood glucose before meals", "Administer insulin per sliding scale", "Monitor signs of hypo/hyperglycemia"],
                },
            ],
            selectedOrder: {}, // Store data for the selected order
        };
    },
    methods: {
        setSelectedOrder(order) {
            this.selectedOrder = order;
        },
    },
};
</script>

<style scoped>

ul {
    padding-left: 0;

}

.list-group-item {
    border: none;
    border-bottom: 1px solid #f0f0f0;
}

.badge {
    font-size: 0.8rem;
    padding: 0.5em 1em;
}

.active-bg {
    background: #73f85142;
    color: #297711;
}

.modal-footer {

    border-top: none !important;
    border-bottom: none !important;
}

.modal-header {
    border-top: none !important;
    border-bottom: none !important;
}

/* Optionally remove all borders from the modal content */
.no-border-modal {
    border: none !important;
}

.card{
    border: none;
}

</style>