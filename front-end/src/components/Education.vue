<template>
    <div class="base">
        <p style="text-align:left; font-size: 22px;">학력</p>
        <button @click="changeEditable()">수정가능상태 변경</button>
        <button @click="showDataInfo()">현재 입력값들 콘솔에 출력</button>
        <div v-bind:key=index v-for="(item, index) in itemList" class="container">
            <!-- 7번 라인 ~ 33번 라인 : 수정이 가능한 경우(본인 로그인) 화면 구성 -->
            <div class="row" v-if="isEditable">
                <select v-model="item.gubun" class="sel">
                    <option value=0>고등학교</option>
                    <option value=1>대학(2,3년)</option>
                    <option value=2>대학교(4년)</option>
                    <option value=3>대학원</option>
                </select>

                <input type="text" class="mini" v-model="item.schoolName" style="width:140px;">

                <input type="text" class="mini" v-show="item.gubun == 3" v-model="item.degree" style="width: 60px;" >

                <input type="text" class="mini" v-show="item.gubun != 0" v-model="item.startDate" style="width: 140px;">
                <input type="text" class="mini" v-model="item.endDate" style="width: 140px;">

                <select v-model="item.graduateState" class="sel2">
                    <option value=0>졸업</option>
                    <option value=1>졸업예정</option>
                    <option value=2>재학중</option>
                    <option value=3>중퇴</option>
                    <option value=4>수료</option>
                    <option value=5>휴학</option>
                </select>

                <input type="text" class="mini" v-model="item.major" v-show="item.gubun > 0" style="width: 140px;">
                <button class="btn-delete" @click="delItem(index)">X</button>
            </div>
            
            <!-- 36번 라인 ~ 57번 라인 : 수정이 가능한 경우(본인 로그인) 화면 구성 -->
            <div class="row" v-else>
                <div class="label">
                    <span v-if="item.gubun==0">고등학교 </span>
                    <span v-if="item.gubun==1">대학(2,3년) </span>
                    <span v-if="item.gubun==2">대학교(4년) </span>
                    <span v-if="item.gubun==3">대학원 </span>
                </div>

                <div class="label">{{item.schoolName}} </div>

                <div class="label" v-if="item.gubun == 3">{{item.degree}} </div>

                <div class="label" v-if="item.gubun != 0">{{item.startDate}} </div>
                <div class="label">{{item.endDate}}</div>
                
                <div class="label" v-if="item.graduateState==0">졸업</div>
                <div class="label" v-if="item.graduateState==1">졸업예정</div>
                <div class="label" v-if="item.graduateState==2">재학중</div>
                <div class="label" v-if="item.graduateState==3">중퇴</div>
                <div class="label" v-if="item.graduateState==4">수료</div>
                <div class="label" v-if="item.graduateState==5">휴학</div>

                <div>{{item.major}}</div>
            </div>
        </div>
        
        <button style="width: 940px; height:60px;" @click="addItem">학력 추가</button>
    </div>

</template>

<script>
export default {
    data(){
        return {
            
            // 학교구분 : gubun         char(1)
            // 학교명 : schoolName      text
            // 전공 : major             text
            // 입학일 : startDate       date
            // 졸업일 : endDate         date
            // 졸업상태 : graduateState char(1)
            // 학위 : degree

            itemList : [],
            isEditable : true
        }
    },
    mounted(){
       
    },
    methods:{
        addItem(){
            var dummy = {
                gubun : 0,
                schoolName : "한경고등학교",
                major : "프로그래밍",
                startDate : "(입학일) 2016.03",
                endDate : "(졸업일) 2021.02",
                graduateState : "졸업",
                degree : "박사",
            };
            this.itemList.push(dummy);
        },
        delItem(index){
            this.itemList.splice(index,1);
        },
        changeEditable(){
            this.isEditable = !this.isEditable;  
        },
        showDataInfo(){
            for(var item of this.itemList){
                console.log(item)
            }
            
        }
    }
}
</script>

<style scoped>
* {
     font: 12px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif;
}
    .base{
        overflow: hidden;
        position: relative;
        margin-bottom: 33px;
        width: 940px;
        margin: auto;
        
    }
    .container{
        border:1px solid gainsboro;
        
        height: 90px;
        padding: 5px;

        overflow: hidden;
        position: relative;
        width: 940px;
        /* padding: 0 0 20px 40px; */
        margin-bottom: 10px;
        background-color: #fff;
        box-sizing: border-box;

        margin: 0 auto;
        z-index: 800;
        zoom: 1;

        text-align: left;
    }
    .info-container{
        height:150px;
        padding-bottom:30px;
    }
    .info-general{
        padding-top: 15px;
        margin-bottom: 13px;
        font-size: 0;
    }
    .info-detail{
        width: 750px;
    }
    .photo, .profile{
        z-index: 10;
        position: absolute;
        left: 0;
        top: 0;
        width: 140px;
        height: 182px;
        margin: 0px;
        border: 2px solid;
    }
    .item{
        display: inline-block;
        font-size: 14px;
        color:RGB(160,160,160);
        margin-left:7px;
        vertical-align: top;
    }
    .item-head{
        position: relative;
        display: inline-block;
        width: 350px;
        padding-right: 83px;
        margin-bottom: 11px;
        vertical-align: bottom;
        box-sizing: border-box;
    }
    .item-full{
        display: block;
        width: 100%;
    }
    .label{
        /* position: absolute; */
        left: 0;
        top: 0;
        width: 100px;
        font-size: 16px;
        color: rgb(43, 43, 43);
        border-right: 1px solid RGBA(190,190,190,100);
        margin-right:30px;
        float: left;

    }
    .value{
        padding-top: 0.5px;
        float: left;
        font-size: 16px;
        color: #000;
        letter-spacing: 0;
    }
    .name{
        margin-left: 0;
        font-size: 20px;
        color: RGB(10,0,0);
    }
    .gender, .age, .year{
        
        transform: translateY(8px);
    }

    .bg-main{
        padding: 50px;
        width:1000px;
        height:2000px;
        background-color: RGB(134,122,233);
    }
    .row{
        margin: 10px;
        border:2px dashed;
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
.sel{
    width: 105px;
    height: 50px;
    border: 1px solid gainsboro;
    font-size: 15px;
    padding-left: 5px;
}

.sel2{
    width: 95px;
    height: 50px;
    border: 1px solid gainsboro;
    font-size: 15px;
    padding-left: 5px;
}

.mini {
height: 46px; 
border: 1px solid gainsboro; 
font-size: 15px;
padding-left: 10px;
}

</style>