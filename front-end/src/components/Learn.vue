<template>
    <div class="box-container" v-for="item in itemList">
        <p style="text-align:left; font-size: 25px;">교육</p>
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
    <button style="width: 1000px; height:60px;" @click="addItem">교육 추가</button>
</template>

<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            itemList : []       
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
    width: 800px;
    margin: auto;
    }

    table,
tr,
td {
      border-collapse: collapse;
}

table {
    border: solid 1px gainsboro;
    width: 900px;
    height: 300px;
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
    border-color: gainsboro;
    color:rgba(90, 81, 81, 0.432);
    font-size: 18px;
    padding-left: 10px;
}

.txta {
    border-color:gainsboro; 
    color:rgba(90, 81, 81, 0.432);
    font-size: 18px;
    width: 870px;
    height: 140px;
}

.add:hover {
    background-color: gainsboro;
}


</style>