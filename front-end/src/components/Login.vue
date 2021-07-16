<template>

    <div>
        <h1>{{loginInfo.email ? "로그인 성공!" : "로그인 후 사용하세요."}}</h1>
        <a v-show="!loginInfo.email" id="custom-login-btn" @click="kakaoLogin()">
        <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>

        <button v-show="loginInfo.email" @click="kakaoLogout">카카오2 로그아웃</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            loginInfo : [],
        };
    },
    
    setup() {},
    created() {},
    mounted() {
    
        window.Kakao.init('16fe234230416b76f219eef43b4488fb');
        // SDK 초기화 여부를 판단합니다.
        console.log("isLogin : ",window.Kakao.isInitialized());
    },
    unmounted() {},
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
            console.log("TEST");
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: (res) => {
                    const kakaoAccount = res.kakao_account;
                    console.log("##",kakaoAccount,"##");

                    // this.$store.commit("user",kakaoAccount);
                    this.loginInfo = kakaoAccount;
                },
            });
        },
        kakaoLogout(){
            if (!window.Kakao.Auth.getAccessToken()) {
                console.log('Not logged in.');
                return;
            }
            window.Kakao.Auth.logout((res) => {
                console.log(window.Kakao.Auth.getAccessToken());
                console.log(res);
                // this.$store.commit("user",{});
                this.loginInfo = {};
            });
        },
    },
};
</script>