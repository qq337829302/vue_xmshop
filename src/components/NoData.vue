<template>
  <div class="nodata">
    <div class="nodata-img"></div>
    <p>{{tips}}</p>
  </div>
</template>

<script>
export default {
  name: "nodata",
  props: {
    tips: String,
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.nodata {
  padding: 50px 0;
  text-align: center;
  .nodata-img {
    @include bgImg(100%, 400px, "/imgs/icon-no-data.png");
  }
  p {
    margin-top: 30px;
    font-size: $fontG;
    color: $colorB;
  }
}
</style>