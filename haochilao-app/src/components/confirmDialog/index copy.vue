<template>
  <div class="edit_people_count">
    <van-dialog
      title="提示"
      v-model="show"
      @confirm="confirmMsg"
      message-align="left"
      show-cancel-button
      confirm-button-color="#fff"
      confirm-button-text="我选好了^_^"
      cancel-button-color="#333"
      cancel-button-text="再看看~">
      您确定要下单吗？
    </van-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    confirmMsg() {
      this.$emit('confirmOrder');
    },
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    }
  }
  
}
</script>
<style lang="stylus" scoped>
  .edit_people_count {
    >>>.van-dialog {
      border-radius: 0.2rem;

      .van-dialog__header {
        padding: 0.4rem 0 0.2rem;
      }

      .van-dialog__content {
        padding: 0.4rem;
        position: relative;
        font-size: 0.29rem;
        &::before {
          position: absolute;
          box-sizing: border-box;
          content: " ";
          pointer-events: none;
          right: 0;
          top: 0;
          left: 0;
          border-top: 1px solid #ebedf0;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
          z-index: 400;
        }
      }

      .van-button {
        height: 1rem;
        line-height: 0.98rem;
        font-size: 0.27rem;
        border: 0;
        overflow: hidden;
        outline: none;
        border-radius: 0;
        width: 50%;
      }

      .van-hairline--left::after {
        border: 0;
      }

      .van-dialog__confirm {
        background-color: #EB4E4D;
      }

      .van-dialog__cancel {
        background-color: #CCCCCC;
      }
    }
  }
</style>