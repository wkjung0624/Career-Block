<template>
<!-- 전체 div -->
<div class="mt-5 container px-4 px-lg-5 py-5 rounded-3 bg-light bg-gradiente">
  <!-- 상단 이메일 -->
<div class="container">
<form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto" style="padding-left: 10px;">
  <p style="padding-top: 15px;">담당자 E-mail</p>
  </div>
  <div class="col-auto">
    <input type="text" class="form-control" id="autoSizingInput">
  </div>
  <div class="col-auto">
    
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="autoSizingInputGroup">
    </div>
  </div>
  <div class="col-auto">
   
    <select class="form-select" id="autoSizingSelect">
      <option selected>선택</option>
      <option value="1">gmail.com</option>
      <option value="2">hanmail.com</option>
      <option value="3">naver.com</option>
    </select>
  </div>
  
  <div class="col-auto">
    <button type="submit" class="btn btn-success">추가</button>
  </div>
</form>
</div>
<br><br><br>
<!-- 하단 테이블 -->
    <div>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">순번</th>
      <th scope="col">담당자</th>
      <th scope="col">열람기간</th>
      <th scope="col">차단하기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>wkjung@naver.com</td>
      <td>21.07.20 - 21.09.30</td>
      <td><button class="btn btn-primary">삭제</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>hykim@google.com</td>
      <td>21.07.28 - 21.10.21</td>
      <td><button class="btn btn-primary">삭제</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>kmjung@baemin.com</td>
      <td>21.08.02 - 21.09.30</td>
      <td><button class="btn btn-primary">삭제</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>jyseo@socar.com</td>
      <td>21.08.02 - 21.09.30</td>
      <td><button class="btn btn-primary">삭제</button></td>
    </tr>
    
    
  </tbody>
</table>
    </div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>

<style scoped>
.bdline {
  border: 1px solid red;
}
</style>