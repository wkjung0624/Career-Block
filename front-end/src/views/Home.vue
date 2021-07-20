<template>
  <div class="container">
    <br /><br />
    [Home.vue]
    <div style="font-size: 50pt; color: #867ae9">CareerBlock</div>
    <br />
    <div>
      <span style="font-size: 15pt; color: navy">커리어블록</span>
      에 오신것을 환영합니다.<br><br>

      <a href="/myresume">서비스 이용하러 가기</a>
    </div>
    <!-- <br />
    <div>
      회원님의 <b>아이디</b>와 <b>비밀번호</b>를 입력하여 로그인해주세요
    </div>
    <br />
    <div>아직 회원이 아니시라면 회원으로 <b>가입</b> 후 이용해주세요</div> -->
    <br /><br />

    <br /><br /><br /><br />

    
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";
import Education from "@/components/Education.vue";
import Learn from "@/components/Learn.vue";
import Certification from "@/components/Certification.vue";
import Career from "@/components/Career.vue";

export default {
  name: "components",
  components: {
    Education,
    Learn,
    Certification,
    Career,
  },
  data() {
    return {
      testing: 0,
    };
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
  border: 10px solid;
}
</style>
