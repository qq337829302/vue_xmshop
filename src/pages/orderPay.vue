<template>
  <div class="order-pay">
    <div class="warpper">
      <div class="container">
        <div class="pay-top">
          <div class="item-order clearfix">
            <div class="icon-success fl"></div>
            <div class="order-info fl">
              <h2>订单提交成功！去付款咯～</h2>
              <p>
                请在
                <span>30分</span>内完成支付, 超时后将取消订单
              </p>
              <p>{{address}}</p>
            </div>
            <div class="order-total fr">
              <div class="total-money">
                应付总额：
                <span>{{payment}}</span>元
              </div>
              <div class="total-detail">
                订单详情
                <em
                  class="icon-down"
                  @click="showDetail=!showDetail"
                  :class="{'up':showDetail}"
                ></em>
              </div>
            </div>
          </div>

          <div class="order-detail" v-if="showDetail">
            <div class="item">
              <span class="detail-left">订单号：</span>
              <span class="detail-right">{{orderId}}</span>
            </div>
            <div class="item">
              <span class="detail-left">收货信息：</span>
              <span class="detail-right">{{address}}</span>
            </div>
            <div class="item">
              <span class="detail-left">商品名称：</span>
              <span class="detail-right goods">
                <ul>
                  <li v-for="(item,index) in goodsList" :key="index">
                    <img v-lazy="item.productImage" alt />
                    {{item.productName}}
                  </li>
                </ul>
              </span>
            </div>
            <div class="item">
              <span class="detail-left">发票信息：</span>
              <span class="detail-right">电子发票 个人</span>
            </div>
          </div>
        </div>
        <div class="pay-bottom">
          <div class="pay-text">
            <h2>选择以下支付方式付款</h2>
          </div>

          <div class="pay-way">
            <h2>支付平台</h2>
            <div class="alipay" @click="goPay(1)" :class="{'checked':checked == 1}"></div>
            <div class="wxpay" @click="goPay(2)" :class="{'checked':checked == 2}"></div>
          </div>
        </div>
      </div>
    </div>
    <wx-pay-modal :showWxPayModal="showWxPayModal" @close="close" :qrcodeUrl="qrcodeUrl"></wx-pay-modal>
    <modal
      title="支付确认"
      btnType="3"
      confirmBtn="查看订单详情"
      cancelBtn="取消"
      :showModal="showModal"
      @submit="goOrderList"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>订单支付完成了吗？</p>
      </template>
    </modal>
  </div>
</template>

<script>
import wxPayModal from "./../components/wxPayModal";
import Modal from "./../components/Modal";
import QRCode from "qrcode";
export default {
  name: "orderPay",
  data() {
    return {
      orderId: this.$route.query.orderId,
      showDetail: false,
      checked: "",
      address: "", //1 支付宝 2微信
      goodsList: {},
      payment: 0,
      showWxPayModal: false,
      showModal: false,
      qrcodeUrl: "",
      timer: "",
    };
  },
  components: {
    wxPayModal,
    Modal,
  },
  mounted() {
    this.getOrderDetail();
  },
  methods: {
    getOrderDetail() {
      this.axios.get(`/orders/${this.orderId}`).then((res) => {
        let { shippingVo, orderItemVoList, payment } = res;
        //javascript 13232123122 浙江 福州市 华安县 qwe
        this.address = `${shippingVo.receiverName} ${shippingVo.receiverMobile} ${shippingVo.receiverProvince} ${shippingVo.receiverCity} ${shippingVo.receiverDistrict} ${shippingVo.receiverAddress}`;
        this.goodsList = orderItemVoList;
        this.payment = payment;
      });
    },
    goPay(checked) {
      this.checked = checked;
      if (checked == 1) {
        this.$router.push({
          path: "/order/aliPay",
          query: {
            orderId: this.orderId,
          },
        });
      } else if (checked == 2) {
        this.showWxPayModal = true;
        this.getWxqrcode();
      }
    },
    loop() {
      this.timer = setInterval(() => {
        this.axios.get(`/orders/${this.orderId}`).then((res) => {
          if (res.status == 20) {
            clearInterval(this.timer);
            this.goOrderList();
          }
        });
      }, 1000);
    },
    close() {
      this.showWxPayModal = false;
      this.showModal = true;
      clearInterval(this.timer);
    },
    getWxqrcode() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "测试订单支付",
          amount: "0.01",
          payType: 2,
        })
        .then((res) => {
          QRCode.toDataURL(res.content)
            .then((url) => {
              this.qrcodeUrl = url;
              this.loop();
            })
            .catch((err) => {
              this.$message.error(err);
            });
        })
        .catch(() => {
          this.showWxPayModal = false;
        });
    },
    goOrderList() {
      this.$router.push("/order/list");
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.order-pay {
  .warpper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 61px;
    .container {
      .pay-top {
        padding: 62px 50px;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 30px;
        .item-order {
          .icon-success {
            background: url(/imgs/icon-gou.png) #80c58a no-repeat 50%;
            width: 90px;
            height: 90px;
            margin-right: 40px;
            background-size: 60px;
            border-radius: 50%;
            display: inline-block;
          }
          .order-info {
            margin-left: 40px;
            h2 {
              font-size: 24px;
              margin-bottom: 20px;
            }
            p {
              margin-top: 5px;
              span {
                color: #ff6700;
              }
            }
          }
          .order-total {
            margin-right: 200px;
            .total-money {
              margin-bottom: 30px;

              span {
                font-size: 28px;
                color: #ff6700;
              }
            }
            .total-detail {
              .icon-down {
                margin-left: 10px;
                @include bgImg(14px, 10px, "/imgs/icon-down.png");
                cursor: pointer;
                transition: all 0.2s;
                &.up {
                  transform: rotate(180deg);
                }
              }
            }
          }
        }
        .order-detail {
          border-top: 1px solid #d7d7d7;
          padding-top: 47px;
          padding-left: 170px;
          font-size: 14px;
          margin-top: 45px;
          .item {
            margin-bottom: 19px;
            .detail-left {
              display: inline-block;
              width: 100px;
            }

            .goods {
              display: inline-block;
              ul {
                li {
                  float: left;
                  img {
                    width: 30px;
                    vertical-align: center;
                  }
                }
              }
            }
          }
        }
      }
      .pay-bottom {
        padding: 26px 50px 72px;
        background-color: #fff;
        color: #333;
        .pay-text {
          h2 {
            font-size: 20px;
            font-weight: 200;
            padding-bottom: 24px;
            border-bottom: 1px solid #d7d7d7;
            margin-bottom: 26px;
            color: #333;
          }
        }
        .pay-way {
          h2 {
            font-weight: 500;
          }

          .alipay {
            @include bgImg(188px, 64px, "/imgs/pay/icon-ali.png");
          }
          .wxpay {
            @include bgImg(188px, 64px, "/imgs/pay/icon-wechat.png");
          }
          .alipay,
          .wxpay {
            margin-top: 20px;
            border: 1px solid #d7d7d7;
            cursor: pointer;
            display: inline-block;
            background-size: 103px 38px;
            margin-right: 20px;
            &.checked {
              border: 1px solid #ff6700;
            }
          }
        }
      }
    }
  }
}
</style>