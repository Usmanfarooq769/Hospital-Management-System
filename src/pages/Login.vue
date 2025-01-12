<template>
  <div class="container-fluid">
    <div class="row ">
      <!-- Left Section -->
      <div class=" col-6 col-lg-4 bg-light-blue  custom-class ">
        <div class="card h-100 " style="background: transparent; border: none; border-radius: none;">
          <div class="row mt-4">
            <div class="col-12">
              <div class="d-flex align-items-center gap-3">
                <div class="circle">
                  <span class="plus-icon">+</span>
                </div>
                <div>
                  <p class="logo-paragraph mb-0">Omnicare</p>
                </div>
              </div>
            </div>

          </div>


          <div class="text-center">
            <img src="@/assets/images/login.jpg" alt="Login Illustration"
              class="img-fluid mb-4 bg-light-blue pages-images" />

            <p class="card-text  fw-medium mt-4">
              Empowering healthcare with a dashboard that monitors patients in real-time, ensuring proactive care,
              accurate insights, and better outcomes.
            </p>
          </div>
        </div>

      </div>

      <!-- Right Section -->
      <div class=" col-6 col-lg-8">
        <div class="d-flex align-items-center justify-content-center vh-100">
          <div class="card  card-padding " style="border: none; background: #F8F8F8;">
            <p class="fs-2  fw-bold">Login to your account</p>
            <p class=" fw-medium mt-4">
              Access your healthcare dashboard securely to manage appointments, view reports, update details, and
              streamline your medical care.
            </p>
            <form @submit.prevent="handleLogin">

              <div class="mb-3 position-relative">
                <label for="email" class="form-label fw-bold">Email</label>
                <div class="position-relative">
                  <input type="email" class="form-control input-field ps-5" id="email"
                    placeholder="Enter your email address" v-model="email" @input="validateEmail"
                    :class="{ 'is-invalid': emailError }" />
                  <i class="bi bi-envelope position-absolute top-50 translate-middle-y ms-3 text-muted"></i>
                </div>
                <small v-if="emailError" class="text-danger">{{ emailError }}</small>
              </div>

              <div class="mb-3 position-relative">
                <label for="password" class="form-label fw-bold">Password</label>
                <div class="position-relative">
                  <input :type="showPassword ? 'text' : 'password'" class="form-control input-field ps-5 pe-5"
                    id="password" placeholder="Enter your password" v-model="password" @input="validatePassword"
                    :class="{ 'is-invalid': passwordError }" />
                  <i class="bi bi-lock position-absolute top-50 translate-middle-y ms-3 text-muted"></i>
                  <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
                    class="position-absolute top-50 translate-middle-y me-3 text-muted cursor-pointer"
                    style="right: 15px;" @click="togglePasswordVisibility"></i>
                </div>
                <small v-if="passwordError" class="text-danger">{{ passwordError }}</small>
              </div>


              <div class="mb-3 form-check">
                <div class="d-flex align-items-center ">
                  <div class="col-md-5 col-lg-6 ">
                    <input type="checkbox" class="form-check-input" id="rememberMe" />
                    <label class="form-check-label col-md-fw-medium col-lg-fw-bold" for="rememberMe">Remember me</label>
                  </div>
                  <div class="col-md-7 col-lg-6 ">
                    <a class="fcol-md-fw-medium col-lg-fw-bold">Forgot your Password?</a>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn btn-login w-100  mt-4">Login</button>
            </form>
            <p class="text-center fw-bold mt-4">
              Don’t have an account? <router-link to="/register">Sign up</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      showPassword: false,
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = emailRegex.test(this.email) ? "" : "Invalid email address.";
    },
    validatePassword() {
      this.passwordError = this.password.length >= 6 ? "" : "Password must be at least 6 characters.";
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleLogin() {
      this.validateEmail();
      this.validatePassword();

      if (!this.emailError && !this.passwordError) {
        // Show SweetAlert2 popup
        Swal.fire({
          title: "Login Successful!",
          text: "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push({ path: "/Doctor" });
          }
        });
      }
    },
  },
};

</script>

<style scoped>
/* Background color for the left section */
.bg-light-blue {
  background: linear-gradient(180deg, #89CFF0 0%, #89D0F0 100%);
}



.btn-login {
  border-radius: 10px;
  background: #4588E0;
  color: #FFFFFF;
}

.btn-login:hover {
  background: #3168b7;
  color: #FFFFFF;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.input-icons i {
  position: absolute;
}

.icon {
  padding: 10px;
  min-width: 40px;
}

.input-field {
  width: 100%;
  padding: 10px;
}

.is-invalid {
  border-color: #dc3545;
}

.text-danger {
  font-size: 0.875rem;
}

.cursor-pointer {
  cursor: pointer;
}

a {
  color: #4588E0 !important;
  border-style: none;
}


/* Default behavior (col-6 styles apply) */
.custom-class {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* vh-100 equivalent */
}

/* When col-lg-4 is active (lg breakpoint or larger), override the styles */
@media (min-width: 993px) {
  .col-lg-4.custom-class {
    display: block;
    /* Reset display to block or other desired styles */
    align-items: initial;
    justify-content: initial;
    height: auto;
    /* Reset height if needed */
  }

}
</style>
