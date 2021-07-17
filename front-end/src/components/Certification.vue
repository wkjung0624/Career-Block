<template>
  <div class="box-container">
    <br />
    <div style="font-size: 30pt; color: white">자격증</div>
    <br /><br />
    <div class="container">
      <table>
        <tr>
          <td class="td">
            자격증명<br /><input
              type="text"
              style="width: 300px; height: 50px"
              v-model="CerName"
            />
          </td>
          <td class="td">
            발급기관<br /><input
              type="text"
              style="width: 300px; height: 50px"
              v-model="CerIns"
            />
          </td>
          <td class="td">
            취득년월<br /><input
              type="text"
              style="width: 300px; height: 50px"
              v-model="CerDate"
            />
          </td>
          <td>
            <button class="btn">삭제</button><br />
            <button class="btn">저장</button>
          </td>
        </tr>
      </table>
    </div>
    <div
      v-bind:key="index"
      v-for="(item, index) in CerTable"
      class="container"
    ></div>
    <div v-show="addTable > 0"></div>
    <label style="padding-left: 500px"
      ><button class="btn2" @click="addTable">추가</button></label
    >
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      CerName: "",
      CerIns: "",
      CerDate: "",

      CerTable: [],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addTable() {
      var line = 0;
      line += 1;
      return line;
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
.box-container {
  background: #867ae9;
  padding-bottom: 50px;
  text-align: left;
  padding: 20px;
  position: relative;
}
.container {
  border: 1px solid #867ae9;
  background-color: aliceblue;
  padding: 20px;
  margin: auto;
  width: 90%;
}
.tb {
  margin: auto;
  float: left;
}
.td {
  padding: 10px;
  font-size: 15pt;
  margin: auto;
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

/* #add {
  width: 100px;
  height: 40px;
  border-color: gainsboro;
  color: #867ae9;
}
#save {
  width: 100px;
  height: 40px;
  border-color: gainsboro;
  color: #867ae9;
}
#delete {
  width: 100px;
  height: 40px;
  border-color: gainsboro;
  color: #867ae9;
} */
</style>
