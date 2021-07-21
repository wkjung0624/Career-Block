<template>
  <div class="base">
    <div class="container">
      <div class="photo">
        <img v-if="imgSrc != ''" src="imgSrc" />
        <button v-else @click="setProfileImage" class="btnXX">
          이미지 추가
        </button>
      </div>
      <div class="info-container">
        <div class="info-general">
          <div class="item name">{{ name }}</div>
          <div class="item gender">{{ gender }}</div>
          <div class="item year">{{ birth }}년,</div>
          <div class="item age">{{ getAge() }}세</div>
        </div>
        <div class="info-detail">
          <div class="item-head">
            <div class="label">휴대폰</div>
            <div class="value">{{ phone }}</div>
          </div>
          <div class="item-head">
            <div class="label">Email</div>
            <div class="value">{{ email }}</div>
          </div>
          <div class="item-head item-full">
            <div class="label">주소</div>
            <div class="value">{{ address }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "정완규",
      gender: "남",
      birth: "1997",
      phone: "010-6720-4257",
      email: "skyship36@gmail.com",
      address: "서울특별시 관악구 신림동",
      imgSrc: "",
    };
  },
  methods: {
    getAge() {
      return this.birth;
    },
    setProfileImage() {
      alert("이미지를 추가했습니다");
      this.imgSrc = "testimg in";
    },
  },
};
</script>

<style scoped>
/* base 는 각 항목별로 적용되는 스타일, 제일 상단에 적용됨 */
.base {
  overflow: hidden;
  position: relative;
  margin-bottom: 33px;
}
.container {
  border: 1px solid gainsboro;

  height: 180px;
  padding-left: 170px;

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
.info-container {
  height: 150px;
  padding-bottom: 30px;
}
.info-general {
  padding-top: 15px;
  margin-bottom: 13px;
  font-size: 0;
}
.info-detail {
  width: 750px;
}
.photo,
.profile {
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  width: 140px;
  height: 182px;
  margin: 0px;
  border: 1px solid gainsboro;
}
.item {
  display: inline-block;
  font-size: 14px;
  color: RGB(160, 160, 160);
  margin-left: 7px;
  vertical-align: top;
}
.item-head {
  position: relative;
  display: inline-block;
  width: 350px;
  padding-right: 83px;
  margin-bottom: 11px;
  vertical-align: bottom;
  box-sizing: border-box;
}
.item-full {
  display: block;
  width: 100%;
}
.label {
  /* position: absolute; */
  left: 0;
  top: 0;
  width: 68px;
  font-size: 16px;
  color: #888;
  border-right: 1px solid RGBA(190, 190, 190, 100);
  margin-right: 10px;
  float: left;
}
.value {
  padding-top: 0.5px;
  float: left;
  font-size: 16px;
  color: #000;
  letter-spacing: 0;
}
.name {
  margin-left: 0;
  font-size: 20px;
  color: RGB(10, 0, 0);
}
.gender,
.age,
.year {
  transform: translateY(8px);
}
.btnXX {
  width: 140px;
  padding: 0.5rem 0.5rem 0.5rem o.5rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 10rem;
}
</style>
