<template>
  <div class="fixed_btn go_back_btn" @click="goBackPage">
    <span class="iconfont icon-jiantou2"></span>
    <span class="text">返回</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goBackPage() {
			// this.$router.go(-1);
			this.$emit('click');
    }
  }
}
</script>
<style lang="stylus" scoped>
  .fixed_btn {
		position: fixed;
		// top 0.2rem
		// left 0.2rem
		width: 1.4rem;
		height: 0.6rem;
		// line-height 0.6rem
		border-radius: 0.5rem;
		background-color: rgba(0, 0, 0, 0.3);
		color: #fff;
		font-size: 0.3rem;
		// text-align center
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 301;

		.text {
			margin-right: 0.1rem;
		}
	}

  .go_back_btn {
		top: 0.2rem;
		left: 0.2rem;
	}
</style>