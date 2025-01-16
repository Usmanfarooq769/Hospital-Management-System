<template>
    <div class="container-fluid   pb-4 mb-4">


        <div class="row g-2 pb-4">


            <div class="col-12 col-lg-3 col-xl-2">

                <div class="card  patient-card mb-0 pb-0 w-100 h-100 custom-space">
                    <div class="card-body">


                        <div class=" col-md-6 col-lg-12 col-xl-12">
                            <div class="d-flex flex-column align-items-center">
                                <div class="text-center mb-4">
                                    <img :src="patientData.image" alt="Profile" class="rounded-circle mb-2"
                                        style="width: 100px; height: 100px;" />
                                    <p class="mb-1 lg-paragraph">{{ patientData.name }}</p>
                                </div>
                                <div class="row w-100 text-center">
                                    <div class="col-6">
                                        <p class="mb-1"><strong>Age</strong></p>
                                        <p class="md-paragraph">{{ patientData.age }} yrs</p>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-1"><strong>MRN</strong></p>
                                        <p class="md-paragraph">{{ patientData.mrn }}</p>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-1"><strong>Patient ID</strong></p>
                                        <p class="md-paragraph">{{ patientData.id }}</p>
                                    </div>
                                    <div class="col-6">
                                        <p class="mb-1"><strong>Gender</strong></p>
                                        <p class="md-paragraph">{{ patientData.gender }}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class=" col-md-6 col-lg-12 col-xl-12">
                            <div class="lines mb-3"></div>

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

                        <div class="card shadow-sm" style="border: 1px solid #00A0DA; background: transparent">
                            <div class="card-body text-center">

                                <p class="fw-bold  text-color">Care Team </p>
                                <p  class="mb-0 pb-0 fs-6">Dr Sara Thompson  </p>
                                <small class="pt-0 mt-0 text-color">Primary Physician  </small>
                                <p class="fs-6 mb-0 pb-0">Primary Physician </p>
                                <small class="mt-0 pt-0 text-color">Primary Nurse</small>

                    
                


                            </div>
                        </div>


                    </div>

                </div>
                
            </div>


            <div class="col-12 col-lg-9 col-xl-10">
                

                        <div class="card h-100  mb-0 pb-0 custom-space " >
                            <div class="card-body">

                                <!-- Tabs -->
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active tab fs-5 fw-medium" id="working-progress-tab"
                                            data-bs-toggle="tab" data-bs-target="#working-progress" type="button"
                                            role="tab" aria-controls="working-progress" aria-selected="true">
                                            Care Summary
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link tab fs-5 fw-medium" id="generate-report-tab"
                                            data-bs-toggle="tab" data-bs-target="#generate-report" type="button"
                                            role="tab" aria-controls="generate-report" aria-selected="false">
                                            Vital Signs
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link tab fs-5 fw-medium" id="discharge-plan-tab"
                                            data-bs-toggle="tab" data-bs-target="#discharge-plan" type="button"
                                            role="tab" aria-controls="discharge-plan" aria-selected="false">
                                            Treatment Management
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link tab fs-5 fw-medium" id="follow-up-tab"
                                            data-bs-toggle="tab" data-bs-target="#follow-up" type="button" role="tab"
                                            aria-controls="follow-up" aria-selected="false">
                                            Care Plan
                                        </button>
                                    </li>
                                </ul>

                                <div class="row mt-2">
                                    <div class="col-md-12 col-xl-9">
                                        <!-- Tab Content -->
                                        <div class="tab-content mt-4 " id="myTabContent">
                                            <div class="tab-pane fade show active" id="working-progress" role="tabpanel"
                                                aria-labelledby="working-progress-tab">
                                                <div class="card p-4 h-100 " style="background: #F8F8F8;">
                                                    <div class="crad-body">

                                                <CareSummaryTab :patient-data="patientData" />
                                                </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="generate-report" role="tabpanel"
                                                aria-labelledby="generate-report-tab">
                                                <div class="card p-4 h-100 " style="background: #F8F8F8;">
                                                    <div class="crad-body">
                                                <!-- <GenerateMedicalReport  /> -->
                                                <VitalSignsTab :patient-data="patientData" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="tab-pane fade" id="discharge-plan" role="tabpanel"
                                                aria-labelledby="discharge-plan-tab">
                                                <div class="card" style="background: #F8F8F8;">
                                                    <div class="card-body">
                                                <!-- <DischargePlan /> -->
                                                <TreatmentTab :discharge-plan="patientData.dischargePlan" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="follow-up" role="tabpanel"
                                                aria-labelledby="follow-up-tab">
                                                <div class="card" style="background: #F8F8F8;">
                                                    <div class="card-body ">

                                                        <CarePlan :patient-data="patientData" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-xl-3">
                                        <div class="row  mt-4">
                                            <div class="card  shadow-sm h-100" style="border: 1px solid #EBEBEB;">
                                                <div class="card-body">
                                            <CommonContent />
                                        </div>
                                            </div>
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

import CareSummaryTab from "@/nurse/CareSummaryTab.vue";
import VitalSignsTab from "@/nurse/VitalSignsTab.vue";
import TreatmentTab from "@/nurse/TreatmentTab.vue";
import CarePlan from "@/nurse/CarePlan.vue";
import CommonContent from "@/nurse/CommonContent.vue";

