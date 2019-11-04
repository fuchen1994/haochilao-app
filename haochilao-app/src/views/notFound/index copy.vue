<template>
	<div class="not-found-container">
		<img src="../../assets/bg/bg-10.jpg" class="bg_img" />

		<!-- <div class="not-found-img">
      <img src="@/assets/404/404.jpg" alt="">
		</div>-->

    <div class="page_content">
      <div class="warining-msg">抱歉，您访问的页面未找到！</div>
      <div class="btn-group">
        <van-button color="#0ec5a1" @click="goHomePage">返回首页</van-button>
        <!-- <van-button color="#ffba00" @click="goLastPage">返回上一页</van-button> -->
      </div>
    </div>
		
	</div>
</template>
<script>
export default {
	name: "notFound",
	// data: {
	//   return {

	//   }
	// },
	methods: {
		goHomePage() {
			this.$router.replace("/home");
		},
		goLastPage() {
			this.$router.go(-1);
		}
	}
};
</script>
<style lang="stylus" scoped>
.not-found-container {
	// background-color #f1f2f4
	// background: url('../../assets/bg/bg-10.jpg') center top no-repeat;
	// background-size: cover;
	// filter: blur(12px);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	// padding-top: 2.5rem;

	.bg_img {
		width: 100%;
    height: 100%;
		object-fit: cover;
		filter: blur(12px);
	}

	.not-found-img {
		text-align: center;

		img {
			width: 80%;
		}
	}

  .page_content {
    position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
  }

	.warining-msg {
		font-size: 0.38rem;
		color: #ebb534;
		text-align: center;
    padding-top: 3.5rem;
	}

	.btn-group {
		padding-top: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		// text-align center
	}

	>>>.van-button {
		padding: 0;
		font-size: 0.32rem;
		width: 2.1rem;
		height: 0.75rem;
		line-height: 0.75rem;
		text-align: center;
		border-radius: 0;

		&+.van-button {
			margin-left: 0.5rem;
		}
	}
}
</style>