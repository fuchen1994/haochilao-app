<template>
  <div class="dish_detail_container">
    <div class="fixed_btn go_back_btn" @click="goBack">
      <span class="iconfont icon-jiantou2"></span>
      <span class="text">返回</span>
    </div>

    <cube-scroll class="dish_detail_wrapper">

      <div class="page_content">
        <van-swipe :autoplay="3000" :height="swiperHeight" indicator-color="#fff">
          <van-swipe-item v-for="(image, index) in detailInfo.dishImages" :key="index">
            <img v-lazy="image" class="dish_img" />
          </van-swipe-item>
        </van-swipe>

        <div class="love_btn" @click="loveBtn">
          <span class="iconfont icon-dianzan2" v-show="!isLove"></span>
          <span class="iconfont icon-dianzan1" v-show="isLove"></span>
          <span class="iconfont icon-dianzan1 love_animation" v-show="isLove"></span>
          <span>喜欢</span>
        </div>

        <div class="dish_info_box">
          <div class="dish_name">
            <span class="name">{{ detailInfo.dishName }}</span>
            <span class="mark_box">{{ detailInfo.markName }}</span>
          </div>

          <div class="sale_count_box">
            <span>月售{{ detailInfo.monthSaleCount }}份</span>
            <span>有{{ detailInfo.lovers }}人喜欢</span>
            <div class="praiseDegree_box">
              <!-- <svg class="praiseDegree_icon" aria-hidden="true" v-for="(cell, j) in detailInfo.praiseDegree" :key="j">
                <use xlink:href="#icon-dianzan" />
              </svg>-->

              <van-icon
                name="good-job"
                color="#FFD31C"
                size="0.3rem"
                v-for="(cell, j) in detailInfo.praiseDegree"
                :key="j"
              />
            </div>
          </div>

          <div class="dish_price_box">
            <span class="price">¥ {{ detailInfo.dishPrice }}/份</span>
            <span class="origin_price">¥{{ detailInfo.originPrice }}</span>
            <span class="discount">{{ discountNumber }}折</span>
            <span class="remind">每单限{{ detailInfo.discountsCount }}份优惠</span>
          </div>

          <div class="taste">
            <span>口味：</span>
            {{ detailInfo.taste }}
          </div>

          <div class="introduction">
            <span>介绍：</span> 夏季时热的一道菜，清爽可口。夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口夏季时热的一道菜，清爽可口。
          </div>

          <div class="material">
            <span>主要原料：</span>
            <span>{{ detailInfo.foodMaterial }}</span>
          </div>
        </div>
      </div>

    </cube-scroll>

    <div class="tab_bottom">
      <div class="count_box">
        <span class="count_text">数量</span>
        <van-stepper
          v-model="detailInfo.orderedCount"
          min="1"
          :input-width="stepperInputWidth"
          :button-size="stepperButtonSize"
          integer
        />
      </div>

      <van-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        :loading="isShoppingCartBtnLoading"
        loading-text="添加中..."
        round
        @click="addShoppingCart"
        type="info"
      >
        加入点菜单
      </van-button>
    </div>

  </div>
</template>
<script>
export default {
	name: "dishDetail",
	data() {
		return {
			isLoading: false, // 下拉刷新
			isShoppingCartBtnLoading: false, // 添加点餐单按钮的加载状态
			detailInfo: {
				id: 1,
				dishImages: [
					require("@/assets/bg/bg-07.jpg"),
					require("@/assets/bg/bg-08.jpg"),
					require("@/assets/bg/bg-09.jpg")
				],
				dishName: "香干肉丝饭",
				dishPrice: "20.00",
				praiseDegree: 5, // 好评度
				markName: "本月新品", // 标签名字
				orderedCount: 5, // 已点数量
				isSpicy: true, // 是否是辣的
				monthSaleCount: 150, // 月销售数量
				originPrice: "30.22", // 原价
				discountsCount: 1, // 每单优惠的数量
				foodMaterial: "香干，猪肉", // 食物原料
				lovers: 20, // 喜欢的人数
				taste: "偏辣", // 口味
				isSellOut: false // 是否卖完
			},
			isLove: false
		};
	},
	computed: {
		rootRemToPx() {
			let fontSize = document.documentElement.style.fontSize;
			return parseFloat(fontSize);
		},
		swiperHeight() {
			let height = 7.5;
			return this.rootRemToPx * height;
		},
		stepperInputWidth() {
			let width = 0.8;
			return this.rootRemToPx * width;
		},
		stepperButtonSize() {
			let size = 0.8;
			return this.rootRemToPx * size;
		},
		// 折扣
		discountNumber() {
			let dishPrice = Number(this.detailInfo.dishPrice);
			let originPrice = Number(this.detailInfo.originPrice);
			if (dishPrice && originPrice) {
				return ((dishPrice * 10) / originPrice).toFixed(1);
			}
		}
	},
	methods: {

		addShoppingCart() {
			console.log("添加购物车");
      this.isShoppingCartBtnLoading = true;
      
			setTimeout(() => {
        this.isShoppingCartBtnLoading = false;

				// this.$toast({
        //   type: 'success',
        //   message: '添加成功',
        //   duration: 1100
				// });
				
				this.$notify({
					type: 'primary',
					message: '添加成功',
					background: '#fe6464',
					color: '#fffbe8'
				});
				this.goBack();

        // setTimeout(() => {
        //   this.goBack();
        // }, 1000)

        // 更新列表数据
        this.$emit('getPageData');
			}, 1000);
		},
		loveBtn() {
			if (this.isLove) {
				this.isLove = false;
			} else {
				this.isLove = true;
			}
		},
		goBack() {
      // this.$router.go(-1);
      this.$emit('setDishDetailShow', false)
		}
	}
};
</script>
<style lang="stylus" scoped>
@keyframes love_fade {
	0% {
		opacity: 1;
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(2);
	}
}

