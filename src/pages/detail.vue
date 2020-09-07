<template>
  <div class="detail">
    <product-bar :productInfo="productInfo"></product-bar>
    <div class="container clearfix">
      <div class="content">
        <div class="content-carousel fl">
          <el-carousel :interval="5000" arrow="always" height="540px" indicator-position="outside">
            <el-carousel-item v-for="(item,key) in carouselList" :key="key">
              <img :src="item.img" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="content-detail fr">
          <h1>{{productInfo.name}}</h1>
          <div class="subtitle">{{[productInfo.subtitle]}}</div>
          <div class="channel">
            <span>小米自营</span>
          </div>
          <div class="price">
            {{productInfo.price}}
            <s>{{productInfo.price}}</s>
          </div>
          <div class="addrss">
            <div class="addr">
              <i class="icon-loc"></i> 北京 北京市 朝阳区 安定门街道
            </div>
            <div class="stock">有现货</div>
          </div>
          <div class="version">
            <h2>选择版本</h2>
            <div class="version_choose">
              <div
                class="fl"
                :class="{'border-active':version == 1}"
                @click="version=1"
              >{{versionList[0]}}</div>
              <div
                class="fr"
                :class="{'border-active':version == 2}"
                @click="version=2"
              >{{versionList[1]}}</div>
            </div>
          </div>
          <div class="color">
            <h2>选择颜色</h2>
            <div class="color_choose">
              <div class="border-active">
                <span class="color"></span>深空灰
              </div>
            </div>
          </div>
          <div class="cash">
            <div class="cash-top clearfix">
              <div class="class-top-intro fl">{{productInfo.name}} {{versionList[version-1]}}</div>
              <div class="class-top-price fr">{{productInfo.price}}</div>
            </div>
            <div class="cash-bottom">总计{{productInfo.price}}</div>
          </div>

          <div class="buy">
            <button class="btn btn-primary btn-large" @click="addToCart()">加入购物车</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 价格介绍 -->
    <div class="price-intro">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc-img"></div>
      </div>
    </div>
    <modal :showModal="showModal" title="提醒" btnType="1" confirmBtn="确定" @submit="showModal=false">
      <template v-slot:body>添加购物车成功!</template>
    </modal>
  </div>
</template>

<script>
import ProductBar from "./../components/ProductBar";
import Modal from "./../components/Modal";
export default {
  name: "detail",
  components: {
    ProductBar,
    Modal,
  },
  data() {
    return {
      showModal: false,
      productID: this.$route.params.id,
      version: 2,
      versionList: ["6GB+6GB 全网通", "12GB+12GB 联通"],
      productInfo: {},
      carouselList: [
        { id: 1, img: "/imgs/detail/phone-1.jpg" },
        { id: 2, img: "/imgs/detail/phone-2.jpg" },
        { id: 3, img: "/imgs/detail/phone-3.jpg" },
        { id: 4, img: "/imgs/detail/phone-4.jpg" },
      ],
    };
  },
  created() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      this.axios.get(`/products/${this.productID}`, {}).then((res) => {
        this.productInfo = res;
      });
    },
    addToCart() {
      this.axios
        .post("/carts", {
          productId: this.productID,
          selected: true,
        })
        .then((res) => {
          this.showModal = true;
          this.$store.dispatch("setCartCount", res.cartTotalQuantity);
        });
    },
  },
};
</script>


<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/config.scss";

.detail {
  .content {
    margin-top: 20px;
    .content-carousel {
      width: 50%;
      .el-carousel {
        width: 640px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .content-detail {
      width: 40%;

      .subtitle {
        font-size: $fontJ;
        height: 36px;
        margin-top: 10px;
      }
      .channel {
        color: $colorA;
        font-size: $fontI;
      }
      .price {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: $fontG;
        color: $colorA;
        s {
          color: $colorC;
          font-size: $fontI;
          margin-left: 8px;
        }
      }

      .version {
        color: $colorC;
        cursor: pointer;
        height: 120px;

        .version_choose {
          div {
            margin-top: 5px;
            line-height: 50px;
            width: 220px;
            border: 1px solid $colorH;
            text-align: center;
            height: 50px;
          }
        }
      }

      .color {
        color: $colorC;
        cursor: pointer;
        height: 120px;

        .color_choose {
          div {
            margin-top: 5px;
            line-height: 50px;
            width: 220px;
            border: 1px solid $colorH;
            text-align: center;
            height: 50px;
          }
          .color {
            width: 14px;
            height: 14px;
            background-color: $colorC;
            display: inline-block;
            vertical-align: middle;
            margin-right: 8px;
          }
        }
      }
      .cash {
        height: 58px;
        padding: 20px 20px;
        margin-bottom: 30px;
        background-color: #fafafa;
        .cash-top {
          color: $colorB;
          font-size: $fontJ;
          margin-bottom: 30px;
        }
        .cash-bottom {
          color: $colorA;
          font-size: $fontG;
        }
      }

      .addrss {
        height: 68px;
        padding: 20px 20px;
        margin-bottom: 30px;
        font-size: $fontJ;
        border: 1px solid $colorH;
        background-color: #fafafa;
        .addr {
          margin-top: 15px;
          margin-left: 20px;
          i {
            @include bgImg(20px, 20px, "/imgs/detail/icon-loc.png");
            vertical-align: middle;
            margin-right: 5px;
          }
          color: $colorB;
          margin-bottom: 10px;
        }
        .stock {
          margin-left: 20px;
          color: $colorA;
        }
      }
    }
  }
  .price-intro {
    width: 100%;
    height: 100%;
    margin-top: 30px;
    h2 {
      margin-bottom: 10px;
    }
    .desc-img {
      @include bgImg(100%, 189px, "/imgs/detail/item-price.jpeg");
    }
  }
}
</style>