<template>
  <div class="home">
    <MainPage msg="test" />
    <!-- <LowerFooter msg="test" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
// import LowerFooter from "@/components/LowerFooter.vue";

export default {
  name: "Home",
  components: {
    MainPage
    // LowerFooter
  }
};
</script>
