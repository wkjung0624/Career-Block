<template>

    <div class="box-container">
        <br>
        <p style="color:white; font-size:70px;">{{user.email ? "로그인 되었습니다!" : "CareerBlock"}}</p>
        <a v-show="!user.email" id="custom-login-btn" @click="kakaoLogin()"  style=" position:relative; top:120px;">
        <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="250"
      />
    </a>

        <button v-show="user.email" @click="kakaoLogout">카카오2 로그아웃</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    
    setup() {},
    created() {},
    mounted() {
        if(!window.Kakao.isInitialized()){
            window.Kakao.init('16fe234230416b76f219eef43b4488fb');
        }
    },
    unmounted() {},
    computed:{
        user(){
            return this.$store.state.user;
        },
    },

    methods: {
        // 추가 항목 동의받기
        kakaoLogin(){
            window.Kakao.Auth.login({
                scope: "profile_nickname,account_email,gender",
                success: this.getKakaoAccount,
                fail: function(error) {
                    console.log("22:",error,"22");
                },
            });
        },
        // 사용자 정보 가져오기
        getKakaoAccount(){
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: (res) => {
                    const kakaoAccount = res.kakao_account;
                    this.$store.commit("user",kakaoAccount)
                    
                    console.log(this.$store.state.user);
                },
            });
        },
        kakaoLogout(){
            if (!window.Kakao.Auth.getAccessToken()) {
                console.log('Not logged in.');
                return;
            }
            window.Kakao.Auth.logout((res) => {
                console.log("access:",window.Kakao.Auth.getAccessToken());
                console.log("RESULT:",res);
                this.$store.commit("user",{});
                
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
      font-family: 'Hanna', sans-serif;
      
    }

    .box-container {
     
      width: 560px;
      height: 550px;
      background: #867ae9;
      margin: auto;
    }

</style>