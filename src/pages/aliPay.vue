<template>
  <div class="alipay">
    <div class="loading"></div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "alipay",

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
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.alipay {
  .content {
  }
  .loading {
    @include bgImg(100%, 80px, "/imgs/loading-svg/loading-bars.svg");
  }
}
</style>