import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload';
import VueCookie from 'vue-cookie';
import store from './store/';

//按需引入elementui
import { Message, Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//vue-cookie
Vue.use(VueCookie);

//lazyload
Vue.use(VueLazyLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
});

//elementui
Vue.prototype.$message = Message;
Vue.use(Carousel);
Vue.use(CarouselItem);
//mockjs
const mock = false;
if (mock) {
    require('./mock/api');
}

//axios
Vue.use(VueAxios, axios);
axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 3000;
//接口拦截
axios.interceptors.response.use(response => {
    let res = response.data;
    let path = location.hash;

    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        //首页不跳转
        if (path != "#/index") {
            window.location.href = '/#/login';
        }

        return Promise.reject(res);
    } else {
        Message.error(res.msg)
        return Promise.reject(res);
    }
}, error => {
    //已支付订单http://localhost:8080/#/order/pay?orderId=1600331183872
    Message.error(error.response.data.message)
    return Promise.reject(error);

})

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')