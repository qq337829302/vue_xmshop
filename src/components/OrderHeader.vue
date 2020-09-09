<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-left fl">
        <div class="header-logo fl">
          <a href="/#/index"></a>
        </div>
        <h2>{{title}}</h2>
        <span>
          <slot name="tips"></slot>
        </span>
      </div>
      <div class="header-right fr">
        <div class="user">
          <a href="javascript:;">{{userInfo.username}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-header",
  props: {
    title: String,
  },
  data() {
    return {};
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./../assets/scss/config";
.order-header {
  padding: 30px 0;
  height: 50px;
  border-bottom: 2px solid #f60;

  .container {
    .header-left {
      h2,
      span {
        display: inline-block;
        text-align: center;
        height: 55px;
        line-height: 55px;
      }
      h2 {
        margin-left: 50px;
        font-size: $fontC;
      }
      span {
        margin-left: 15px;
        color: $colorD;
        font-size: $fontJ;
      }
    }
    .header-right {
      .user {
        a {
          color: $colorC;
          font-size: 16px;
          height: 55px;
          line-height: 55px;
        }
      }
    }
  }
}
</style>