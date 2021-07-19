<template>
  <div class="item">
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
                <input type="number" class="none_border" />
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

    <table v-else id="delete_box">
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
                <div class="date"></div>
                <div class="title">회사명</div>
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
                <label for="startDate">시작일</label>
                <input
                  type="date"
                  v-model="item.startDate"
                  class="non_border"
                />
              </div>
            </th>
            <!-- 1-4 종료일 -->
            <th>
              <div class="box_line" v-show="item.isWorking != true">
                <label>종료일</label>
                <input type="date" v-model="item.endDate" class="non_border" />
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
                <input type="number" class="none_border" />
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
                <textarea v-model="item.job_description" cols="127" rows="4">
담당하신 업무와 성과에 대해 간단명료하게 적어주세요.</textarea
                >
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
      //    업무내용 : job_description (longtext)
      itemList: [],

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
.item {
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
</style>
