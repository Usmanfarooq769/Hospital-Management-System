<template>
  <header class="header-container fixed-top d-flex align-items-center justify-content-between px-3 mb-4">
    <!-- Logo and Title -->
    <div class="d-flex align-items-center">
      <div class="circle me-2">
        <span class="plus-icon">+</span>
      </div>
      <h5 class="mb-0">Omnicare</h5>
    </div>

    <!-- Icons Section -->
    <div class="d-flex align-items-center justify-content-center gap-2">
      

      <!-- Nurse Icon -->
      <div class="icon-btn" @click="$router.push('/Doctor')" >
        <img src="@/assets/images/user-doctor-solid.svg" alt="Login Illustration"
          class="img-fluid mb-4 bg-light-blue pages-images" style="max-height: 30px;" />

      </div>
      <!----doctor icon -->
      <div class="icon-btn"  @click="$router.push('/nurse')">
        <img src="@/assets/images/user-nurse-solid.svg" alt="Login Illustration"
          class="img-fluid mb-4 bg-light-blue pages-images" style="max-height: 30px;" />

      </div>


      <div class="icon-btn"  @click="$router.push('/login')">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9zm3.5 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-4z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0l3-3z"/>
</svg>
        

      </div>


      
      
      


    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style scoped>
.header-container {
  background: linear-gradient(180deg, #89CFF0 0%, #89D0F0 100%);
  /* Blue background */
  height: 60px;
  color: #ffff;
  z-index: 1030;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.circle {
  width: 27px;
  height: 27px;
  background-color: #4588E0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.plus-icon {
  font-size: 16px;
  color: #ffff;
  font-weight: bold;
}

.icon-btn {
  background-color: transparent;
  border: none;
 
  color: black;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
}

.icon-btn:hover {
  background-color: transparent;
}

.icon-btn i {
  font-size: 18px;
}

h5 {
  color: #161B21;

}

@media (max-width: 768px) {
  .header-container {
    padding: 0.5rem 1rem;
  }

  h5 {
    font-size: 16px;
  }

  .icon-btn {
    width: 30px;
    height: 30px;
  }
}
</style>