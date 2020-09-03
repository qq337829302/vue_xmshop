<template>
  <div class="product-bar">
    <div class="container">
      <div class="bar-left">
        <p>{{productInfo.name}}</p>
      </div>
      <div class="bar-right">
        <div class="alist">
          <a href="javascript:;">概述</a>
          <span>|</span>
          <a href="javascript:;">参数</a>
          <span>|</span>
          <a href="javascript:;">咨询客服</a>
          <span>|</span>
          <a href="javascript:;">用户评价</a>
        </div>

        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-bar",
  props: {
    productInfo: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>


<style lang="scss">
@import "./../assets/scss/config.scss";

.product-bar {
  margin-bottom: 10px;
  border-top: 1px solid $colorL;
  padding-top: 15px;
  text-align: center;
  .container {
    display: flex;
    justify-content: space-between;
    .bar-left {
      color: #424242;
      font-size: $fontH;
    }
    .bar-right {
      .alist {
        display: inline-block;
        margin-right: 10px;
        a {
          font-size: $fontJ;
          color: #616161;
        }
        span {
          margin: 0 8px;
        }
      }
    }
  }
}
</style>