<template>
  <div class="container">
    <br />
    <!-- 엔터쳐도 자동으로 실행되게 -->
    <span class="d1">조회할 이력서 코드 : </span>
    <input
      type="text"
      placeholder="이력서 고유값"
      v-model="query"
      class="tbox"
    />
    <button @click="onSearch" class="btn">검색</button>
    <button @click="showParam" class="btn">검색2</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  path: "/search",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    async onSearch() {
      // res = await axios.get('https://httpbin.org/get')
      await axios.get("http://localhost:8081/search?r=" + this.query);
      alert(this.query);
    },
    showParam() {
      console.log(this.$route.query.r);
    },
  },
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
* {
  box-sizing: border-box;
  font-family: "Hanna", sans-serif;
  /* font: 12px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif; */
}

.base {
  /* overflow: hidden; */
  /* position: relative; */
  /* padding-bottom: 50px; */
  background: #867ae9;
  padding: 20px;
  text-align: left;
}

.container {
  /* padding: 50px; */
  width: 100%;
  height: 2000px;
  background-color: aliceblue;
}
.d1 {
  /* padding: 10px; */
  font-size: 15pt;
  margin: auto;
  /* display: inline; */
  /* float: left; */
  /* position: relative; */
}

.tbox {
  width: 400px;
  height: 50px;
}
.btn {
  width: 50px;
  height: 30px;
  border-color: gainsboro;
  color: #867ae9;
  margin: 3px;
}
.btn2 {
  width: 100px;
  height: 50px;
  border-color: gainsboro;
  color: #867ae9;
  margin: 3px;
}
</style>
