<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tips>
        <p>我已经购买的商品</p>
      </template>
    </order-header>

    <!-- loading -->
    <loading v-if="showLoading"></loading>
    <!--nodata  -->
    <no-data tips="暂无记录" v-if="!showLoading && orderList.length === 0"></no-data>

    <div class="wrapper">
      <div class="container">
        <div class="order-box" v-for="(value,key) in orderList" :key="key">
          <div class="order-head clearfix">
            <div class="item-info fl">
              {{value.createTime}}
              <span>|</span>
              {{value.receiverName}}
              <span>|</span>
              订单号：{{value.orderNo}}
              <span>|</span>
              {{value.paymentTypeDesc}}
            </div>
            <div class="item-money fr">
              应付金额：
              <span>{{value.payment}}</span>
              元
            </div>
          </div>
          <div class="order-body clearfix">
            <div class="product-box fl">
              <div class="product-item clear" v-for="(v,k) in value.orderItemVoList" :key="k">
                <div class="item-img fl">
                  <img v-lazy="v.productImage" alt />
                </div>
                <div class="item-intro fl">
                  <p>{{v.productName}}</p>
                  <p>{{v.currentUnitPrice}}X{{v.quantity}}元</p>
                </div>
              </div>
            </div>

            <div class="product-state fr">
              <a
                href="javascript:;"
                :class="{'isPaid': value.status == 20}"
                @click="handleState(value.status,value.orderNo)"
              >{{value.statusDesc}}</a>
            </div>
          </div>
        </div>

        <!-- 分页 element-pagination -->
        <el-pagination
          class="pagination"
          background
          layout="prev, pager, next"
          :total="total"
          :pageSize="pageSize"
          :currentPage="currentPage"
          @current-change="pageChange"
          v-if="showElmentPagination"
        ></el-pagination>

        <!-- 点击按钮加载  element-button -->
        <div class="load-more">
          <el-button type="primary" :loading="isLoadMore" @click="loadMore" v-if="showLoadMore">加载更多</el-button>
        </div>

        <!-- 滚动加载 vue-infinite-scroll -->
        <div
          v-infinite-scroll="scrollMore"
          infinite-scroll-disabled="busy"
          infinite-scroll-distance="410"
          v-if="showScrollMore"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import Loading from "./../components/Loading";
import NoData from "./../components/NoData";
import infiniteScroll from "vue-infinite-scroll";

export default {
  name: "orderList",
  components: {
    OrderHeader,
    Loading,
    NoData,
  },
  directives: { infiniteScroll },
  data() {
    return {
      showLoading: true,
      orderList: [],
      pageSize: 2,
      currentPage: 1,
      total: 0,
      isLoadMore: false,
      busy: false, //是否触发滚动加载 false触发
      //控制三种分页方式的显示
      showElmentPagination: false, //elment-pagination
      showLoadMore: false,
      showScrollMore: true,
    };
  },
  mounted() {
    this.getOrderList();
  },
  methods: {
    getOrderList() {
      this.axios
        .get("/orders", {
          params: {
            pageSize: this.pageSize,
            pageNum: this.currentPage,
          },
        })
        .then((res) => {
          this.showLoading = false;
          this.orderList = res.list;
          this.total = res.total;
        });
    },
    handleState(status, orderId) {
      if (status == 10) {
        this.$router.push({
          path: "/order/pay",
          query: {
            orderId,
          },
        });
      }
    },
    // element-pagination
    pageChange(pageNum) {
      this.currentPage = pageNum;
      this.getOrderList();
    },
    //load-more
    loadMore() {
      this.isLoadMore = true;
      this.currentPage++;
      this.axios
        .get("/orders", {
          params: {
            pageSize: this.pageSize,
            pageNum: this.currentPage,
          },
        })
        .then((res) => {
          this.orderList = this.orderList.concat(res.list);
          this.isLoadMore = false;
          if (res.isLastPage === true) {
            this.showLoadMore = false;
          }
        });
    },
    //scrollMore
    scrollMore() {
      this.busy = true;
      this.currentPage++;
      setTimeout(() => {
        this.axios
          .get("/orders", {
            params: {
              pageSize: this.pageSize,
              pageNum: this.currentPage,
            },
          })
          .then((res) => {
            this.orderList = this.orderList.concat(res.list);
            if (res.isLastPage === true) {
              this.busy = true;
            } else {
              this.busy = false;
            }
          });
      }, 500);
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";

.order-list {
  .wrapper {
    background: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .container {
      //  三种分页器
      .pagination {
        text-align: right;
        .el-pagination.is-background .el-pager li:not(.disabled).active {
          background-color: $colorA;
        }
      }

      .load-more {
        text-align: center;
      }
      //html
      .order-box {
        margin-bottom: 30px;
        margin-top: 30px;
        background-color: $colorG;

        .order-head {
          height: 74px;
          line-height: 74px;
          padding: 0 43px;
          font-size: $fontI;
          color: $colorC;
          background-color: #fffaf7;
          border: none;
          .item-info {
            span {
              padding: 0 10px;
            }
          }

          .item-money {
            span {
              font-size: $fontD;
              color: $colorB;
            }
          }
        }
        .order-body {
          padding: 0 43px;
          background-color: $colorG;
          .product-box {
            width: 88%;
            .product-item {
              height: 145px;
              .item-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .item-intro {
                text-align: center;
                margin-top: 40px;
                margin-left: 5px;
                p {
                  font-size: $fontG;
                  color: $colorB;
                }
              }
            }
          }
          .product-state {
            height: 145px;
            line-height: 145px;
            font-size: $fontG;
            a {
              color: $colorA;
              &.isPaid {
                color: green;
              }
            }
          }
        }
      }
    }
  }
}
</style>