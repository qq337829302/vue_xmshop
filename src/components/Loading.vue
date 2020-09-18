<template>
  <div class="loading">
    <div class="load-img"></div>
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.loading {
  text-align: center;
  .load-img {
    @include bgImg(100%, 400px, "/imgs/loading-svg/loading-bars.svg");
  }
}
</style>