<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer btn-group">
          <a
            href="javacript:;"
            class="btn btn-primary"
            @click="$emit('submit')"
            v-if="btnType == 1 || btnType == 3"
          >{{confirmBtn}}</a>
          <a
            href="javacript:;"
            class="btn btn-gray"
            @click="$emit('cancel')"
            v-if="btnType == 2 || btnType == 3"
          >{{cancelBtn}}</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    modalType: {
      type: String,
      default: "form",
    },
    title: {
      type: String,
    },
    btnType: String,
    confirmBtn: {
      type: String,
      default: "确认",
    },
    cancelBtn: {
      type: String,
      default: "取消",
    },
    showModal: Boolean,
  },
};
</script>


<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/btn.scss";
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  z-index: 99;
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $colorI;
    opacity: 0.5;
  }

  &.slide-enter-active,
  &.slide-leave {
    top: 0;
  }
  &.slide-leave-active,
  &.slide-enter {
    top: -100%;
  }

  .modal-dialog {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 660px;
    background-color: $colorG;
    .modal-header {
      font-size: $fontG;
      background-color: $colorJ;
      height: 32px;
      padding: 14px 20px;
      line-height: 32px;
      color: $colorB;
      a {
        content: " ";
        display: inline-block;
        cursor: pointer;
        background: url("/imgs/icon-close.png") no-repeat center;
        background-size: contain;
        width: 14px;
        height: 14px;
        position: absolute;
        top: 13px;
        right: 23px;
        transition: all 0.2s;
      }
    }
    .modal-body {
      padding: 42px 40px 54px;
      font-size: $fontI;
    }
    .modal-footer {
      background-color: $colorJ;
      text-align: center;
      height: 30px;
      padding: 20px 0;
      border-top: 1px solid #e0e0e0;
    }
  }
}
</style>