.dish_detail_container {
	background-color: #ffffff;
	// padding-bottom: 1.1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 300;
  overflow: hidden;

  .dish_detail_wrapper {
    height: calc(100% - 1.1rem)
    width: 100%;
    overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
  }

	.page_content {
		position: relative;
	}

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

	.love_btn {
		position: absolute;
		top: 6.7rem;
		right: 0.2rem;
		width: 1.4rem;
		height: 0.6rem;
		border-radius: 0.5rem;
		background-color: rgba(0, 0, 0, 0.3);
		color: #fff;
		font-size: 0.3rem;
		display: flex;
		justify-content: flex-end;
		padding-right: 0.22rem;
		align-items: center;
		z-index: 301;

		.iconfont {
			margin-right: 0.05rem;
		}

		.iconfont.icon-dianzan1 {
			color: #EC313D;
			font-size: 0.4rem;
			margin-right: 0;
		}

		.love_animation {
			position: absolute;
			top: 0.08rem;
			left: 0.18rem;
			animation: love_fade 0.5s ease-in-out;
			animation-fill-mode: both;
		}
	}

	>>>.van-swipe-item .dish_img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.dish_info_box {
		padding: 0.3rem 0.2rem;

		.dish_name {
			margin-bottom: 0.1rem;
			display: flex;
			align-items: center;

			.name {
				font-size: 0.4rem;
				font-weight: 600;
				letter-spacing: 0.02rem;
			}

			.mark_box {
				display: inline-block;
				font-size: 0.22rem;
				color: #fff;
				// border 1px solid #F3D3CC
				padding: 0.05rem 0.06rem 0.03rem;
				// background-color #E92121
				// margin-left: 0.1rem;
				background-color: #F42B2A;
				// background-color #FF9B19
				// box-shadow: 0.02rem 0.05rem 0.1rem #F42B2A;
				position: relative;
				top: -0.25rem;
				right: -0.05rem;
			}
		}

		.sale_count_box {
			font-size: 0.24rem;
			margin-bottom: 0.1rem;
			color: #666;

			span+span {
				margin-left: 0.1rem;
			}
		}

		.dish_price_box {
			margin-bottom: 0.2rem;
			height: 0.5rem;
			display: flex;
			align-items: flex-end;
			vertical-align: bottom;

			.price {
				color: #EC6045;
				font-size: 0.35rem;
				margin-right: 0.15rem;
			}

			.price~span {
				margin-right: 0.1rem;
			}

			.origin_price {
				font-size: 0.28rem;
				color: #999999;
				text-decoration: line-through;
			}

			.discount {
				display: inline-block;
				font-size: 0.22rem;
				color: #DB6D58;
				border: 1px solid #F3D3CC;
				padding: 0 0.04rem;
			}

			.remind {
				font-size: 0.22rem;
				color: #E07A76;
			}
		}

		.taste, .introduction, .material {
			color: #666666;
			font-size: 0.28rem;
			line-height: 0.32rem;
			margin-bottom: 0.2rem;
		}
	}

	.praiseDegree_box {
		float: right;
		transform: translateY(-0.07rem);
	}

	.praiseDegree_icon {
		width: 0.3rem;
		height: 0.3rem;
		// vertical-align -0.02rem
		fill: currentColor;
		overflow: hidden;
		margin-right: 0;
	}

	.tab_bottom {
		border-top: 1px solid #f2f2f2;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1.1rem;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.2rem;
		z-index: 302;

		.count_box {
			display: flex;
		}

		.count_text {
			font-size: 0.28rem;
			margin-right: 0.2rem;
			line-height: 0.8rem;
		}

		>>>.van-stepper__minus, >>>.van-stepper__plus {
			color: #EC313D;
		}

		>>>.van-stepper__minus--disabled, >>>.van-stepper__plus--disabled {
			color: #c8c9cc !important;
			background-color: #f7f8fa;
		}

		>>>.van-button {
			width: 2rem;
			height: 0.8rem;
			line-height: 0.8rem;
			padding: 0;
			text-align: center;
			font-size: 0.28rem;
		}
	}
}
</style>