<template>

  <h4 class="mb-3 fs-4  fw-bold">Sample Collection Tasks</h4>
  <div class="row g-3">
    <!-- Blood Sample -->
    <div class="col-md-6">
      <div class="card text-start shadow-sm border-0 bg-light-blue px-4 h-100" data-bs-toggle="modal"
        data-bs-target="#bloodSampleModal">
        <div class="card-body">
          <p class="card-title card-text-color fw-bold">
            <i class="bi bi-droplet "></i> Blood Sample
          </p>
          <p class="card-text text-muted fs-6">CBC, Chemistry Panel, Cardiac Enzymes</p>
        </div>
      </div>
    </div>
    <!-- Urine Sample -->
    <div class="col-md-6">
      <div class="card text-start shadow-sm border-0 bg-light-blue px-4 h-100" data-bs-toggle="modal"
        data-bs-target="#urineSampleModal">
        <div class="card-body">
          <p class="card-title card-text-color  fw-bold">
            <i class="bi bi-water fw-bold "></i> Urine Sample
          </p>
          <p class="card-text text-muted fs-6">Urinalysis, Culture if needed</p>
        </div>
      </div>
    </div>
    <!-- Imaging -->
    <div class="col-md-6">
      <div class="card text-start shadow-sm border-0 bg-light-blue px-4 h-100" data-bs-toggle="modal"
        data-bs-target="#imagingModal">
        <div class="card-body">
          <p class="card-title card-text-color fw-bold">
            <i class="bi bi-camera "></i> Imaging
          </p>
          <p class="card-text text-muted fs-6">Chest X-ray, ECG</p>
        </div>
      </div>
    </div>
    <!-- ECG -->
    <div class="col-md-6">
      <div class="card text-start shadow-sm border-0 bg-light-blue px-4 h-100" data-bs-toggle="modal"
        data-bs-target="#ecgModal">
        <div class="card-body">
          <p class="card-title card-text-color fw-bold">
            <i class="bi bi-activity "></i> ECG
          </p>
          <p class="card-text text-muted fs-6">12-lead ECG monitoring</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Button -->
  <div class="mt-4 ">
    <button class="btn btn-primary rounded-pill">
      <i class="bi bi-file-earmark-text"></i> Generate Collection Summary
    </button>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="bloodSampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="bloodSampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header px-4 pt-4">
          <h5 class="modal-title mt-4  fs-4 fw-bold" id="bloodSampleModalLabel ">
            <i class="bi bi-droplet "></i> Blood Sample
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body mt-0 pt-0 ">
          <div class="card" style="background: #F8F8F8; border: none;">
            <div class="card-body">

              <!-- Collection Time Section -->
              <div class="mb-3">
                <label for="collectionTime" class="form-label fw-bold">
                  Collection Time
                </label>
                <input type="time" class="form-control" id="collectionTime" value="08:00" />
              </div>

              <!-- Collection Site Section -->
              <div class="mb-3">
                <label for="collectionSite" class="form-label fw-bold">
                  Collection Site
                </label>
                <input type="text" class="form-control" id="collectionSite" value="Left Arm" />
              </div>

              <!-- Test Required Section -->
              <div class="mb-3">
                <label class="form-label fw-bold">Test Required</label>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="testCBC" />
                  <label class="form-check-label" for="testCBC">CBC</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="testChemistry" />
                  <label class="form-check-label" for="testChemistry">
                    Chemistry Panel
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="testCardiac" />
                  <label class="form-check-label" for="testCardiac">
                    Cardiac Enzymes
                  </label>
                </div>

              </div>

              <!-- Collection Notes Section -->
              <div class="mb-3">
                <label for="collectionNotes" class="form-label fw-bold">
                  Collection Notes
                </label>
                <textarea class="form-control" id="collectionNotes" rows="3"
                  placeholder="Enter notes here..."></textarea>
              </div>
            </div>
          </div>
        </div>




        <!-- Modal Footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">
            Complete Collection
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal urine -->
  <div class="modal fade" id="urineSampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="urineSampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content no-border-modal ">
        <!-- Modal Header -->
        <div class="modal-header px-4 pt-4">
          <h5 class="modal-title fs-4 fw-bold" id="urineSampleModalLabel">
            <i class="bi bi-water"></i> Urine Sample
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body mt-0 pt-0">
          <div class="card" style="background: #F8F8F8;">
            <div class="card-body">

              <!-- Sample Details -->
              <div class="mb-3">
                <label class="form-label fw-bold">Sample Details</label>

                <!-- Sample Type -->
                <div class="mb-3">
                  <label for="sampleType" class="form-label">Sample Type</label>
                  <input type="text" class="form-control" id="sampleType" value="Clean Catch" readonly />
                </div>

                <div class="mb-3 ">
                  <label for="sampleType" class="form-label fw-bold">Sample Type</label>
                  <select class="form-select" id="sampleType" name="sampleType">
                    <option value="" selected disabled>Select a Sample</option>
                    <option value="vital_signs_out_of_range">Clean Catch</option>
                    <option value="awaiting_lab_results">Catheter Specimen</option>
                    <option value="npo_status">24 Hour Collection </option>

                  </select>
                </div>

                <!-- Test Required -->
                <div>
                  <label class="form-label fw-bold">Test Required</label>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="testUrinalysis" />
                    <label class="form-check-label" for="testUrinalysis">
                      Urinalysis
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="testCulture" />
                    <label class="form-check-label" for="testCulture">Culture</label>
                  </div>
                </div>

                <!-- Collection Notes -->
                <div class="mb-3">
                  <label for="collectionNotes" class="form-label fw-bold">
                    Collection Notes
                  </label>
                  <textarea class="form-control" id="collectionNotes" rows="3"
                    placeholder="Enter notes here..."></textarea>
                </div>


              </div>
            </div>
          </div>



        </div>


        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Cancel
          </button>
          <button type="button" class="btn btn-primary">
            Complete Collection
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Imaging Modal-->
  <div class="modal fade" id="imagingModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="imagingModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content no-border-modal">
        <!-- Modal Header -->
        <div class="modal-header px-4 pt-6">
          <h5 class="modal-title fs-4 fw-bold" id="imagingModalLabel">
            <i class="bi bi-camera "></i> Imaging
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body mt-0 pt-0">

          <div class="card" style="background: #F8F8F8; border: none;">
            <div class="card-body">
              <!-- Order Details -->
              <div class="mb-3">
                <label class="form-label fw-bold">Order Details</label>

                <!-- Type of Imaging -->
                <div class="mb-3">
                  <label for="typeOfImaging" class="form-label">Type of Imaging</label>
                  <select class="form-select" id="typeOfImaging">
                    <option value="Chest X-ray">Chest X-ray</option>
                    <option value="CT Scan">CT Scan</option>
                    <option value="MRI">MRI</option>
                  </select>
                </div>

                <!-- Priority -->
                <div class="mb-3">
                  <label for="priority" class="form-label">Priority</label>
                  <select class="form-select" id="priority">
                    <option value="Routine">Routine</option>
                    <option value="Stat">Stat</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>

                <!-- Special Instructions -->
                <div class="mb-3">
                  <label for="specialInstructions" class="form-label fw-bold">
                    Special Instructions
                  </label>
                  <textarea class="form-control" id="specialInstructions" rows="3"
                    placeholder="Enter any patient preparation requirement..."></textarea>
                </div>


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

  <!-- Modal  ECG -->
  <div class="modal fade" id="ecgModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="ecgModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content no-border-modal">
        <!-- Modal Header -->
        <div class="modal-header px-4 pt-4">
          <h5 class="modal-title fs-4 fw-bold" id="ecgModalLabel">
            <i class="bi bi-activity "></i> ECG
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body pt-0 mt-0">
          <div class="card" style="background: #F8F8F8; border: none;">
            <div class="card-body">

              <!-- ECG Details -->
              <div class="mb-3">
                <label class="form-label fw-bold">ECG Details</label>

                <!-- Type Dropdown -->
                <div class="mb-3">
                  <label for="typeOfECG" class="form-label fw-bold">Type</label>
                  <select class="form-select" id="typeOfECG">
                    <option value="12 Lead ECG">12 Lead ECG</option>
                    <option value="Rhythm Strip">Rhythm Strip</option>
                  </select>
                </div>

                <!-- Priority Dropdown -->
                <div class="mb-3">
                  <label for="priorityECG" class="form-labe fw-boldl">Priority</label>
                  <select class="form-select" id="priorityECG">
                    <option value="Routine">Routine</option>
                    <option value="Stat">Stat</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>

                <!-- Recording Notes -->
                <div class="mb-3">
                  <label for="recordingNotes" class="form-label fw-bold">
                    Recording Notes
                  </label>
                  <textarea class="form-control" id="recordingNotes" rows="3"
                    placeholder="Enter any relevant observation..."></textarea>
                </div>

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









</template>

<script>
export default {
  name: "SampleCollectionTabContent",
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

}

.card {
  border: none;
}
</style>