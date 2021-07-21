<template>
  <div class="base">
    <div class="header">
        <div>프로젝트 경력</div>
      </div>
    <!-- 수정가능(로그인시)  -->
    <div v-if="isEditable" id="delete_box">
      <!-- 제목 -->
      <div class="rows" v-bind:key="idx" v-for="(item, idx) in itemList">
        <!-- 1줄 -->
        <!-- 1-1 프로젝트명 -->
        <div class="float1" style="width: 940px;">
          <div class="box_line">
            <button @click="delItem(idx)" class="dltbtn" id="delete_click">
              X
            </button>
            <input
              type="text"
              v-model="item.projectName"
              id="projectName"
              placeholder="프로젝트명"
             
            />
          </div>
        </div>

        <!-- 2줄 -->
        <div class="float2" style="width:940px;">
          <!-- 2-1 고객사 -->
          <div class="box_line" style="width:235px;">
            <input
              type="text"
              v-model="item.customer"
              class="none_border"
              placeholder="고객사"
              style="position: relative; bottom: 1p"
            />
          </div>

          <!-- 2-2 역할 -->
          <div class="box_line" style="width:235px;">
            <input
              type="text"
              v-model="item.part"
              class="none_border"
              placeholder="역할"
              style="position: relative; bottom: 1px"
            />
          </div>

          <!-- 2-3 시작일 -->
          <div class="box_line" style="width:235px;">
            <input
              type="tel"
              v-model="item.startDate"
              pattern="[0-9]{4}.[0-9]{2}"
              class="none_border"
              placeholder="시작일"
              style="position: relative; bottom: 1p"
            />
          </div>

          <!-- 2-4 종료일 -->
          <div class="box_line" v-show="item.isWorking != true" style="width:235px;">
            <input
              type="tel"
              v-model="item.endDate"
              pattern="[0-9]{4}.[0-9]{2}"
              class="none_border"
              placeholder="종료일"
              style="position: relative; bottom: 1p"
            />
          </div>
        </div>
        <!-- f2 -->

        <!-- 3줄 -->
        <!-- 3. 담당업무 기술 -->
        <div class="float3">
          <div
            class="box_line"
            style="width: 940px"
            v-show="item.isDuty != true"
          >
            <p style="text-align: left;">수행내역</p>
            <textarea
              v-model="item.job_description"
              cols="110"
              rows="4"
              style="border: 1px solid gainsboro; resize: none; font-size: 15px;"
              placeholder="담당하신 업무와 성과에 대해 간단명료하게 적어주세요."
            ></textarea>
          </div>
        </div>
      </div>
      <!-- rows -->

      <div class="float6">
        <div class="box_line">
          <button
            style="
              width: 919px;
              height: 40px;
              background-color: white;
              font-size: 15px;
              border: none;
            "
            @click="addItem"
            
            
          >
            프로젝트 경력 추가
          </button>
        </div>
      </div>
      <!-- f6 -->
    </div>
    <!-- 수정 -->

    <!-- 조회 -->

    <div v-else id="delete_box" class="resume">
      <!-- 제목 -->
      <div class="header">프로젝트 경력</div>
      <!-- <div colspan="5" style="font-size: 25px; text-align: left">■ 경력</div> -->
      <div v-bind:key="idx" v-for="(item, idx) in itemList">
        <!-- 1. 재직일/회사명/직급,직책,직무 -->
        <div class="item">
          <!-- 1-1) 프로젝트 기간 -->
          <div class="left">
            <div class="date">{{ item.startDate }}~{{ item.endDate }}</div>
            <div class="term">{{ item.termDate }}</div>
          </div>

          <!-- 1-2) 프로젝트명/고객사/역할 -->
          <div class="content">
            <span class="title">{{ item.projectName }}</span>
            <span class="sub_title">{{ item.part }}</span>
            <span class="sub_title">{{ item.customer }}</span>

            <!-- 1-3) 수행내역 -->
            <span class="sub_title">{{ item.job_description }}</span>
          </div>
          <!-- 조회 - content -->
        </div>
        <!-- 조회 - item -->
      </div>
      <!-- 조회 - v bind -->
    </div>
    <!-- 조회 -->
  </div>
  <!-- 전체 base -->
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      //    시작일 : startDate         (date)
      //    종료일 : endDate           (date)
      //    프로젝트명 : projectName   (text)
      //    고객사 : customer          (text)
      //    업무내용 : job_description (longtext)
      //    역할   : part              (text)

      itemList: [],

      // 기간
      termDate: {},

      // checkbox-checked/ v-show
      isView: true,
      isWorking: false,
      isIncome: false,
      isDuty: false,
      isDescription: false,
      clicked: false,
      isEditable: true,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},

  methods: {
    isClicked() {
      this.clicked = !this.clicked;
    },
    addItem() {
      this.itemList.push({
        startDate: "",
        endDate: "",
        projectName: "",
        customer: "",
        job_description: "",
        part: "",
      });
    },
    delItem(idx) {
      this.itemList.splice(idx, 1);
    },
  },
  watch: {
    // 프리랜서 클릭시 직급/직책 해제, 직급/직책 클릭시 프리랜서 해제
    itemList() {
      this.itemList;
    },
  },
};
</script>
<style scoped>
/* 수정가능(로그인) */
.base {
  width: 940px;
  text-align: left;
  margin: 0 auto;
  /* padding-bottom: 75px; */
  font: 15px "맑은 고딕", Malgun Godivic, "돋움", Dotum, sans-serif;
  border: none;
  
}

