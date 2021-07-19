<template>
  <div class="container">
    <br /><br />
    <div v-if="true" style="font-size: 15pt">
      <Agree @send-message="sendMessage" v-if="checkSteps() == 0" />
      <Personal @send-message="sendMessage" v-if="checkSteps() == 1" />
      <div v-if="checkSteps() == 2">
        회원가입이 완료되었습니다~
        <a href="/">이용하러가기</a>
      </div>
    </div>
    <div v-else style="font-size: 15pt">먼저 로그인 해주세요.</div>
  </div>
</template>

<script>
import Personal from "@/components/Personal.vue";
import Agree from "@/components/Agree.vue";

export default {
  components: {
    Agree,
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
