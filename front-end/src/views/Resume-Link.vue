<template>

    <br>[Resume-Link.vue]<br><br>
    <div v-if="$store.state.user.isRegister" class="box">
        <div>
            <label for="password_1" class="txt">암호설정 : </label>
            <input type="text" class="blk" ref="ref_pass1" v-model="password_1" />
        </div>

        <div>
            <label for="password_2" class="txt">암호확인 : </label>
            <input type="text" class="blk" ref="ref_pass2" v-model="password_2" />
        </div>
<br>
        <div>
            <label for="hrmanager" class="txt">담당자 이메일 : </label>
            <input type="text" class="blk" v-model="email" />  @ 
            <input type="text" class="blk" v-model="domain" :readonly="!isTyped" />
            <select v-model="domainLists" class="blk" @change="setDomain()">
                <option value=0>직접입력</option>
                <option value=1>hanmail.net</option>
                <option value=2>naver.com</option>
                <option value=3>gmail.com</option>
            </select>
        </div>
<br>
        <button @click="createResumeLink" class="btn"> 링크 생성 </button>
    </div>
    <div style="background:RGB(200,200,200)" v-else @click="redirectToRoot">
        (여기 클릭시 이벤트발동)로그인 또는 추가 회원정보를 확인할 수 없습니다.<br>
        ### {{redirectCounts}} ### 초 뒤에 자동으로 회원가입 화면으로 이동합니다.
    </div>
</template>

<script>

export default {
    data(){
        return {
            password_1 : '',
            password_2 : '',
            email : '',
            domainLists : 0,
            domain : '',
            isTyped : true,
            isTimerOn : false,
            redirectCounts : 5
        }
    },
    methods : {
        redirectToRoot(){
            if(this.isTimerOn == false){
                this.isTimerOn = true

                const interval = setInterval(() => {
                    this.redirectCounts -= 1;
                }, 1000)

                setTimeout(() => {
                    clearTimeout(interval)
                    location.href = "/"
                }, 5000);
            }
        },
        setDomain(){
            switch(this.domainLists){
                case '1':
                    this.domain = "hanmail.net"
                    this.isTyped = false
                    break;
                case '2':
                    this.domain = "naver.com"
                    this.isTyped = false
                    break;
                case '3':
                    this.domain = "google.com"
                    this.isTyped = false
                    break;
                default:
                    this.domain = ""
                    this.isTyped = true
                    break;
            }
            console.log(this.domain)

        },
        checkPasswordRule(){
            
            if(this.password_1 == this.password_2){
                const passLength = this.password_1.length;

                if(5 < passLength && passLength < 20){
                    return true;
                }
                
            }
        
            this.$refs.ref_pass1.focus()
            return false;
        },
        createResumeLink(){
            if(this.checkPasswordRule()){
                alert(`${this.email}@${this.domain}`)
            }
            else{
                alert("패스워드를 확인하세요.")
            }
        }
    }
}
</script>

<style scoped>

@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
* {
  box-sizing: border-box;
  font-family: "Hanna", sans-serif;
}

.box {
    background-color: aliceblue;
    height: 650px;

}

.txt {
    font-size: 25px;
    
}

.blk {
height: 25px;
}

.btn {
    height: 40px;
    width: 100px;
    font-size: 15px;
     color: #867ae9;
}
</style>