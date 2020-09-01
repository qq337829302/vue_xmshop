<template>
  <div class="index">
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
                        <img :src="v.img?v.img:'/imgs/item-box-1.png'" alt />
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
              <img v-bind:src="item.img" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="ads">
        <div class="channel-list">
          <ul>
            <li>
              <a href>
                <img src="/imgs/ads/icon-1.png" alt />
                <p>小米秒杀</p>
              </a>
            </li>
            <li>
              <a href>
                <img src="/imgs/ads/icon-2.png" alt />
                <p>企业团购</p>
              </a>
            </li>
            <li>
              <a href>
                <img src="/imgs/ads/icon-3.png" alt />
                <p>F码通道</p>
              </a>
            </li>
            <li>
              <a href>
                <img src="/imgs/ads/icon-4.png" alt />
                <p>米粉卡</p>
              </a>
            </li>
            <li>
              <a href>
                <img src="/imgs/ads/icon-5.png" alt />
                <p>以旧换新</p>
              </a>
            </li>
            <li>
              <a href>
                <img src="/imgs/ads/icon-6.png" alt />
                <p>话费充值</p>
              </a>
            </li>
          </ul>
        </div>

        <div class="ads-list">
          <ul>
            <li>
              <a href="/#/product/30">
                <img src="/imgs/ads/ads-1.png" alt />
              </a>
            </li>
            <li>
              <a href="/#/product/33">
                <img src="/imgs/ads/ads-2.jpg" alt />
              </a>
            </li>
            <li>
              <a href="/#/product/34">
                <img src="/imgs/ads/ads-3.png" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="banner">
        <a href="/#/product/33">
          <img src="/imgs/banner-1.png" alt />
        </a>
      </div>

      <div class="product-list">
        <div class="wrap">
          <div class="list-left">
            <a href="">
              <img src="/imgs/mix-alpha.jpg" alt="">
            </a>
            
          </div>
          <div class="list-right">
            
            <a href="">
              <div class="item">
                <img src="" alt="">
                <p></p>
                <span></span>
                <h3></h3>
              </div>
            </a>
            <a href="">
              <div class="item">
                <img src="" alt="">
                <p></p>
                <span></span>
                <h3></h3>
              </div>
            </a>
            <a href="">
              <div class="item">
                <img src="" alt="">
                <p></p>
                <span></span>
                <h3></h3>
              </div>
            </a>
            <a href="">
              <div class="item">
                <img src="" alt="">
                <p></p>
                <span></span>
                <h3></h3>
              </div>
            </a>
            <a href="">
              <div class="item">
                <img src="" alt="">
                <p></p>
                <span></span>
                <h3></h3>
              </div>
            </a>
            <a href="">
              <div class="item">
                <img src="" alt="">
                <p></p>
                <span></span>
                <h3></h3>
              </div>
            </a>
            <a href="">
              <div class="item">
                <img src="" alt="">
                <p></p>
                <span></span>
                <h3></h3>
              </div>
            </a>
            <a href="">
              <div class="item">
                <img src="" alt="">
                <p></p>
                <span></span>
                <h3></h3>
              </div>
            </a>
           
          </div>
        </div>
      </div>
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
    display:flex;
    z-index: 9999;
    .channel-list {
      box-sizing: border-box;
      background: #5f5750;
      width:264px;
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
          a{
            display: block;
            color: #fff;
            font-size: 14px;
            opacity: .6;
            img{
              width: 24px;
              height: 24px;
            }
          }
          &:hover{
           opacity: .9;
          }
        }
      }
    }

    .ads-list {
      height: 100%;
      width: 970px;
     
      ul{
         display: flex;
         justify-content: space-between;
        li {
          a {
            display: block;
            img{
              width: 316px;
              height: 170px;
              float:left;
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

  .product-list {

    height: 614px;
    width: 100%;
    .wrap{
      display: flex;
      background-color: $colorJ;
      .list-left{
        width: 234px;
        img{
          width: 234px;
          height: 100%;
        }
      }

      .list-right {
        
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        div{
          width: 234px;
          height: 300px;
          background-color: $colorG;
        }
      }
    }
  }
}
</style>