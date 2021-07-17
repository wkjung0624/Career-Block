<template>
  <div class="box-container">
    <br />
    <div style="font-size: 30pt; color: white">자격증</div>
    <br /><br />
    <div v-bind:key="index" v-for="(item, index) in CerList" class="container">
      <div class="d1">
        취득년월<br />
        <input
          type="text"
          style="width: 200px; height: 50px"
          v-model="item.CerDate"
        />
      </div>
      <div>
        <div class="d2">
          자격증명<br />
          <input
            type="text"
            style="width: 200px; height: 50px"
            v-model="item.CerName"
          />
        </div>
        <div class="d2">
          발급기관<br />
          <input
            type="text"
            style="width: 200px; height: 50px"
            v-model="item.CerIns"
          />
        </div>

        <div>
          <!-- 열삭제 -->
          <button class="btn" @click="delCer">삭제</button><br />
          <!-- 데이터 리셋 미완성-->
          <!-- <button class="btn" @click="resetCer">리셋</button> -->
        </div>
      </div>
    </div>

    <label style="padding-left: 500px">
      <!-- 열추가 -->
      <button class="btn2" @click="addCer">추가</button>
    </label>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      CerList: [
        {
          CerName: "",
          CerIns: "",
          CerDate: "",
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addCer() {
      this.CerList.push({
        CerName: "",
        CerIns: "",
        CerDate: "",
      });
      // console.log(index);
    },
    delCer(index) {
      this.CerList.splice(index, 1);
    },
    // 미완성
    // resetCer(index) {
    //   this.CerList.push(Certable[index]);
    // },
  },
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
* {
  box-sizing: border-box;
  font-family: "Hanna", sans-serif;
}
.box-container {
  background: #867ae9;
  padding-bottom: 50px;
  text-align: left;
  padding: 10px;
  position: relative;
}
.container {
  border: 1px solid #867ae9;
  background-color: aliceblue;
  padding: 10px;
  margin: auto;
  width: 95%;
  display: inline-block;
}
.d1 {
  padding: 10px;
  font-size: 15pt;
  margin: auto;
  display: inline-block;
  /* float: left; */
}
.d2 {
  padding: 10px;
  font-size: 15pt;
  margin: auto;
  float: left;
}
table,
tr,
td {
  color: #867ae9;
}
.btn {
  width: 30px;
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
