<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="#">小米商城</a>
      <span>|</span>
      <a href="#">MIUI</a>
      <span>|</span>
      <a href="#">米家</a>
      <span>|</span>
      <a href="#">多聊</a>
      <span>|</span>
      <a href="#">游戏</a>
    </div>
    <div class="footer-copyright">
      Copyright ©2020
      <span class="domain">www.xxxxx.com</span> All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 5px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  .footer-logo {
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
      margin-top: 40px;
    }
    p {
      color: $colorD;
    }
  }

  .footer-link {
    margin-bottom: 11px;
    a {
      color: $colorD;
    }

    span {
      margin: 0 10px;
    }
  }

  .footer-copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>