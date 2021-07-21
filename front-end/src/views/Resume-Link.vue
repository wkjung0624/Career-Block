<template>
<!-- 전체 div -->
<div class="mt-5 container px-4 px-lg-5 py-5 rounded-3 bg-light bg-gradiente">
  <!-- 상단 이메일 -->
<div class="container">
  
  <div class="container px-4 px-lg-5">
    <h2 class="text-center fw-bolder mt-0">이력서 공유 관리</h2>
    <hr class="divider" />
  </div>

  <div class="container px-5 px-lg-5">
      <div class="row align-items-start mb-3">
          <div class="col-3">
            <span class="fw-bold">담당자</span>
          </div>
          <div class="col-2">
            <input type="text" class="form-control" id="autoSizingInput" placeholder="wkjung0624" v-model="email_1">
          </div>
          <div class="col-3">
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="example.com" v-model="email_2">
            </div>
          </div>
          <div class="col-2">
            <select class="form-select" id="autoSizingSelect" @change="selectChange" v-model="selectedEmail">
              <option selected value="0">직접입력</option>
              <option value="1">gmail.com</option>
              <option value="2">hanmail.com</option>
              <option value="3">naver.com</option>
            </select>
          </div>

          
      </div>
      <div class="row align-items-end">
          <div class="col-3">
            <span class="fw-bold">열람일자 설정</span>
          </div>
          <div class="col-3">
            <input type="text" class="form-control" placeholder="시작일) 21.06.02" v-model="startDate">
          </div>
          <div class="col-3">
            <input type="text" class="form-control"  placeholder="마감일) 21.10.22" v-model="endDate">
          </div>
          
          <div class="col-1">
              <button class="btn btn-success" @click="addItem">추가</button>
          </div>
      </div>

    </div>
</div>
<br><br><br>
<!-- 하단 테이블 -->
    <div>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">순번</th>
      <th scope="col">링크고유번호</th>
      <th scope="col">담당자</th>
      <th scope="col">열람기간</th>
      <th scope="col">차단하기</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, idx) in itemLists">
      <th scope="row">{{idx+1}}</th>
      <td>{{item.pk}}</td>
      <td>{{item.email}}</td>
      <td>{{item.open}} - {{item.close}}</td>
      <td><button class="btn btn-primary" @click="deleteItem(idx)">삭제</button></td>
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
            email_1 : '',
            email_2 : '',
            startDate : '',
            endDate : '',
            selectedEmail : 0,

            itemLists : [
              {
                pk : "A104kf3gxF",
                email : "wkjung@naver.com",
                open : "21.07.20",
                close : "21.09.30",
              },
              {
                pk : "B0kL98ITat",
                email : "hykim@google.com", 
                open : "21.07.28", 
                close : "21.10.21",
              },
              {
                pk : "CBi32zkn6xF",
                email : "kmjung@baemin.com",
                open : "21.08.02",
                close : "21.09.30"
              },
              {
                pk : "er1c48k7f39",
                email : "jyseo@socar.com",
                open : "21.08.02",
                close : "21.09.30",
              },
            ]
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
      addItem(){
        this.itemLists.push(
          {
            pk: "##########",
            email: `${this.email_1}@${this.email_2}`,
            open: this.startDate,
            close: this.endDate,
          }
        )
      },
      deleteItem(idx){
        this.itemLists.splice(idx,1);
      },
      selectChange(){
        var mappedEmail = ''

        if(this.selectedEmail=="1"){ mappedEmail = "gmail.com" }
        else if(this.selectedEmail=="2"){ mappedEmail = "hanmail.com" }
        else if(this.selectedEmail=="3"){ mappedEmail = "naver.com" }

        this.email_2 = mappedEmail;
      }
    }
}
</script>

<style scoped>
.bdline {
  border: 1px solid red;
}
</style>