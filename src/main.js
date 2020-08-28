import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

//mockjs
const mock = false;
if (mock) {
    require('./mock/api');
}

//axios
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://mi.futurefe.com/';
// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 3000;
//接口拦截
axios.interceptors.response.use(response => {
    let res = response.data;
    console.log(res);
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        window.location.href = '/#/login';
    } else {
        alert(res.msg)
    }
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')