<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tips>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</template>
    </order-header>
    <div class="content">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-header">
            <li>
              <span class="checkbox" :class="{'checked':allChecked}" @click="toggleAll()"></span> 全选
            </li>
            <li>商品名称</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
            <li>操作</li>
          </ul>
          <ul class="cart-item-list" v-for="(item,index) in cartList" :key="index">
            <div>
              <div
                class="checkbox"
                :class="{'checked':item.productSelected}"
                @click="updateCart(item)"
              ></div>
            </div>
            <div class="item-name">
              <img :src="item.productMainImage" alt />
              <span>{{item.productName}}</span>
            </div>
            <div class="item-price">{{item.productPrice}}</div>
            <div class="item-quanity">
              <a href="javascript:;" @click="updateCart(item,'-')">-</a>
              <span>{{item.quantity}}</span>
              <a href="javascript:;" @click="updateCart(item,'+')">+</a>
            </div>
            <div class="item-totalPrice">{{item.productTotalPrice}}</div>
            <div class="item-del" @click="confirmDel(item.productId)"></div>
          </ul>
        </div>
        <div class="cart-footer clearfix">
          <div class="cart-footer-left fl">
            <a href="/#/index">继续购物</a>
            <div class="total">
              一共
              <span>{{this.totalNum}}</span>件商品，已选择
              <span>{{this.choosed}}</span>件
            </div>
          </div>
          <div class="cart-footer-right fr">
            <span>合计：{{this.totalPrice}}元</span>
            <button class="btn btn-large btn-primary" @click="goTOSettlement()">去结算</button>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
    <modal
      title="tips"
      :showModal="showModal"
      btnType="3"
      @cancel="showModal=false"
      @submit="del()"
    >
      <template v-slot:body>确认要删除吗?</template>
    </modal>
  </div>
</template>

<script>
import NavFooter from "./../components/NavFooter";
import OrderHeader from "./../components/OrderHeader";
import Modal from "./../components/Modal";
export default {
  name: "cart",
  components: {
    NavFooter,
    OrderHeader,
    Modal,
  },
  mounted() {
    this.getCarts();
  },
  data() {
    return {
      allChecked: true,
      cartList: null,
      totalPrice: 0,
      totalNum: 0,
      choosed: 0,
      showModal: false,
      delId: null,
    };
  },

  methods: {
    getCarts() {
      this.axios.get("/carts", {}).then((res) => {
        this.renderData(res);
      });
    },
    goTOSettlement() {
      this.choosed > 0
        ? this.$router.push("/orderPay")
        : this.$message.warning("选择你要结算的商品！");
    },
    confirmDel(productId) {
      this.delId = productId;
      this.showModal = true;
    },
    del() {
      this.$message("删除成功");
      console.log(this.delId);
      this.axios.delete(`/carts/${this.delId}`, {}).then((res) => {
        this.renderData(res);
        this.showModal = false;
      });
    },
    renderData(res) {
      console.log(res);
      this.cartList = res.cartProductVoList;
      this.allChecked = res.selectedAll;
      this.totalPrice = res.cartTotalPrice;
      this.totalNum = res.cartTotalQuantity;
      this.choosed = this.alreadyChoosed(res);
    },
    updateCart(item, type) {
      let quantity = item.quantity;
      let selected = item.productSelected;
      if (type == "-") {
        if (quantity == 1) {
          this.$message.warning("商品至少保留一件");
          return;
        }
        --quantity;
      } else if (type == "+") {
        if (quantity > item.productStock) {
          this.$message.warning("不能大于库存");
          return;
        }
        ++quantity;
      } else {
        selected = !selected;
      }

      this.axios
        .put(`/carts/${item.productId}`, { quantity, selected })
        .then((res) => {
          this.renderData(res);
        });
    },
    toggleAll() {
      let url = this.allChecked ? "/carts/unSelectAll" : "/carts/selectAll";
      this.axios.put(url).then((res) => {
        this.renderData(res);
      });
    },
    alreadyChoosed(res) {
      let sum = 0;
      res["cartProductVoList"].map((val) => {
        val.productSelected ? (sum += val.quantity) : "";
      }, sum);
      return sum;
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config";
@import "./../assets/scss/mixin";
.cart {
  .content {
    background-color: $colorJ;
    padding-top: 30px;
    padding-bottom: 114px;
    width: 100%;
    .container {
      .cart-box {
        background-color: $colorG;

        font-size: $fontJ;
        .cart-item-header {
          height: 79px;
          line-height: 79px;
          display: flex;
          justify-content: space-between;
          li {
            color: $colorD;
            &:first-child {
              margin-left: 30px;
            }
            &:last-child {
              margin-right: 70px;
            }
          }
        }
        .cart-item-list {
          display: flex;
          padding-bottom: 30px;
          border-top: 1px solid $colorE;
          justify-content: space-between;

          line-height: 79px;
          align-items: baseline;
          text-align: center;

          div {
            &:first-child {
              margin-left: 30px;
            }
            &:last-child {
              margin-right: 70px;
            }
          }
          .item-del {
            height: 79px;
            flex: 1;
            line-height: 79px;
            background: url(/imgs/icon-close.png) no-repeat 100%;
            width: 14px;
            height: 12px;
            background-size: contain;
            cursor: pointer;
            vertical-align: middle;
          }
          .item-name {
            flex: 2.5;
            img {
              width: 60px;
              height: 60px;
              vertical-align: middle;
            }
          }
          .item-price {
            flex: 1;
          }
          .item-quanity {
            width: 152px;
            height: 42px;
            border: 1px solid $colorE;
            display: flex;
            a,
            span {
              color: $colorB;
              line-height: 40px;
              text-align: center;
              width: 50px;
              height: 40px;
            }
            a {
              display: inline-block;
            }
            flex: 1;
          }
          .item-totalPrice {
            flex: 1;
          }
        }
      }
    }
  }
  .cart-footer {
    margin-top: 20px;
    .cart-footer-left {
      display: flex;
      height: 30px;
      line-height: 30px;
      a {
        font-size: $fontJ;
        color: $colorC;
        margin-right: 20px;
      }
      .total {
        span {
          color: $colorA;
        }
      }
    }
    .cart-footer-right {
      span {
        margin-right: 30px;
        color: $colorA;
        font-size: $fontE;
      }
    }
  }
}
</style>