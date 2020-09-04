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
        <div class="video-bg" @click="showSilde=true"></div>
        <div class="video-box">
          <div class="overlay" v-if="showSilde"></div>
          <div class="video" :class="{'silde':showSilde}">
            <span class="icon-close" @click="showSilde=false"></span>
            <video src="/imgs/product/video.mp4" controls="controls" autoplay muted></video>
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
      showSilde: false,
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
        @include bgImg(100%, 500px, "/imgs/product/gallery-1.png");
        background-size: cover;
        width: 100%;
        cursor: pointer;
      }
      .video-box {
        .overlay {
          z-index: 11;
          height: 1226px;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.3);
        }

        .video {
          position: fixed;
          left: 50%;
          top: -50%;
          transform: translateX(-50%) translateY(-50%);
          width: 1000px;
          height: 536px;
          z-index: 11;
          transition: all 0.2s;
          opacity: 0;
          &.silde {
            top: 50%;
            opacity: 1;
          }
          .icon-close {
            @include bgImg(20px, 20px, "/imgs/icon-close.png");
            position: absolute;
            top: 30px;
            right: 30px;
            cursor: pointer;
            z-index: 12;
          }
          video {
            height: 100%;
            width: 100%;
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }
}
</style>