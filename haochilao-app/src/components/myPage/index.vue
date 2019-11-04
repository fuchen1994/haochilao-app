<template>
  <div class="page_container">
    <img :src="bgImg" class="bg_img">
    <cube-scroll 
      ref="scroll"  
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
      class="page_content">
      <slot></slot>
    </cube-scroll>
      <slot name="fixed"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgImg: '',
      pullDownRefreshTxt: '没有新的数据了~',
      pullUpLoadMoreTxt: '加载更多...',
      pullUpLoadNoMoreTxt: '没有更多了~',
    }
  },
  props: {
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    pullDownRefresh: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.randomImg();
  },
  computed: {
    options() {
      return {
        pullDownRefresh: this.pullDownRefreshObj,  // 下拉刷新
        pullUpLoad: this.pullUpLoadObj, // 上拉加载更多
        startY: 0,
        scrollbar: {
          fade: true
        }
      };
    },
    pullDownRefreshObj() {
      return this.pullDownRefresh ? {
        txt: this.pullDownRefreshTxt
      } : false
    },
    pullUpLoadObj() {
      return this.pullUpLoad ? {
        txt: {
          more: this.pullUpLoadMoreTxt,
          noMore: this.pullUpLoadNoMoreTxt
        }
      } : false
    }
  },
  methods: {
    onPullingDown() {},
    onPullingUp() {},
    randomImg() {
      this.bgImg = require('../../assets/bg/bg-0' + this.getRndInteger(1, 9) + '.jpg');

    },
    // 返回 min（包含）～ max（包含）之间的数字
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    rebuildScroll() {
      this.$nextTick(() => {
				this.$refs.scroll.destroy();
				this.$refs.scroll.initScroll();
			});
    }
  }
}
</script>
<style lang="stylus" scoped>
  .page_container {
    position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
    .bg_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(12px);
    }
    .page_content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
    }
  }
</style>