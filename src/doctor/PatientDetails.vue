<template>
    <div class="container-fluid   pb-4 mb-4 ">


        <div class="row g-2 pb-4">

            <div class="col-12 col-lg-3 col-xl-2">

                <div class="card  patient-card mb-0 pb-0 w-100 h-100 custom-space">
                    <div class="card-body">

                        <div class="row">
                            <div class=" col-md-6 col-lg-12 col-xl-12">
                                <div class="d-flex flex-column align-items-center">
                                    <div class="text-center mb-4">
                                        <img :src="patientData.image" alt="Profile" class="rounded-circle mb-2"
                                            style="width: 100px; height: 100px;" />
                                        <p class="mb-1 fs-6 fw-semibold">{{ patientData.name }}</p>
                                    </div>
                                    <div class="row w-100 text-center mb-3">
                                        <div class="col-6">
                                            <p class="mb-1"><strong>Age</strong></p>
                                            <small class=" fs-6 semibold" >{{ patientData.age }} yrs</small>
                                        </div>
                                        <div class="col-6">
                                            <p class="mb-1"><strong>MRN</strong></p>
                                            <small class=" fs-6 semibold">{{ patientData.mrn }}</small>
                                        </div>
                                        <div class="col-6">
                                            <p class="mb-1"><strong>Patient ID</strong></p>
                                            <small class=" fs-6 semibold">{{ patientData.id }}</small>
                                        </div>
                                        <div class="col-6">
                                            <p class="mb-1"><strong>Gender</strong></p>
                                            <small class=" fs-6 semibold">{{ patientData.gender }}</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class=" col-md-6 col-lg-12  col-xl-12">
                                <div class="lines mb-3 d-none d-lg-block"></div>

                                <div>
                                    <p class="mb-3 text-center "><strong>Upcoming Appointments</strong></p>

                                    <div v-for="(appointment, index) in patientData.appointments" :key="index"
                                        class="d-flex justify-content-center align-items-center flex-column mt-2 mb-2">
                                        <div class="appointment-item d-flex align-items-center mb-0 pb-0">
                                            <div :class="['status-dot', `bg-${appointment.status}`, 'me-2']"></div>
                                            <div>
                                                <p class="mb-1 text-center">{{ appointment.time }}</p>
                                            </div>
                                        </div>
                                        <div class="mt-0 pt-0 px-3 text-center">
                                            <p class="mb-1 text-primary">{{ appointment.type }}</p>
                                            <p class="text-muted small">{{ appointment.doctor }}</p>
                                        </div>
                                    </div>


                                    <div class="lines mb-4" v-if="patientData.appointments.length > 0"></div>
                                </div>



                            </div>



                        </div>
                    </div>

                </div>

            </div>

            <div class="col-12 col-lg-9 col-xl-10">
                <div class="card  h-100  custom-space">
                    <div class="card-body">

                        <!-- Tabs -->
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active tab fs-5 fw-medium" id="working-progress-tab"
                                    data-bs-toggle="tab" data-bs-target="#working-progress" type="button" role="tab"
                                    aria-controls="working-progress" aria-selected="true">
                                    Working Progress Summary
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tab fs-5 fw-medium" id="generate-report-tab "
                                    data-bs-toggle="tab" data-bs-target="#generate-report" type="button" role="tab"
                                    aria-controls="generate-report" aria-selected="false">
                                    Generate Medical Report
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tab fs-5 fw-medium" id="discharge-plan-tab" data-bs-toggle="tab"
                                    data-bs-target="#discharge-plan" type="button" role="tab"
                                    aria-controls="discharge-plan" aria-selected="false">
                                    Discharge Plan
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link tab fs-5 fw-medium" id="follow-up-tab" data-bs-toggle="tab"
                                    data-bs-target="#follow-up" type="button" role="tab" aria-controls="follow-up"
                                    aria-selected="false">
                                    Follow up & Communication
                                </button>
                            </li>
                        </ul>


                        <div class="row   mt-2">
                            <div class="col-md-12 col-xl-8 ">
                                <div class="row mt-4">
                                    <div class="card" style="background: #F8F8F8; border: none;">



                                        <!-- Tab Content -->
                                        <div class="tab-content " id="myTabContent">
                                            <div class="tab-pane fade show active" id="working-progress" role="tabpanel"
                                                aria-labelledby="working-progress-tab">
                                                <WorkingProgressSummary :patient-data="patientData" />
                                            </div>
                                            <div class="tab-pane fade" id="generate-report" role="tabpanel"
                                                aria-labelledby="generate-report-tab">
                                                <!-- <GenerateMedicalReport  /> -->
                                                <GenerateMedicalReport :patient-data="patientData" />

                                            </div>
                                            <div class="tab-pane fade" id="discharge-plan" role="tabpanel"
                                                aria-labelledby="discharge-plan-tab">
                                                <!-- <DischargePlan /> -->
                                                <DischargePlan :patient-data="patientData" :discharge-plan="patientData.dischargePlan" />
                                            </div>
                                            <div class="tab-pane fade" id="follow-up" role="tabpanel"
                                                aria-labelledby="follow-up-tab">
                                                <FollowUpCommunication :patient-data="patientData" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-12 col-xl-4">
                                <div class="row  mt-4 ">
                                    <CommonContent :vital-signs="patientData.vital_signs"
                                        :medications="patientData.medications"
                                        :familyHistory="getFamilyHistory(patientData.family_history)"
                                        :personalHistory="patientData.personal_history"
                                        :allergies="patientData.allergies" :physician_alerts="patientData.physician_alerts" />
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

import WorkingProgressSummary from "@/doctor/WorkingProgressSummary.vue";
import GenerateMedicalReport from "@/doctor/GenerateMedicalReport.vue";
import DischargePlan from "@/doctor/DischargePlan.vue";
import FollowUpCommunication from "@/doctor/FollowUpCommunication.vue";
import CommonContent from "@/doctor/CommonContent.vue";