export default {
    name: "CareSummary",
    components: {

        CareSummaryTab,
        VitalSignsTab,
        TreatmentTab,
        CarePlan,
        CommonContent,
    },
    data() {
        return {
            patients: [
                {
                    id: "123456",
                    name: "James Wilson",
                    status: "Active",
                    department: "ED-Cardiology",
                    image: require("@/assets/images/patient6.jpg"),
                    workingSummary: "55yo male with acute chest pain, likely ACS. HTN, T2DM history. VS: BP 150/90, HR 98, RR 22, O2 94%. Active cardiac workup in progress.",
                    age: 55,
                    gender: "male",
                    mrn: "12345",
                    appointments: [
                        {
                            time: "08:30 am - 10:30 am",
                            type: "General Checkup",
                            doctor: "Dr. Carol D. Pollack-rundle",
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
                    }
                },
                {
                    id: "123457",
                    name: "Sarah Mitchell",
                    status: "Active",
                    department: "ED - OB/GYN",
                    image: require("@/assets/images/patient2.jpg"),
                    workingSummary: "28yo female with ruptured ectopic pregnancy. Unstable VS: BP 90/60, HR 120. Surgical intervention required. 1L hemoperitoneum identified.",
                    age: 28,
                    gender: "femal",
                    mrn: "12345",
                    appointments: [
                        {
                            time: "06:30 pm - 7:30 pm",
                            type: "General Checkup",
                            doctor: "Dr. Carol D. Pollack-rundle",
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
                    }
                },
                {
                    id: "123458",
                    name: "Tommy Chen",
                    status: "Active",
                    department: "Pediatric ED",
                    image: require("@/assets/images/patient.jpg"),
                    workingSummary: "7yo male with severe asthma exacerbation. O2 88%, marked respiratory distress. Known asthmatic, trigger: cat exposure. Non-compliant with controller medications.",
                    age: 7,
                    gender: "male",
                    mrn: "45678",
                    appointments: [
                        {
                            time: "09:30 am - 10:30 am",
                            type: "General Checkup",
                            doctor: "Dr. Carol D. Pollack-rundle",
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
                    }
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
                    appointments: [
                        {
                            time: "11:00 am - 12:30 am",
                            type: "General Checkup",
                            doctor: "Dr. Carol D. Pollack-rundle",
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

                },
                {
                    id: "123460",
                    name: "Michael Chen",
                    status: "Active",
                    department: "ENT",
                    image: require("@/assets/images/patient5.jpg"),
                    workingSummary: "29yo male with right ear otomycosis following swimming. Failed antibiotic treatment. Presenting with itching, hearing loss, and characteristic fungal plug on examination.",
                    age: 29,
                    gender: "male",
                    mrn: "67890",
                    appointments: [
                        {
                            time: "01:30 am - 12:30 am",
                            type: "General Checkup",
                            doctor: "Dr. Carol D. Pollack-rundle",
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



                },
                {
                    id: "123461",
                    name: "Eleanor Smith",
                    status: "Active",
                    department: "Ophthalmology",
                    image: require("@/assets/images/patient3.png"),
                    workingSummary: "70yo female with sudden right eye vision loss, temporal headache, scalp tenderness. Giant cell arteritis suspected. Urgent steroid intervention required.",
                    age: 70,
                    gender: "female",
                    mrn: "45324",
                    appointments: [
                        {
                            time: "06:00 am - 8:20 am",
                            type: "General Checkup",
                            doctor: "Dr. Carol D. Pollack-rundle",
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
                    }
                },
                {
                    id: "123462",
                    name: "David Rodriguez",
                    status: "Active",
                    department: "ENT",
                    image: require("@/assets/images/patient5.jpg"),
                    workingSummary: "10yo child with chronic right ear discharge, new onset fever and mastoid tenderness. CSOM with mastoiditis requiring urgent intervention.",
                    age: 10,
                    gender: "male",
                    mrn: "98765",
                    appointments: [
                        {
                            time: "09:00 am - 10:30 am",
                            type: "General Checkup",
                            doctor: "Dr. Carol D. Pollack-rundle",
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
                    }
                },
                {
                    id: "123463",
                    name: "Margaret Wilson",
                    status: "Active",
                    department: "GYN",
                    image: require("@/assets/images/patient3.png"),
                    workingSummary: "65yo female with postmenopausal bleeding, T2DM, HTN, BMI 36.6. High-risk for endometrial cancer requiring urgent workup.",
                    age: 65,
                    gender: "female",
                    mrn: "78643",
                    appointments: [
                        {
                            time: "09:30 am - 11:30 am",
                            type: "General Checkup",
                            doctor: "Dr. Carol D. Pollack-rundle",
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
                    }
                },
            ],
            patientData: {},
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
    },


};
</script>

<style scoped>
.text-color{
    color: #00A0DA;
}
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

.nav-tabs {
    border: none !important;
}

.nav-tabs .nav-link {
    color: #161B21;

    border: none;

}

.nav-tabs .nav-link.active {
    color: #4588e0;
    border-bottom: 2px solid #4588e0;

}

.tab-content {


    background-color: #F8F8F8;
}




.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
    /* Set scrollbar width */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #55A2FF;
    border-radius: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background-color: #ffff;

}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #55A2FF;
}

.custom-scrollbar::-webkit-scrollbar-thumb:horizontal {
    height: 4px !important;
}

.card {
    border: 1px solid #EBEBEB;
}
</style>