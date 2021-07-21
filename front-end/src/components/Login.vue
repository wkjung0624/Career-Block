<template>
<section class="page-section" id="contact">
   <div class="container px-4 px-lg-5 pt-5 rounded-3 bg-white">
    <!-- <div class="box-container"> -->
    [Login.vue]
    <br /><br />
    <h2 class="mt-0">Login</h2>
    <br />
    <div style="font-size: 15px;">
        <br><br>
      <span style="font-size: 20px;">커리어블록</span>
      에 오신것을 환영합니다.
    </div>
    <br />
    <div style="font-size: 15px;">
      회원님의 아이디와 비밀번호를 입력하여 로그인해주세요.
    </div>
    <br />
    <div style="font-size: 15px;">아직 회원이 아니시라면 회원으로 가입 후 이용해주세요!</div>
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
</section>
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

* {
  box-sizing: border-box;
  font-family: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }



.box-container {
  width: 560px;
  height: 550px;
  background: #867ae9;
  margin: auto;
}

.page-section {
  padding: 8rem 0;
}
.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .rounded-3 {
  border-radius: 0.3rem !important;
}

.bg-white {
  background-color: #fff !important;
}

.container {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

.mt-0 {
  margin-top: 0 !important;
}
</style>
