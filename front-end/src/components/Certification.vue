<template>
  <div class="base">
    <br />
    <div style="font-size: 30pt; color: white">자격증</div>
    <br /><br />
    <button @click="changeEditable()" class="d3">수정가능상태 변경</button>
    <button @click="showDataInfo()" class="d3">입력값 콘솔 출력</button>
    <br /><br />
    <div v-bind:key="index" v-for="(item, index) in CerList" class="container">
      <div v-if="isEditable">
        <div class="d1">
          <div class="d2">
            취득년월<br />
            <input type="text" v-model="item.CerDate" class="tbox" />
          </div>
          <div class="d2">
            자격증명<br />
            <input type="text" v-model="item.CerName" class="tbox" />
          </div>
          <div class="d2">
            발급기관<br />
            <input type="text" v-model="item.CerIns" class="tbox" />
          </div>

          <!-- 열삭제 -->
          <div class="d3">
            <button class="btn" @click="delCer">삭제</button><br />
          </div>
        </div>
      </div>

      <div v-else>
        <div class="d1">
          <div class="d2">
            취득년월<br />
            {{ item.CerDate }}
          </div>
          <div class="d2">
            자격증명<br />
            {{ item.CerName }}
          </div>
          <div class="d2">
            발급기관<br />
            {{ item.CerIns }}
          </div>
        </div>
      </div>
    </div>

    <label class="d4">
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
      isEditable: true,
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

    changeEditable() {
      this.isEditable = !this.isEditable;
    },
    showDataInfo() {
      for (var item of this.CerList) {
        console.log(item);
      }
    },
  },
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
* {
  box-sizing: border-box;
  font-family: "Hanna", sans-serif;
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
  border: 1px solid #867ae9;
  background-color: aliceblue;
  padding: 10px;
  /* float: left; */
  /* margin: auto; */
  /* width: 95%; */
}

.d1 {
  /* padding: 10px; */
  font-size: 15pt;
  margin: auto;
  /* display: inline; */
  /* float: left; */
  /* position: relative; */
}
.d2 {
  padding: 10px;
  /* font-size: 15pt; */
  margin: auto;
  display: inline-block;

  /* float: left; */
}
.d3 {
  /* padding: 10px; */
  /* font-size: 15pt; */
  margin: auto;
  display: inline-block;

  /* float: left; */
}
.d4 {
  /* padding: 10px; */
  /* font-size: 15pt; */
  margin: auto;
  display: block;
  position: relative;
}
.tbox {
  width: 200px;
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
