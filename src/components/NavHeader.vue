<template>
    <div class='header'>
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
                    <a href="javascript:;"  v-if="username">我的订单</a>
                    <a href="javascript:;" @click='gotoLogin' v-if="!username">登录</a>
                    <a href="javascript:;" class='my-cart' @click='gotoCart'>
                        <span class="icon-cart"></span>购物车
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
                                <li class='product' v-for="(item,index) in productList[0]['list']" :key = "index">
                                    <a :href=" '/#/detail?id='+item.id " target='_blank'>
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
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
                                <li class='product' v-for="(item,index) in productList[1]['list']" :key = "index">
                                    <a :href=" '/#/detail?id='+item.id " target='_blank'>
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price|formatMoney}}</div>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-serach">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <div class='search'>
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
    name: 'nav-header',
    data(){
        return {
            username: '',
            productList:[]
        }
    },
    mounted(){
        this.getProductList();
    },
    filters:{
        formatMoney(val){
            return "¥"+val.toFixed(2)+"元";
        }
    },
    methods:{
        getProductList(){
            let productList = this.axios.get("/api/products",{
                params: {
                    categoryId: 100012,
                    pageSize: 6
                }
            })
            let tvList = this.axios.get("/api/products",{
                params: {
                    categoryId: 100002,
                    pageSize: 6
                }
            })
            this.axios.all([productList, tvList]).then(res => {
                console.log(res[0]);
                this.productList = res
            });
            // console.log(productList, tvList,11);
        },
        gotoCart(){
            this.$router.push('/cart');
        },
        gotoLogin(){
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: $colorB;
            .container {
                @include flex();
                
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
                    .icon-cart {
                        @include bgImg(16px,12px,'/imgs/icon-cart.png');
                        margin-right: 4px;
                    }
                    &:hover{
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
                .header-logo {
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: $colorA;
                    overflow: hidden;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content: ' ';
  
                            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                            transition: margin .2s;
                        }
                        &:after{
                            content: ' ';
                            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);

                        }
                        &:hover{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
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
                              .children{
                                opacity: 1;
                                height: 200px;
                            }
                        }

                        .children{
                            width: $min-width;
                            position: absolute;
                            left: 0;
                            top: 112px;
                            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            font-size: $fontK;
                            overflow: hidden;
                            transition: all .3s;
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
                                        img{
                                            height: 111px;
                                        }
                                        
                                    }

                                    .pro-name {
                                        height: 30px;
                                        color: #333;
                                        font-weight: 700;
                                        margin-top: 11px;
                                        margin-bottom: 8px;
                                        line-height:30px;
                                    }

                                    .pro-price {
                                        height: 30px;
                                        color: $colorA;
                                        line-height:30px;
                                    }
                                }

                                &:after {
                                    content: ' ';
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
                        border: 1px solid #E0E0E0;
                        border-right: none;
                        @include flex();

                        input {
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #E0E0E0;
                            height: 50px;
                            width: 264px;
                            padding-left: 14px;
                        }
                        .search {
                            height: 50px;
                            width: 50px;
                            border-right: 1px solid #E0E0E0;
                                a {
      
                                    @include bgImg(18px,18px,'/imgs/icon-search.png');
                                    margin-left: 15px;
                                    text-align:center;
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