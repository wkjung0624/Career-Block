<template>
  <div class="myResume">
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
.myResume {
  margin: 150px 0px 150px 0px;
}
</style>
