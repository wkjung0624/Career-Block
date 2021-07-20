<template>
<div>
   
    <p style="text-align: left; font-size: 22px; padding-left: 280px;">교육</p>
<div class="box-container" v-for="item in itemList" v-if="isEditable">
        <table>
            <tr style="height:80px;">
                <td style="width:34%;"><input type="text" class="txt" style="width:280px;" v-model="item.title" placeholder="교육명"></td>
                <td style="width:34%;"><input type="text" class="txt" style="width:280px;" v-model="item.host" placeholder="교육기관"></td>
                <td style="width:13.5%;"><input type="text" class="txt" style="width:94px;" v-model="item.start" placeholder="시작년월"></td>
                <td style="width:13.5%;"><input type="text" class="txt" style="width:94px;" v-model="item.end" placeholder="종료년월"></td>  
                <td style="width:5%;"><button class="btn-delete" @click="delItem(index)">X</button></td>
            </tr>
            <tr>
                <td colspan="5"><textarea name="" id="" class="txta" v-model="item.message" placeholder="이수하신 교육 과정에 대해 적어주세요."></textarea></td>
            </tr>
        </table>
</div>

    <div class="box-container" v-for="item in itemList" v-else>
        <p style="text-align:left; font-size: 22px; padding-left: 6px;">교육</p>
        <table>
            <tr style="height:80px;">
                <td style="width:34%;"><input type="text" class="txt-read" style="width:280px;" v-model="item.title" placeholder="교육명" readonly></td>
                <td style="width:34%;"><input type="text" class="txt-read" style="width:280px;" v-model="item.host" placeholder="교육기관" readonly></td>
                <td style="width:13.5%;"><input type="text" class="txt-read" style="width:94px;" v-model="item.start" placeholder="시작년월" readonly></td>
                <td style="width:13.5%;"><input type="text" class="txt-read" style="width:94px;" v-model="item.end" placeholder="종료년월" readonly></td>  
            </tr>
            <tr>
                <td colspan="5"><textarea name="" id="" class="txta" v-model="item.message" placeholder="이수하신 교육 과정에 대해 적어주세요." readonly></textarea></td>
            </tr>
        </table>
    </div>
    <button style="width: 940px; height:60px; font-size: 15px;" @click="addItem">교육 추가</button>
    <br>
    <button style="width: 940px; height:60px; top:5px; font-size: 15px;" @click="changeEditable()">조회/수정</button>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            itemList : [],
            isEditable : true  
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods:{
        addItem(){
            var dummy = {
                title: '',
                host: '',
                start: '',
                end: '',
                message: ''
            };
            this.itemList.push(dummy);
        },
        delItem(index){
            this.itemList.splice(index,1);
        },
        changeEditable(){
            this.isEditable = !this.isEditable;  
        }
    }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/hanna.css);
    * {
        box-sizing: border-box;
      font: 12px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif;
      
    }

    .box-container {
    width: 940px;
    margin: auto;
    }

    table,
tr,
td {
      border-collapse: collapse;
}

table {
    border: solid 1px gainsboro;
    width: 940px;
    height: 200px;
    position: relative; bottom:10px;
}

.addbtn {
    width:20px;
    height: 20px;
    position: relative; top:3px;
}

.add {
    width:100%;
    height: 100%;
    border:none;
    background-color: white;
    font-size: 20px;
}

    .btn-delete {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 35px;
        height: 35px;
        background-color: RGB(187,187,187);
        border: 0px;
        float:right;
        font-size: 25px;
        color: white;
    }



.txt {
    height: 50px;
    border: 1px solid gainsboro;
    
    font-size: 15px;
    padding-left: 10px;
}

.txt-read {
    height: 50px;
    border: none;
    
    font-size: 15px;
    padding-left: 10px;
}

.txta {
    border-color:gainsboro; 
    
    font-size: 15px;
    width: 900px;
    height: 100px;
    
}

.add:hover {
    background-color: gainsboro;
}


</style>