export default {
    name: "PatientDetails",
    components: {

        WorkingProgressSummary,
        GenerateMedicalReport,
        DischargePlan,
        FollowUpCommunication,
        CommonContent,
    },

    data() {
        return {
            patients: [
                {
                    id: "123456",
                    name: "Tommy Cher",
                    status: "Active",
                    department: "ED-Cardiology",
                    image: require("@/assets/images/tommy.png"),
                    workingSummary: "55yo male with acute chest pain, likely ACS. HTN, T2DM history. VS: BP 150/90, HR 98, RR 22, O2 94%. Active cardiac workup in progress.",
                    age: 7,
                    gender: "Male",
                    mrn: "45678",


                    physician_alerts: [
                        {
                            title: "Increased Work of Breathing",
                            details: {
                                description: "Using accessory muscles, peak flow dropped to 40%",
                                action_required: "Respiratory assessment needed",
                                nurse: "RN Jessica Wong"
                            },
                            time: "14:20"
                        }
                    ],


                    pending_items: [
                        {
                            id: "P007",
                            type: "Respiratory",
                            description: "Peak flow measurement",
                            requested_by: "Dr. Michael Park",
                            status: "Pending",
                            due_date: "2024-12-22 13:00:00"
                        },
                        {
                            id: "P008",
                            type: "Medication",
                            description: "Nebulizer treatment",
                            requested_by: "Nurse Wilson",
                            status: "In Progress",
                            due_date: "2024-12-22 12:30:00"
                        }
                    ],


                    medications: [
                        "Fluticasone/Salmeterol inhaler 2 puffs BID",
                        "Albuterol inhaler 2 puffs Q4H PRN",
                        "Prednisolone 30mg daily",
                        "Montelukast 5mg nightly"
                    ],
                    allergies: [
                        {
                            "substance": "Cats",
                            "reaction": "Triggers asthma"
                        }
                    ],
                    family_history:
                    {
                        father: "Asthma",
                        mother: "Seasonal allergies"
                    },


                    personal_history: [
                        "Asthma (diagnosed age 4)",
                        "Multiple ED visits for asthma exacerbations",
                        "Non-compliant with controller medications"
                    ],
                    summary: [
                        {
                            id: "101",
                            title: "Cardiac Evolution",
                            date: "2024-12-22 09:15:00",
                            doctor: "Dr. John Reynolds",
                            description: "10yo male with history of cardiac murmur. Heart rate 98bpm, regular rhythm. No chest pain or dyspnea. Echo shows mild mitral regurgitation. Cleared for physical activity with monitoring."
                        },
                        {
                            "id": "102",
                            "title": "Follow up Visit",
                            "date": "2024-12-22 13:45:00",
                            "doctor": "Dr. Sarah Thompson",
                            "description": "7yo male presents for routine follow-up. Asthma well-controlled on current regimen. No nighttime symptoms. Peak flow 150 L/min (80% predicted). Continue current medications, follow up in 3 months."
                        },
                        {
                            "id": "103",
                            "title": "Diabetes's Management",
                            "date": "2024-12-22 16:20:00",
                            "doctor": "Dr. James Wilson",
                            "description": "7yo male with Type 1 Diabetes. HbA1c 7.2% (improved from 7.8%). Blood glucose readings 80-150 mg/dL. Good compliance with insulin regimen. Continue current management plan."
                        }
                    ],
                    appointments: [
                        {
                            time: "12/06/2024  10:30 am",
                            type: "Pulmonologist Visit",
                            doctor: "Dr.Michael Park",

                            status: "success",
                        },
                        {
                            time: "12/09/2024  2:00 pm",
                            type: "Asthma Education",
                            doctor: "Respiratory Therapist",

                            status: "success",
                        },
                        {
                            time: "12/13/2024  09:00 pm",
                            type: "PCP Follow-up",
                            doctor: "Dr.Lisa Anderson",

                            status: "success",
                        },
                    ],
                    medicalReport: {
                        patientInformation: {
                            dob: "04/15/1968",
                            primaryPhysician: "Dr. Sarah Thompson",
                            contact: "(555) 123-4567",
                        },
                        medicalHistory: {
                            conditions: ["Type 2 Diabetes (2019)", "Hypertension (2018)"],
                            smokingStatus: "Current smoker (1 pack/day)",
                        },
                        examinationFindings: {
                            bp: "150/90 mmHg",
                            hr: "98 bpm",
                            rr: "18",
                            o2: "94%",
                            temperature: "99.2°F",
                        },
                        investigations: {
                            ECG: "ST-elevation in leads V2-V4",
                            troponin: "2.3 ng/mL",
                            CKMB: "25 U/L",
                        },
                        diagnosis: {
                            primary: "Acute ST-elevation Myocardial Infarction (STEMI)",
                            Secondary: ["Hypertension ", "Type 2 Diabetes Mellitus"],
                        },
                        treatmentPlan: {
                            procedure: "Emergency cardiac catheterization",
                            medications: ["Aspirin", "Beta-blocker", "Metoprolol 5mg IV"],
                        },
                    },
                    dischargePlan: {
                        dischargeInstructions: ["Monitor chest pain symptoms", "take aspirin 81mg daily"],
                        followUp: ["Cardiology: 12/10/2024 @ 10:00 AM", "Diabetes: 12/17/2024"],
                        medication: ["Morning: BP meds", "metformin", "aspirin", "Evening: statin"],
                        lifestyleModification: ["Smoking cessation", "cardiac rehabilitation", "low-sodium diet"],
                    },
                    communicationPlan: {
                        appointmentReminders: [
                            {
                                name: "Cardiology",
                                date: "12/10/2024",
                            },
                            {
                                name: "Diabetes follow-up",
                                date: "12/17/2024",
                            },

                        ],
                        medicationSchedule: ["Morning: BP meds, metformin, aspirin", "Evening: statin"],
                        communicationMethod: {
                            Primary: "SMS",
                            Secondary: "Email",
                            Emergency: "Wife (555) 123-4568",
                            Language: " English",
                        },
                        specialInstructions: ["Daily BP monitoring", "blood glucose logs", "chest pain diary", "cardiac rehab schedule"]
                    },

                    vital_signs: {
                        heart_rate: {
                            value: 110,
                            unit: "bpm",
                            normal_range: "60-100"
                        },
                        blood_pressure: {
                            value: "100/60",
                            unit: "mmHg",
                            normal_range: "90/60-140/90"
                        },
                        respiration_rate: {
                            value: 22,
                            unit: "/min",
                            normal_range: "12-20"
                        },
                        temperature: {
                            value: 38.5,
                            unit: "°C",
                            normal_range: "36.5-37.5",
                            status: "↑"
                        },
                        spo2: {
                            value: 95,
                            unit: "%",
                            normal_range: "95-100"
                        }
                    },
                    section_titles: {
                        vital_signs: "Vital Signs",
                        lab_investigations: "Lab Investigations"
                    },


                },
                {
                    id: "123457",
                    name: "Sarah Mitchell",
                    status: "Active",
                    department: "ED - OB/GYN",
                    image: require("@/assets/images/sarah.png"),
                    workingSummary: "28yo female with ruptured ectopic pregnancy. Unstable VS: BP 90/60, HR 120. Surgical intervention required. 1L hemoperitoneum identified.",
                    age: 28,
                    gender: "femal",
                    mrn: "12345",
                    physician_alerts: [
                        {
                            title: "Post-op Pain Control",
                            details: {
                                description: "Pain score 8/10 despite scheduled medications",
                                action_required: "Pain management review needed",
                                nurse: "RN Emily Davis"
                            },
                            time: "13:45"
                        }
                    ],
                    pending_items: [
                        {
                            id: "P005",
                            type: "Lab Test",
                            description: "Post-op Hemoglobin check",
                            requested_by: "Dr. Rebecca Chen",
                            status: "Urgent",
                            due_date: "2024-12-22 15:00:00"
                        },
                        {
                            id: "P006",
                            type: "Vital Check",
                            description: "Hourly vital signs",
                            requested_by: "Nurse Johnson",
                            status: "In Progress",
                            due_date: "2024-12-22 16:00:00"
                        }
                    ],



                    summary: [
                        {
                            id: "1",
                            title: "Summary #1",
                            date: "2024-12-22 10:30:00",
                            doctor: "Dr. Rebecca Chen",
                            description: "28yo female with ruptured ectopic pregnancy. Hemodynamically unstable, BP 90/60. 1L hemoperitoneum on POCUS. Type and cross sent. Proceeding to emergency surgery."
                        },
                        {
                            id: "2",
                            title: "Summary #2",
                            date: "2024-12-22 15:45:00",
                            doctor: "Dr. Emily Roberts",
                            description: "Post-op: Successful right salpingectomy. Stable vitals, Hgb 8.5. Received 1 unit PRBC. Pain controlled. Early ambulation initiated."
                        }
                    ],

                    appointments: [
                        {
                            time: "12/08/2024 09:00 am",
                            type: "post op check",
                            doctor: "Dr.Rebecca Chen",
                            status: "success",
                        },
                        {
                            time: "01/05/2024 10:00 am",
                            type: "Fertility Consultation",
                            doctor: "Dr.Rebecca Chen",
                            status: "success",
                        },
                        {
                            time: "01/15/2025 03:00 pm",
                            type: "Support Group",
                            doctor: "Dr.Emily Watson",
                            status: "success",
                        },
                        {
                            time: "12/15/2024 11:00 am",
                            type: "OB/GYN Follow-up",
                            doctor: "Dr.Rebecca Chen",
                            status: "success",
                        },
                        {
                            time: "12/13/2024 02:30 pm",
                            type: "Counseling Session",
                            doctor: "Dr.Emily Watson",
                            status: "success",
                        },
                    ],
                    medicalReport: {
                        patientInformation: {
                            dob: "09/23/1995",
                            primaryPhysician: "Dr. Rebecca Chen",
                            contact: "(555) 234-5678",
                        },
                        medicalHistory: {
                            conditions: ["No significant past medical history"],
                        },


                        examinationFindings: {
                            bp: "90/60mmHg",
                            hr: "120 bpm",
                            rr: "20",
                            o2: "96%",
                            temperature: "98.4°F",

                        },

                        investigations: {
                            ECG: "Point-of-care ultrasound: Empty uterus, free fluid in pelvis",
                            CKMB: " 3,500 mIU/mL",
                            troponin: "9.5 g/dL",

                        },
                        diagnosis: {
                            primary: "Ruptured Right Tubal Ectopic Pregnancy",
                            Secondary: "Acute Blood Loss Anemia",

                        },



                        treatmentPlan: {
                            procedure: "Emergency laparoscopic salpingectomy",
                            medications: [" IV fluid resuscitation ", "Type and cross for 2 units PRBCs", "Pain management "],
                        },
                    },

                    dischargePlan: {
                        dischargeInstructions: ["Monitor for fever/bleeding", "no heavy lifting for 2 weeks", "keep incisions clean and dry"],
                        followUp: ["OB/GYN follow-up: 12/15/2024 with Dr. Rebecca Chen"],
                        medication: ["Ferrous sulfate 325mg daily", "Oxycodone 5mg PRN pain", "prenatal vitamins"],
                        lifestyleModification: ["Pelvic rest for 2 weeks", "early OB consultation next pregnancy"]
                    },
                    communicationPlan: {

                        appointmentReminders: [
                            {
                                name: "Post-op check",
                                date: "12/08/2024",
                            },
                            {
                                name: "OB/GYN:",
                                date: "12/15/2024",
                            },
                            {
                                name: " Counseling:",
                                date: "12/13/2024",
                            },
                        ],
                        medicationSchedule: ["Iron supplement with orange juice", "pain meds as needed"],
                        communicationMethod: {
                            Primary: "Phone",
                            Secondary: "Patient Portal",
                            Emergency: "Partner (555) 234-5678",
                            Language: "English",
                        },
                        specialInstructions: ["Report any fever or increased pain", "track bleeding patterns", "emotional support hotline provided"],
                    },


                    vital_signs: {
                        heart_rate: {
                            value: 120,
                            unit: "bpm",
                            normal_range: "60-100"
                        },
                        blood_pressure: {
                            value: "90/60",
                            unit: "mmHg",
                            normal_range: "90/60-140/90"
                        },
                        respiration_rate: {
                            value: 20,
                            unit: "/min",
                            normal_range: "12-20"
                        },
                        temperature: {
                            value: 98.4,
                            unit: "°F",
                            normal_range: "36.5-37.5"
                        },
                        hemoglobin: {
                            value: 9.5,
                            unit: "g/dL",
                            normal_range: "12-15.5"
                        }
                    },

                    medications: [
                        "Ferrous sulfate 325mg daily",
                        "Oxycodone 5mg PRN pain",
                        "Prenatal vitamins"
                    ],
                    allergies: [
                        {
                            substance: "No known drug allergies"
                        }
                    ],
                    family_history: "No significant family history",
                    personal_history: [
                        "G1P0",
                        "First pregnancy",
                        "No chronic medical conditions",
                        "No previous surgeries"
                    ],
                },
                {
                    id: "123458",
                    name: "james Wilson",
                    status: "Active",
                    department: "Pediatric ED",
                    image: require("@/assets/images/patient.jpg"),
                    workingSummary: "7yo male with severe asthma exacerbation. O2 88%, marked respiratory distress. Known asthmatic, trigger: cat exposure. Non-compliant with controller medications.",
                    age: 26,
                    gender: "male",
                    mrn: "45678",

                    physician_alerts: [
                        {
                            title: "Chest Pain Reported",
                            details: {
                                description: "Patient reported 6/10 chest pain at 14:00. Nitro given with partial relief.",
                                action_required: "Pain assessment needed. Consider medication adjustment.",
                                nurse: "RN Sarah Johnson"
                            },
                            time: "14:15"
                        },
                        {
                            title: "BP Elevation",
                            details: {
                                description: "BP 160/95, above parameters set.",
                                action_required: "Review antihypertensive medications",
                                nurse: "RN Michael Chen"
                            },
                            time: "14:30"
                        }
                    ],

                    pending_items: [
                        {
                            id: "P001",
                            type: "Lab Test",
                            description: "Cardiac Enzyme panel - Troponin level",
                            requested_by: "Dr. John Doe",
                            status: "Urgent",
                            due_date: "2024-12-22 14:30:00"
                        },
                        {
                            id: "P002",
                            type: "Imaging",
                            description: "Chest CT Scan with contrast",
                            requested_by: "Dr. Sarah Smith",
                            status: "Pending",
                            due_date: "2024-12-22 14:30:00"
                        }
                    ],



                    summary: [
                        {
                            id: "1",
                            title: "Summary #1",
                            date: "2024-12-22 09:15:00",
                            doctor: "Dr. Sarah Thompson",
                            description: "55yo male presents with acute chest pain. Initial ECG shows ST elevation in V2-V4. Troponin elevated at 2.3 ng/mL. Started on antiplatelet therapy. Cardiac cath lab activated."
                        },
                        {
                            id: "2",
                            title: "Summary #2",
                            date: "2024-12-22 14:30:00",
                            doctor: "Dr. Michael Brown",
                            description: "Post-cardiac catheterization: LAD stent placed. Hemodynamically stable. BP 130/80, HR 75. Started on dual antiplatelet therapy and beta-blocker. Plan for cardiac rehab."
                        }
                    ],
                    appointments: [
                        {
                            time: "12/10/2024  10:00 am",
                            type: "Cardiology Follow-Up",
                            doctor: "Dr.Sarah Thompson",
                            status: "success",
                        },
                        {
                            time: "12/12/2024  02:00 pm",
                            type: "Cardiac Rehab Orientation",
                            doctor: "Rehabilitation Team",
                            status: "success",
                        },
                        {
                            time: "12/17/2024  11:00 am",
                            type: "Diabetes Follow-up",
                            doctor: "Dr.Michael Brown",
                            status: "success",
                        },
                        {
                            time: "01/07/2025  02:30 am",
                            type: "Diabetes Follow-up",
                            doctor: "Cardiac Rehabilitation Session",
                            status: "success",
                        },
                    ],
                    medicalReport: {
                        patientInformation: {
                            dob: "03/12/2016",
                            primaryPhysician: "Dr. Michael Park",
                            contact: "Parents - (555) 345-6789",
                        },
                        medicalHistory: {
                            conditions: [
                                "Asthma (diagnosed age 4)",
                                "Allergic to cats",
                                "Previous ED visits for asthma: 3 times in past year",
                            ],
                        },

                        examinationFindings: {
                            bp: "90/60mmHg",
                            hr: "132 bpm",
                            rr: "36",
                            o2: "86%",
                            temperature: "98.4°F",

                        },


                        investigations: {
                            ECG: "Hyperinflated lungs, no infiltrates",
                            CKMB: " 3,500 mIU/mL",
                            troponin: "pH 7.32, pCO2 45, pO2 65",

                        },


                        diagnosis: {
                            primary: "Severe Acute Asthma Exacerbation",
                            Secondary: " Poorly Controlled Persistent Asthma",
                        },
                        treatmentPlan: {

                            procedure: "Oxygen therapy via non-rebreather mask",
                            medications: ["Albuterol/Ipratropium nebulizersIV ", "MethylprednisoloneIV", "Magnesium sulfateIV", "fluids "]


                        },
                    },

                    dischargePlan: {
                        dischargeInstructions: ["Monitor breathing patterns", "track peak flow readings 2x daily", "avoid known triggers"],
                        followUp: ["Pulmonologist: 12/06/2024", "Asthma education: 12/09/2024"],
                        medication: ["Fluticasone/Salmeterol", "Montelukast", "Albuterol PRN"],
                        lifestyleModification: ["Remove carpets from bedroom", "use HEPA air filters", "regular exercise as tolerated"]
                    },
                    communicationPlan: {

                        appointmentReminders: [
                            {
                                name: "Pulmonologist",
                                date: "12/06/2024",
                            },
                            {
                                name: "Asthma education",
                                date: "12/09/2024",
                            },
                        ],
                        medicationSchedule: ["Morning: Fluticasone/Salmeterol inhaler", "Evening: Montelukast", "Albuterol PRN"],
                        communicationMethod: {

                            Primary: "Parents(cell phones)",
                            Secondary: "Email (email parents )",
                            Emergency: "Father (555) 345-6789 Mother (555) 345-6790",
                            Language: "English/Mandarin",
                        },
                        specialInstructions: ["Daily peak flow readings", "asthma trigger diary", "school nurse notification", "action plan review with parents"],
                    },

                    vital_signs: {
                        heart_rate: {
                            value: 98,
                            unit: "bpm",
                            normal_range: "60-100"
                        },
                        blood_pressure: {
                            value: "150/90",
                            unit: "mmHg",
                            normal_range: "90/60-140/90"
                        },
                        respiration_rate: {
                            value: 22,
                            unit: "/min",
                            normal_range: "12-20"
                        },
                        temperature: {
                            value: 98.6,
                            unit: "°F",
                            normal_range: "36.5-37.5"
                        },
                        spo2: {
                            value: 94,
                            unit: "%",
                            normal_range: "95-100"
                        }
                    },

                    medications: [
                        "Metformin 1000mg BID",
                        "Lisinopril 20mg daily",
                        "Aspirin 325mg daily",
                        "Clopidogrel 600mg loading dose",
                        "Metoprolol 5mg IV"
                    ],
                    allergies: [
                        {
                            substance: "No known drug allergies"
                        }
                    ],
                    family_history: {
                        father: "MI at age 55",
                        mother: "Hypertension",
                        sister: "Type 2 Diabetes"
                    },
                    personal_history: [
                        "Hypertension (diagnosed 2018)",
                        "Type 2 Diabetes (diagnosed 2019)",
                        "Current smoker (1 pack/day)",
                        "No previous surgeries"
                    ],




                },
                {
                    id: "123459",
                    name: "Emily Anderson",
                    status: "Active",
                    department: "ED - Surgery",
                    image: require("@/assets/images/patient1.jpg"),
                    workingSummary: "22yo female with acute appendicitis. RLQ pain, fever 100.9°F. Positive surgical signs. Confirmed on imaging. Scheduled for laparoscopic appendectomy.",
                    age: 22,
                    gender: "female",
                    mrn: "54678",

                    physician_alerts: [
                        {
                            title: "Pre-op Checklist",
                            details: {
                                description: "Consent form pending, NPO status confirmed",
                                action_required: "Complete surgical consent",
                                nurse: "RN David Miller"
                            },
                            time: "13:30"
                        }
                    ],


                    pending_items: [
                        {
                            id: "P009",
                            type: "Lab Test",
                            description: "Pre-op blood work",
                            requested_by: "Dr. James Rodriguez",
                            status: "Urgent",
                            due_date: "2024-12-22 11:00:00"
                        },
                        {
                            id: "P010",
                            type: "Consent",
                            description: "Surgical consent form",
                            requested_by: "Dr. David Kim",
                            status: "Pending",
                            due_date: "2024-12-22 12:00:00"
                        }
                    ],

                    summary: [
                        {
                            id: "1",
                            title: "Summary #1",
                            date: "2024-12-22 12:15:00",
                            doctor: "Dr. James Rodriguez",
                            description: "22yo female with acute appendicitis confirmed on CT. WBC 14.5K, fever 100.9°F. Started on antibiotics. NPO for surgery."
                        },
                        {
                            "id": "2",
                            title: "Summary #2",
                            date: "2024-12-22 17:30:00",
                            doctor: "Dr. David Kim",
                            description: "Successful laparoscopic appendectomy. Minimal blood loss. Tolerating clear liquids. Pain well controlled with oral medications."
                        }
                    ],

                    appointments: [
                        {
                            time: "12/07/2024  09:30 am",
                            type: "Surgical Follow-up",
                            doctor: "Dr.James Rodriguez",
                            status: "success",
                        },
                        {
                            time: "12/11/2024  11:30 am",
                            type: "Surgical Removal",
                            doctor: "Dr.David Kim",
                            status: "success",
                        },
                        {
                            time: "12/21/2024  10:30 am",
                            type: "Final Check",
                            doctor: "Dr.James Rodriguez",
                            status: "success",
                        },
                    ],
                    medicalReport: {
                        patientInformation: {
                            dob: "05/30/2001",
                            primaryPhysician: "Dr. James Rodriguez",
                            contact: "(555) 456-7890",
                        },
                        medicalHistory: {
                            conditions: ["No chronic medical conditions"],
                        },
                        examinationFindings: {
                            bp: "115/75 mmHg",
                            hr: "HR 102",
                            rr: "18",
                            o2: "94%",
                            temperature: "100.9°F",
                        },

                        investigations: {
                            ECG: "ST-elevation in leads V2-V4",
                            troponin: "2.3 ng/mL",
                            CKMB: "25 U/L",
                        },
                        diagnosis: {
                            primary: "Acute Appendicitis",
                            Secondary: "none",
                        },
                        treatmentPlan: {
                            procedure: ["NPO status"],
                            medications: ["IV fluids: Lactated Ringer'sAntibiotics: Ceftriaxone + MetronidazolePain management: Morphine PRN"],
                        },




                    },

                    dischargePlan: {
                        dischargeInstructions: ["Monitor incision sites", "no strenuous activity for 2 weeks", "keep surgical sites clean and dry"],
                        followUp: ["Surgical follow-up: 12/07/2024"],
                        medication: ["Cephalexin 500mg Q6H", "acetaminophen PRN pain"],
                        lifestyleModification: ["Gradual return to normal diet", "start with light walking", "no heavy lifting >10 lbs for 2 weeks"]
                    },
                    communicationPlan: {
                        appointmentReminders: [
                            {
                                name: "Surgical follow-up",
                                date: "12/07/2024",
                            },
                            {
                                name: "Suture removal",
                                date: "12/11/2024",
                            },
                        ],
                        medicationSchedule: ["Antibiotics: 4x daily", "Pain meds: alternate ibuprofen/acetaminophen"],
                        communicationMethod: {
                            Primary: "Personal cell",
                            Secondary: "Parents' phones",
                            Emergency: "Mother (555) 456-7891",
                            Language: "English",
                        },
                        specialInstructions: ["Temperature monitoring, wound care schedule", "Activity level progression"],
                    },


                    medications: [
                        "Cephalexin 500mg Q6H",
                        "Ibuprofen 600mg Q6H PRN",
                        "Acetaminophen 650mg Q6H PRN"
                    ],
                    allergies: [
                        {
                            substance: "No known drug allergies"
                        }
                    ],
                    family_history: "No significant family history",
                    personal_history: [
                        "No chronic medical conditions",
                        "No previous surgeries",
                        "Current: Acute appendicitis"
                    ],


                    vital_signs: {
                        heart_rate: {
                            value: 102,
                            unit: "bpm",
                            normal_range: "60-100"
                        },
                        blood_pressure: {
                            value: "115/75",
                            unit: "mmHg",
                            normal_range: "90/60-140/90"
                        },
                        respiration_rate: {
                            value: 18,
                            unit: "/min",
                            normal_range: "12-20"
                        },
                        temperature: {
                            value: 100.9,
                            unit: "°F",
                            normal_range: "36.5-37.5"
                        },
                        wbc: {
                            value: 14.5,
                            unit: "K/μL",
                            normal_range: "4.5-11.0"
                        }
                    },



                },
                {
                    id: "123460",
                    name: "Michael Chen",
                    status: "Active",
                    department: "ENT",
                    image: require("@/assets/images/micheal.png"),
                    workingSummary: "29yo male with right ear otomycosis following swimming. Failed antibiotic treatment. Presenting with itching, hearing loss, and characteristic fungal plug on examination.",
                    age: 29,
                    gender: "male",
                    mrn: "67890",

                    physician_alerts: [
                        {
                            title: "Medication Due",
                            details: {
                                description: "Antifungal drops due, ear needs cleaning first",
                                action_required: "Order ear cleaning before medication",
                                nurse: "RN Lisa Park"
                            },
                            time: "14:45"
                        }
                    ],



                    pending_items: [


                        {
                            id: "P011",
                            type: "Procedure",
                            description: "Ear canal cleaning",
                            requested_by: "Dr. Robert Lee",
                            status: "Pending",
                            due_date: "2024-12-22 14:00:00"
                        }
                    ],


                    summary: [
                        {
                            id: "1",
                            title: "Summary #1",
                            date: "2024-12-22 09:30:00",
                            doctor: "Dr. Robert Lee",
                            description: "29yo male presents with right ear otomycosis following swimming. Failed prior antibiotic treatment. Pale grayish fungal plug visible. Hearing decreased on right."
                        },
                        {
                            "id": "2",
                            "title": "Summary #2",
                            "date": "2024-12-22 15:45:00",
                            "doctor": "Dr. Sarah Park",
                            "description": "Fungal debris removed. Started on topical antifungal drops. Water precautions discussed. Follow-up scheduled for 1 week."
                        }
                    ],

                    appointments: [
                        {
                            time: "01/02/2025 09:30 am",
                            type: "ENT Follow-up",
                            doctor: "Dr.Sarah Park",
                            status: "success",
                        },
                        {
                            time: "01/02/2025 09:30 am",
                            type: "ENT Follow-up",
                            doctor: "Dr.Sarah Park",
                            status: "success",
                        },
                    ],
                    medicalReport: {
                        patientInformation: {
                            dob: "02/01/1994",
                            contact: "(555) 567-1234",
                        },
                        medicalHistory: {
                            conditions: ["Recent swimming pool exposure", "No previous ear conditions"],
                        },


                        examinationFindings: {
                            bp: "115/75 mmHg",
                            hr: "HR 102",
                            rr: "18",
                            o2: "94%",
                            temperature: "100.9°F",
                        },
                        investigations: {
                            ECG: "Clinical diagnosis based on otoscopic findings",
                            troponin: "2.3 ng/mL",
                            CKMB: "none",
                        },



                        diagnosis: {
                            primary: "Otomycosis (Fungal ear infection)",
                            Secondary: "none",
                        },
                        treatmentPlan: {
                            procedure: "Recent swimming ",
                            medications: [" No previous ear conditions"],
                        },
                    },

                    dischargePlan: {
                        dischargeInstructions: ["Monitor ear symptoms", "avoid water exposure", "keep ear dry"],
                        followUp: ["1 week"],
                        medication: ["Local antifungal drops", "Complete 1-month course"],
                        lifestyleModification: ["Swimming precautions", "Ear protection during bathing"],
                    },




                    communicationPlan: {
                        appointmentReminders: [
                            {
                                name: "ENT",
                                date: "1/2/2025",
                            },
                            {
                                name: "Follow-up",
                                date: "1/9/2025",
                            },
                        ],
                        medicationSchedule: ["Antifungal drops 3x daily", "Treatment calendar provided"],
                        communicationMethod: {
                            Primary: "Primary",
                            Secondary: "SMS",
                            Emergency: "none",
                            Language: "English",
                        },
                        specialInstructions: ["Ear protection guide", "Water exposure log"],
                    },

                    vital_signs: {
                        heart_rate: {
                            value: 132,
                            unit: "bpm",
                            normal_range: "60-100"
                        },
                        respiration_rate: {
                            value: 36,
                            unit: "/min",
                            normal_range: "12-20"
                        },
                        temperature: {
                            value: 98.6,
                            unit: "°F",
                            normal_range: "36.5-37.5"
                        },
                        spo2: {
                            value: 88,
                            unit: "%",
                            normal_range: "95-100"
                        },
                        peak_flow: {
                            value: 45,
                            unit: "% pred",
                            normal_range: "80-100"
                        }
                    },
                    additional_findings: {
                        hearing_loss: {
                            status: "Right",
                            description: "side"
                        }
                    },
                    section_titles: {
                        vital_signs: "Vital Signs",
                        additional_findings: "Additional Findings"
                    },


                    medications: [
                        "Local antifungal drops TID",
                        "Failed previous antibiotic treatment"
                    ],
                    allergies: [
                        {
                            substance: "No known drug allergies"
                        }
                    ],
                    family_history: "No significant family history",
                    personal_history: [
                        "Recent swimming pool exposure",
                        "No previous ear conditions",
                        "Right-sided otomycosis"
                    ],





                },
                {
                    id: "123461",
                    name: "Eleanor Smith",
                    status: "Active",
                    department: "Ophthalmology",
                    image: require("@/assets/images/Elearnor.png"),
                    workingSummary: "70yo female with sudden right eye vision loss, temporal headache, scalp tenderness. Giant cell arteritis suspected. Urgent steroid intervention required.",
                    age: 70,
                    gender: "female",
                    mrn: "45324",
                    physician_alerts: [
                        {
                            title: "Vision Changes",
                            details: {
                                description: "Patient reports worsening right eye vision",
                                action_required: "Urgent ophthalmology review needed",
                                nurse: "RN James Wilson"
                            },
                            time: "14:10"
                        }
                    ],

                    pending_items: [
                        {
                            id: "P012",
                            type: "Lab Test",
                            description: "ESR/CRP repeat",
                            requested_by: "Dr. James Wilson",
                            status: "Urgent",
                            due_date: "2024-12-22 15:30:00"
                        }
                    ],


                    summary: [
                        {
                            id: "1",
                            title: "Summary #1",
                            date: "2024-12-22 10:15:00",
                            doctor: "Dr. James Wilson",
                            description: "70yo female with sudden right eye vision loss, temporal headache. Vision CF only in right eye, RAPD present. ESR and CRP markedly elevated. Giant cell arteritis suspected."
                        },
                        {
                            id: "2",
                            title: "Summary #2",
                            date: "2024-12-22 14:20:00",
                            doctor: "Dr. Emily Chen",
                            description: "Started on high-dose IV steroids. Temporal artery biopsy scheduled. Rheumatology consulted. Vision unchanged but headache improved."
                        }
                    ],

                    appointments: [
                        {
                            time: "12/28/2024 9:20 am",
                            type: "Rhenumatology Consult",
                            doctor: "Dr.james Wilson",
                            status: "success",
                        },
                        {
                            time: "01/02/2025 11:00 am",
                            type: "Ophthalmology Check",
                            doctor: "Dr.Emily Chen",
                            status: "success",
                        },
                    ],
                    medicalReport: {
                        patientInformation: {
                            dob: "01/15/1954",
                            contact: "(555) 678-2345",
                        },
                        medicalHistory: {
                            conditions: ["Peptic ulceration"],
                            medications: ["No regular medications"],
                        },
                        examinationFindings: {
                            bp: "140/75 mmHg",
                            hr: "HR 108",
                            rr: "46",
                            o2: "97%",
                            temperature: "110.4°F",
                        },

                        investigations: {
                            ECG: "CT temporal bone",
                            troponin: "Temporal artery biopsy",
                            CKMB: "Inflammatory markers",
                        },

                        diagnosis: {
                            primary: "Giant Cell Arteritis with Ischemic Optic Neuropathy",
                            Secondary: "none",
                        },


                        treatmentPlan: {
                            procedure: "Urgent rheumatology consultation",
                            medications: ["High-dose systemic steroids"],

                        },
                    },

                    dischargePlan: {
                        dischargeInstructions: ["Monitor vision changes; Report new symptoms", "Take medications as prescribed"],
                        followUp: ["Rheumatology: 12/28/2024", "Ophthalmology: Weekly"],
                        medication: ["High-dose prednisolone", " PPI for gastric protection"],
                        lifestyleModification: ["Regular vision checks", " Calcium/vitamin D supplementation"],
                    },



                    communicationPlan: {
                        appointmentReminders: [
                            {
                                name: "Rheumatology",
                                date: "12/28/2024",
                            },
                            {
                                name: "Ophthalmology",
                                date: "1/2/2025",
                            },
                        ],
                        medicationSchedule: ["Prednisolone taper schedule", "PPI daily"],
                        communicationMethod: {

                            Primary: "Phone",
                            Secondary: "none",
                            Emergency: "Daughter",
                            Language: "English",
                        },
                        specialInstructions: ["Vision diary", "Steroid side effect monitoring"]
                    },

                    vital_signs: {
                        heart_rate: {
                            value: 88,
                            unit: "bpm",
                            normal_range: "60-100"
                        },
                        blood_pressure: {
                            value: "140/85",
                            unit: "mmHg",
                            normal_range: "90/60-140/90"
                        },
                        vision_r: {
                            value: "CF",
                            unit: "",
                            normal_range: "20/20-20/200"
                        },
                        esr: {
                            value: 95,
                            unit: "mm/hr",
                            normal_range: "0-20"
                        },
                        crp: {
                            value: 45,
                            unit: "mg/L",
                            normal_range: "0-3"
                        }
                    },
                    section_titles: {
                        vital_signs: "Vital Signs",
                        lab_tests: "Lab Tests"
                    },


                    medications: [
                        "High-dose prednisolone",
                        "PPI for gastric protection",
                        "Calcium/vitamin D supplementation"
                    ],
                    allergies: [
                        {
                            substance: "Penicillin",
                            reaction: "rash"
                        }
                    ],
                    family_history: {
                        mother: "Rheumatoid arthritis",
                        father: "Coronary artery disease"
                    },
                    personal_history: [
                        "Peptic ulceration",
                        "Suspected giant cell arteritis",
                        "Right eye vision loss"
                    ],





                },
                {
                    id: "123462",
                    name: "David Rodriguez",
                    status: "Active",
                    department: "ENT",
                    image: require("@/assets/images/david.png"),
                    workingSummary: "10yo child with chronic right ear discharge, new onset fever and mastoid tenderness. CSOM with mastoiditis requiring urgent intervention.",
                    age: 10,
                    gender: "male",
                    mrn: "98765",

                    physician_alerts: [
                        {
                            title: "Temperature Spike",
                            details: {
                                description: "Temperature 101.2°F, up from 99.8°F",
                                action_required: "Fever workup needed",
                                nurse: "RN Maria Garcia"
                            },
                            time: "14:25"
                        }
                    ],


                    pending_items: [
                        {
                            id: "P013",
                            type: "Procedure",
                            description: "Ear dressing change",
                            requested_by: "Dr. Michael Torres",
                            status: "Pending",
                            due_date: "2024-12-22 13:30:00"
                        }
                    ],

                    summary: [
                        {
                            id: "1",
                            title: "Summary #1",
                            date: "2024-12-22 11:45:00",
                            doctor: "Dr. Michael Torres",
                            description: "10yo with chronic right ear discharge, new fever and mastoid tenderness. CSOM with mastoiditis diagnosed. CT shows mastoid opacity. Started on IV antibiotics."
                        },
                        {
                            "id": "2",
                            "title": "Summary #2",
                            "date": "2024-12-22 16:30:00",
                            "doctor": "Dr. Lisa Chang",
                            "description": "Mastoidectomy scheduled for tomorrow. Cultures sent. Afebrile on antibiotics. Ear toileting performed. Parents educated about post-op care."
                        }
                    ],

                    appointments: [
                        {
                            time: "12/27/2024  10:00 am",
                            type: "Dressing Change",
                            doctor: "ENT Nurse",
                            status: "success",
                        },
                        {
                            time: "12/29/2024  09:00 am",
                            type: "ENT Follow-up",
                            doctor: "Dr.Michael Torres",
                            status: "success",
                        },
                    ],

                    medicalReport: {
                        patientInformation: {
                            dob: "07/15/2013",
                            contact: "Parents - (555) 789-3456",
                        },
                        medicalHistory: {
                            conditions: ["2-year history of ear discharge"],
                            interventions: ["No previous interventions"],
                        },
                        examinationFindings: {
                            description: "Mucopurulent discharge; Mastoid tenderness; Intact retroauricular sulcus",
                        },

                        investigations: {
                            ECG: "CT temporal bone",
                            troponin: "Culture and sensitivity",
                            CKMB: "CBC",
                        },

                        diagnosis: {
                            primary: "CSOM with Mastoiditis",
                        },
                        treatmentPlan: {
                            procedure: ["IV antibiotics", "Mastoidectomy", "Regular ear toileting"],
                            medications: [""]
                        },
                    },

                    dischargePlan: {
                        dischargeInstructions: ["Monitor bleeding ", " Report any heavy bleeding", " Continue regular medications"],
                        followUp: ["ENT follow-up in 3 days", "Regular dressing changes"],
                        medication: ["Continue diabetes meds", "Continue BP medications"],
                        lifestyleModification: ["Weight management", "Diet control; Regular exercise"]
                    },

                    communicationPlan: {
                        appointmentReminders: [
                            {
                                name: "ENT",
                                date: "12/29/2024",
                            },
                            {
                                name: "Dressing",
                                date: "12/27/2024",
                            },
                        ],

                        medicationSchedule: ["Antibiotics schedule", "Ear drops timing"],
                        communicationMethod: {

                            Primary: "Phone",
                            Secondary: "SMS",
                            Language: "English",
                        },
                        specialInstructions: ["Temperature log", "Discharge monitoring"],
                    },

                    vital_signs: {
                        heart_rate: {
                            value: 110,
                            unit: "bpm",
                            normal_range: "70-120"
                        },
                        temperature: {
                            value: 101.2,
                            unit: "°F",
                            normal_range: "36.5-37.5"
                        },
                        ear_discharge: {
                            status: "Present",
                            normal_range: "None/Present"
                        },
                        pain_score: {
                            value: 7,
                            unit: "/10",
                            normal_range: "0-10"
                        },
                        wbc: {
                            value: 15.2,
                            unit: "K/μL",
                            normal_range: "4.5-11.0"
                        }
                    },
                    section_titles: {
                        vital_signs: "Vital Signs",
                        lab_tests: "Lab Tests"
                    },


                    medications: [
                        "IV antibiotics",
                        "Ear drops",
                        "Pain medication PRN"
                    ],
                    allergies: [
                        {
                            substance: "No known drug allergies"
                        }
                    ],
                    family_history: {
                        sister: "Recurrent ear infections"
                    },
                    personal_history: [
                        "2-year history of ear discharge",
                        "CSOM with mastoiditis",
                        "No previous surgeries"
                    ],


                },
                {
                    id: "123463",
                    name: "Margaret Wilson",
                    status: "Active",
                    department: "GYN",
                    image: require("@/assets/images/magrate.png"),
                    workingSummary: "65yo female with postmenopausal bleeding, T2DM, HTN, BMI 36.6. High-risk for endometrial cancer requiring urgent workup.",
                    age: 72,
                    gender: "female",
                    mrn: "78643",
                    physician_alerts: [
                        {
                            title: "Blood Sugar High",
                            details: {
                                description: "Blood glucose 245 mg/dL before lunch",
                                action_required: "Diabetes management review needed",
                                nurse: "RN John Smith"
                            },
                            time: "13:15"
                        }
                    ],

                    pending_items: [
                        {
                            id: "P014",
                            type: "Lab Test",
                            description: "HbA1c check",
                            requested_by: "Dr. Rebecca Martinez",
                            status: "Pending",
                            due_date: "2024-12-22 16:00:00"
                        }
                    ],
                    summary: [
                        {
                            id: "1",
                            title: "Summary #1",
                            date: "2024-12-22 13:00:00",
                            doctor: "Dr. Rebecca Martinez",
                            description: "65yo female with postmenopausal bleeding. T2DM, HTN, BMI 36.6. Endometrial thickness 12mm on ultrasound. Endometrial biopsy performed."
                        },
                        {
                            id: "2",
                            title: "Summary #2",
                            date: "2024-12-22 17:15:00",
                            doctor: "Dr. Sarah Thompson",
                            description: "Biopsy sent to pathology. Bleeding controlled. Diabetes management optimized. Follow-up scheduled for biopsy results. Urgent return precautions given."
                        }
                    ],

                    appointments: [
                        {
                            time: "12/30/2024 11:30 am",
                            type: "Biopsy Results",
                            doctor: "Dr.Rebecca Martinez",
                            status: "success",
                        },
                        {
                            time: "01/02/2025 10:30 am",
                            type: "Gynecology Follow-up",
                            doctor: "Dr.Sarah Thompson",
                            status: "success",
                        },
                    ],
                    medicalReport: {
                        patientInformation: {
                            dob: "02/20/1959",
                            contact: "(555) 789-4567",
                        },
                        medicalHistory: {
                            conditions: ["T2DM (20 years)", "HTN", "BMI: 36.6"],
                        },

                        examinationFindings: {
                            bp: "120/70 mmHg",
                            hr: "140 bpm",
                            tenderness: "Mastoid tenderness",
                        },

                        investigations: {
                            ECG: "ST-elevation in leads V2-V4",
                            troponin: "2.3 ng/mL",
                            CKMB: "25 U/L",
                        },

                        diagnosis: {
                            primary: "Postmenopausal Bleeding; Rule out Endometrial Cancer",
                            Secondary: "none",
                        },
                        treatmentPlan: {
                            procedure: "Endometrial biopsy Further imaging",
                            medications: ["Adjust diabetes medications"],
                        },
                    },

                    dischargePlan: {
                        dischargeInstructions: ["Monitor bleeding ", " Report any heavy bleeding", " Continue regular medications"],
                        followUp: ["Gynecology in 1 week ", " Urgent if heavy bleeding"],
                        medication: ["Continue diabetes meds", "Continue BP medications"],
                        lifestyleModification: ["Weight management", "Diet control; Regular exercise"]
                    },
                    communicationPlan: {
                        appointmentReminders: [
                            {
                                name: "GYN",
                                date: "1/2/2025",
                            },
                            {
                                name: "Biopsy results",
                                date: "12/30/2024",
                            },
                        ],

                        medicationSchedule: ["Diabetes medications", "BP medications"],
                        communicationMethod: {

                            Primary: "Phone",
                            Secondary: " Portal access provided",
                            Language: "English",
                        },
                        specialInstructions: ["Bleeding diary", "BP monitoring log"],
                    },


                    medications: [
                        "Metformin 1000mg BID",
                        "Lisinopril 40mg daily",
                        "Atorvastatin 20mg daily"
                    ],
                    allergies: [
                        {
                            substance: "Sulfa drugs",
                            reaction: "hives"
                        }
                    ],
                    family_history: {
                        mother: "Type 2 Diabetes",
                        sister: "Endometrial cancer age 60"
                    },
                    personal_history: [
                        "T2DM (20 years duration)",
                        "Hypertension",
                        "BMI 36.6",
                        "Postmenopausal bleeding"
                    ],


                    vital_signs: {
                        heart_rate: {
                            value: 85,
                            unit: "bpm",
                            normal_range: "60-100"
                        },
                        blood_pressure: {
                            value: "145/90",
                            unit: "mmHg",
                            normal_range: "90/60-140/90"
                        },
                        bmi: {
                            value: 36.6,
                            unit: "kg/m²",
                            normal_range: "18.5-24.9"
                        },
                        hba1c: {
                            value: 7.8,
                            unit: "%",
                            normal_range: "4.0-5.6"
                        },
                        bleeding: {
                            status: "Moderate",
                            normal_range: "None/Light/Moderate/Heavy"
                        }
                    },
                    section_titles: {
                        vital_signs: "Vital Signs",
                        lab_tests: "Lab Tests"
                    },

                },
            ],
            patientData: {},
            selectedItem: null, // Stores selected pending item for modal display
        };
    },
    created() {
        const patientId = this.$route.params.id;
        this.patientData = this.fetchPatientDetails(patientId);
    },

    methods: {
        fetchPatientDetails(id) {
            const patient = this.patients.find((patient) => patient.id === id);
            if (!patient) {
                console.error("Patient not found!");
                return {};
            }
            return patient;
        },

        getFamilyHistory(history) {
            if (typeof history === "string") {
                return { "Note": history }; // Convert string into object
            }
            return history; // If already an object, return as is
        },
    },


};
</script>

<style scoped>
.status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.appointment-item {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}

.patient-card {
    border-radius: 16px 0px 0px 0px;

    background: #EEF6FF;

}

.lines {
    background: #C6C6C6;
    height: 2px;
    width: 100%;
}

.nav-tabs .nav-link {
    color: #000;
    border: none;
}

.nav-tabs .nav-link.active {
    color: #4588E0;
    border-bottom: 2px solid #4588E0;

}

.tab-content {
    background-color: #F8F8F8;
}




.nav-tabs {
    border: none !important;
}

.card {
    border: none !important;
}


.card {
    border: 1px solid #EBEBEB;
}



.btn-report {
    background: #4588e0;
    border-radius: 10px;
    color: white;
    border: none;

}

.btn-report:hover {
    background: #4588e0;
    border-radius: 10px;
    color: white;
    border: none;

}

.btn-group {
    background: #E6EAEF;
    border: none;
    color: #161B21;
    border-radius: 10px;
    font-size: 14px;

}

.btn-group:hover {
    background: #4588e0;
    border: none;
    color: #ffff;
    border-radius: 10px;
    font-size: 14px;

}
</style>