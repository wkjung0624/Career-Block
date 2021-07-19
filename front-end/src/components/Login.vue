<template>

    <div>
        <h1>{{user.email ? "로그인 성공!" : "로그인 후 사용하세요."}}</h1>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"/>
        </a>
        <button @click="kakaoLogout">카카오 로그아웃</button>
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