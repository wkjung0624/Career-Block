<template>
  <div class="container">
    <br /><br />
    [Home.vue]
    <!-- <div style="font-size: 50pt; color: #867ae9">CareerBlock</div>
    <br />
    <div>
      <span style="font-size: 15pt; color: navy">커리어블록</span>
      에 오신것을 환영합니다.
    </div> -->
    <!-- <br />
    <div>
      회원님의 <b>아이디</b>와 <b>비밀번호</b>를 입력하여 로그인해주세요
    </div>
    <br />
    <div>아직 회원이 아니시라면 회원으로 <b>가입</b> 후 이용해주세요</div> -->
    <br /><br />

    <br /><br /><br /><br />

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
   
  },
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
* {
  box-sizing: border-box;
  font: 12px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif;
}
.container {
  /* padding: 50px; */
  margin: auto;
  width: 1500px;
  height: 3000px;
  background-color: aliceblue;
}
</style>
