<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">Miui</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="username" class="logout" @click="logout"></a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" @click="gotoLogin" v-if="!username">登录</a>
          <a href="javascript:;" class="my-cart" @click="gotoCart">
            <span class="icon-cart"></span>
            购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in productList" :key="index">
                  <a :href=" '/#/detail?id='+item.id " target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{item.name|subTitle}}</div>
                    <div class="pro-price">{{item.price|formatMoney}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>红米Redmi</span>
          </div>
          <div class="item-menu">
            <span>智能设备</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in tvList" :key="index">
                  <a :href=" '/#/detail?id='+item.id " target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{item.name|subTitle}}</div>
                    <div class="pro-price">{{item.price|formatMoney}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-serach">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <div class="search">
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      productList: [],
      tvList: [],
    };
  },
  mounted() {
    this.getProductList();
    this.getTvList();
    if (this.$route.params.from && this.$route.params.from == "login") {
      this.getCartCount();
    }
  },
  computed: {
    username() {
      return this.$store.state.userInfo.username;
    },
    cartCount() {
      return this.$store.state.cartCount;
    },
  },
  filters: {
    formatMoney(val) {
      return "¥" + val.toFixed(2) + "元";
    },
    subTitle(val) {
      return val.length < 10 ? val : val.substring(0, 10) + "...";
    },
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 6,
          },
        })
        .then((res) => {
          this.productList = res.list;
        });
    },
    getTvList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100002,
            pageSize: 6,
          },
        })
        .then((res) => {
          this.tvList = res.list;
        });
    },
    gotoCart() {
      this.$router.push("/cart");
    },
    gotoLogin() {
      this.$router.push("/login");
    },
    getCartCount() {
      this.axios.get("/carts/products/sum", {}).then((res) => {
        //保存到vuex
        this.$store.dispatch("setCartCount", res);
      });
    },
    logout() {
      this.axios.post("/user/logout", {}).then(() => {
        this.$message({
          message: "退出成功",
          type: "success",
          onClose: () => {
            this.$store.dispatch("setUserInfo", "");
            this.$store.dispatch("setCartCount", 0);
            this.$cookie.set("userId", "", { expires: "-1" });
            //this.$router.go(0);
          },
        });
      });
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    .container {
      @include flex();
      .logout {
        @include bgImg(12px, 12px, "/imgs/logout.png");
        vertical-align: middle;
        width: 25px;
        height: 25px;
      }
      a {
        display: inline-block;
        color: $colorL;
        margin-right: 17px;
      }
      .my-cart {
        background-color: #424242;
        width: 110px;
        text-align: center;
        color: #b0b0b0;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart.png");
          margin-right: 4px;
        }
        &:hover {
          color: $colorG;
          background-color: $colorA;
          border: none;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;
      // .header-logo {
      //   display: inline-block;
      //   width: 55px;
      //   height: 55px;
      //   background-color: $colorA;
      //   overflow: hidden;

      //   a {
      //     display: inline-block;
      //     width: 110px;
      //     height: 55px;
      //     &:before {
      //       content: " ";

      //       @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
      //       transition: margin 0.2s;
      //     }
      //     &:after {
      //       content: " ";
      //       @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
      //     }
      //     &:hover {
      //       margin-left: -55px;
      //       transition: margin 0.2s;
      //     }
      //   }
      // }
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 664px;

        .item-menu {
          display: inline-block;
          height: 112px;
          color: $colorB;
          font-weight: bold;
          font-size: 16px;
          line-height: 116px;
          margin-right: 20px;

          &:hover {
            cursor: pointer;
            color: $colorA;
            .children {
              opacity: 1;
              height: 200px;
              z-index: 10;
            }
          }

          .children {
            width: $min-width;
            position: absolute;
            left: 0;
            top: 112px;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            font-size: $fontK;
            overflow: hidden;
            transition: all 0.3s;
            opacity: 0;
            height: 0;
            background-color: $colorG;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              text-align: center;
              position: relative;
              a {
                display: inline-block;
                height: 111px;
                .pro-img {
                  width: auto;
                  height: 111px;
                  img {
                    height: 111px;
                  }
                }

                .pro-name {
                  height: 30px;
                  color: #333;
                  font-weight: 700;
                  margin-top: 11px;
                  margin-bottom: 8px;
                  line-height: 30px;
                }

                .pro-price {
                  height: 30px;
                  color: $colorA;
                  line-height: 30px;
                }
              }

              &:after {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
              }

              &:last-child:after {
                display: none;
              }
            }
          }
        }
      }
      .header-serach {
        width: 319px;
        .wrapper {
          height: 50px;
          width: 100%;
          border: 1px solid #e0e0e0;
          border-right: none;
          @include flex();

          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            height: 50px;
            width: 264px;
            padding-left: 14px;
          }
          .search {
            height: 50px;
            width: 50px;
            border-right: 1px solid #e0e0e0;
            a {
              @include bgImg(18px, 18px, "/imgs/icon-search.png");
              margin-left: 15px;
              text-align: center;
              margin-top: 15px;
            }
            &:hover {
              cursor: pointer;
              background: $colorA;
            }
          }
        }
      }
    }
  }
}
</style>