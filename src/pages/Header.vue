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
      <div class="d-flex align-items-center">
        <button class="icon-btn me-2"  @click="$router.push('/Doctor')">
          <i class="bi bi-house"></i>
        </button>
        <button class="icon-btn">
          <i class="bi bi-box-arrow-right"></i>
        </button>
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
    background:linear-gradient(180deg, #89CFF0 0%, #89D0F0 100%); /* Blue background */
    height: 60px; 
    color:#ffff; 
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
    color:#ffff; 
    font-weight: bold;
  }
  
  .icon-btn {
    background-color: rgba(255, 255, 255, 0.3); 
    border: none;
    border-radius: 8px;
    color: black;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
  }
  
  .icon-btn:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  .icon-btn i {
    font-size: 18px;
  }
  h5{
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
  