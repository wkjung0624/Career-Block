<template>
 <div class="bg-main">
    <Profile />
    <Education />

  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";
import Education from "@/components/Education.vue";

export default {
  name: "components",
  components: {
    Profile, Education
  },
};
</script>
<style scoped>
  .bg-main{
        padding: 50px;
        width:1000px;
        height:2000px;
        background-color: RGB(134,122,233);
    }
</style>
