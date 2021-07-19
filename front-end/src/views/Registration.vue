<template>
    <div v-if="true">
        <Agree @send-message="sendMessage" v-if="checkSteps() == 0"/>
        <Personal @send-message="sendMessage" v-if="checkSteps() == 1"/>
        <div v-if="checkSteps() == 2">
            회원가입이 완료되었습니다~
            <a href="/">이용하러가기</a>
        </div>
    </div>
    <div v-else>
        먼저 로그인 해주세요.
    </div>
</template>

<script>
import Personal from "@/components/Personal.vue";
import Agree from "@/components/Agree.vue";

export default {
    components: {
        Agree, Personal
    },
    computed:{
        user(){
            return this.$store.state.user;
        },
    },
    
    data(){
        return {
            steps : 0,
        }
    },
    created(){
        console.log("hi",  this.$store.state.user);
    },
    methods:{
        checkSteps(){
            if(this.steps == 2){
                this.$store.commit("Regt");
            }

            return this.steps;
        },
        sendMessage(data) {
            console.log("호출",data);
            this.steps = data
        }
    }
}
</script>

<style></style>
