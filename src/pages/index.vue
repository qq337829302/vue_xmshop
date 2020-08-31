<template>
  <div class="index">
    <div class="container">
      <div class="carousel-box">
        <el-carousel indicator-position="outside" height="460px">
          <el-carousel-item v-for="(item,index) in carousels" v-bind:key="index">
            <a v-bind:href="'/#/product/'+item.id">
              <img v-bind:src="item.img" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="ads"></div>
      <div class="product-list"></div>
    </div>

    <service-bar></service-bar>
  </div>
</template>

<script>
import serviceBar from "./../components/serviceBar";

export default {
  name: "index",
  components: {
    serviceBar,
  },
  data() {
    return {
      carousels: [
        { id: 43, img: "/imgs/slider/slide-1.jpg" },
        { id: 45, img: "/imgs/slider/slide-2.jpg" },
        { id: 46, img: "/imgs/slider/slide-3.jpg" },
        { id: 47, img: "/imgs/slider/slide-4.jpg" },
        { id: 48, img: "/imgs/slider/slide-5.jpg" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
.index {
  .carousel-box {
    .el-carousel {
      img {
        height: 100%;
      }
    }
  }
}
</style>