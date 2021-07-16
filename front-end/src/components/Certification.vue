<template>
  <div class="box-container"></div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
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
