<template>
    <router-link to="/" class="nav-title">CareerBlock</router-link>
  <div id="nav">
    <router-link to="/login"> login </router-link>
    <router-link to="/" class="nav-item user"> {{user.email}} 님 어서오세요 </router-link>
    <router-link to="/" class="nav-item">이력서 생성</router-link>
    <router-link to="/search" class="nav-item">이력서 조회</router-link>
  </div>
  
  <button @click="logbtn(true)">로그인</button>
  <button @click="logbtn(false)">로그오프</button>
  <Login ref="child_login" v-show="false"/>
  <router-view />

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
.nav-title a.router-link-exact-active{
  color:RGB(255,255,255);
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
</style>
