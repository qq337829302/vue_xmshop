<template>
  <div class="order-confirm">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="position: absolute; width: 0px; height: 0px; overflow: hidden;"
    >
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path
            d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path
            d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"
            class="path1"
          />
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"
            class="path1"
          />
          <path
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path2"
          />
          <path
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path3"
          />
          <path
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"
            class="path4"
          />
        </symbol>
      </defs>
    </svg>

    <div class="wrapper">
      <div class="container">
        <div class="address clearfix">
          <h2>收货地址</h2>
          <div class="address-list">
            <div
              class="address-item"
              v-for="(item,index) in addressList"
              :key="index"
              :class="{'checked':checked == index}"
              @click="checked=index"
            >
              <div class="data">
                <h2>{{item.receiverName}}</h2>
                <div class="phone">{{item.receiverMobile}}</div>
                <div
                  class="street"
                >{{item.receiverProvince + ' ' + item.receiverCity + ' ' + item.receiverDistrict + ' ' + item.receiverAddress}}</div>
              </div>
              <div class="action">
                <a href="javascript:;" class="fl" @click="delAddress(item)">
                  <svg class="icon icon-del">
                    <use xlink:href="#icon-del" />
                  </svg>
                </a>
                <a href="javascript:;" class="fr" @click="editAddress(item)">
                  <svg class="icon icon-edit">
                    <use xlink:href="#icon-edit" />
                  </svg>
                </a>
              </div>
            </div>
            <div class="add-address" @click="addAddress">
              <div class="icon-add"></div>
              <p>添加收货地址</p>
            </div>
          </div>
        </div>
        <div class="product">
          <h2>商品</h2>
          <ul>
            <li v-for="(item,index) in cartList" :key="index">
              <div class="product-name">
                <img :src="item.productMainImage" alt />
                {{item.productName+ ' ' + item.productSubtitle}}
              </div>
              <div class="product-price">{{item.productPrice}}元X{{item.quantity}}</div>
              <div class="product-total">{{item.productTotalPrice}}元</div>
            </li>
          </ul>
        </div>
        <div class="settlement">
          <div class="distribution">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="invoice">
            <h2>发票</h2>
            <span>电子发票 个人</span>
          </div>
          <div class="detail">
            <div class="item">
              <span class="item-key">商品件数:</span>
              <span class="item-val">{{selectedCount}}件</span>
            </div>
            <div class="item">
              <span class="item-key">商品总价：</span>
              <span class="item-val">{{totalPrice}}元</span>
            </div>
            <div class="item">
              <span class="item-key">优惠活动：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item">
              <span class="item-key">运费：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item">
              <span class="item-key">应付总额：</span>
              <span class="item-val">{{totalPrice}}元</span>
            </div>
          </div>
        </div>
        <div class="btn-group">
          <a href="/#/cart/" class="btn btn-middle btn-gray">返回购物车</a>
          <a href="javascript:;" class="btn btn-middle btn-primary" @click="orderSubmit">去结算</a>
        </div>
      </div>
    </div>
    <!-- 删除弹框 -->
    <modal :showModal="delModal" title="删除确认" btnType="3" @cancel="delModal=false" @submit="submit">
      <template v-slot:body>
        <p>确认要删除此收货地址吗？</p>
      </template>
    </modal>
    <!-- 编辑弹框 -->
    <modal
      :showModal="editModal"
      title="编辑确认"
      btnType="3"
      @cancel="editModal=false"
      @submit="submit()"
    >
      <template v-slot:body>
        <div class="address-form">
          <div class="item">
            <input type="text" placeholder="姓名" v-model="checkedItem.receiverName" />
            <input
              type="text"
              placeholder="手机号"
              maxlength="11"
              v-model="checkedItem.receiverMobile"
            />
          </div>
          <div class="item">
            <select name="province" v-model="checkedItem.receiverProvince">
              <option value="北京">北京</option>
              <option value="河北省" selected>河北省</option>
              <option value="湖北省">湖北省</option>
            </select>
            <select name="city" v-model="checkedItem.receiverCity">
              <option value="石家庄市">石家庄市</option>
              <option value="廊坊市">廊坊市</option>
              <option value="张家口市">张家口市</option>
            </select>
            <select name="district" v-model="checkedItem.receiverDistrict">
              <option value="晋州">晋州</option>
              <option value="赵县">赵县</option>
              <option value="无极">无极</option>
            </select>
          </div>
          <div class="item">
            <textarea name="address" cols="30" rows="10" v-model="checkedItem.receiverAddress"></textarea>
          </div>
          <div class="item">
            <input type="text" placeholder="邮编" v-model="checkedItem.receiverZip" />
          </div>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "./../components/Modal";
