<template>

    <!-- Header -->
    <h4 class="mb-4 card-heading">Patient Education</h4>

    <!-- Cards -->
    <div class="row g-3">
        <!-- Drug Intake -->
        <div class="col-md-6">
            <div class="card text-start shadow-sm border-0 bg-light-blue px-4" data-bs-toggle="modal" data-bs-target="#drugIntakeModal">
                <div class="card-body ">
                    <p class="card-title card-text-color fw-bold">
                        <i class="bi bi-journal-text "></i> Drug Intake
                    </p>
                    <p class="card-text text-muted">Medication education, Schedule</p>
                </div>
            </div>
        </div>

        <!-- Lifestyle Changes -->
        <div class="col-md-6">
            <div class="card text-start shadow-sm border-0 bg-light-blue px-4"  data-bs-toggle="modal"
            data-bs-target="#lifestyleChangesModal">
                <div class="card-body">
                    <p class="card-title card-text-color fw-bold ">
                        <i class="bi bi-droplet "></i> Lifestyle Changes
                    </p>
                    <p class="card-text text-muted">Activity, diet modification</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Button -->
    <div class="mt-4 ">
        <button class="btn btn-primary rounded-pill">
            <i class="bi bi-file-earmark-text"></i> Generate Education Summary
        </button>
    </div>




   

    <!-- Modal Drug Intake -->
    <div class="modal fade" id="drugIntakeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="drugIntakeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content no-border-modal">
                <!-- Modal Header -->
                <div class="modal-header p-4">
                    <h5 class="modal-title card-heading" id="drugIntakeModalLabel">
                        <i class="bi bi-journal-text "></i> Drug Intake
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- Modal Body -->
                <div class="modal-body">
                    <!-- Medications -->
                    <div class="mb-3">
                        <div class="d-flex justify-content-between align-items-center px-3 pt-2 pb-2 rounded" style="background: #F8F8F8;">
                            <div>
                                <strong>Metoprolol</strong>
                                <small class="text-muted d-block">25mg-BID</small>
                            </div>
                            <div>
                                <input type="checkbox" id="metoprololEducated" />
                                <label for="metoprololEducated">Educated</label>
                            </div>
                        </div>
                       
                        <div class="d-flex justify-content-between align-items-center px-3 pt-2 pb-2 rounded mt-3" style="background: #F8F8F8;" >
                            <div>
                                <strong>Insulin Regular</strong>
                                <small class="text-muted d-block">Sliding Scale - PRN</small>
                            </div>
                            <div>
                                <input type="checkbox" id="insulinEducated" />
                                <label for="insulinEducated">Educated</label>
                            </div>
                        </div>
                    </div>

                    <!-- Education Topics Covered -->
                    <div class="mb-3 px-3 pt-2 pb-2 rounded" style="background: #F8F8F8;">
                        <label class="form-label fw-bold">Education Topics Covered</label>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="purposeOfMedications" />
                            <label class="form-check-label" for="purposeOfMedications">
                                Purpose of medications
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="properTiming" />
                            <label class="form-check-label" for="properTiming">
                                Proper timing and administration
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="sideEffects" />
                            <label class="form-check-label" for="sideEffects">
                                Side effects to watch for
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="drugInteractions" />
                            <label class="form-check-label" for="drugInteractions">
                                Drug interactions
                            </label>
                        </div>
                    </div>

                    <!-- Patient Understanding -->
                    <div class="mb-3  px-3 pt-2 pb-2 rounded" style="background: #F8F8F8;">
                        <label for="patientUnderstanding" class="form-label fw-bold">
                            Patient Understanding
                        </label>
                        <input type="text" class="form-control" id="patientUnderstanding"
                            placeholder="Document patient's comprehension" />
                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Cancel
                    </button>
                    <button type="button" class="btn btn-primary">Confirm</button>
                </div>
            </div>
        </div>
    </div>




<!-- Modal Lifestyle Changes -->
<div
  class="modal fade"
  id="lifestyleChangesModal"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="lifestyleChangesModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content no-border-modal ">
      <!-- Modal Header -->
      <div class="modal-header p-4">
        <p class="modal-title card-heading" id="lifestyleChangesModalLabel">
            <i class="bi bi-droplet "></i> Lifestyle Changes
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <!-- Lifestyle Changes -->
        <div class="mb-4 px-3 pb-2 pt-2 rounded" style="background: #F8F8F8;">
          <label class="form-label fw-bold">Lifestyle Changes</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="activityRestrictions"
            />
            <label class="form-check-label" for="activityRestrictions">
              Activity Restrictions Explained
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="exerciseRecommendations"
            />
            <label class="form-check-label" for="exerciseRecommendations">
              Exercise recommendations provided
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="energyConservation"
            />
            <label class="form-check-label" for="energyConservation">
              Energy conservation techniques
            </label>
          </div>
        </div>

        <!-- Dietary Changes -->
        <div class="mb-4 px-3 pb-2 pt-2 rounded" style="background: #F8F8F8;">
          <label class="form-label fw-bold">Dietary Changes</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="sodiumRestrictions"
            />
            <label class="form-check-label" for="sodiumRestrictions">
              Sodium Restrictions
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="fluidManagement"
            />
            <label class="form-check-label" for="fluidManagement">
              Fluid Management
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="carbCounting"
            />
            <label class="form-check-label" for="carbCounting">
              Carbohydrate Counting
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="mealPlanning"
            />
            <label class="form-check-label" for="mealPlanning">
              Meal Planning
            </label>
          </div>
        </div>

        <!-- Patient Goals -->
        <div class="mb-4 px-3 rounded pb-2 pt-2" style="background: #F8F8F8;">
          <label for="patientGoals" class="form-label fw-bold">Patient Goals</label>
          <textarea
            class="form-control"
            id="patientGoals"
            rows="3"
            placeholder="Document patient's goals and motivation..."
          ></textarea>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button type="button" class="btn btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>






</template>

<script>
export default {
    name: "PatientEducationComponent",
};
</script>

<style scoped>
.bg-light-blue {
    background: #EEF6FF;
    border-radius: 10px;
    /* Rounded corners */
}

.card-title i {
    margin-right: 8px;
    /* Add spacing between the icon and text */
}

.card-text-color {
    color: #1E5EB2;
}

.card{
    border: none;
}
</style>