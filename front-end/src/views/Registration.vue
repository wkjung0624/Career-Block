<template>

  <button @click="createAccount">test</button>
  
  <div v-if="!isLogin">
      <Login />
  </div>

  <div>
    <div v-if="true" style="font-size: 15pt">
      <Agree @send-message="sendMessage" v-if="checkSteps() == 0" />
      <Personal @send-message="sendMessage" v-if="checkSteps() == 1" />
      <div v-if="checkSteps() == 2">
        <span style="font-size: 15pt; color: navy">커리어블록</span>
        회원이 되신 것을 축하드립니다. :)

        <br /><br />

        <div>
          커리어블록과 함께 <b>경력</b>과 <b>이력서</b>를 편리하게 관리하세요.
        </div>

        <br /><br />
        이제 나를 표현하러 가볼까요?<br>
        <a href="/myresume">이용하러가기</a>
      </div>
    </div>
    <div v-else style="font-size: 15pt">먼저 로그인 해주세요.</div>
  </div>
</template>

<script>
import Personal from "@/components/Personal.vue";
import Agree from "@/components/Agree.vue";
import Login from "@/components/Agree.vue";

export default {
  components: {
    Agree,
    Login,
    Personal,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  data() {
    return {
      steps: 0,
    };
  },
  created() {
    console.log("hi", this.$store.state.user);
  },
  methods: {
    checkSteps() {
      if (this.steps == 2) {
        this.$store.commit("Regt");
      }

      return this.steps;
    },
    sendMessage(data) {
      console.log("호출", data);
      this.steps = data;
    },


    async createAccount() {
      console.log(this.$store.state.user);
      const response = await this.$api("post", "/api/createAccount", {
        param: 
          [
            {
              email: this.$store.state.user.email,
              name : this.$store.state.user.profile.nickname,
              gender : this.$store.state.user.gender,
              phone : this.$store.state.user.phone,
              address : this.$store.state.user.address,
              profile : ""
              //프로필사진
            },
          ],
        }).data;
      console.log(response);
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
  
}
</style>
