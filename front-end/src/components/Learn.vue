<template>
    <div class="box-container">
        <p style="text-align:left; font-size: 25px;">교육</p>
        <table>
            <tr style="height:80px;">
                <td style="width:34%;"><input type="text" class="txt" style="width:280px;" value="교육명"></td>
                <td style="width:34%;"><input type="text" class="txt" style="width:280px;" value="교육기관"></td>
                <td style="width:13.5%;"><input type="text" class="txt" style="width:94px;" value="시작년월"></td>
                <td style="width:13.5%;"><input type="text" class="txt" style="width:94px;" value="종료년월"></td>  
                <td style="width:5%;"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSyXDvri02sDUIP1BGfKY1pso1zn7AlCyXA&usqp=CAU" alt="" class="dltbtn"></td>
            </tr>
            <tr>
                <td colspan="5">
                    <textarea name="" id="" class="txta">

    이수하신 교육 과정에 대해 적어주세요.
                    </textarea></td>
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
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
       del() {

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
    width: 1000px;
    margin-left: 0;
    margin-right: 0;
}

table, tr, td {
      border-collapse: collapse;
}

table {
    border: solid 1px gainsboro;
    width: 1000px;
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
    width: 900px;
    height: 140px;
    float:left;
    margin-left: 30px;
}

.add:hover {
    background-color: gainsboro;
}


</style>