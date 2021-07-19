<template>
  <div class="container">
    <br /><br />
    <div style="font-size: 30pt; color: #867ae9">Welcome to CareerBlock!!</div>
    <br /><br />
    <button @click="regsw(true)" style="font-size: 15pt">resume on</button>
    <button @click="regsw(false)" style="font-size: 15pt">resume off</button>
    <br /><br />

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
    <div v-if="isLogin && !isRegister" style="font-size: 15pt">
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
    Profile,
    Education,
    Learn,
    Certification,
    Career,
    Login,
    Registration,
  },
  data() {
    return {
      testing: 0,
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.email;
    },
    isRegister() {
      return this.$store.state.user.isRegister;
    },
  },
  methods: {
    regsw(param) {
      var test = this.$store.state.user.email == "";
      console.log(test, this.$store.state.user.email);

      this.$store.state.user.isRegister = param;

      console.log("isReg:", this.$store.state.user.isRegister);
      console.log(this.$store.state.user);
    },
  },
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
* {
  box-sizing: border-box;
  font-family: "Hanna", sans-serif;
}
.container {
  /* padding: 50px; */
  width: 100%;
  height: 2000px;
  background-color: aliceblue;
}
</style>
