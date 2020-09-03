<template>
  <div class="product">
    <product-bar :productInfo="productInfo">
      <template v-slot:buy>
        <button class="btn btn-primary btn-small" @click="buy">立即购买</button>
      </template>
    </product-bar>
    <div class="content">
      <div class="item-bgs">
        <img src="/imgs/product-bg1.jpg" alt />
        <div class="product-intro">
          <h2>{{productInfo.name}}</h2>
          <h3>{{productInfo.subtitle}}</h3>
          <p>{{productInfo.price}}元</p>
        </div>
        <img src="/imgs/product-bg2.png" alt />
      </div>
      <!-- 轮播图 -->
      <div class="item-carousel">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="(item) in galleryList" :key="item.id">
            <h3 class="medium">
              <img :src="'/imgs/product/'+item.img" alt />
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="item-video">
        <div class="video-bg"></div>
        <div class="video-box">
          <div class="overlay"></div>
          <div class="video">
            <video src="/imgs/product/video.mp4" controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBar from "./../components/ProductBar";
export default {
  name: "product",
  components: {
    ProductBar,
  },
  data() {
    return {
      productInfo: {},
      galleryList: [
        { id: 1, img: "gallery-1.png" },
        { id: 2, img: "gallery-2.png" },
        { id: 3, img: "gallery-3.png" },
        { id: 4, img: "gallery-4.png" },
        { id: 5, img: "gallery-5.jpg" },
        { id: 6, img: "gallery-6.jpg" },
      ],
    };
  },
  created() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`, {}).then((res) => {
        this.productInfo = res;
      });
    },
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config";
@import "./../assets/scss/mixin";
.product {
  .content {
    .item-bgs {
      img {
        width: 100%;
      }
      position: relative;

      .product-intro {
        position: absolute;
        right: 150px;
        top: 100px;
        text-align: center;
        color: $colorG;
        h2 {
          font-size: 50px;
          font-weight: bold;
        }
        h3 {
          font-weight: bold;
          margin: 20px 0;
          font-size: 30px;
        }
        p {
          font-size: 20px;
        }
      }
    }

    .item-carousel {
      img {
        width: 100%;
        height: 100%;
      }
    }

    .item-video {
      .video-bg {
        @include bgImg(100%, 500px, "/imgs/icon-cart.png");
        width: 100%;
      }
    }
  }
}
</style>