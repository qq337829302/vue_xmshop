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
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;" class='my-cart'>
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
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>红米Redmi</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
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
        return {}
    },
    monuted(){

    },
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
                    background-color: $colorA;
                    width: 110px;
                    text-align: center;
                    color: $colorG;
                    .icon-cart {
                        @include bgImg(16px,12px,'/imgs/icon-cart.png');
                        margin-right: 4px;
                    }
                }
            }
        }
        .nav-header {
            .container {
                height: 112px;
                @include flex();
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
                        color: $colorB;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 16px;
                        margin-right: 20px;
                    }
                    &:hover{
                        cursor: pointer;
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
                                cursor:pointer;
                                background: $colorA;
                            }    
                        }

                    }
                }
            }
        }      
    
    }
        
</style>