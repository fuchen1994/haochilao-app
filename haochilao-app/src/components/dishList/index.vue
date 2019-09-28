<template>
	<ul class="dish_list_container">
		<li v-for="(item, i) in dishList" :key="i" @click="goDishDetail(item)">

			<div class="dish_content">

				<!-- 上部分 -->
				<div class="dish_img_box">
					<!-- 菜图 -->
					<img v-lazy="item.dishImgUrl"/>

					<!-- 辣椒图标,好评度图标 -->
					<div class="dish_icon_box">
						<svg class="dish_icon" aria-hidden="true" v-if="item.isSpicy">
							<use xlink:href="#icon-lajiao" />
						</svg>

						<!-- <svg class="dish_icon" aria-hidden="true" v-for="(cell, j) in item.praiseDegree" :key="j">
							<use xlink:href="#icon-dianzan" />
						</svg> -->

						<van-icon 
              name="good-job" 
              color="#FFD31C" 
              size="0.3rem" 
              v-for="(cell, j) in item.praiseDegree" 
              :key="j"
						/>

					</div>
				</div>

				<!-- 下部分 -->
				<div class="dish_info">
					<div class="dish_name text_over_hidden">{{ item.dishName }}</div>
					<div class="dish_price">
						<span class="rmb_symbol">¥</span>
						{{ item.dishPrice }}
					</div>
				</div>

			</div>

			<!-- 热门标签 -->
			<div class="mark_box">
				<span class="mark_text">{{ item.markName }}</span>
			</div>

			<!-- 角标（已点的数量） -->
			<span class="ordered_count_mark" v-if="Number(item.orderedCount)">{{ item.orderedCount }}</span>

		</li>
	</ul>
</template>
<script>
export default {
	name: 'dishList',
	data() {
		return {};
  },
  props: ['dishList'],
  methods: {
    // 跳到菜品详情
    goDishDetail (item) {
      this.$router.push(`/dishDetail/${ item.dishId }`)
    }
  },
};
</script>
<style lang="stylus" scoped>
.dish_list_container {
	// padding-top: 0.8rem;
	display: flex;
	flex-flow: row wrap;

	li {
		width: 2.3rem;
		height: 3.1rem;
		// padding 0.15rem 0 0 0.08rem
		padding-top: 0.15rem;
		margin-right: 0.15rem;
		margin-bottom: 0.4rem;
		position: relative;
	}

	li:nth-child(3n) {
		margin-right: 0;
	}

	.dish_content {
		height: 100%;
		background-color: #fff;
		border-bottom-left-radius: 0.07rem;
		border-bottom-right-radius: 0.07rem;
		overflow: hidden;
	}

	.dish_img_box {
		height: 1.64rem;
		overflow: hidden;
		position: relative;

		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
			background-color: #eee;
		}
	}

	.dish_info {
		height: calc(100% - 1.64rem);
		padding: 0.15rem 0.11rem 0;
	}

	.dish_name {
		font-size: 0.29rem;
		width: 100%;
		margin-bottom: 0.22rem;
		font-weight: 600;
	}

	.dish_price {
		font-size: 0.25rem;
		color: #666;
	}

	.mark_box {
		position: absolute;
		top: 0;
		left: 0;
		width: 1.1rem;
		height: 0.5rem;
		background: url('../../assets/text_mark/mark_02.png') left top no-repeat;
		background-size: 100%;
		padding-left: 0.14rem;

		.mark_text {
			font-size: 0.2rem;
			color: #fff;
			vertical-align: top;
			position: relative;
			top: 0.06rem;
		}
	}

	.ordered_count_mark {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0.05rem 0.15rem;
		background-color: #EC313D;
		// background-color: #ee0a24;
		// background-image linear-gradient(to top, #ff6034, #ee0a24)
		font-size: 0.25rem;
		border-radius: 0.2rem;
		color: #fff;
	}

	.dish_icon_box {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 0.5rem;
		width: 100%;
		// background-color #fff
		line-height: 0.2rem;
		padding-left: 0.11rem;

		.dish_icon {
			width: 0.3rem;
			height: 0.3rem;
			// vertical-align -0.02rem
			fill: currentColor;
			overflow: hidden;
			margin-right: 0;
		}
	}
}
</style>