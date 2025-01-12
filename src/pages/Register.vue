<template>
  <div class="container-fluid vh-100">
    <div class="row">

      <div class=" col-6 col-lg-4 bg-light-blue custom-class">

        <div class="card " style="background: transparent; border: none; border-radius: none;">

        <div class="row mt-2">
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
          <img src="@/assets/images/singup.jpg" alt="Login Illustration" class="img-fluid mb-4 pages-images" 
             />

          <p class="fw-medium mt-4">
            Empowering healthcare with a dashboard that monitors patients in real-time, ensuring proactive care,
            accurate insights, and better outcomes.
          </p>
        </div>

      </div>
      </div>

      <div class="col-6 col-lg-8">
        <div class="d-flex align-items-center justify-content-center vh-100">
          <div class="card card-padding" style="border: none; background: #F8F8F8;">
            <div class="card-body">
              <p class=" card-title fs-2 fw-bold">Get registered today</p>
              <p class=" card-text  md-paragraph mt-4">
                Join our healthcare platform to monitor patient progress, access real-time insights, streamline care,
                and
                improve health outcomes.
              </p>
              <form @submit.prevent="handleRegister">

                <div class="mb-3 position-relative">
                  <label for="email" class="form-label fw-bold">Email</label>
                  <div class="position-relative">
                    <input type="email" class="form-control input-field ps-5" id="email" placeholder="Enter your email"
                      v-model="email" @input="validateEmail" :class="{ 'is-invalid': emailError }" />
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

                <div class="mb-4 position-relative">
                  <label for="confirmPassword" class="form-label fw-bold">Confirm Password</label>
                  <div class="position-relative">
                    <input :type="showPassword ? 'text' : 'password'" class="form-control input-field ps-5 pe-5"
                      id="confirmPassword" placeholder="Confirm your password" v-model="confirmPassword"
                      @input="validateConfirmPassword" :class="{ 'is-invalid': confirmPasswordError }" />
                    <i class="bi bi-lock position-absolute top-50 translate-middle-y ms-3 text-muted"></i>
                    <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
                      class="position-absolute top-50 translate-middle-y me-3 text-muted cursor-pointer"
                      style="right: 15px;" @click="togglePasswordVisibility"></i>
                  </div>
                  <small v-if="confirmPasswordError" class="text-danger">{{ confirmPasswordError }}</small>
                </div>


                <!-- Submit Button -->
                <button type="submit mt-4" class="btn btn-Sign-up w-100">Sign Up</button>
              </form>
              <p class="text-center fw-bold mt-4">
                Already have an account? <router-link to="/">Login</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
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
    validateConfirmPassword() {
      this.confirmPasswordError = this.confirmPassword === this.password ? "" : "Passwords do not match.";
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleRegister() {
      this.validateEmail();
      this.validatePassword();
      this.validateConfirmPassword();

      if (!this.emailError && !this.passwordError && !this.confirmPasswordError) {
        Swal.fire({
          title: "Verify Your OTP!",
          text: "Registration successful! Please verify your OTP to proceed.",
          icon: "success",
          confirmButtonText: "Go to OTP Verification",
          allowOutsideClick: false, // Prevent closing by clicking outside
          allowEscapeKey: false,   // Prevent closing with the escape key
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to the Doctor Dashboard
            this.$router.push({ path: "/verify-otp" });
          }
        });
      }
    },
  },
};


</script>

<style scoped>


.btn-Sign-up {
  border-radius: 10px;
  background: #4588E0;
  color: #FFFFFF;
}

.btn-Sign-up:hover {
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

router-link:hover {
  text-decoration: underline !important;
}
</style>
