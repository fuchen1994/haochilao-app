<template>
  <div class="page_container">
    <img src="../../assets/bg/bg-10.jpg" class="bg_img">
    <cube-scroll class="page_content" ref="scroll">
      <slot></slot>
    </cube-scroll>
      <slot name="fixed"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
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