<template>
  <div class="container rounded-3 mt-5 mb-5 px-4 px-4 px-lg-5px-lg-5 pt-5 bg-white" style="margin-botton:100px">
    <Profile :viewer_mode="viewer_mode" :key="$store.state.myKeys"/>
    <Education :viewer_mode="viewer_mode" :key="$store.state.myKeys"/>
    <Career :viewer_mode="viewer_mode" :key="$store.state.myKeys"/>
    <Project :viewer_mode="viewer_mode" :key="$store.state.myKeys"/>
    <Learn :viewer_mode="viewer_mode" :key="$store.state.myKeys"/>
    <Certification :viewer_mode="viewer_mode" :key="$store.state.myKeys"/>
    <button class="btn btn-success mb-5"> 저장하기 </button>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
import Education from "@/components/Education.vue";
import Learn from "@/components/Learn.vue";
import Certification from "@/components/Certification.vue";
import Project from "@/components/Project.vue";
import Career from "@/components/Career.vue";

export default {
  name: "components",
  components: {
    Profile,
    Education,
    Learn,
    Certification,
    Career,
    Project,
  },
  props:['viewer_mode'],
  data(){
    return{
      sample:"",
    }
  },
  computed: {
    isLogin() {
      console.log("## ", this.$store.state.user.email);
      return typeof this.$store.state.user.email != "undefined" ? true : false;
    },
    isRegister() {
      console.log("@@ ", this.$store.state.user.isRegister);
      return this.$store.state.user.isRegister;
    },
  },
  methods: {
    showstat() {
      console.log("!!! ", this.$store.state.user);
      console.log("!!! ", this.$store.state.user.email);
      console.log("!!! ", this.$store.state.user.isRegister);
    },
  },
};
</script>

<style>
/* border 확인용 */
.borderline {
  border: 1px solid red;
}
</style>
