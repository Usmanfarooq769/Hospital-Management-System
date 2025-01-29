import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/pages/Login.vue";
import RegisterPage from "@/pages/Register.vue";
import VerifyOTPPage from "@/pages/VerifyOTP.vue";

import DoctorDashboard from "@/doctor/Dashboard.vue";
import doctorlogin from "@/pages/DoctorLogin.vue";
import PatientDetails from "@/doctor/PatientDetails.vue";
import NurseDashboard from "@/nurse/Dashboard.vue";
import CareSummary from "@/nurse/CareSummary.vue";

const routes = [


  {
    path: "/nurseCareSummary/:id",
    name: "CareSummary",
    component: CareSummary,
  },  
  {
    path: "/nurse", 
    name: "NurseDashboard",
    component: NurseDashboard,
  },
 
  {
    path: "/doctor",
    name: "DoctorDashboarde",
    component: DoctorDashboard,
  },
  {
    path: "/login",
    name: "doctorlogin",
    component: doctorlogin,
    meta: { hideHeader: true }, 
  },
  {
    path: "/Patient/:id",
    name: "PatientDetails",
   component: PatientDetails,
  },
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
    meta: { hideHeader: true }, 
  
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    meta: { hideHeader: true }, 

  },
  {
    path: "/verify-otp",
    name: "VerifyOTPPage",
    component: VerifyOTPPage,
    meta: { hideHeader: true }, 
  
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

export default router;
