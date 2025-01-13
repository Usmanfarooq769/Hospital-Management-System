<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css " rel="stylesheet">



  <div id="app">
    <HeaderPage  v-if="showHeader"/>
    <main>
    <router-view />
  </main>
  </div>

 



</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import HeaderPage from "@/pages/Header.vue";


export default {
  name: 'App',
  components: {
    HeaderPage,
    },
    setup() {
    const route = useRoute();

    // Determine if the header should be shown
    const showHeader = computed(() => !route.meta.hideHeader);

    return { showHeader };
  },
  
}
</script>

<style>
#app {
  font-family:Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background:#F8F8F8;
  color:#161B21;

}
 .main-heading{
font-size: 32px;
font-weight: 700;
line-height: 38.73px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #161B21;
 }
 .lable-heading{
font-size: 14px;
font-weight: 500;
line-height: 16.94px;
text-align: left;
text-underline-position: from-font;
text-decoration-skip-ink: none;
color: #161B21;

 }

 
.circle {
  width: 27px;
  height: 27px;
  position: relative;
  left: 4.5px;
  gap: 0px;
  border: 1px solid transparent;
  opacity: 1;
  background-color:#4588E0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plus-icon {
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.logo-paragraph {
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 38.73px;
  text-decoration-skip-ink: none;
  color: #161B21;

}

.bg-light-blue {
  background: linear-gradient(180deg, #89CFF0 0%, #89D0F0 100%);
}
.md-paragraph{
  font-family: Inter;
font-size: 18px;
font-weight: 400;
line-height: 24px;
}

.sm-paragraph{
  font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 16.94px;
}
.lg-paragraph{
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 26px;
}
a {
  text-decoration: none !important; 
  color: #55A2FF !important;
}

a:hover {
  text-decoration: none !important; 
  color: #55A2FF !important;
}

.small-word {
  font-family: Inter;
  font-size: 17px;
  font-weight: 500;
}

.typo-strong {
  font-weight: bolder;
  font-family: Inter;
  font-size: 17px;
}


.btn-primary{
    background: #4588E0 !important;
color: #FFFFFF !important;
display: flex !important;
align-items: center !important;
justify-content: center !important;
opacity: 0px !important;

}
.btn-outline-secondary{
    background: #E6EAEF !important; 
    color:#000000 !important;
    border: none !important;
}


.btn-report {
    background: #4588e0 !important;
    border-radius: 10px !important;
    color: white !important;
    border: none !important;

}

.btn-report:hover {
    background: #4588e0 !important;
    border-radius: 10px !important;
    color: white !important;
    border: none !important;

}

.btn-group {
    background: #E6EAEF !important;
    border: none !important;
    color: #161B21 !important;
    border-radius: 10px !important;
    font-size: 14px !important;

}

.btn-group:hover {
    background: #4588e0 !important;
    border: none !important;
    color: #ffff !important;
    border-radius: 10px !important;
    font-size: 14px !important;

}


.modal-footer {
  border-top: none !important;
  border-bottom: none !important;
}

.modal-header {

  border-top: none !important;
  border-bottom: none !important;
}



html{
    height: 100%;
    overflow-y: scroll; 
}



.custom-scrollbar::-webkit-scrollbar {
  width: 12px; 
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #89CFF0; 
  border-radius: 5px; 
}

.custom-scrollbar::-webkit-scrollbar-track {
background-color:#F8F8F8;
  border-radius: 5px;

 
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #89CFF0; 
}

.custom-scrollbar::-webkit-scrollbar-thumb:horizontal {
  height:6px !important; 
}


html::-webkit-scrollbar {
  width: 12px; 
}

html::-webkit-scrollbar-thumb {
  background-color: #89CFF0; 
  border-radius: 5px; 
}

html::-webkit-scrollbar-track {
background-color:#F8F8F8;
  border-radius: 5px;

 
}



html::-webkit-scrollbar-thumb:hover {
  background-color: #89CFF0; 
}

html::-webkit-scrollbar-thumb:horizontal {
  height:6px !important; 
}

.card-heading {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 29.05px;

}

.sub-heading{
  font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 25px;

}

.custom-space{
 margin-top: 70px;
}


@media (min-width:760px) {
  .top-space{
    margin-top: 10% !important;
  }
    .lg-heading {
        font-family: Inter;
        font-size: 26px;
        font-weight: 800;
        line-height: 40px;
    }
    .card-padding {
  padding-left: 5%;
  padding-right: 5%;
}
.lg-paragraph{
  font-size: 16px;
  font-weight: 500;
}

.pages-images{
  margin-top: 7%;
}

.card-padding {
 padding-left: 5%;
 padding-right: 5%;
}

}

@media (min-width:850px) {
  .top-space{
    margin-top: 8% !important;
  }

  .pages-images{
  margin-top: 30%;
}
}


@media (min-width:993px) {
  .quick-btn {
    
    font-size: 16px;
  }
.lg-paragraph {
      font-size: 18px;
      font-weight: 500;
  }
}

@media (min-width:1023px) {


.lg-heading{
    font-family: Inter;
font-size: 36px;
font-weight: 700;
line-height: 43.57px;
}

}
@media (min-width:1054) {
    
  .quick-btn {
    
    font-size: 18px;
  }
  
}

@media (min-width:1250px) {
  .top-space{
    margin-top: 5% !important;
  }

 .card-padding {
 padding-left: 15%;
 padding-right: 15%;
}
 
}
.card{
  border: none;
}




</style>



