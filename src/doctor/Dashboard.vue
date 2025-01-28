<template>
    <div class="container-fluid  pb-4 " >
       
        <div class="row   ">
            <div class=" col-12 col-lg-9 ">
                <!-- Welcome and Search Section -->
                <div class="d-flex justify-content-between align-items-center mb-4  custom-space">
                    <h2 class="fs-3 fw-bold">Welcome, Dr. Smith!</h2>
                    <div class="search-bar">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search" />
                    </div>
                </div>

                <!-- Top Statistics Section -->
                <div class="row g-2 ">
                    <div class="col-md-3">
                        <div class="card text-center p-2   h-100">
                            <i class="bi bi-calendar-event mb-1 " style="font-size: 24px;color: #00A0DA;"></i>
                            <p class="  fw-bold mb-0 pb-0">Appointments</p>
                            <small class="text-muted mt-1 pt-0">08 Today</small>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-center p-2   h-100" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class="bi bi-people text-success mb-1" style="font-size: 24px;"></i>
                            <p class="  fw-bold mb-0 pb-0">Patients</p>
                            <small class="text-muted mt-1 pt-0" >8
                                Active</small>

                        </div>
                    </div>


                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-md">
                            <div class="modal-content p-4">
                                <div class="modal-header">
                                    <h6 class="modal-title  card-heading" id="staticBackdropLabel">
                                        Patients
                                    </h6>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                   
                                    <!-- Search Bar -->
                                    <input type="text" v-model="searchQuery" class="form-control mb-3"
                                        placeholder="Search patients by name..." />
                                   
                                    <!-- Patient List -->
                                    <div class="patient-list overflow-auto custom-scrollbar ">
                                        <div v-for="patient in filteredPatients" :key="patient.id"
                                            class="d-flex align-items-center justify-content-between p-2 border-bottom"
                                            @click="goToPatientDetails(patient.id)" style="cursor: pointer;">
                                            <div class="d-flex align-items-center">
                                                <!-- Display the patient's image -->
                                                <img :src="patient.image" alt="Patient Avatar"
                                                    class="rounded-circle me-3" width="40" height="40" />
                                                <div>
                                                    <p class="mb-0"><strong>{{ patient.name }}</strong></p>
                                                    <small>ID: {{ patient.id }} - {{ patient.department }}</small>
                                                </div>
                                            </div>
                                            <span class="badge success-bg" style="height: 25px; line-height: 20px;">
                                                {{ patient.status }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="card text-center p-2   h-100">
                            <i class="bi bi-clock text-warning mb-1" style="font-size: 24px;"></i>
                            <p class="  fw-bold mb-0 pb-0">On Duty</p>
                            <small class="text-muted mt-1 pt-0">Until 6 PM</small>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-center p-2   h-100">
                            <i class="bi bi-file-text text-purple mb-1" style="font-size: 24px;"></i>
                            <p class="  fw-bold mb-0 pb-0">Reports</p>
                            <small class="text-muted mt-1 pt-0">05 Pending</small>
                        </div>
                    </div>
                </div>
                <!-- Main Content Section -->
                <div class="row  mt-2">
                        <!-- Upcoming Appointments -->
                        <div class="col-md-6">
                            <div class="card p-4 h-100">
                                <p class="fs-4 fw-bold mb-2">Upcoming Appointments</p>

                                <div class="row  overflow-auto custom-scrollbar px-3 ">


                                    <div v-for="appointment in appointments" :key="appointment.id" class="p-2 mt-2"
                                        style="background: #F8F8F8; border-radius: 8px;">
                                        <div class="d-flex align-items-center justify-content-between mb-0 pb-0 mt-2">
                                            <div class="div">
                                                <p class="mb-0 fw-bold">{{ appointment.name }}</p>
                                                <small class="mb-0 text-muted">{{ appointment.type
                                                        }}
                                                </small>
                                            </div>
                                            <div class="div">
                                                <p class="mb-0 pb-0 fs-6">{{ appointment.time }}</p>
                                                <small><a href="#" class="pt-0 ">View more details</a></small>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <!-- Recent Patients -->

                        <div class="col-md-6">
                            <div class="card p-3 h-100">
                                <p class="fs-4 fw-bold mb-3">Recent Patients</p>
                                <div class="row overflow-auto custom-scrollbar px-3">
                                    <div v-for="patient in recentPatients" :key="patient.id" class="p-2 mt-2"
                                        style="background: #F8F8F8; border-radius: 8px;">
                                        <div class="d-flex align-items-center justify-content-between mb-0 pb-0">
                                            <div class="div">
                                                <p class="mb-0 fw-bold">{{ patient.name }}</p>
                                                <small class="mb-0 text-muted"><strong class="md-paragraph">Room: {{ patient.room
                                                        }}</strong></small>
                                            </div>
                                            <div class="div text-center">
                                                <span :class="[
                                                    'badge mt-3',
                                                    {
                                                        'success-bg': patient.status === 'Admitted',
                                                        'emergency-bg': patient.status === 'Emergency',
                                                        'out-bg': patient.status === 'Outpatient',
                                                    },
                                                ]">
                                                    {{ patient.status }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

            </div>
            <div class="col-12 col-lg-3">
                <div class="row g-2">
                    <!-- Card 1 -->
                    <div class="col-6 col-lg-12">
                        <div class="card p-4  custom-space" >
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-clock me-2" style="font-size: 24px; color:#00A0DA;"></i>
                                <p class="mb-0 fw-bold">Working Progress</p>
                            </div>
                            <p class="mb-0 lg-heading custom-color">28</p>
                            <small class="text-muted">Active Patient cases</small>
                        </div>
                    </div>
                    <!-- Card 2 -->
                    <div class="col-6 col-lg-12">
                        <div class="card p-4  ">
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-file-text me-2" style="font-size: 24px; color:#00A0DA;"></i>
                                <p class="mb-0 fw-bold">Medical Reports</p>
                            </div>
                            <p class="mb-0 lg-heading custom-color">156</p>
                            <small class="text-muted">Generated this month</small>
                        </div>
                    </div>
                    <!-- Card 3 -->
                    <div class="col-6 col-lg-12">
                        <div class="card p-4  ">
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-file-text me-2" style="font-size: 24px; color:#00A0DA;"></i>
                                <p class="mb-0 fw-bold">Discharge Plan</p>
                            </div>
                            <p class="mb-0 lg-heading custom-color">106</p>
                            <small class="text-muted">Pending Review</small>
                        </div>
                    </div>
                    <!-- Card 4 -->
                    <div class="col-6 col-lg-12">
                        <div class="card p-4  ">
                            <div class="d-flex align-items-center mb-2">
                                <i class="bi bi-file-text me-2" style="font-size: 24px; color:#00A0DA;"></i>
                                <p class="mb-0 fw-bold">Follow ups</p>
                            </div>
                            <p class="mb-0 lg-heading custom-color">125</p>
                            <small class="text-muted">Schedule this week</small>
                        </div>
                    </div>
                    <!-- Card 5 -->
                    <div class="col-12 col-lg-12">
                        <div class="card p-4  ">
                            <h6 class="card-heading mb-3">Quick Actions</h6>
                            <div class="d-flex flex-wrap flex-lg-column gap-2">
                                <button class="btn quick-btn w-100">Create Medical Report</button>
                                <button class="btn quick-btn w-100">View Patient Records</button>
                                <button class="btn quick-btn w-100">Schedule Follow-Ups</button>
                                <button class="btn quick-btn w-100">Update Discharge Plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>




export default {
    name: "DoctorDashboard",
    
    data() {
        return {
            searchQuery: "",

            appointments: [
                { id: 1, name: "John Doe", type: "Follow Up", time: "9:30 AM" },
                { id: 2, name: "James Carter", type: "General Checkup", time: "10:30 AM" },
                { id: 3, name: "Michael Bennett", type: "Dental Check", time: "11:30 AM" },
                { id: 4, name: "Emma Brown", type: "Eye Exam", time: "12:30 PM" },
                { id: 5, name: "David Johnson", type: "Follow Up", time: "1:30 PM" },
                { id: 6, name: "Olivia Martin", type: "Routine Checkup", time: "2:00 PM" },
                { id: 7, name: "Ethan Harris", type: "Vaccination", time: "2:45 PM" },
                { id: 8, name: "Sophia Turner", type: "Physical Therapy", time: "3:15 PM" },
                { id: 9, name: "Liam Parker", type: "Blood Work", time: "3:45 PM" },
                { id: 10, name: "Charlotte Hall", type: "Consultation", time: "4:15 PM" },
                { id: 11, name: "Henry Green", type: "Cardiology", time: "4:45 PM" },
                { id: 12, name: "Amelia Clark", type: "ENT Exam", time: "5:15 PM" },
                { id: 13, name: "William Evans", type: "Orthopedic Check", time: "5:45 PM" },
                { id: 14, name: "Lucas Lee", type: "Immunization", time: "6:15 PM" },
                { id: 15, name: "Isabella Harris", type: "Wellness Check", time: "6:45 PM" },
                { id: 16, name: "Emma Foster", type: "Nutrition Consultation", time: "7:15 PM" },
                { id: 17, name: "Evelyn White", type: "Dermatology", time: "7:45 PM" },
                { id: 18, name: "Oliver Nelson", type: "Follow Up", time: "8:15 PM" },
            ],
            recentPatients: [
                { id: 1, name: "Alice Johnson", room: "2001", status: "Admitted" },
                { id: 2, name: "Sophia Wilson", room: "2002", status: "Emergency" },
                { id: 3, name: "Ava White", room: "2003", status: "Outpatient" },
                { id: 4, name: "Isabella Moore", room: "2004", status: "Outpatient" },
                { id: 5, name: "Mia Taylor", room: "2005", status: "Outpatient" },
                { id: 6, name: "Benjamin Carter", room: "2006", status: "Admitted" },
                { id: 7, name: "Grace Adams", room: "2007", status: "Emergency" },
                { id: 8, name: "Lucas Scott", room: "2008", status: "Outpatient" },
                { id: 9, name: "Ella Baker", room: "2009", status: "Admitted" },
                { id: 10, name: "Mason Rivera", room: "2010", status: "Emergency" },
                { id: 11, name: "Harper Collins", room: "2011", status: "Outpatient" },
                { id: 12, name: "Evelyn Brooks", room: "2012", status: "Admitted" },
                { id: 13, name: "Jackson Martinez", room: "2013", status: "Emergency" },
                { id: 14, name: "Lily Cooper", room: "2014", status: "Outpatient" },
                { id: 15, name: "Samuel Parker", room: "2015", status: "Admitted" },
                { id: 16, name: "Victoria Gomez", room: "2016", status: "Outpatient" },
                { id: 17, name: "Logan Sanders", room: "2017", status: "Emergency" },
                { id: 18, name: "Madison Gray", room: "2018", status: "Admitted" },
            ],


            patients: [
                {
                    id: "123456",
                   
                    name: "Tommy Chen",
                    status: "Active",
                    department: "Pediatric ED",
                    image: require("@/assets/images/tommy.png"),
                    
                    workingSummary: "55yo male with acute chest pain, likely ACS. HTN, T2DM history. VS: BP 150/90, HR 98, RR 22, O2 94%. Active cardiac workup in progress.",
                    age: 55,
                    gender: "male",
                    mrn: "12345",
                    appointments:
                    {
                        time: "12/06/2024  10:30 am",
                        type: "Pulmonologist Visit",
                        doctor: "Dr.Michael Park",
                        status: "success"
                    },

                    medicalReport: {
                        patientInformation: "DOB: 04/15/1968, Primary Physician: Dr. Sarah Thompson, Contact: (555) 123-4567",
                        medicalHistory: "Hypertension (2018), Type 2 Diabetes (2019), Current smoker (1 pack/day)",
                        examinationFindings: "BP 150/90 mmHg, HR 98 bpm, O2 94%, Regular rhythm, no murmurs",
                        investigations: "ECG: ST-elevation in leads V2-V4, Troponin I: 2.3 ng/mL, CK-MB: 25 U/L",
                        diagnosis: "Acute ST-elevation Myocardial Infarction (STEMI)",
                        treatmentPlan: "Emergency cardiac catheterization, aspirin, beta-blocker, metoprolol 5mg IV"
                    },
                    dischargePlan: {
                        dischargeInstructions: "Monitor chest pain symptoms, take aspirin 81mg daily",
                        followUp: "Cardiology: 12/10/2024 @ 10:00 AM, Diabetes: 12/17/2024",
                        medication: "Morning: BP meds, metformin, aspirin; Evening: statin",
                        lifestyleModification: "Smoking cessation, cardiac rehabilitation, low-sodium diet"
                    },
                    communicationPlan: {
                        appointmentReminders: "Cardiology: 12/10/2024 @ 10:00 AM, Diabetes follow-up: 12/17/2024",
                        medicationSchedule: "Morning: BP meds, metformin, aspirin; Evening: statin",
                        communicationMethod: "Primary: SMS; Secondary: Email; Emergency contact: Wife (555) 123-4568; Language: English",
                        specialInstructions: "Daily BP monitoring, blood glucose logs, chest pain diary, cardiac rehab schedule"
                    }
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
                    appointments:
                    {
                        time: "06:30 pm - 7:30 pm",
                        type: "General Checkup",
                        doctor: "Dr. Carol D. Pollack-rundle",
                        status: "success",
                    },
                    medicalReport: {
                        patientInformation: "DOB: 09/23/1995, Primary Physician: Dr. Rebecca Chen, Contact: (555) 234-5678",
                        medicalHistory: "No significant past medical history",
                        examinationFindings: "BP 90/60 mmHg, HR 120 bpm, lower quadrant tenderness",
                        investigations: "Point-of-care ultrasound: Empty uterus, free fluid in pelvis, β-hCG: 3,500 mIU/mL",
                        diagnosis: "Ruptured Right Tubal Ectopic Pregnancy",
                        treatmentPlan: "Emergency laparoscopic salpingectomy, IV fluid resuscitation"
                    },
                    dischargePlan: {
                        dischargeInstructions: "Monitor for fever/bleeding, no heavy lifting for 2 weeks, keep incisions clean and dry",
                        followUp: "OB/GYN follow-up: 12/15/2024 with Dr. Rebecca Chen",
                        medication: "Ferrous sulfate 325mg daily, Oxycodone 5mg PRN pain, prenatal vitamins",
                        lifestyleModification: "Pelvic rest for 2 weeks, early OB consultation next pregnancy"
                    },
                    communicationPlan: {
                        appointmentReminders: "Post-op check: 12/08/2024, OB/GYN: 12/15/2024, Counseling: 12/13/2024",
                        medicationSchedule: "Iron supplement with orange juice, pain meds as needed",
                        communicationMethod: "Primary: Phone; Secondary: Patient Portal; Emergency: Partner (555) 234-5678; Language: English",
                        specialInstructions: "Report any fever or increased pain, track bleeding patterns, emotional support hotline provided"
                    }
                },
                {
                    id: "123458",
                    name: "James Wilson",
                    status: "Active",
                    department: "ED-Cardiology",
                    image: require("@/assets/images/patient.jpg"),
                    workingSummary: "7yo male with severe asthma exacerbation. O2 88%, marked respiratory distress. Known asthmatic, trigger: cat exposure. Non-compliant with controller medications.",
                    age: 7,
                    gender: "male",
                    mrn: "45678",
                    appointments:
                    {
                        time: "09:30 am - 10:30 am",
                        type: "General Checkup",
                        doctor: "Dr. Carol D. Pollack-rundle",
                        status: "success",
                    },
                    medicalReport: {
                        patientInformation: "DOB: 03/12/2016, Primary Physician: Dr. Michael Park, Contact: Parents - (555) 345-6789",
                        medicalHistory: "Asthma (diagnosed age 4), allergic to cats, previous ED visits for asthma: 3 times in past year",
                        examinationFindings: "Bilateral wheezing, accessory muscle use, O2 88%",
                        investigations: "Chest X-ray: Hyperinflated lungs, Blood gas: pH 7.32, pCO2 45",
                        diagnosis: "Severe Acute Asthma Exacerbation",
                        treatmentPlan: "Oxygen therapy, IV methylprednisolone, nebulizers"
                    },
                    dischargePlan: {
                        dischargeInstructions: "Monitor breathing patterns, track peak flow readings 2x daily, avoid known triggers",
                        followUp: "Pulmonologist: 12/06/2024, Asthma education: 12/09/2024",
                        medication: "Fluticasone/Salmeterol, Montelukast, Albuterol PRN",
                        lifestyleModification: "Remove carpets from bedroom, use HEPA air filters, regular exercise as tolerated"
                    },
                    communicationPlan: {
                        appointmentReminders: "Pulmonologist: 12/06/2024, Asthma education: 12/09/2024",
                        medicationSchedule: "Morning: Fluticasone/Salmeterol inhaler; Evening: Montelukast, Albuterol PRN",
                        communicationMethod: "Primary: Parents' cell phones; Secondary: Email to both parents; Emergency: Father (555) 345-6789; Mother (555) 345-6790; Language: English/Mandarin",
                        specialInstructions: "Daily peak flow readings, asthma trigger diary, school nurse notification, action plan review with parents"
                    }
                },
                {
                    id: "123459",
                    name: "Emily Anderson",
                    status: "Active",
                    department: "ED - Surgery",
                    image: require("@/assets/images/Elearnor.png"),
                    workingSummary: "22yo female with acute appendicitis. RLQ pain, fever 100.9°F. Positive surgical signs. Confirmed on imaging. Scheduled for laparoscopic appendectomy.",
                    age: 22,
                    gender: "female",
                    mrn: "54678",
                    appointments:
                    {
                        time: "11:00 am - 12:30 am",
                        type: "General Checkup",
                        doctor: "Dr. Carol D. Pollack-rundle",
                        status: "success",
                    },
                    medicalReport: {
                        patientInformation: "DOB: 05/30/2001, Primary Physician: Dr. James Rodriguez, Contact: (555) 456-7890",
                        medicalHistory: "No chronic medical conditions",
                        examinationFindings: "RLQ tenderness, positive McBurney's point tenderness",
                        investigations: "CT Abdomen: 7mm appendix with surrounding inflammation",
                        diagnosis: "Acute Appendicitis",
                        treatmentPlan: "Laparoscopic appendectomy, IV fluids, antibiotics"
                    },
                    dischargePlan: {
                        dischargeInstructions: "Monitor incision sites, no strenuous activity for 2 weeks, keep surgical sites clean and dry",
                        followUp: "Surgical follow-up: 12/07/2024",
                        medication: "Cephalexin 500mg Q6H, acetaminophen PRN pain",
                        lifestyleModification: "Gradual return to normal diet, start with light walking, no heavy lifting >10 lbs for 2 weeks"
                    },
                    communicationPlan: {
                        appointmentReminders: "Surgical follow-up: 12/07/2024, Suture removal: 12/11/2024",
                        medicationSchedule: "Antibiotics: 4x daily, pain meds: alternate ibuprofen/acetaminophen",
                        communicationMethod: "Primary: Personal cell; Secondary: Parents' phones; Emergency: Mother (555) 456-7891; Language: English",
                        specialInstructions: "Temperature monitoring, wound care schedule, activity level progression"
                    }
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
                    appointments:
                    {
                        time: "01:30 am - 12:30 am",
                        type: "General Checkup",
                        doctor: "Dr. Carol D. Pollack-rundle",
                        status: "success",
                    },
                    medicalReport: {
                        patientInformation: "DOB: 02/01/1994, Contact: (555) 567-1234",
                        medicalHistory: "Recent swimming pool exposure; No previous ear conditions",
                        examinationFindings: "Pale grayish fungal plug, fluffy appearance, dark spots present",
                        investigations: "Clinical diagnosis based on otoscopic findings",
                        diagnosis: "Otomycosis (Fungal ear infection)",
                        treatmentPlan: "Physical removal of fungal debris, local antifungal medication"
                    },
                    dischargePlan: {
                        dischargeInstructions: "Monitor ear symptoms, avoid water exposure, keep ear dry",
                        followUp: "ENT follow-up: 1 week",
                        medication: "Local antifungal drops; Complete 1-month course",
                        lifestyleModification: "Swimming precautions; Ear protection during bathing"
                    },
                    communicationPlan: {
                        appointmentReminders: "ENT: 1/2/2025; Follow-up: 1/9/2025",
                        medicationSchedule: "Antifungal drops 3x daily; Treatment calendar provided",
                        communicationMethod: "Primary: SMS; Secondary: Email; Language: English",
                        specialInstructions: "Ear protection guide; Water exposure log"
                    }
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
                    appointments:
                    {
                        time: "06:00 am - 8:20 am",
                        type: "General Checkup",
                        doctor: "Dr. Carol D. Pollack-rundle",
                        status: "success",
                    },
                    medicalReport: {
                        patientInformation: "DOB: 01/15/1954, Contact: (555) 678-2345",
                        medicalHistory: "Peptic ulceration; No regular medications",
                        examinationFindings: "Right eye visual acuity: CF only; RAPD present; Mild optic disc swelling",
                        investigations: "ESR, CRP; Temporal artery biopsy; CBC, Inflammatory markers",
                        diagnosis: "Giant Cell Arteritis with Ischemic Optic Neuropathy",
                        treatmentPlan: "High-dose systemic steroids; Urgent rheumatology consultation"
                    },
                    dischargePlan: {
                        dischargeInstructions: "Monitor vision changes; Report new symptoms; Take medications as prescribed",
                        followUp: "Rheumatology: 12/28/2024; Ophthalmology: Weekly",
                        medication: "High-dose prednisolone; PPI for gastric protection",
                        lifestyleModification: "Regular vision checks; Calcium/vitamin D supplementation"
                    },
                    communicationPlan: {
                        appointmentReminders: "Rheumatology: 12/28/2024; Ophthalmology: 1/2/2025",
                        medicationSchedule: "Prednisolone taper schedule; PPI daily",
                        communicationMethod: "Primary: Phone; Emergency: Daughter; Language: English",
                        specialInstructions: "Vision diary; Steroid side effect monitoring"
                    }
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
                    appointments:
                    {
                        time: "09:00 am - 10:30 am",
                        type: "General Checkup",
                        doctor: "Dr. Carol D. Pollack-rundle",
                        status: "success",
                    },
                    medicalReport: {
                        patientInformation: "DOB: 07/15/2013, Contact: Parents - (555) 789-3456",
                        medicalHistory: "2-year history of ear discharge; No previous interventions",
                        examinationFindings: "Mucopurulent discharge; Mastoid tenderness; Intact retroauricular sulcus",
                        investigations: "CT temporal bone; Culture and sensitivity; CBC",
                        diagnosis: "CSOM with Mastoiditis",
                        treatmentPlan: "IV antibiotics; Mastoidectomy; Regular ear toileting"
                    },
                    dischargePlan: {
                        dischargeInstructions: "Keep ear dry; Monitor fever; Monitor discharge",
                        followUp: "ENT follow-up in 3 days",
                        medication: "Oral antibiotics; Ear drops; Pain medication",
                        lifestyleModification: "Water precautions; Regular ear cleaning"
                    },
                    communicationPlan: {
                        appointmentReminders: "ENT: 12/29/2024; Dressing: 12/27/2024",
                        medicationSchedule: "Antibiotics schedule; Ear drops timing",
                        communicationMethod: "Primary: Phone; Secondary: SMS; Language: English",
                        specialInstructions: "Temperature log; Discharge monitoring"
                    }
                },
                {
                    id: "123463",
                    name: "Margaret Wilson",
                    status: "Active",
                    department: "GYN",
                    image: require("@/assets/images/magrate.png"),
                    workingSummary: "65yo female with postmenopausal bleeding, T2DM, HTN, BMI 36.6. High-risk for endometrial cancer requiring urgent workup.",
                    age: 65,
                    gender: "female",
                    mrn: "78643",
                    appointments:
                    {
                        time: "09:30 am - 11:30 am",
                        type: "General Checkup",
                        doctor: "Dr. Carol D. Pollack-rundle",
                        status: "success",
                    },
                    medicalReport: {
                        patientInformation: "DOB: 02/20/1959, Contact: (555) 789-4567",
                        medicalHistory: "T2DM (20 years); HTN; BMI: 36.6",
                        examinationFindings: "Normal-sized uterus; No vulvar/vaginal/cervical lesions",
                        investigations: "Endometrial biopsy; Transvaginal ultrasound; CBC, HbA1c",
                        diagnosis: "Postmenopausal Bleeding; Rule out Endometrial Cancer",
                        treatmentPlan: "Endometrial biopsy; Further imaging; Adjust diabetes medications"
                    },
                    dischargePlan: {
                        dischargeInstructions: "Monitor bleeding; Report any heavy bleeding; Continue regular medications",
                        followUp: "Gynecology in 1 week; Urgent if heavy bleeding",
                        medication: "Continue diabetes meds; Continue BP medications",
                        lifestyleModification: "Weight management; Diet control; Regular exercise"
                    },
                    communicationPlan: {
                        appointmentReminders: "GYN: 1/2/2025; Biopsy results: 12/30/2024",
                        medicationSchedule: "Diabetes medications; BP medications",
                        communicationMethod: "Primary: Phone; Portal access provided; Language: English",
                        specialInstructions: "Bleeding diary; BP monitoring log"
                    }
                },
            ],


        };
    },

    computed: {
        filteredPatients() {
            return this.patients.filter((patient) =>
                patient.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {

        getBadgeClass(status) {
            return {
                "badge-success": status === "Active",
                "badge-danger": status === "Critical",
                "badge-warning": status === "Pending",
            };
        },


        goToPatientDetails(id) {
  // Manually hide the modal
  const modalElement = document.getElementById('staticBackdrop');
  if (modalElement) {
    modalElement.classList.remove('show');
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.style.display = 'none';
  }

  // Remove the backdrop manually
  const backdrops = document.querySelectorAll('.modal-backdrop');
  backdrops.forEach((backdrop) => backdrop.remove());

  // Remove the 'modal-open' class and restore body scrolling
  const body = document.body;
  body.classList.remove('modal-open');
  body.style.overflow = '';
  body.style.paddingRight = '';

  // Navigate to the next page
  this.$router
    .push({ name: 'PatientDetails', params: { id } })
    .catch((err) => {
      if (err.name !== 'NavigationDuplicated') {
        console.error(err);
      }
    });
}



    },
};
</script>



<style scoped>
.custom-color{
    color: #00a0da;
}
.emergency-bg {
    background: #FF26261A;
    color: #FF2626;
    border-radius: 8px;
    height: 23px;

}

.out-bg {
    background: #5707951A;
    color: #570795;
    border-radius: 8px;
    height: 23px;

}

.success-bg {
    background: #73F85142;
    color: #297711;
    border-radius: 8px;
    height: 23px;


}



.appointment-item,
.patient-item {
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 8px;
    margin-bottom: 8px;
}

.patient-item .badge {
    font-size: 12px;
}

.quick-btn {
    border: 1px solid #00A0DA;
    color: #00A0DA;
    background: #ffff;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 16.94px;

}

.quick-btn:hover {
    border: 1px solid #00A0DA;
    color: #ffff;
    background: #00A0DA;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 16.94px;

}

.custom-scrollbar {
    max-height: 630px;
}

.text-purple {
    color: #6f42c1;
}

.search-bar input {
    max-width: 250px;
    border-radius: 8px;
}

.patient-list img {
    margin-right: 10px;
}

.patient-list .badge-success {
    background-color: #28a745;
    color: white;
}

.patient-list .badge-danger {
    background-color: #dc3545;
    color: white;
}

.patient-list .badge-warning {
    background-color: #ffc107;
    color: black;
}

.card{
    border: 1px solid #EBEBEB;
}

@media (max-width: 768px) {
    .search-bar input {
        max-width: 100%;
    }
}
</style>