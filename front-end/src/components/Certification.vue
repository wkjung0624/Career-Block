<template>
  <div class="base1">
     <div class="header1">
        자격증
        </div>
    
    <!-- <button @click="changeEditable()" class="d3">수정가능상태 변경</button>
    <button @click="showDataInfo()" class="d3">입력값 콘솔 출력</button> -->
    
    <div v-bind:key="index" v-for="(item, index) in CerList" class="container">
      <div v-if="!viewer_mode">
        <div class="d1">
          <div class="d2">
            <br />
            <input
              type="text"
              style="width: 450px"
              v-model="item.CerName"
              class="tbox"
              placeholder="자격증 명"
            />
          </div>
          <div class="d2">
            <br />
            <input
              type="text"
              style="width: 250px"
              v-model="item.CerIns"
              class="tbox"
              placeholder="발행처"
            />
          </div>
          <div class="d2">
            <br />
            <input
              type="text"
              style="width: 150px"
              v-model="item.CerDate"
              class="tbox"
              placeholder="취득년월"
            />
          </div>

          <!-- 열삭제 -->
          <div class="d3">
            <!-- <button class="btn-delete" @click="delItem(index)">X</button> -->
            <button class="btn-delete" @click="delCer(index)" v-if="!$store.commit('isEditable','skyship326@naver.com')">X</button>
          </div>
        </div>
        <label class="d4">
      <!-- 열추가 -->
      <button class="btn2" @click="addCer">자격증 추가</button>
      
    </label>
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

    
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: ['viewer_mode'],
  data() {
    return {
      CerList: [
        {
          CerName: this.$store.state.resume[this.$store.state.myKeys]["certification"]["CerName"],
          CerIns: this.$store.state.resume[this.$store.state.myKeys]["certification"]["CerIns"],
          CerDate: this.$store.state.resume[this.$store.state.myKeys]["certification"]["CerDate"],
        }
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
  font: 15px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif;
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
  background-color: none;
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
  padding-left: 5px;
  position: relative;
  bottom: 15px;
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
  width: 200px;
  font-size: 16px;
  color: rgb(43, 43, 43);
  border-right: 1px solid RGBA(190, 190, 190, 100);
  margin-right: 30px;
  float: left;
}
.tbox {
  height: 50px;
  border: 1px solid gainsboro;
  padding-left: 10px;
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
  width: 938px;
  height: 60px;
  background-color: white;
  border: 1px solid gainsboro;
}
.btn-delete {
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
</style>
