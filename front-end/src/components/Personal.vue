<template>
  <div class="box-container">
    <br />
    <br />
    <div style="font-size: 30pt; color: white">CareerBlock</div>
    <br />
    <br />

    <div class="container">
      <div
        style="
          color: #867ae9;
          font-size: 20pt;
          border-bottom: 2px solid #867ae9;
          margin-bottom: 20px;
        "
      >
        당신을 알고싶습니다 :)
      </div>
      <table class="tb">
        <tr>
          <td>이름</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>성별</td>
          <td style="padding-right: 100px">
            <input type="radio" />남 <input type="radio" />여
          </td>
        </tr>
        <tr>
          <td>나이</td>
          <td><input type="text" /></td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td><input type="tel" /></td>
        </tr>
        <tr>
          <td>주소</td>
          <td><input type="text" /></td>
        </tr>
      </table>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
* {
  box-sizing: border-box;
  font-family: 'Hanna', sans-serif;
}
.box-container {
  background: #867ae9;
  margin-bottom: 100px;
}
.container {
  border: 1px solid #867ae9;
  background-color: aliceblue;
  padding: 20px;
  margin: auto;
  width: 30%;
}
.tb {
  margin: auto;
}
table,
tr,
td {
  color: #867ae9;
}
</style>
