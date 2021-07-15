<template>
  <div id="nav">
    <div class="nav-title">CareerBlock</div>
    <router-link to="/agree" class="nav-item">피드백</router-link>
    <router-link to="/education" class="nav-item">링크생성</router-link>
    <router-link to="/personal" class="nav-item">기본정보</router-link>
    <router-link to="/" class="nav-item">이력서생성</router-link>
  </div>
  <router-view />

</template>

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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-title{
  font-size:30px;
  color:RGB(255,255,255);
  float:left;
}

.nav-item{
  font-size:25px;
  color:RGB(255,255,255);
  float:right;
}
</style>
