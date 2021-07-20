<template>
    <div>
        banner : Hello
    </div>
    <div v-show="!isLogin">
        저희 서비스를 이용하기 위해 로그인을 해주세요.
        <a href="/login">로그인하기</a>
    </div>
    <div v-show="!isRegister">
        저희 서비스를 이용하기 위해 회원가입을 해주세요.
        <a href="/registration">회원가입하기</a>
    </div>
    <div v-if="isLogin && isRegister">
        <Profile />
        <Education />
        <Career />
        <Learn />
        <Certification />
    </div>
</template>

<script>

import Profile from "@/components/Profile.vue";
import Education from "@/components/Education.vue";
import Learn from "@/components/Learn.vue";
import Certification from "@/components/Certification.vue";
import Career from "@/components/Career.vue";

export default {
    name: "components",
    components: {
        Profile,
        Education,
        Learn,
        Certification,
        Career,
    },
    computed: {
        isLogin() {
            return this.$store.state.user.email;
        },
        isRegister() {
            return this.$store.state.user.isRegister;
        },
    },
}
</script>

<style>

</style>