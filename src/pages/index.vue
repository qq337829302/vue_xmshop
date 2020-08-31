<template>
    <div class='index'>
        <div class='container'>
             <div class="swiper-box">
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in swiperItems" :key="index">
                        <a :href="'/#/product'+item.id"><img :src="item.img" alt=""></a>
                    </swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </swiper>
            </div>

            <div class="ads"></div>
            <div class="product-list"></div>
        </div>
       
       
        <service-bar></service-bar>
    </div>
</template>

<script>
import serviceBar from './../components/serviceBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
    name: 'index',
    components: {
        serviceBar,
        Swiper,
        SwiperSlide
    },
    data(){
        return {
            swiperOptions:{
                autoplay: true,
                loop: true,
                cubeEffect: {
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            swiperItems:[
                {id: 43, img:'/imgs/slider/slide-1.jpg' },
                {id: 45, img:'/imgs/slider/slide-2.jpg' },
                {id: 46, img:'/imgs/slider/slide-3.jpg' },
                {id: 47, img:'/imgs/slider/slide-4.jpg' },
                {id: 48, img:'/imgs/slider/slide-5.jpg' }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import './../assets/scss/config.scss';
    .index{
        .swiper-box{
            
            .swiper-container{
                height:451px;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }
</style>