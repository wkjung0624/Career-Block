<template>
  <div class="base">
    <br />
    <div style="font-size: 22px; text-align: left">자격증</div>
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
            <button class="btn" @click="delCer(index)">X</button>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="d1">
          <div class="d5">
            취득년월<br />
            {{ item.CerDate }}
          </div>
          <div class="d5">
            자격증명<br />
            {{ item.CerName }}
          </div>
          <div class="d5">
            발급기관<br />
            {{ item.CerIns }}
          </div>
        </div>
      </div>
    </div>

    <label class="d4">
      <!-- 열추가 -->
      <button class="btn2" @click="addCer">자격증 추가</button>
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
  /* font-family: "Hanna", sans-serif; */
  font: 12px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif;
}

.base {
  overflow: hidden;
  position: relative;
  margin-bottom: 33px;
  width: 940px;
  margin: auto;
}

.container {
  border: 1px solid gainsboro;

  height: 90px;
  padding: 5px;

  overflow: hidden;
  position: relative;
  width: 940px;
  /* padding: 0 0 20px 40px; */
  margin-bottom: 10px;
  background-color: #fff;
  box-sizing: border-box;

  margin: 0 auto;
  z-index: 800;
  zoom: 1;

  text-align: left;
}

.d1 {
  margin: 10px;
}
.d2 {
  /* padding: 10px; */
  /* font-size: 15pt; */
  margin: auto;
  display: inline-block;
  height: 70px;
  border: 1px solid gainsboro;
  font-size: 15px;
  /* padding-left: 10px; */

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
.d5 {
  left: 0;
  top: 0;
  width: 100px;
  font-size: 16px;
  color: rgb(43, 43, 43);
  border-right: 1px solid RGBA(190, 190, 190, 100);
  margin-right: 30px;
  float: left;
}
.tbox {
  width: 140px;
  height: 46px;
}
.btn {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 35px;
  height: 35px;
  background-color: RGB(187, 187, 187);
  border: 0px;
  float: right;
  font-size: 25px;
  color: white;
}
.btn2 {
  width: 940px;
  height: 60px;
}
</style>
