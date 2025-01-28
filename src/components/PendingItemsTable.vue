<template>
  
        <div class="card p-3 mb-3">
            <p class="mb-3 fs-4 fw-bold">Pending Items for {{ patientName }}</p>

            <div class="custom-table-scroll">
                <table class="table">
                    <thead>
                        <tr style="background: #ECECEC;">
                            <th scope="col">ID</th>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Requested by</th>
                            <th scope="col">Status</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in pendingItems" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.type }}</td>
                            <td>{{ item.description }}</td>
                            <td>{{ item.requested_by }}</td>
                            <td>
                                <span :class="['custom-badge', statusClass(item.status)]">
                                    {{ item.status }}
                                </span>
                            </td>
                            <td>{{ item.due_date }}</td>
                            <td class="gap-3">
                                <!-- Ensure only one modal opens at a time -->
                                <i class="bi bi-pencil edit-icon" @click="openModal(item)"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  
</template>

<script>
export default {
    props: {
        pendingItems: {
            type: Array,
            required: true
        },
        patientName: {
            type: String,
            required: true
        }
    },
    methods: {
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
        openModal(item) {
            this.$emit("openModal", item); // Emit event to parent component
        }
    }
};
</script>

<style scoped>
.custom-table-scroll {
    overflow-x: auto;
    max-width: 100%;
    white-space: nowrap;
    scrollbar-width: thin;
    scrollbar-color: #B3E5FC #f1f1f1;
}

.custom-table-scroll::-webkit-scrollbar {
    height: 4px;
}

.custom-table-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.custom-table-scroll::-webkit-scrollbar-thumb {
    background: #B3E5FC;
    border-radius: 10px;
}

.custom-table-scroll::-webkit-scrollbar-thumb:hover {
    background: #81D4FA;
}

.badge-urgent {
    background: #FF26261A;
    color: #FF2626;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px 10px;
}

.badge-pending {
    background-color: #FFAC261A;
    color: #FFAC26;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px 10px;
}

.badge-completed {
    background-color: #d4edda;
    color: #155724;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px 10px;
}

.badge-in-progress {
    background-color: #cce5ff;
    color: #004085;
    font-size: 12px;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px 10px;
}

.edit-icon {
    color: #007bff;
    cursor: pointer;
    transition: color 0.3s ease;
}

.edit-icon:hover {
    color: #0056b3;
}
</style>
