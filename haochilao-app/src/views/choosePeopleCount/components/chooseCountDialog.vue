<template>
  <div class="edit_people_count">
    <van-dialog
      title="修改信息"
      v-model="show"
      @confirm="confirmMsg"
      message-align="left"
      show-cancel-button
      confirm-button-color="#fff"
      confirm-button-text="选好了^_^"
      cancel-button-text="重新选~"
      cancel-button-color="#333">

      <van-cell title="用餐人数">
        <van-stepper v-model="count" integer :min="12" :max="100"/>
      </van-cell>

    </van-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      count: 12
    }
  },
  methods: {
    confirmMsg() {
      this.$emit('changeMsg', this.count)
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
        padding: 0 0.15rem;
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

      .van-stepper__minus, .van-stepper__plus {
        color: #EC313D;
        // width: 0.8rem;
        // height: 0.8rem;
      }

      // .van-stepper__input {
      //   width: 0.85rem;
      //   height: 0.8rem;
      // }

      .van-stepper__minus--disabled, .van-stepper__plus--disabled {
        color: #c8c9cc !important;
        background-color: #f7f8fa;
      }

    }

  }
</style>