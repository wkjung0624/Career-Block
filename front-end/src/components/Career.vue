<template>
  <div class="base">
    <!-- 수정가능(로그인시)  -->
    <table v-if="isEditable" id="delete_box">
      <!-- 제목 -->
      <thead>
        <th colspan="5" style="font-size: 25px; text-align: left">■ 경력</th>
      </thead>
      <div v-bind:key="idx" v-for="(item, idx) in itemList">
        <thead>
          <!-- 1줄 -->
          <tr>
            <!-- 1-1 회사명 -->
            <th>
              <div class="box_line">
                <button @click="delItem(idx)" id="delete_click">X</button>
                <input
                  type="text"
                  v-model="item.companyName"
                  class="none_border"
                  placeholder="회사명"
                />
              </div>
            </th>
            <!-- 1-2 부서명 -->
            <th>
              <div class="box_line">
                <input
                  type="text"
                  v-model="item.departmentName"
                  class="none_border"
                  placeholder="부서명"
                />
              </div>
            </th>
            <th>
              <!-- 1-3 시작일 -->
              <div class="box_line">
                <input
                  type="tel"
                  v-model="item.startDate"
                  pattern="[0-9]{4}.[0-9]{2}"
                  class="none_border"
                  placeholder="시작일"
                />
              </div>
            </th>
            <!-- 1-4 종료일 -->
            <th>
              <div class="box_line" v-show="item.isWorking != true">
                <input
                  type="tel"
                  v-model="item.endDate"
                  pattern="[0-9]{4}.[0-9]{2}"
                  class="none_border"
                  placeholder="종료일"
                />
              </div>
            </th>
            <!-- 1-5 재직중(check 박스) -->
            <th>
              <div>
                <input
                  type="checkbox"
                  name="working"
                  v-model="item.isWorking"
                />
                <label for="working">재직중</label>
              </div>
            </th>
          </tr>

          <!-- 2줄 -->
          <tr>
            <!-- 2-1 직급/직책 -->
            <!-- !! 프리랜서 radio -->
            <th>
              <div class="box_line">
                <p>직급/직책</p>
                <div>
                  <select
                    name="position"
                    v-model="item.position"
                    class="none_border"
                  >
                    <option value="0">주임/계장</option>
                    <option value="1">대리</option>
                    <option value="2">과장</option>
                    <option value="3">차장</option>
                    <option value="4">부장</option>
                    <option value="5">임원</option>
                    <option value="6">연구원</option>
                    <option value="7">주임연구원</option>
                    <option value="8">선임연구원</option>
                    <option value="9">책임연구원</option>
                    <option value="10">수석연구원</option>
                    <option value="11">연구소장</option>
                  </select>

                  <!-- 2-1 직책명 -->

                  <!-- <label for="job_title">직책</label> -->
                  <select
                    name="job_title"
                    v-model="item.job_title"
                    class="none_border"
                  >
                    <option value="0">팀원</option>
                    <option value="1">팀장</option>
                    <option value="2">매니저</option>
                    <option value="3">파트장</option>
                    <option value="4">실장</option>
                    <option value="5">지점장</option>
                    <option value="6">지사장</option>
                    <option value="7">원장</option>
                    <option value="8">국장</option>
                    <option value="9">본부장</option>
                    <option value="10">공장장</option>
                    <option value="11">그룹장</option>
                  </select>

                  <!-- <input type="checkbox" placeholder="프리랜서" /> -->
                </div>
              </div>
            </th>

            <!-- 2-2 직무명 -->
            <th>
              <div class="box_line">
                <p>직무</p>
                <select name="duty" v-model="item.duty" class="none_border">
                  <option value="0">경영/사무</option>
                  <option value="1">마케팅/광고/홍보</option>
                  <option value="2">IT/인터넷</option>
                  <option value="3">디자인</option>
                  <option value="4">무역/유통</option>
                  <option value="5">영업/고객상담</option>
                  <option value="6">서비스</option>
                  <option value="7">연구개발/설계</option>
                  <option value="8">생산/제조</option>
                  <option value="9">교육</option>
                  <option value="10">건설</option>
                  <option value="11">의료</option>
                  <option value="12">미디어</option>
                  <option value="13">전문/특수직</option>
                </select>
              </div>
            </th>
            <!-- 2-3 연봉-->
            <th>
              <div class="box_line" v-show="item.isIncome != true">
                <p>연봉</p>
                <input
                  type="number"
                  class="none_border"
                  v-model="annual_Income"
                />
              </div>
            </th>
            <!-- 2-4 -->
            <th></th>
            <!-- 2-5 -->
            <th></th>
          </tr>

          <!-- 3줄 -->
          <tr>
            <!-- 3줄 -->
            <!-- 3-1~5 담당업무 기술 -->
            <th colspan="5">
              <div class="box_line" v-show="item.isDuty != true">
                <p style="text-align: left">담당업무</p>
                <textarea
                  v-model="item.job_description"
                  cols="127"
                  rows="4"
                  placeholder="담당하신 업무와 성과에 대해 간단명료하게 적어주세요."
                ></textarea>
              </div>
            </th>
          </tr>
        </thead>

        <!-- 4줄  -->
        <tbody>
          <tr>
            <!-- 연봉(button) -->
            <th colspan="3" style="text-align: left">
              <div class="box_line" style="width: 80px">
                연봉 X
                <input
                  type="checkbox"
                  v-model="item.isIncome"
                  class="none_border"
                />
              </div>
              <!-- 담당업무(button) -->
              <div class="box_line" style="width: 110px">
                담당업무 X
                <input type="checkbox" v-model="item.isDuty" />
              </div>
            </th>
            <!-- <th>
              <input type="checkbox" name="" id="" />
              <label for="">인재정보에 회사명 비공개</label>
              <button>?</button>
            </th> -->
          </tr>

          <!-- 5줄 -->

          <!-- 6줄 -->
          <tr>
            <td colspan="5">
              <div class="box_line" v-show="item.isDescription != true">
                <span style="margin-right: 20px"
                  ><strong>경력 기술서</strong></span
                >
                <span style="color: grey"
                  >자유롭게 경력을 작성할 수 있습니다.</span
                >
                <label for="" style="color: blue">작성하기</label>
                <input type="checkbox" v-model="item.isDescription" />
              </div>
              <!-- 경력기술서(hidden) -->
              <div>
                <div class="box_line" v-show="item.isDescription == true">
                  <p style="text-align: left">경력기술서</p>
                  <textarea
                    cols="127"
                    rows="4"
                    v-model="career_description"
                  ></textarea>
                  <input type="checkbox" v-model="item.isDescription" />
                  <label for="" style="color: blue">경력기술서 삭제</label>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </div>
      <tr>
        <th colspan="5">
          <div class="box_line">
            <button
              style="
                width: 920px;
                height: 50px;
                background-color: white;
                font-size: 17px;
                font-weight: 600;
              "
              @click="addItem"
              class="none_border"
            >
              경력 추가
            </button>
          </div>
        </th>
      </tr>
    </table>

    <!-- 조회 -->

    <div v-else id="delete_box" class="resume">
      <!-- 제목 -->
      <div class="header">경력</div>
      <!-- <th colspan="5" style="font-size: 25px; text-align: left">■ 경력</th> -->
      <div v-bind:key="idx" v-for="(item, idx) in itemList">
        <!-- 1. 재직일/회사명/직급,직책,직무 -->
        <div class="item">
          <!-- 1-1) 재직일/기간 -->
          <div class="left">
            <div class="date">{{ item.startDate }}~{{ item.endDate }}</div>
            <div class="term">{{ item.termDate }}</div>
          </div>
          <!-- 1-2) 회사명/부서명/직급/직책/직무/연봉/담당 업무 기술 -->
          <div class="content">
            <span class="title">{{ item.companyName }}</span>
            <span class="sub_title">{{ item.departmentName }}</span>
            <!-- 직급 -->
            <span class="sub_title" v-if="item.position == 0">주임/계장</span>
            <span class="sub_title" v-if="item.position == 1">대리</span>
            <span class="sub_title" v-if="item.position == 2">과장</span>
            <span class="sub_title" v-if="item.position == 3">차장</span>
            <span class="sub_title" v-if="item.position == 4">부장</span>
            <span class="sub_title" v-if="item.position == 5">임원</span>
            <span class="sub_title" v-if="item.position == 6">연구원</span>
            <span class="sub_title" v-if="item.position == 7">주임연구원</span>
            <span class="sub_title" v-if="item.position == 8">선임연구원</span>
            <span class="sub_title" v-if="item.position == 9">책임연구원</span>
            <span class="sub_title" v-if="item.position == 10">수석연구원</span>
            <span class="sub_title" v-if="item.position == 11">연구소장</span>

            <!-- 직책 -->
            <span class="sub_title" v-if="item.job_title == 0">팀원</span>
            <span class="sub_title" v-if="item.job_title == 1">팀장</span>
            <span class="sub_title" v-if="item.job_title == 2">매니저</span>
            <span class="sub_title" v-if="item.job_title == 3">파트장</span>
            <span class="sub_title" v-if="item.job_title == 4">실장</span>
            <span class="sub_title" v-if="item.job_title == 5">지점장</span>
            <span class="sub_title" v-if="item.job_title == 6">지사장</span>
            <span class="sub_title" v-if="item.job_title == 7">원장</span>
            <span class="sub_title" v-if="item.job_title == 8">국장</span>
            <span class="sub_title" v-if="item.job_title == 9">본부장</span>
            <span class="sub_title" v-if="item.job_title == 10">공장장</span>
            <span class="sub_title" v-if="item.job_title == 11">그룹장</span>

            <!-- 직무 -->
            <span class="sub_title" v-if="item.duty == 0">경영/사무</span>
            <span class="sub_title" v-if="item.duty == 1"
              >마케팅/광고/홍보</span
            >
            <span class="sub_title" v-if="item.duty == 2">IT/인터넷</span>
            <span class="sub_title" v-if="item.duty == 3">디자인</span>
            <span class="sub_title" v-if="item.duty == 4">무역/유통</span>
            <span class="sub_title" v-if="item.duty == 5">영업/고객상담</span>
            <span class="sub_title" v-if="item.duty == 6">서비스</span>
            <span class="sub_title" v-if="item.duty == 7">연구개발/설계</span>
            <span class="sub_title" v-if="item.duty == 8">생산/제조</span>
            <span class="sub_title" v-if="item.duty == 9">교육</span>
            <span class="sub_title" v-if="item.duty == 10">건설</span>
            <span class="sub_title" v-if="item.duty == 11">의료</span>
            <span class="sub_title" v-if="item.duty == 12">미디어</span>
            <span class="sub_title" v-if="item.duty == 13">전문/특수직</span>

            <!-- 연봉 -->
            <span class="sub_title">{{ item.annual_Income }}</span>

            <!-- 담당업무 기술 -->
            <span class="sub_title">{{ item.job_description }}</span>

            <!-- 2. 경력 기술 -->
            <div class="left">
              <div class="date">경력기술서</div>
              <div class="sub_title">{{ item.career_description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      //    시작일 : startDate         (date)
      //    종료일 : endDate           (date)
      //    회사명 : companyName       (text)
      //    부서명 : departmentName    (text)
      //    직급   : position          char(2)
      //    직책   : job_title         char(2)
      //    직무   : duty              char(2)
      //    연봉   : anuual_Income
      //    업무내용 : job_description (longtext)
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
        companyName: "",
        departmentName: "",
        position: "",
        job_title: "",
        duty: "",
        annual_Income: "",
        job_description: "",
        career_description: "",
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
  padding-bottom: 75px;
  font: 12px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif;
}

#delete_box {
  position: relative;
}

#delete_click {
  position: absolute;
  top: 0px;
  right: 0px;
}

table {
  padding: 20px;
  background-color: lightgrey;
}

.box_line {
  border: 2px solid lightgray;
  padding: 10px;
  background-color: white;
}

.none_border {
  border: 0;
  outline: 0;
  border-style: none;
  text-align: center;
}

/* 조회 */
/* 전체 이력서 항목을 묶는 DIV */
.resume {
  margin: 0px, 50px, 0px, 50px;
  text-align: left;
  margin: 0 auto;
  padding-bottom: 75px;
  font: 12px "맑은 고딕", Malgun Gothic, "돋움", Dotum, sans-serif;
}

/* 각 항목별 제목(예시: 제목 : 학력, 경력, 교육 등등) */
.header {
  margin-bottom: 13px;
  font-size: 22px;
  color: #000;
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
</style>
