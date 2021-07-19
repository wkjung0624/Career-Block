<template>
    <div class="box-container">
        <p style="color:white; font-size:40px; padding-top:10px; padding-left:10px; text-align:left;">약관동의</p>
        <div>
        <label for="allagree" style="color:white; font-size:25px;  position: relative; right: 230px;">전체동의</label>
            <input
              id="allagree"
              class="check-box"
              type="checkbox"
              v-model="selectAll"
              style="positon: relative; right: 220px;"
            />
          

          <ul class="check-list" v-for="content in check" :key="content" style="list-style: none;">
            <li>
              <label style="color:white; font-size:20px;"
                ><span>{{ content.agreeTitle }}</span></label
              >
              <input
                type="checkbox"
                v-model="selected"
                :value="content.id"
                number
                class="check-box"
                style="positon: relative; left: 5px; top: 4px;"
              />
              <br>
              <pre class="txta" readonly>{{content.agreeText}}</pre>
            </li>
          </ul>
          </div>
  <div>
      <center>
            <button class="btn">취소</button>&nbsp;&nbsp;
            <button class="btn" style="background:rgb(223, 165, 248);" @click="submitToParent">확인</button>
            </center>
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
        agreeText: `제 1 조 (회사의 의무)
회사는 사이트를 안정적이고 지속적으로 운영할 의무가 있다.
회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정될 경우에는 즉시 처리해야 한다. 단, 즉시 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 공지사항 또는 전자우편을 통해 통보해야 한다.
제1항의 경우 수사상의 목적으로 관계기관 및 정보통신윤리위원회의 요청이 있거나 영장 제시가 있는 경우, 기타 관계 법령에 의한 경우는 예외로 한다.
제 2 조 (이용자의 의무)
이용자는 본 약관 및 회사의 공지사항, 사이트 이용안내 등을 숙지하고 준수해야 하며 기타 회사의 업무에 방해되는 행위를 해서는 안된다.
이용자는 회사의 사전 승인 없이 본 사이트를 이용해 어떠한 영리행위도 할 수 없다.
이용자는 본 사이트를 통해 얻는 정보를 회사의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판, 방송 및 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없다.
제 2 장 서비스의 제공 및 이용
제 9 조 (서비스 이용)
이용자는 본 약관의 규정된 사항을 준수해 사이트를 이용한다.
본 약관에 명시되지 않은 서비스 이용에 관한 사항은 회사가 정해 ‘공지사항’에 게시하거나 또는 별도로 공지하는 내용에 따른다.
제 10 조 (정보의 제공)
회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보에 대하여 전자메일이나 서신우편 등의 방법으로 회원에게 정보를 제공할 수 있다.

제 11 조 (광고게재)
회사는 서비스의 운용과 관련하여 서비스 화면, 홈페이지, 전자우편 등에 광고 등을 게재할 수 있다.
회사는 사이트에 게재되어 있는 광고주의 판촉활동에 회원이 참여하거나 교신 또는 거래의 결과로서 발생하는 모든 손실 또는 손해에 대해 책임을 지지 않는다.
제 12 조 (서비스 이용의 제한)
본 사이트 이용 및 행위가 다음 각 항에 해당하는 경우 회사는 해당 이용자의 이용을 제한할 수 있다.
`,
    
        },

        {
          id: "2",
          agreeTitle: "개인정보 수집 및 이용 동의(필수)",
          Item: "필수", agreeText: `개인정보보호법에 따라 네이버에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.

1. 수집하는 개인정보
이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 네이버 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 네이버는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.

회원가입 시점에 네이버가 이용자로부터 수집하는 개인정보는 아래와 같습니다.
- 회원 가입 시에 ‘아이디, 비밀번호, 이름, 생년월일, 성별, 휴대전화번호’를 필수항목으로 수집합니다. 만약 이용자가 입력하는 생년월일이 만14세 미만 아동일 경우에는 법정대리인 정보(법정대리인의 이름, 생년월일, 성별, 중복가입확인정보(DI), 휴대전화번호)를 추가로 수집합니다. 그리고 선택항목으로 이메일 주소, 프로필 정보를 수집합니다.
- 단체아이디로 회원가입 시 단체아이디, 비밀번호, 단체이름, 이메일주소, 휴대전화번호를 필수항목으로 수집합니다. 그리고 단체 대표자명을 선택항목으로 수집합니다.
서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
NAVER 내의 개별 서비스 이용, 이벤트 응모 및 경품 신청 과정에서 해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및 이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.

서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 위치정보가 생성되어 수집될 수 있습니다. 또한 이미지 및 음성을 이용한 검색 서비스 등에서 이미지나 음성이 수집될 수 있습니다.
구체적으로 1) 서비스 이용 과정에서 이용자에 관한 정보를 자동화된 방법으로 생성하여 이를 저장(수집)하거나,
2) 이용자 기기의 고유한 정보를 원래의 값을 확인하지 못 하도록 안전하게 변환하여 수집합니다. 서비스 이용 과정에서 위치정보가 수집될 수 있으며,
네이버에서 제공하는 위치기반 서비스에 대해서는 '네이버 위치정보 이용약관'에서 자세하게 규정하고 있습니다.
이와 같이 수집된 정보는 개인정보와의 연계 여부 등에 따라 개인정보에 해당할 수 있고, 개인정보에 해당하지 않을 수도 있습니다.

2. 수집한 개인정보의 이용
네이버 및 네이버 관련 제반 서비스(모바일 웹/앱 포함)의 회원관리, 서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만 개인정보를 이용합니다.

- 회원 가입 의사의 확인, 연령 확인 및 법정대리인 동의 진행, 이용자 및 법정대리인의 본인 확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다.
- 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여, 인구통계학적 분석, 서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다.`,
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
     
      width: 600px;
      height: 900px;
      background: #867ae9;
      margin: auto;
    }

.txta {
   position: relative; left: 52px;
  width:410px; 
  height:300px;
  overflow: auto;
  background: white;
  text-align: left;
  padding:10px;
  color: rgba(66, 57, 57, 0.432);
}

.btn {
    width: 180px;
    height: 40px;
    border-color: gainsboro;
    color:rgba(66, 57, 57, 0.432);
}

.check-box {
    width: 20px;
    height: 20px;
    position: relative; top:2px;
}
</style>