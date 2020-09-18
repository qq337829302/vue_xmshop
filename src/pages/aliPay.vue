<template>
  <div class="alipay">
    <loading></loading>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import Loading from "./../components/Loading";
export default {
  name: "alipay",
  components: {
    Loading,
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
    };
  },
  mounted() {
    this.redirect();
  },
  methods: {
    redirect() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "测试订单支付",
          amount: "0.01",
          payType: 1,
        })
        .then((res) => {
          this.content = res.content;
          setTimeout(() => {
            document.forms[0].submit();
          }, 1000);
        });
    },
  },
};
</script>

<style lang="scss">
</style>