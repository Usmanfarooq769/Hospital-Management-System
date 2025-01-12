<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-12 col-md-4 text-center bg-light-blue custom-class ">


        <div class="card " style="background: transparent; border: none; border-radius: none;">

          <div class="row mt-2">
            <div class="col-12">
              <div class="d-flex align-items-center gap-3">
                <!-- Circle with Plus Icon -->
                <div class="circle">
                  <span class="plus-icon">+</span>
                </div>

                <!-- Text Content -->
                <div>
                  <p class="logo-paragraph mb-0">Omnicare</p>
                </div>
              </div>
            </div>
          </div>


          <div class="text-center">
            <div class="d-flex justify-content-center align-items-center">
              <img src="@/assets/images/otp.jpg" alt="Login Illustration" class="img-fluid mb-4  pages-images "
                 />
            </div>
            <p class=" lg-paragraph mt-4">
              Empowering healthcare with a dashboard that monitors patients in real-time, ensuring proactive care,
              accurate insights, and better outcomes </p>
          </div>

        </div>
         


          </div>
          <div class="col-12 col-md-8 d-flex justify-content-center align-items-center vh-100">
            <div class="card m-auto" style="max-width:600px; border: none; background: transparent; border-radius: none;">
              <div class="card-body">
                <h5 class="fs-2 fw-bold">Check Your Email</h5>
                <p class="md-paragraph text-muted mt-4 fs-6">
                  We've sent a 5-character verification code to <strong>workaccount@gmail.com</strong>.
                </p>
                <form @submit.prevent="verifyOTP">
                  <div class="d-flex justify-content-between mt-4">
                    <input v-for="(digit, index) in otp" :key="index" type="text" class="form-control text-center me-2"
                      v-model="otp[index]" maxlength="1" @input="focusNext(index)" @keypress="allowOnlyNumbers"
                      required />
                  </div>
                  <div class="mt-4">
                    <button type="submit" class="btn btn-primary mt-4 w-100">Sign Up</button>
                  </div>
                  <div class="mt-4 text-center">
                    <div class="fw-bold">Didn't receive the email?<a href="#" @click.prevent="resendOTP"> Click to
                        resend</a></div>

                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "VerifyOTPPage",
  data() {
    return {
      otp: ["", "", "", "", ""], // Array to store OTP digits
    };
  },
  methods: {
    verifyOTP() {
      // Check if any OTP field is empty
      if (this.otp.some((digit) => digit === "")) {
        Swal.fire({
          title: "Incomplete OTP",
          text: "Please fill in all the OTP fields.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      // Combine the OTP array into a single string
      const enteredCode = this.otp.join("");

      // Validate the OTP (You can replace this with an API call for real validation)
      if (/^\d{5}$/.test(enteredCode)) { // Example regex for a 5-digit numeric OTP
        Swal.fire({
          title: "OTP Verified!",
          text: "You have successfully verified your OTP.",
          icon: "success",
          confirmButtonText: "Go to Dashboard",
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to Doctor Dashboard
            this.$router.push({ path: "/Doctor" });
          }
        });
      } else {
        Swal.fire({
          title: "Invalid OTP",
          text: "The OTP you entered is not valid. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
    focusNext(index) {
      // Automatically move to the next input field
      if (this.otp[index].length === 1 && index < this.otp.length - 1) {
        const nextInput = document.querySelector(`input:nth-child(${index + 2})`);
        if (nextInput) nextInput.focus();
      }
    },
    allowOnlyNumbers(event) {
      // Restrict input to numeric values only
      const charCode = event.which || event.keyCode;
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      }
    },
    resendOTP() {
      // Resend OTP logic (dummy implementation)
      Swal.fire({
        title: "Resending OTP",
        text: "A new OTP has been sent to your email.",
        icon: "info",
        confirmButtonText: "OK",
      });
    },
  },
};
</script>


<style scoped>
input {
  width: 50px;
  height: 50px;
  font-size: 24px;
}
</style>
