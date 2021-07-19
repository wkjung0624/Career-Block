<template>
 <div class="bg-main">
  오신걸환영합니다
        <button @click="regsw(true)">ron</button>
        <button @click="regsw(false)">roff</button>
        
  <div v-if="!isLogin">
    <Login />
  </div>
  <div v-if="isLogin && isRegister">
      <Profile />
      <Education />
      <Career />
      <Certification />
      <Learn />
  </div>
  <div v-if="isLogin && !isRegister">
    우리 사이트가 처음이세요 ?
    <a href="/registration"> 가입하러가기 </a>
    <!-- <Registration /> -->
  </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import Profile from "@/components/Profile.vue";
import Education from "@/components/Education.vue";
import Learn from "@/components/Learn.vue";
import Certification from "@/components/Certification.vue";
import Career from "@/components/Career.vue";
import Registration from "@/views/Registration.vue";

export default {
  name: "components",
  components: {
    Profile, Education, Learn, Certification, Career, Login, Registration
  },
  data(){
    return{
      testing : 0,
    };
  },
  computed:{
    isLogin(){
      return this.$store.state.user.email;
    },
    isRegister(){
      return this.$store.state.user.isRegister;
    },
  },
  methods: {
        regsw(param){
            var test = this.$store.state.user.email == "";
            console.log(test, this.$store.state.user.email)

            this.$store.state.user.isRegister = param
            
            console.log("isReg:",this.$store.state.user.isRegister);
            console.log(this.$store.state.user);
        }, 
  }
};
</script>


<style scoped>
  .bg-main{
        padding: 50px;
        width:1000px;
        height:2000px;
        background-color: RGB(134,122,233);
    }
</style>
