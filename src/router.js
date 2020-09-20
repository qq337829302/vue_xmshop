import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import Order from './pages/order';
Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        redirect: 'index',
        children: [{
            path: 'index',
            name: 'index',
            component: Index,
        }, {
            path: 'product/:id',
            name: 'product',
            component: () => import("./pages/product")
        }, {
            path: 'detail/:id',
            name: 'detail',
            component: () => import("./pages/detail")
        }]
    }, {
        path: '/login',
        name: 'login',
        component: () => import("./pages/login")
    }, {
        path: '/cart',
        name: 'cart',
        component: () => import("./pages/cart")
    }, {
        path: '/order',
        name: 'order',
        component: Order,
        children: [{
            path: 'list',
            name: 'order-list',
            component: () => import("./pages/orderList")
        }, {
            path: 'pay',
            name: 'order-pay',
            component: () => import("./pages/orderPay")
        },
        {
            path: 'confirm',
            name: 'order-confirm',
            component: () => import("./pages/orderConfirm")
        }, {
            path: 'alipay',
            name: 'order-alipay',
            component: () => import("./pages/aliPay")
        }
        ]
    }]
})