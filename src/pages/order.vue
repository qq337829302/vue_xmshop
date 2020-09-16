<template>
  <div class="order">
    <order-header :title="title">
      <template v-slot:tips>{{tips}}</template>
    </order-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";
export default {
  name: "order",
  data() {
    return {
      title: "",
      tips: "",
    };
  },
  components: {
    OrderHeader,
    NavFooter,
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/order/confirm") {
      this.title = "订单确认";
      this.tips = "请认真填写收货地址";
    } else if (path == "/order/list") {
      this.title = "订单列表";
    } else if (path == "/order/pay") {
      this.title = "订单支付";
    }
    console.log(this.$route.path);
  },
};
</script>