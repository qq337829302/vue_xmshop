<template>
  <div class="wx-pay-modal" v-show="showWxPayModal">
    <div class="mask"></div>
    <div class="item-wrap clearfix">
      <div class="scan fl"></div>
      <div class="pay fl">
        <div class="pay-header">
          <span>微信支付</span>
          <em @click="$emit('close')"></em>
        </div>
        <div class="pay-qrcode">
          <img :src="qrcodeUrl" alt />
        </div>
        <div class="pay-footer">
          <p>请使用微信扫一扫</p>
          <p>二维码完成支付</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wxPayModal",
  props: {
    showWxPayModal: Boolean,
    qrcodeUrl: String,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.wx-pay-modal {
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.6;
    background-color: #000;
    width: 100%;
    height: 100%;
  }
  .item-wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 670px;
    height: 485px;
    transform: translate(-50%, -50%);

    .scan {
      @include bgImg(296px, 485px, "/imgs/pay/icon-scan.png");
    }
    .pay {
      display: inline-block;
      width: 370px;
      background-color: #fff;
      height: 440px;
      margin-top: 30px;
      .pay-header {
        height: 60px;
        font-size: 20px;
        line-height: 60px;
        padding: 0 18px;
        background-color: #f5f5f5;

        em {
          display: inline-block;
          @include bgImg(13px, 13px, "/imgs/icon-close.png");
          cursor: pointer;
          margin-left: 240px;
        }
      }

      .pay-qrcode {
        height: 300px;
        img {
          width: 240px;
          height: 240px;
          padding: 30px 60px;
        }
      }
      .pay-footer {
        text-align: center;
        p {
          margin-top: 3px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>