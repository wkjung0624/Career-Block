<template>
  <div class="container">
    <!-- <div class="box-container"> -->
    [Login.vue]
    <br /><br />
    <div style="font-size: 50pt; color: #867ae9">CareerBlock</div>
    <br />
    <div style="font-size: 15px;">
        <br><br>
      <span style="font-size: 20px; color: navy">커리어블록</span>
      에 오신것을 환영합니다.
    </div>
    <br />
    <div style="font-size: 15px;">
      회원님의 <b>아이디</b>와 <b>비밀번호</b>를 입력하여 로그인해주세요
    </div>
    <br />
    <div style="font-size: 15px;">아직 회원이 아니시라면 회원으로 <b>가입</b> 후 이용해주세요</div>
    <br />
    <!-- <br>
        <p style="color:white; font-size:70px;">{{user.email ? "로그인 되었습니다!" : "CareerBlock"}}</p> -->
    <a
      v-show="!user.email"
      id="custom-login-btn"
      @click="kakaoLogin()"
      style="position: relative; top: 120px"
    >
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="250"
      />
    </a>
  <br><br>
    회원가입이 안되있을경우 추가회원가입으로 유도하는 버튼 필요
  <br><br>
    <button @click="$store.commit('setPageIndex',4)">회원등록화면으로 이동 </button>
  <br><br>
    <button v-show="user.email" @click="kakaoLogout">카카오 로그아웃</button>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: "",
  components: {},

  setup() {},
  created() {},
  mounted() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("16fe234230416b76f219eef43b4488fb");
    }
  },
  unmounted() {},
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    // 추가 항목 동의받기

    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname,account_email,gender",
        success: this.getKakaoAccount,
        fail: function (error) {
          console.log("22:", error, "22");
        },
      });
    },
    // 사용자 정보 가져오기
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakaoAccount = res.kakao_account;
          this.$store.commit("user", kakaoAccount);

          console.log("loginfo : ", this.$store.state.user);
        },
      });

      //만약 계정정보가 등록안됐다면 Registration.vue로 이동
      
      // var res = SELECT IF(email = '`${this.$store.state.user}`', '1', '0') FROM USER_TB;
      // res == 0, redirect Regist
    },
    getRegisterInfo(){
      console.log(this.$store.state.user);
      // const response = await this.$api("post", "/api/createAccount")
      // console.log(response);
    },
    kakaoLogout() {
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log("Not logged in.");
        return;
      }
      window.Kakao.Auth.logout((res) => {
        console.log("access:", window.Kakao.Auth.getAccessToken());
        console.log("RESULT:", res);
        this.$store.commit("user", {});

        console.log(this.$store.state.user);
      });
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
  height: 500px;
}

.box-container {
  width: 560px;
  height: 550px;
  background: #867ae9;
  margin: auto;
}
</style>
