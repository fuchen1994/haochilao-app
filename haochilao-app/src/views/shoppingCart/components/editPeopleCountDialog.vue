<template>
  <div class="edit_people_count">
    <van-dialog
      title="修改信息"
      v-model="show"
      @confirm="confirmMsg"
      message-align="left"
      show-cancel-button
      confirm-button-color="#fff"
      confirm-button-text="填好了^_^"
      cancel-button-text="不改了~"
      cancel-button-color="#333">

      <van-cell title="用餐人数">
        <van-stepper v-model="count" integer/>
      </van-cell>

      <van-field
        v-model="text"
        label="备注"
        clearable
        type="textarea"
        placeholder="请输入留言"
        rows="1"
        autosize/>

    </van-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      count: 1,
      text: ''
    }
  },
  // 不能直接修改props里的数据，抛出警告：Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "peopleCount"
  props: ['peopleCount', 'remark'],
  mounted() {
    this.count = this.peopleCount;
    this.text = this.remark;
  },
  methods: {
    confirmMsg() {
      let msg = {
        peopleCount: this.count,
        remark: this.text
      };
      this.$emit('changeMsg', msg)
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