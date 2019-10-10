<template>
	<div :class="[
    'my_button',
    position + '_side'
  ]">
		<!-- 导航按钮（带有点击效果） -->
		<van-button color="transparent" @click="handleClick">
			<span :class="[
				'iconfont',
				iconClass
			]"></span>
			<span class="navigation_text">{{ text }}</span>
		</van-button>
	</div>
</template>
<script>
export default {
  name: 'myButton',
	data() {
		return {};
  },
  props: {
    position: {
      type: String,
      default: 'left'
    },
    text: {
      type: String,
      default: '导航'
    },
    iconClass: {
      type: String,
      default: 'icon-917caidan_fenlei'
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>
<style lang="stylus" scoped>
.my_button {
	position: fixed;
  bottom: 0.4rem;
	z-index: 100;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;
	// background-color #fff
	box-shadow: 0 0.08rem 0.1rem rgba(0, 0, 0, 0.3);
	overflow: hidden;

	>>>.van-button {
		padding: 0;
		width: 100%;
		height: 100%;
		display: block;
		border-radius: 50%;

		.van-button__text {
			padding-top: 0.05rem;
			line-height: 0.4rem;
			display: flex;
			height: 100%;
			width: 100%;
			flex-flow: column wrap;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			user-select: none;
		}
	}

	.iconfont {
		font-size: 0.43rem;
	}

	.navigation_text {
		padding-top: 0.03rem;
		font-size: 0.24rem;
		letter-spacing: 0.02rem;
	}
}
.left_side {
  left: 0.4rem;
  background-color: rgba(255, 255, 255, 0.9);
  >>>.van-button__text {
    color: #333;
  }
}
.center_side {
	left: 50%;
	transform: translateX(-50%);
  background-color: rgba(249, 64, 46, 0.9);
  // background-color rgba(227, 56, 24, 0.9)
  .iconfont {
    font-size: 0.5rem;
  }
}
.right_side {
  right: 0.4rem;
  background-color: rgba(249, 64, 46, 0.9);
  // background-color rgba(227, 56, 24, 0.9)
  .iconfont {
    font-size: 0.45rem;
  }
}
</style>