<template>
    <div v-if="user.email">
        
        <Agree @send-message="sendMessage" v-if="steps==0"/>
        <Personal @send-message="sendMessage" v-if="steps==1"/>
        <div v-if="steps==2">
            회원가입이 완료되었습니다~
            <a href="/">이용하러가기</a>
        </div>
    </div>
    <div v-else>
        먼저 로긍니 해주세요.
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
        }
    },
    data(){
        return {
            steps : 0,
        }
    },
    created(){
        this.$store.user.email
        console.log("hi");
    },
    methods:{
        sendMessage(data) {
            console.log("호출",data);
            this.steps = data
        }
    }
}
</script>

<style>

</style>