import {
  createStore
} from "vuex";

import persistedstate from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      user: {},
      reg: {
        agree_1: null,
        agree_2: null,
        name: null,
        gender: null,
        year: null,
        month: null,
        day: null,
        phone: null,
        address: null,
      },

      myKeys: "a1234567",
      // myKeys: "b1234567",
      // myKeys: "c1234567",
      // searchKeys: "",

      resume: {

        "a1234567": {
          profile: {
            name: "정완규",
            gender: "남",
            birth: "1997",
            phone: "010-6720-4257",
            email: "skyship36@gmail.com",
            address: "서울특별시 관악구 신림동",
            imgSrc: "https://d2v80xjmx68n4w.cloudfront.net/gigs/rate/SEwc11582696537.png",
          },
          education: {
            gubun: 0,
            schoolName: "한경고등학교",
            major: "프로그래밍",
            startDate: "(입학일) 2016.03",
            endDate: "(졸업일) 2021.02",
            graduateState: 0,
            degree: "박사",
          },
          career: {
            startDate: "2021.03",
            endDate: "2021.07",
            companyName: "삼성SDS",
            departmentName: "블록체인팀",
            position: "대리",
            job_title: "팀원",
            duty: "IT/인터넷",
            annual_Income: "8,000만원",
            job_description: "블록체인 개발",
            career_description: "풀스택 블록체인 전문가 입니다. ",
          },
          project: {
            startDate: "2021.03",
            endDate: "2021.07",
            projectName: "한국은행 CBDC 사업",
            customer: "한국은행",
            job_description: "한국은행 CBDC 구축 지원 총괄",
            part: "총괄",
          },
          learn: {
            title: "블록체인 비즈니스모델 개발과정",
            host: "한경닷컴",
            start: "2020.05",
            end: "2020.11",
            message: "블록체인 비즈니스모델 개발",
          },
          certification: {
            CerName: "정보처리기사",
            CerIns: "한국산업인력공단",
            CerDate: "2018.02",
          }
        },
        "b1234567": {
          profile: {
            name: "김경민",
            gender: "남",
            birth: "1990",
            phone: "010-1234-5678",
            email: "kkm@gmail.com",
            address: "서울특별시 송파구 가락1동",
            imgSrc: "https://d2v80xjmx68n4w.cloudfront.net/gigs/rate/2hsDR1584024364.png",
          },
          education: {
            gubun: 0,
            schoolName: "한경대학교",
            major: "경영학과",
            startDate: "(입학일) 2010.03",
            endDate: "(졸업일) 2017.02",
            graduateState: "졸업",
            degree: "학사",
          },
          career: {
            startDate: "2018.09",
            endDate: "2021.02",
            companyName: "삼일회계법인",
            departmentName: "감사1본부",
            position: "대리",
            job_title: "팀원",
            duty: "전문/특수직",
            annual_Income: "8,000만원",
            job_description: "삼성전자 회계감사",
            career_description: "KICPA 회계 전문가",
          },
          project: {
            startDate: "",
            endDate: "",
            projectName: "",
            customer: "",
            job_description: "",
            part: "",
          },
          learn: {
            title: "블록체인 비즈니스모델 개발과정",
            host: "한경닷컴",
            start: "2021.05",
            end: "2021.11",
            message: "블록체인 비즈니스모델 개발",
          },
          certification: {
            CerName: "공인회계사",
            CerIns: "금융감독원",
            CerDate: "2018.09",
          }
        },
        "c1234567": {
          profile: {
            name: "김장연",
            gender: "남",
            birth: "1991",
            phone: "010-4321-5678",
            email: "kjy@gmail.com",
            address: "서울특별시 동작구 흑석동",
            imgSrc: "https://d2v80xjmx68n4w.cloudfront.net/gigs/rate/2hsDR1584024364.png",
          },
          education: {
            gubun: 0,
            schoolName: "한경대학교",
            major: "경제학과",
            startDate: "(입학일) 2011.03",
            endDate: "(졸업일) 2017.02",
            graduateState: "졸업",
            degree: "학사",
          },
          career: {
            startDate: "2018.03",
            endDate: "2020.04",
            companyName: "한국투자증권",
            departmentName: "IB",
            position: "대리",
            job_title: "팀원",
            duty: "경영/사무",
            annual_Income: "8,000만원",
            job_description: "IPO, 가치평가",
            career_description: "경제/금융 전문가",
          },
          project: {
            startDate: "2019.07",
            endDate: "2020.12",
            projectName: "더네이처홀딩스 IPO",
            customer: "더네이처홀딩스",
            job_description: "더네이처홀딩스 IPO 상장예비심사 준비",
            part: "팀원",
          },
          learn: {
            title: "블록체인 비즈니스모델 개발과정",
            host: "한경닷컴",
            start: "2020.05",
            end: "2020.11",
            message: "블록체인 비즈니스모델 개발",
          },
          certification: {
            CerName: "CFA",
            CerIns: "CFA Institute",
            CerDate: "2018.09",
          }
        },
        "d1234567": {
          profile: {
            name: "이혜인",
            gender: "여",
            birth: "1993",
            phone: "010-9876-5678",
            email: "lhy@gmail.com",
            address: "서울특별시 영등포구 양평동",
            imgSrc: "https://d2v80xjmx68n4w.cloudfront.net/gigs/rate/V2NZK1564660721.PNG",
          },
          education: {
            gubun: 0,
            schoolName: "한경대학교",
            major: "인문학과",
            startDate: "(입학일) 2013.03",
            endDate: "(졸업일) 2017.02",
            graduateState: "졸업",
            degree: "학사",
          },
          career: {
            startDate: "2018.03",
            endDate: "2020.02",
            companyName: "삼성전자",
            departmentName: "마케팅3팀",
            position: "대리",
            job_title: "팀원",
            duty: "경영/사무",
            annual_Income: "8,000만원",
            job_description: "PR 담당",
            career_description: "마케팅 전문가",
          },
          project: {
            startDate: "",
            endDate: "",
            projectName: "",
            customer: "",
            job_description: "",
            part: "",
          },
          learn: {
            title: "블록체인 비즈니스모델 개발과정",
            host: "한경닷컴",
            start: "2020.05",
            end: "2020.11",
            message: "블록체인 비즈니스모델 개발",
          },
          certification: {
            CerName: "정보처리기사",
            CerIns: "한국산업인력공단",
            CerDate: "2017.09",
          }
        },
      },
      currentPage: 0,
    };
  },
  mutations: {
    user(state, data) {
      state.user = data;
      state.user.isRegister = false;
    },
    Registration(state, data) {
      for (var key of Object.keys(data)) {
        state.reg[key] = data[key]
      }

      state.user.isRegister = true;

      for (var regKey of Object.keys(state.reg)) {
        if (state.reg[regKey] === null) {
          state.user.isRegister = false;
        }
      }
    },
    setPageIndex(state, data) {
      console.log("test", data);
      state.currentPage = data;
    },
    isEditable(state, author) {
      console.log("isEditable=", author)
      return (state.user.email == author)
    }
  },
  plugins: [
    persistedstate({
      paths: ["user"],
    })
  ]
})

export default store;