export default {
  name: "OrderConfirm",
  data() {
    return {
      addressList: {},
      cartList: {},
      totalPrice: 0,
      selectedCount: 0,
      delModal: false,
      editModal: false,
      checked: 0,
      checkedItem: {},
      userAction: null, //0删除 1修改 2新增
    };
  },
  components: {
    Modal,
  },
  mounted() {
    this.getCartList();
    this.getAddressList();
  },
  methods: {
    getAddressList() {
      this.axios.get("/shippings", {}).then((res) => {
        this.addressList = res.list;
      });
    },
    getCartList() {
      this.axios.get("/carts", {}).then((res) => {
        this.totalPrice = res.cartTotalPrice;
        this.cartList = res.cartProductVoList.filter(
          (val) => val.productSelected
        );
        if (this.cartList.length < 1) {
          this.$router.push("/cart");
        }
        let selectedCount = 0;
        this.cartList.map((val) => {
          selectedCount += val.quantity;
        }, selectedCount);
        this.selectedCount = selectedCount;
      });
    },
    delAddress(item) {
      this.delModal = true;
      this.checkedItem = item;
      this.userAction = 0;
    },
    addAddress() {
      this.userAction = 2;
      this.editModal = true;
    },
    editAddress(item) {
      this.userAction = 1;
      this.checkedItem = item;
      this.editModal = true;
    },
    submit() {
      let { checkedItem, userAction } = this;
      let method,
        url,
        params = {};
      if (userAction == 0) {
        method = "delete";
        url = `/shippings/${checkedItem.id}`;
        this.checked = this.checked - 1 > 0 ? this.checked - 1 : 0;
      } else if (this.userAction == 1) {
        method = "put";
        url = `/shippings/${checkedItem.id}`;
      } else if (this.userAction == 2) {
        method = "post";
        url = `/shippings`;
        this.checked = this.addressList.length;
      }

      if (userAction == 2 || userAction == 1) {
        let errorMsg = "";
        let {
          receiverName,
          receiverMobile,
          receiverProvince,
          receiverCity,
          receiverDistrict,
          receiverAddress,
          receiverZip,
        } = checkedItem;
        if (!receiverName) {
          errorMsg = "请输入收货人的姓名";
        } else if (!receiverMobile || !/\d{11}/.test(receiverMobile)) {
          errorMsg = "手机号格式不正确";
        } else if (!receiverProvince) {
          errorMsg = "请输入收货人的省";
        } else if (!receiverCity) {
          errorMsg = "请输入收货人的市";
        } else if (!receiverDistrict) {
          errorMsg = "请输入收货人的区";
        } else if (!receiverAddress) {
          errorMsg = "请输入收货人的详细地址";
        } else if (!receiverZip) {
          errorMsg = "请输入收货人的邮编";
        }
        if (errorMsg) {
          this.$message.error(errorMsg);
          return;
        }
        params = checkedItem;
      }
      this.axios[method](url, params).then(() => {
        this.closeModal();
        this.$message.success("操作成功");
        this.getAddressList();
      });
    },
    closeModal() {
      this.delModal = false;
      this.editModal = false;
    },
    orderSubmit() {
      let item = this.addressList[this.checked];
      if (!item) {
        this.$message.error("至少选择一个收货地址");
        return;
      }

      this.axios
        .post("/orders", {
          shippingId: item.id,
        })
        .then((res) => {
          this.$router.push({
            path: "/order/pay",
            query: {
              orderId: res.orderNo,
            },
          });
        });
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.address-form {
  div {
    margin-bottom: 20px;
    input {
      box-sizing: border-box;
      margin-right: 10px;
      display: inline-block;
      width: 263px;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      border: 1px solid $colorH;
    }
    select {
      height: 40px;
      line-height: 40px;
      border: 1px solid $colorH;
      margin-right: 15px;
    }
    textarea {
      height: 62px;
      width: 100%;
      padding: 13px 15px;
      box-sizing: border-box;
      border: 1px solid $colorH;
    }
  }
}
.order-confirm {
  .wrapper {
    width: 100%;
    background-color: $colorJ;
    .container {
      background-color: $colorG;
      .address {
        padding-top: 38px;
        margin-left: 38px;
        h2 {
          font-size: 20px;
          color: #333;
          font-weight: 200;
          margin-bottom: 21px;
        }
        .address-list {
          .address-item,
          .add-address {
            float: left;
            box-sizing: border-box;
            border: 1px solid $colorH;
            width: 271px;
            height: 180px;
            margin-right: 15px;
            padding: 15px 24px;
            font-size: 14px;
            color: $colorD;
          }
          .address-item {
            cursor: pointer;
            .data {
              height: 130px;
              overflow: hidden;
            }
            .action {
              a {
                width: 20px;
                height: 20px;
                svg {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            &.checked {
              border: 1px solid #ff6700;
            }
          }
          .add-address {
            cursor: pointer;
            .icon-add {
              @include bgImg(30px, 30px, "/imgs/icon-add.png");
              background-color: #e0e0e0;
              border-radius: 50%;
              margin: 0 auto;
              background-size: 14px;
              margin-top: 45px;
              margin-bottom: 10px;
              margin-left: 95px;
            }
            p {
              text-align: center;
            }
          }
        }
      }
      .product {
        margin-left: 38px;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 5px;
        margin-top: 20px;
        h2 {
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 5px;
        }
        ul {
          li {
            display: flex;
            align-items: center;
            height: 40px;
            line-height: 40px;
            margin-top: 10px;
            font-size: 16px;
            color: #333;
          }
          .product-name {
            flex: 5;
            img {
              width: 30px;
              height: 30px;
              vertical-align: middle;
            }
          }
          .product-price {
            flex: 2;
          }
          .product-total {
            flex: 1;
          }
        }
      }
      .settlement {
        margin-left: 38px;
        .distribution,
        .invoice {
          h2 {
            display: inline-block;
          }
          span {
            margin-left: 100px;
            font-size: 16px;
            color: #ff6700;
            margin-right: 23px;
          }
          margin-top: 31px;
          line-height: 20px;
        }
        .detail {
          margin-top: 31px;
          text-align: right;
          margin-right: 40px;
          font-size: 16px;
          border-bottom: 1px solid $colorJ;
          .item {
            margin-bottom: 8px;
            .item-key {
              text-align: right;
              font-size: 16px;
              color: #666;
            }
            .item-val {
              display: inline-block;
              width: 100px;
              color: #ff6700;
              text-align: right;
            }
          }
        }
      }
      .btn-group {
        text-align: right;
        margin: 40px 0;
      }
    }
  }
}
</style>