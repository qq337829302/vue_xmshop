<template>
  <div class="product">
    <product-bar :productInfo="productInfo">
      <template v-slot:buy>
        <button class="btn btn-primary btn-small" @click="buy">立即购买</button>
      </template>
    </product-bar>
    <div class="content">
      <div class="item-bgs"></div>
      <div class="item-carousel"></div>
      <div class="item-video"></div>
    </div>
  </div>
</template>

<script>
import ProductBar from "./../components/ProductBar";
export default {
  name: "product",
  components: {
    ProductBar,
  },
  data() {
    return {
      productInfo: {},
    };
  },
  created() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`, {}).then((res) => {
        console.log(res);
        this.productInfo = res;
      });
    },
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style lang="scss">
.product {
}
</style>