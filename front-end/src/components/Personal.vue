<template>
  <div class="box-container">
    <br />
    <br />
    <div style="font-size: 80px; color: white">CareerBlock</div>
    <br />
    <br />

    <div class="container">
      <div
        style="
          color: #867ae9;
          font-size: 30pt;
          border-bottom: 2px solid #867ae9;
          margin-bottom: 20px;
        "
      >
        정보를 등록해주세요 :)
      </div>
      <table class="tb">
        <tr>
          <td>이름</td>
          <td><input type="text" v-model="name" style="width:150px; height:35px; font-size:30px; text-align:center; color:#867ae9;"/></td>
        </tr>
        <tr>
          <td>성별</td>
          <td>
            <input type="radio" :value="gender" />남
            <input type="radio" :value="gender" />여
          </td>
        </tr>
        <tr>
          <td>생년월일</td>
          <td><input type="text" v-model="age" style="width:180px; height:35px; font-size:25px; text-align:center; color:#867ae9;" /></td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td><input type="tel" v-model="phone" style="width:250px; height:35px; font-size:25px; text-align:center; color:#867ae9;"/></td>
        </tr>
        <tr>
          <td>주소</td>
          <td><input type="text" v-model="address" style="width:300px; height:35px; font-size:20px; text-align:center; color:#867ae9;" /></td>
        </tr>
        <tr>
          <td>상세주소</td>
          <td><input type="text" v-model="address2" style="width:300px; height:35px; font-size:20px; text-align:center; color:#867ae9;" /></td>
        </tr>
      </table>
    </div>
    <br />
    <br />
    <div>
      <button class="btn" @click="submitToParent">저장</button>&nbsp;&nbsp;
      <button class="btn">취소</button>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      name: "",
      gender: "",
      age: "",
      phone: "",
      address: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    submitToParent(){
      this.$emit('send-message', 2);
    }
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
  position: relative;
  height: 750px;
}
.container {
  border: 1px solid #867ae9;
  background-color: aliceblue;
  padding: 20px;
  margin: auto;
  width: 650px;
  height: 450px;
}
.tb {
  margin: auto;
  font-size: 30px;
  width: 500px;
  height: 350px;
}
table,
tr,
td {
  color: #867ae9;
  border-collapse: collapse;
  border: 0.1px solid gainsboro;
}
.btn {
  width: 120px;
  height: 50px;
  border-color: gainsboro;
  color: #867ae9;
}
</style>
