<template>
    <div class="box-container">
        <p style="text-align:left; font-size: 25px;">교육</p>
        <table>
<tr style="height:80px;">
    <td style="width:34%;"><input type="text" class="txt" style="width:280px;" v-model="Title"></td>
    <td style="width:34%;"><input type="text" class="txt" style="width:280px;" v-model="Host"></td>
    <td style="width:13.5%;"><input type="text" class="txt" style="width:94px;" v-model="Start"></td>
    <td style="width:13.5%;"><input type="text" class="txt" style="width:94px;" v-model="End"></td>  
    <td style="width:5%;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSyXDvri02sDUIP1BGfKY1pso1zn7AlCyXA&usqp=CAU" alt="" class="dltbtn"></td>
</tr>
<tr>
    <td colspan="5"><textarea name="" id="" class="txta" v-model="Message"></textarea></td>
</tr>
<tr style="border-top:solid 1px gainsboro; height:60px;">
    <td colspan="5"><button class="add"><img src="https://image.flaticon.com/icons/png/512/117/117885.png" alt="" class="addbtn">&nbsp;교육 추가</button></td>
</tr>
        </table>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
           Title: '교육명',
           Host: '교육기관',
           Start: '시작년월',
           End: '종료년월',
           Message: '이수하신 교육 과정에 대해 적어주세요.'       
            };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
       
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

.dltbtn {
    width:30px;
    height: 30px;
    position: relative; bottom:18px; left:3px;
    
    
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