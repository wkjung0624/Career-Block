<template>
  <div class="mt-5 mb-5 container px-4 px-lg-5 pt-5 rounded-3 bg-white">
    <Profile />
    <Education />
    <Career />
    <Project />
    <Learn />
    <Certification />
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
