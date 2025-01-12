<template>
    <div class="card p-3 mb-3 ">
      <!-- Table Header -->
      <p class="mb-3 fs-4 fw-bold">Pending Items for James</p>
      
      <!-- Table -->
      <div class=" custom-scrollbar table-responsive  " style="max-height: 289px;">
      <table class="table ">
        <thead>
          <tr style="background: #ECECEC;">
            <th scope="col">ID</th>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
            <th scope="col">Requested by</th>
            <th scope="col">Status</th>
            <th scope="col">Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in staticItems" :key="item.id">
            <td scope="row">{{ item.id }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.requestedBy }}</td>
            <td>
              <span :class="statusClass(item.status)">
  {{ item.status }}
</span>

            </td>
            <td>{{ item.dueDate }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PendingItemsTable",
    data() {
      return {
        staticItems: [
  {
    id: "P001",
    type: "Lab Test",
    description: "Cardiac Enzyme panel-Troponin level",
    requestedBy: "Dr. John Doe",
    status: "Urgent",
    dueDate: "2024-12-22 14:30:00",
  },
  {
    id: "P002",
    type: "Imaging",
    description: "Chest CT Scan with contrast",
    requestedBy: "Dr. Sarah Smith",
    status: "Pending",
    dueDate: "2024-12-22 14:30:00",
  },
  {
    id: "P003",
    type: "Medication",
    description: "Aspirin 81mg - Administer at bedtime",
    requestedBy: "Dr. Emily Johnson",
    status: "Completed",
    dueDate: "2024-12-21 20:00:00",
  },
  {
    id: "P004",
    type: "Vital Check",
    description: "Blood pressure and pulse monitoring",
    requestedBy: "Dr. Michael Brown",
    status: "In Progress",
    dueDate: "2024-12-22 09:00:00",
  },
  {
    id: "P005",
    type: "Lab Test",
    description: "Complete Blood Count (CBC)",
    requestedBy: "Dr. Lisa Wilson",
    status: "Pending",
    dueDate: "2024-12-23 08:00:00",
  },
  {
    id: "P006",
    type: "Procedure",
    description: "Wound dressing change - left leg",
    requestedBy: "Dr. Andrew Martinez",
    status: "Completed",
    dueDate: "2024-12-20 15:00:00",
  },
  {
    id: "P007",
    type: "Imaging",
    description: "MRI Scan of lower back",
    requestedBy: "Dr. Richard Lee",
    status: "Urgent",
    dueDate: "2024-12-24 13:00:00",
  },
  {
    id: "P008",
    type: "Medication",
    description: "IV Fluids - Dextrose 5% in Normal Saline",
    requestedBy: "Dr. Olivia Davis",
    status: "In Progress",
    dueDate: "2024-12-22 18:00:00",
  },
],

      };
    },

    methods: {
    statusClass(status) {
      switch (status.toLowerCase()) {
        case "urgent":
          return "badge custom-badge urgent";
        case "pending":
          return "badge custom-badge pending";
        case "completed":
          return "badge custom-badge completed";
        case "in progress":
          return "badge custom-badge in-progress";
        default:
          return "badge custom-badge default";
      }
    },
  },
  };
  </script>
  
  <style scoped>
  .card {
    border-radius: 8px;
  }
  
  .table {
    margin: 0;
    border-collapse: separate;
    border-spacing: 0;
  }
  
  .table th,
  .table td {
    vertical-align: middle;
    text-align: center;
  }
  
  .badge {
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
  }

 




.custom-badge.urgent {
  background: #FF26261A;
  color: #FF2626;
}

.custom-badge.pending {
  background-color: #FFAC261A;
  color: #FFAC26;
}

.custom-badge.completed {
  background-color: #d4edda;
  color: #155724;
}

.custom-badge.in-progress {
  background-color: #cce5ff;
  color: #004085;
}

.custom-badge.default {
  background-color: #f8f9fa;
  color: #6c757d;
}

  </style>
  