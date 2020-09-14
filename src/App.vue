<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.getUserInfo();
      this.getCartCount();
    }
  },
  methods: {
    getUserInfo() {
      this.axios.get("/user", {}).then((res) => {
        this.$store.dispatch("setUserInfo", res);
        //保存到vuex
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum", {}).then((res) => {
        //保存到vuex
        this.$store.dispatch("setCartCount", res);
      });
    },
  },
};
</script>

<style lang='scss'>
@import "./assets/scss/reset.scss";
</style>
