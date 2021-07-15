<template>
  <div style="background-color: #867ae9; margin-bottom: 100px">
    <div style="font-size: 30pt; color: white">CareerBlock</div>

    <div style="border-bottom: 2px solid #222"></div>
    <div class="container">
      <div>이름 <input type="text" /></div>
      <div>
        <label>성별 </label>
        <label><input type="radio" />남</label>
        <label><input type="radio" />여</label>
      </div>
      <div>나이 <input type="text" /> 세</div>
      <div>전화번호 <input type="tel" /></div>
      <div>주소 <input type="text" /></div>
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
.container {
  border: 1px solid #222;
  background-color: aliceblue;
  padding: 20px;
  margin: auto;
  width: 30%;
}
</style>
