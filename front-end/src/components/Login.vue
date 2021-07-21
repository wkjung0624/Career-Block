<template>

          <div class="container px-4 px-lg-5 h-100">
            <div
              class="
                row
                gx-4 gx-lg-5
                h-100
                align-items-center
                justify-content-center
                text-center
              "
            >
              <div class="col-lg-8 align-self-end">
                <h1 class="text-white font-weight-bold">
                  
                  {{user.email ? "Welcome!" : "Please Login"}}
                </h1>
                <br />
                <hr class="divider" />
                <br />
              </div>
              <div class="col-lg-8 align-self-baseline">
                <p class="text-white-75 mb-5 fs-5">
                  <!-- With a career block, you can manage your career more easily and easily. We provide you with all the functions you need. Without restrictions. -->
                  커리어블록에 오신것을 환영합니다!
                  <br /><br>
                  회원님의 아이디와 비밀번호를 입력하여 로그인해주세요.
                  <br><br>
                  아직 회원이 아니시라면 회원정보등록 후 이용해주세요.
                </p>
                <a
      v-show="!user.email"
      id="custom-login-btn"
      @click="kakaoLogin()"
      style="position: relative; top: 10px"
    >
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="250"
      />
    </a>
  
  
    <button v-show="user.email" @click="$store.commit('setPageIndex',4)">회원등록</button>
  <br><br>
    <button v-show="user.email" @click="kakaoLogout">카카오 로그아웃</button>
                
              </div>
            </div>
          </div>
        
    <!-- <br>
        <p style="color:white; font-size:70px;">{{user.email ? "로그인 되었습니다!" : "CareerBlock"}}</p> -->
   
    <!-- </div> -->
   

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

.col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
.align-self-end {
  align-self: flex-end !important;
}
.text-white {
  color: #fff !important;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -0.5);
  margin-left: calc(var(--bs-gutter-x) * -0.5);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

 .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }

  .h-100 {
  height: 100% !important;
}

button:hover {
  background-color: rgb(203, 219, 233);
}
</style>
