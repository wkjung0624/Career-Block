<template>
<div class="box">
  
  <router-link to="/" class="nav-title">CareerBlock</router-link>
  
  <div id="nav">
    <router-link to="/resumelink" class="nav-item item-style01">이력서 링크생성</router-link>
    <router-link to="/search" class="nav-item item-style01">이력서 조회</router-link>
    <router-link to="/myresume" class="nav-item item-style01"> 내 이력서 </router-link>
 
    <div>
      테스트 버튼 : 
      <button @click="logbtn(true)">로그인</button>
      <button @click="logbtn(false)">로그오프</button>
      <button @click="regsw(true)">추가정보 O</button>
      <button @click="regsw(false)">추가정보 X</button>
    </div>
  </div>

  <Login ref="child_login" v-show="false"/>
  <router-view />
</div>
</template>

<script>

import Login from "@/components/Login.vue";

export default {
  components: {
    Login
  },
  data(){
    return{
      logComponent : ''
    }
  },
  
  mounted(){
    this.logComponent = this.$refs.child_login;
  },
  methods:{
      regsw(param) {
        var test = this.$store.state.user.email == "";
        console.log(test, this.$store.state.user.email);

        this.$store.state.user.isRegister = param;

        console.log("isReg:", this.$store.state.user.isRegister);
        console.log(this.$store.state.user);
      },
      logbtn(param){  
        param ? this.logComponent.kakaoLogin() :
                this.logComponent.kakaoLogout();
      }
  },
  computed:{
        user(){
            return this.$store.state.user;
        },
    },
}
</script>

<style>
.box {
  margin: auto;
  width: 1500px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height:50px;
  padding:20px 30px 0px 30px;
  background: rgb(22, 22, 22);
}

#nav a {
  font-weight: bold;
  color: #5f5f5f;
}

#nav a.router-link-exact-active {
  color: #cecece;
}

.nav-title{
  margin: 15px 0px 0px 15px;
  font-size:30px;
  color:RGB(255,255,255);
  float:left;
  text-decoration: none;
}

.nav-item{
  font-size:25px;
  color:RGB(255,255,255);
  float:right;
  margin-left: 10px;
}

.user{
  font-size:15px;
  color:beige;
  text-align: center;
}
.item-style01{
  border-left: 1px groove;
  border-right: 1px groove;
  
  padding: 0px 12px 0px 12px;
  margin: 0 auto;

  font-size:20px;
  color:beige;
  text-align: center;
  text-decoration: none;
}
</style>
