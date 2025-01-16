<template>

    <!-- Header -->
    <h4 class="mb-4 card-heading">Supportive Procedure</h4>

    <!-- Cards -->
    <div class="row g-3">
        <!-- Wound Care -->
        <div class="col-md-6">
            <div class="card text-start shadow-sm border-0 bg-light-blue px-4 h-100" data-bs-toggle="modal"
                data-bs-target="#woundCareModal">
                <div class="card-body">
                    <p class="card-title fw-bold card-text-color">
                        <i class="bi bi-journal-text "></i> Wound Care
                    </p>
                    <p class="card-text text-muted fs-6">
                        Dressing change, wound assessment
                    </p>
                </div>
            </div>
        </div>

        <!-- Catheterization -->
        <div class="col-md-6">
            <div class="card text-start shadow-sm border-0 bg-light-blue px-4 h-100" data-bs-toggle="modal"
                data-bs-target="#catheterCareModal">
                <div class="card-body">
                    <p class="card-title fw-bold card-text-color">
                        <i class="bi bi-droplet "></i> Catheterization
                    </p>
                    <p class="card-text text-muted fs-6">
                        IV line, urinary catheter care
                    </p>
                </div>
            </div>
        </div>

        <!-- Position Change -->
        <div class="col-md-6">
            <div class="card text-start shadow-sm border-0 bg-light-blue px-4 h-100" data-bs-toggle="modal"
                data-bs-target="#positionChangeModal">
                <div class="card-body">
                    <p class="card-title fw-bold card-text-color">
                        <i class="bi bi-arrows-move "></i> Position Change
                    </p>
                    <p class="card-text text-muted fs-6">Q2h position changes, mobility</p>
                </div>
            </div>
        </div>

        <!-- Diet -->
        <div class="col-md-6">
            <div class="card text-start shadow-sm border-0 bg-light-blue px-4 h-100" data-bs-toggle="modal"
                data-bs-target="#dietManagementModal">
                <div class="card-body">
                    <p class="card-title fw-bold card-text-color">
                        <i class=" bi-clipboard-data"></i> Diet
                    </p>
                    <p class="card-text text-muted fs-6">
                        Dietary requirements, restrictions
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Button -->
    <div class="mt-4">
        <button class="btn btn-primary rounded-pill">
            <i class="bi bi-file-earmark-text"></i> Generate Procedure Summary
        </button>
    </div>





    <!-- Modal wounder -->
    <div class="modal fade" id="woundCareModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="woundCareModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content no-border-modal">
                <!-- Modal Header -->
                <div class="modal-header px-4 pt-4">
                    <h5 class="modal-title fs-4 fw-bold" id="woundCareModalLabel">
                        <i class="bi bi-journal-text "></i> Wound Care
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Modal Body -->
                <div class="modal-body mt-0 pt-0">
                    <div class="card " style="background: #F8F8F8; border: none;">
                        <div class="card-body">
                            <!-- Wound Location -->
                            <div class="mb-3">
                                <label for="woundLocation" class="form-label fw-bold">Wound Location</label>
                                <select class="form-select" id="woundLocation">
                                    <option value="" disabled selected>Select location...</option>
                                    <option value="Sacral">Sacral</option>
                                    <option value="Lower Extremity">Lower Extremity</option>
                                    <option value="Upper Extremity">Upper Extremity</option>
                                </select>
                            </div>

                            <!-- Dressing Type -->
                            <div class="mb-3">
                                <label for="dressingType" class="form-label fw-bold">Dressing Type</label>
                                <select class="form-select" id="dressingType">
                                    <option value="Dry Dressing">Dry Dressing</option>
                                    <option value="Wet-to-Dry">Wet-to-Dry</option>
                                    <option value="Upper Extremity">Upper Extremity</option>
                                </select>
                            </div>

                            <!-- Assessment Notes -->
                            <div class="mb-3">
                                <label for="assessmentNotes" class="form-label fw-bold">
                                    Assessment Notes
                                </label>
                                <textarea class="form-control" id="assessmentNotes" rows="3"
                                    placeholder="Enter assessment notes..."></textarea>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary">Submit Order</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Catheter Care  -->
    <div class="modal fade" id="catheterCareModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="catheterCareModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content no-border-modal">
                <!-- Modal Header -->
                <div class="modal-header  px-4 pt-4">
                    <h5 class="modal-title fs-4 fw-bold" id="catheterCareModalLabel">
                        <i class="bi bi-droplet "></i> Catheterization Care
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Modal Body -->
                <div class="modal-body mt-0 pt-0">
                    <div class="card" style="background: #F8F8F8; border: none;">
                        <div class="card-body">
                            <!-- Catheter Type -->
                            <div class="mb-3">
                                <label for="catheterType" class="form-label fw-bold">Catheter Type</label>
                                <select class="form-select" id="catheterType">
                                    <option value="" disabled selected>Select catheter type...</option>
                                    <option value="IV Line">IV Line</option>
                                    <option value="Urinary Catheter">Urinary Catheter</option>
                                    <option value="Central Line">Central Line</option>
                                </select>
                            </div>

                            <!-- Care Type -->
                            <div class="mb-3">
                                <label for="careType" class="form-label fw-bold">Care Type</label>
                                <select class="form-select" id="careType">
                                    <option value="" disabled selected>Select care type...</option>
                                    <option value="Site Care">Site Care</option>
                                    <option value="Dressing Change">Dressing Change</option>
                                    <option value="Line Flush">Line Flush</option>
                                </select>
                            </div>

                            <!-- Care Notes -->
                            <div class="mb-3">
                                <label for="careNotes" class="form-label fw-bold">Care Notes</label>
                                <textarea class="form-control" id="careNotes" rows="3"
                                    placeholder="Enter care notes..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary">Submit Order</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Position Changes -->
    <div class="modal fade" id="positionChangeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="positionChangeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content no-border-modal">
                <!-- Modal Header -->
                <div class="modal-header px-4 pt-4">
                    <h5 class="modal-title fs-4 fw-bold" id="positionChangeModalLabel">
                        <i class="bi bi-arrows-move "></i> Position Change
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body mt-0 pt-0">
                    <div class="card">
                        <div class="card-body" style="background: #F8F8F8; border: none;">
                            <!-- New Position -->
                            <div class="mb-3">
                                <label for="newPosition" class="form-label fw-bold">New Position</label>
                                <select class="form-select" id="newPosition">
                                    <option value="" disabled selected>Select position...</option>
                                    <option value="Left Side">Left Side</option>
                                    <option value="Right Side">Right Side</option>
                                    <option value="Supine">Supine</option>
                                    <option value="Semi-Fowler’s">Semi-Fowler’s</option>
                                </select>
                            </div>
                            <!-- Skin Condition -->
                            <div class="mb-3">
                                <label for="skinCondition" class="form-label fw-bold">Skin Condition</label>
                                <select class="form-select" id="skinCondition">
                                    <option value="" disabled selected>Select condition...</option>
                                    <option value="Intact">Intact</option>
                                    <option value="Breakdown">Breakdown</option>
                                    <option value="Redness">Redness</option>
                                </select>
                            </div>

                            <!-- Notes -->
                            <div class="mb-3">
                                <label for="positionNotes" class="form-label fw-bold">Notes</label>
                                <textarea class="form-control" id="positionNotes" rows="3"
                                    placeholder="Enter position note..."></textarea>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary">Complete</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal  Diet-->
    <div class="modal fade" id="dietManagementModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="dietManagementModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content no-border-modal">
                <!-- Modal Header -->
                <div class="modal-header px-4 pt-4">
                    <h5 class="modal-title fs-4 fw-bold" id="dietManagementModalLabel">
                        <i class="bi bi-clipboard-data "></i> Diet Management
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Modal Body -->
                <div class="modal-body mt-0 pt-0">
                    <div class="card  " style="background: #F8F8F8; border: none;">
                        <div class="card-body">
                        <!-- Diet Type -->
                        <div class="mb-3">
                            <label for="dietType" class="form-label fw-bold">Diet Type</label>
                            <select class="form-select" id="dietType">
                                <option value="" disabled selected>Select diet type...</option>
                                <option value="Regular">Regular</option>
                                <option value="Diabetic">Diabetic</option>
                                <option value="Low Sodium">Low Sodium</option>
                                <option value="Clear Liquid">Clear Liquid</option>
                            </select>
                        </div>

                        <!-- Meal -->
                        <div class="mb-3">
                            <label for="meal" class="form-label fw-bold">Meal</label>
                            <select class="form-select" id="meal">
                                <option value="" disabled selected>Select meal...</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                        </div>

                        <!-- Notes -->
                        <div class="mb-3">
                            <label for="dietNotes" class="form-label fw-bold">Notes</label>
                            <textarea class="form-control" id="dietNotes" rows="3"
                                placeholder="Enter dietary notes..."></textarea>
                        </div>
                    </div>

                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary">Complete</button>
                </div>
            </div>
        </div>
    </div>













</template>

<script>
export default {
    name: "SupportiveProcedureComponent",
};
</script>

<style scoped>
.bg-light-blue {
    background: #EEF6FF;
    /* Light blue background */
    border-radius: 10px;
    /* Rounded corners for the cards */
}

.card-title i {
    margin-right: 8px;
    /* Spacing between icon and text */
}

.card-text-color {
    color: #1E5EB2;
}

.card {
    border: none;
}
</style>