<template>
<!-- 전체 div -->
<div class="container bdline">
  <!-- 상단 이메일 -->
  <br><br><br>
<div>
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
    <button type="submit" class="btn btn-primary">생성</button>
  </div>
</form>
</div>
<br><br><br>
<!-- 하단 테이블 -->
    <div>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">담당자 E-mail</th>
      <th scope="col">열람기간</th>
      <th scope="col">차단하기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>butt</td>
      <td>Otto</td>
      <td><button>차단</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td><button>차단</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Thornton</td>
      <td><button>차단</button></td>
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