.rows {
  margin-bottom: 0px;
}

/* float 설정 */

.base > div {
  display: block;
}

.float1,
.float2 {
  width: 150px;
  height: 50px;
}

.float1,
.float2,
.float3,
.float3,
.float4,
.float5,
.float6 {
  display: flex;
  font: 12px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif;
}

/* 삭제 */
#delete_box {
  position: relative;
  width: 940px;
  
}

#delete_click {
  position: relative;
  left: 894px;
  bottom: 12px;
}

.box_line {
  border: 1px solid gainsboro;
  font-size: 15px;
  padding: 10px;
  background-color: white;
}

.none_border {
  border: none;
  font-size: 15px;
  
  height: 30px;
  /* border: 0;
  outline: 0;
  border-style: none; */
  /* text-align: center; */
}

/* 프로젝트 */
#projectName {
  width: 883px;
  height: 30px;
  position: relative; bottom: 10px; right: 35px;
  font-size: 15px;
  border: none;
}

/* 조회 */
/* 전체 이력서 항목을 묶는 DIV */
.resume {
  margin: 0px, 50px, 0px, 50px;
  text-align: left;
  margin: 0 auto;
  padding-bottom: 75px;
  font: 12px "맑은 고딕", Malgun Godivic, "돋움", Dotum, sans-serif;
}

/* 각 항목별 제목(예시: 제목 : 학력, 경력, 교육 등등) */
.header {
  margin-bottom: 13px;
  font-size: 22px;
  color: #000;
  padding-top: 30px;
  padding-bottom: 5px;
}

/* 각 항목별 기본틀(box)(예시: 학력, 경력, 교육 등의 틀을 담는 box) */
.item {
  width: 940px;
  border-top: 1px solid #edeef0;
}

/* item 왼쪽 div(날짜 기입)  */
.date {
  margin-bottom: 7px;
  font-size: 14px;
  color: #000;
}

/* item 아래의 상태 기입(10개월, 2개월, 졸업예정 등등) */
.term {
  font-size: 13px;
  color: #3399ff;
  /* letter-spacing: -1px; */
}

/* 기본틀 item 안에서 오른쪽 div */
.content {
  font-size: 14px;
  line-height: 2.3;
}

/* 기본틀 내부의 제목(경력: 회사명, 학력: 학교명) */
.title {
  font-size: 16px;
  font-weight: bold;
}

/*  기본틀 내부의 부제목 혹은 설명(경력: 직급,직책,직무 등) */
.sub_title {
  font-size: 14px;
  color: #666;
  margin-left: 5px;
}
.dltbtn {
  width: 35px;
  height: 35px;
  background-color: RGB(187, 187, 187);
  border: 0px;

  font-size: 25px;
  color: white;
}

/* 추가 버튼 */
#btn2 {
  width: 940px;
  height: 60px;
}

.txt {
  position: relative; bottom: 10px;
}
</style>
