<template>

    <div class="box-container">
        <h1>약관동의</h1>
        <div>
        <label for="allagree">전체동의</label>
            <input
              id="allagree"
              class="check-box"
              type="checkbox"
              v-model="selectAll"
            />
          

          <ul class="check-list" v-for="content in check" :key="content" style="list-style: none;">
            <li>
              <label
                ><span>{{ content.agreeTitle }}</span></label
              >
              <input
                type="checkbox"
                v-model="selected"
                :value="content.id"
                number
                class="check-box"
              />
              <br>
              <input type="textarea" v-model="content.agreeText" class="txta" readonly>
            </li>
          </ul>
          </div>
  <div>
            <button class="btn">취소</button>&nbsp;&nbsp;
            <button class="btn" style="background:rgb(223, 165, 248);" @click="submitToParent">확인</button>
        </div>


</div>

</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        
        return {
            check: [
        { id: "1", agreeTitle: "서비스 이용약관 동의(필수)", Item: "필수", 
        agreeText: "1조 사항 어쩌고 저쩌고",
        
        },

        {
          id: "2",
          agreeTitle: "개인정보 수집 및 이용 동의(필수)",
          Item: "필수", agreeText: "2조 의무 \n
          어쩌고 저쩌고"
        },

      ],
      selected: [],



        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    computed: {
    selectAll: {
      get: function () {
        return this.check ? this.selected.length == this.check.length : false;
      },
      set: function (value) {
        const selected = [];

        if (value) {
          this.check.forEach(function (content) {
            selected.push(content.id);
          });
        }

        this.selected = selected;
      },
    },
  },

   methods: {
        submitToParent(){
            this.$emit('send-message', 1);
        }
    }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
    * {
        box-sizing: border-box;
      font-family: 'Hanna', sans-serif;
      
    }

.box-container {
     
      width: 560px;
      height: 800px;
      background: #867ae9;
      margin: auto;
    }

.txta {
width:410px; 
height:300px;
overflow: auto;
}
.btn {
    width: 180px;
    height: 40px;
    border-color: gainsboro;
    color:rgba(66, 57, 57, 0.432);
}

</style>