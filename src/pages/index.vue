<template>
  <div class="index">
    <!-- 容器最小宽度 -->
    <div class="container">
      <div class="carousel-box">
        <div class="menu">
          <div class="menu-wrap">
            <ul>
              <li class="menu-list">
                <a href="javascript:;">手机 电话卡</a>
                <div class="children">
                  <ul v-for="(item,i) in menuList" :key="i">
                    <li v-for="(v,j) in item" :key="j">
                      <a :href="'/#/product/'+v.id">
                        <img v-lazy="v.img?v.img:'/imgs/item-box-1.png'" alt />
                        {{v.name?v.name:'小米手机'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu-list">
                <a href="javascript:;">电视 盒子</a>
              </li>
              <li class="menu-list">
                <a href="javascript:;">笔记本 显示器</a>
              </li>
              <li class="menu-list">
                <a href="javascript:;">家电 插线板</a>
              </li>
              <li class="menu-list">
                <a href="javascript:;">出行 穿戴</a>
              </li>
              <li class="menu-list">
                <a href="javascript:;">智能路由器</a>
              </li>
              <li class="menu-list">
                <a href="javascript:;">电源 配件</a>
              </li>
              <li class="menu-list">
                <a href="javascript:;">耳机 音箱</a>
              </li>
            </ul>
          </div>
        </div>
        <el-carousel height="460px">
          <el-carousel-item v-for="(item,index) in carousels" v-bind:key="index">
            <a v-bind:href="'/#/product/'+item.id">
              <img :src="item.img" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="ads">
        <div class="channel-list">
          <ul>
            <li>
              <a href="jascript:;">
                <img :src="'/imgs/ads/ads-1.png'" alt />
                <p>小米秒杀</p>
              </a>
            </li>
            <li>
              <a href="jascript:;">
                <img :src="'/imgs/ads/icon-2.png'" alt />
                <p>企业团购</p>
              </a>
            </li>
            <li>
              <a href="jascript:;">
                <img :src="'/imgs/ads/icon-3.png'" alt />
                <p>F码通道</p>
              </a>
            </li>
            <li>
              <a href="jascript:;">
                <img :src="'/imgs/ads/icon-4.png'" alt />
                <p>米粉卡</p>
              </a>
            </li>
            <li>
              <a href="jascript:;">
                <img :src="'/imgs/ads/icon-5.png'" alt />
                <p>以旧换新</p>
              </a>
            </li>
            <li>
              <a href="jascript:;">
                <img src="'imgs/ads/icon-6.png'" alt />
                <p>话费充值</p>
              </a>
            </li>
          </ul>
        </div>

        <div class="ads-list">
          <ul>
            <li>
              <a href="/#/product/30">
                <img v-lazy="'/imgs/ads/ads-1.png'" alt />
              </a>
            </li>
            <li>
              <a href="/#/product/33">
                <img v-lazy="'/imgs/ads/ads-2.jpg'" alt />
              </a>
            </li>
            <li>
              <a href="/#/product/34">
                <img v-lazy="'/imgs/ads/ads-3.png'" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="banner">
        <a href="/#/product/33">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>

    <!-- 底部 productList -->
    <div class="wrap">
      <div class="container">
        <div class="product-list">
          <div class="list-left">
            <a href>
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
            </a>
          </div>
          <div class="list-right">
            <a :href="'/#/product/'+item.id" v-for="(item,i) in productList" :key="i">
              <div class="item">
                <span>新品</span>
                <img v-lazy="item.mainImage" alt />
                <h3>{{item.name}}</h3>
                <p>{{item.subtitle}}</p>
                <h4 class="price" @click.prevent="addToCart(item.id)">{{item.price}}元</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <service-bar></service-bar>
    <modal
      :showModal="showModal"
      modalType="middle"
      title="提示"
      confirmBtn="查看详情"
      btnType="3"
      @submit="goToCart"
      @cancel="showModal=false"
    >
      <template v-slot:body>添加购物车成功</template>
    </modal>
  </div>
</template>

<script>
import serviceBar from "./../components/serviceBar";
import Modal from "./../components/Modal";
export default {
  name: "index",
  components: {
    serviceBar,
    Modal,
  },
  created() {
    this.getProductList();
  },
  data() {
    return {
      productList: [],
      showModal: false,
      carousels: [
        { id: 43, img: "/imgs/slider/slide-1.jpg" },
        { id: 45, img: "/imgs/slider/slide-2.jpg" },
        { id: 46, img: "/imgs/slider/slide-3.jpg" },
        { id: 47, img: "/imgs/slider/slide-4.jpg" },
        { id: 48, img: "/imgs/slider/slide-5.jpg" },
      ],
      menuList: [
        [
          {
            id: 30,
            name: "小米9",
            img: "/imgs/item-box-1.png",
          },
          {
            id: 31,
            name: "小米8青春版",
            img: "/imgs/item-box-2.png",
          },
          {
            id: 32,
            name: "Redmi K20",
            img: "/imgs/item-box-3.jpg",
          },
          {
            id: 33,
            name: "移动4G专区",
            img: "/imgs/item-box-4.jpg",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    };
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products/", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          this.productList = res.list.slice(6, 14);
        });
    },
    addToCart(id) {
      this.axios
        .post("/carts", {
          productId: id,
          selected: true,
        })
        .then((res) => {
          this.showModal = true;
          this.$store.dispatch("setCartCount", res.cartTotalQuantity);
        });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  .carousel-box {
    height: 460px;
    .el-carousel {
      .el-carousel__arrow--left {
        margin-left: 264px;
      }
      img {
        height: 100%;
      }
    }
    .menu {
      width: 264px;
      height: 460px;
      position: absolute;
      z-index: 9;
      background-color: rgba(105, 101, 101, 0.6);
      padding: 28px 0;
      box-sizing: border-box;
      .menu-wrap {
        ul {
          font-size: $fontI;
          .menu-list {
            height: 50px;
            line-height: 50px;
            a {
              display: block;
              position: relative;
              color: $colorG;
              text-align: center;

              &:after {
                content: " ";
                @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
                position: absolute;
                top: 15px;
                right: 20px;
              }
            }
            &:hover {
              background-color: $colorA;
              cursor: pointer;
              .children {
                display: block;
              }
            }

            .children {
              display: none;
              height: 460px;
              width: 964px;
              border: 1px solid $colorE;
              position: absolute;
              top: 0;
              left: 264px;
              background-color: #fff;
              ul {
                @include flex();
                li {
                  margin: 10px 25px 15px 25px;
                  flex: 1;
                  font-size: $fontJ;
                  a {
                    display: inline-block;
                    color: $colorB;
                    img {
                      width: 42px;
                      height: 35px;
                      vertical-align: middle;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .ads {
    height: 170px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;

    .channel-list {
      box-sizing: border-box;
      background: #5f5750;
      width: 264px;
      padding: 3px;
      text-align: center;
      height: 100%;

      ul {
        display: flex;
        flex-flow: wrap;
        margin: 30px 0;
        li {
          margin-bottom: 15px;
          width: 33%;
          a {
            display: block;
            color: #fff;
            font-size: 14px;
            opacity: 0.6;
            img {
              width: 24px;
              height: 24px;
            }
          }
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }

    .ads-list {
      height: 100%;
      width: 970px;

      ul {
        display: flex;
        justify-content: space-between;
        li {
          a {
            display: block;
            img {
              width: 316px;
              height: 170px;
              float: left;
            }
          }
        }
      }
    }
  }

  .banner {
    margin-bottom: 30px;
    a {
      img {
        width: 100%;
      }
    }
  }
  .wrap {
    background-color: $colorJ;
    .product-list {
      height: 614px;
      width: 100%;
      margin-bottom: 50px;

      display: flex;

      .list-left {
        width: 234px;
        background: url("/imgs/mix-alpha.jpg") no-repeat 50%;
        background-size: contain;
        transition: all 0.2s;
        &:hover {
          transform: scale(1.2);
        }
        img {
          width: 234px;
          height: auto;
        }
      }

      .list-right {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        div {
          width: 234px;
          height: 290px;
          background-color: $colorG;
          transition: all 0.2s;
          &:first-child {
            margin-top: 10px;
          }
          &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            transform: translate3d(0, -2px, 0);
          }
          span {
            background-color: #7ecf68;
            color: $colorG;
            font-size: 14px;
            display: block;
            margin: 0 auto;
            margin-bottom: 5px;
            width: 67px;
            height: 24px;
            line-height: 24px;
            text-align: center;
          }
          img {
            width: 100%;
            height: 180px;
            margin: 0 auto;
          }
          h3,
          h4,
          p {
            text-align: center;
            margin-top: 5px;
          }
          p {
            color: $colorD;
          }
          h3 {
            color: $colorB;
          }
          h4 {
            font-size: 14px;
            color: $colorA;
            &:after {
              content: " ";
              background: url(/imgs/icon-cart-hover.png) no-repeat 50%;
              width: 22px;
              height: 22px;
              background-size: contain;
              display: inline-block;
              vertical-align: middle;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>