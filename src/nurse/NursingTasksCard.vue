<template>

  <!-- Nursing Tasks Card -->
  <div class="card mb-2">
    <div class="card-body">
      <h5 class="card-title fs-4 fw-bold mb-3">Nursing Tasks</h5>
      <div class="row align-items-center py-2" v-for="task in tasks" :key="task.id">
        <div class="col-md-5">
          <p class="mb-0 fs-6">{{ task.name }}</p>
        </div>
        <div class="col-md-3 text-muted text-end">
          <i class="bi bi-clock me-1 fs-6"></i> {{ task.time }}
        </div>
        <div class="col-md-2 text-center">
          <span :class="task.priorityClass">{{ task.priority }}</span>
        </div>
        <div class="col-md-2 text-center">
          <span :class="task.statusClass" class="badge ">{{ task.status }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Recent Observations Card -->
  <div class="card">
    <div class="card-body">
      <h5 class="card-title fs-4 fw-bold mb-3">Recent Observations</h5>
      <div class="row py-2 mb-2" v-for="observation in observations" :key="observation.id"
        style="background: #F8F8F8;border-radius: 6px;">
        <div class="col-md-10">
          <p class="mb-1 fs-6">{{ observation.note }}</p>
          <small class="" style="color: #00A0DA;">{{ observation.nurse }}</small>
        </div>
        <div class="col-md-2 text-muted text-end  fs-6">
          <i class="bi bi-clock me-1"></i> {{ observation.time }}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NursingTasksCard",
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Vital Signs Check",
          time: "10:00 am",
          priority: "Routine",
          priorityClass: "badge-routine badge ",
          status: "Pending",
          statusClass: "pending-class badge",
        },
        {
          id: 2,
          name: "Medication Administration",
          time: "11:00 am",
          priority: "High",
          priorityClass: "heigh-class badge ",
          status: "Upcoming",
          statusClass: "upcoming-class badge",
        },
        {
          id: 3,
          name: "Medication Administration",
          time: "12:00 am",
          priority: "Routine",
          priorityClass: "badge-routine badge ",
          status: "Upcoming",
          statusClass: "upcoming-class badge ",
        },
      ],
      observations: [
        {
          id: 1,
          note: "Patient reports mild chest discomfort (3/10). Vital signs stable.",
          nurse: "RN Johnson",
          time: "10:00 am",
        },
        {
          id: 2,
          note: "Sleep through night. No complaints of pain.",
          nurse: "RN Davis",
          time: "11:00 am",
        },
      ],
    };
  },
};
</script>

<style scoped>
.badge-routine {
  background-color: #00A0DA33;
  /* Light blue with transparency */
  color: #00A0DA;
  /* Solid blue text */
}

.upcoming-class {
  background-color: #4E26FF1A;
  color: #4E26FF;

}

.pending-class {
  background-color: #E6EAEF;
  color: #000000;
}

.heigh-class {
  background: #FF26261A;
  color: #FF2626;


}



/* Custom Status Styles */
.badge-pending {
  background-color: #f0f0f0;
  /* Light Gray */
  color: #6c757d;
  /* Gray */

}

.badge-upcoming {
  background-color: #d6e9f8;
  /* Light Blue */
  color: #007bff;
  /* Blue */

}

.badge-high {
  background-color: #f8d7da;
  /* Light Red */
  color: #dc3545;
  /* Red */

}

.badge-routine {

  background: #00A0DA33;
  color: #00A0DA;
  /* Cyan */

}


.card {
  border: none;
}
</style>