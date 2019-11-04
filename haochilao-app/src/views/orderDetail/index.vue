<template>
	<my-page ref="myPage">
		<div class="order_detail">

			<div class="content_box">
				<div class="top_title">
					1号桌订单（6号）
				</div>
				<div class="order_time">
					2019-10-12 18:00
				</div>
				<div class="order_top_info">
					<div class="info_item">
						<span class="label">当前用餐</span>
						<span class="value">2人</span>
					</div>
				</div>
			</div>

      <div class="content_box">

				<div class="header tiny_line_bottom">
					<span class="title">已点菜品</span>
					<span class="mark_msg">已上齐</span>
				</div>

				<div class="dish_list">
					<div class="dish_item" v-for="(item, i) in orderDetail.dishList" :key="i">

						<div class="dish_img_box">
							<img v-lazy="item.dishImgUrl">
						</div>

						<div class="dish_name">
							{{ item.dishName }}
						</div>

						<div class="order_count">
							<span class="times_sign">x</span>
							<span class="count">{{ item.orderedCount }}</span>
						</div>

						<div class="price_box">
							<span class="rmb_sign">¥</span>
							<span class="price">{{ parseFloat(item.dishPrice) }}</span>
						</div>

					</div>
				</div>
				<div class="info_item">
					<span class="label">优惠</span>
					<span class="price_box">
						<span style="font-size: 0.35rem">-</span><span class="rmb_sign">¥</span>
						<span class="price">50</span>
					</span>
				</div>
				<div class="total_price_box">
					<span class="label">合计</span>
					<span class="rmb_sign">¥</span>
					<span class="total_price">280</span>
				</div>
			</div>

			<div class="content_box">
				<div class="top_info">
					
				</div>
			</div>

    </div>

		<template slot="fixed">
			<div>

				<GoBackBtn @click="goOrderListPage"/>

        <!-- 取消订单确认框 -->
        <!-- <ConfirmDialog 
          ref="ConfirmCancelOrderDialog" 
          contentText="您确定要取消订单吗？"
          confirmText="确定"
          cancelText="取消"
          @confirm="cancelOrder"/> -->

			</div>
		</template>
	</my-page>
</template>
<script>
import MyPage from "@/components/myPage";
import GoBackBtn from "@/components/goBackBtn";

import data from "@/data/order.js";

export default {
  name: "orderDetail",
	components: {
		MyPage,
		GoBackBtn
	},
	data() {
		return {
			orderDetail: {
				dishList:[]
			}
		};
	},
	created() {
		this.getOrderDetail();
	},
	methods: {
		 getOrderDetail() {
      setTimeout(() => {
        this.orderDetail = data.orderDetail;
        console.log('获取订单列表', this.orderDetail)
        // 获取到数据后，需要重置滑动容器
        this.$refs.myPage.rebuildScroll();
			}, 500);
    },
		goOrderListPage() {
			this.$router.replace('/orderList');
		}
	}
};
</script>
<style lang="stylus" scoped>
.order_detail {
	padding: 1rem 0.15rem;
	.content_box {
		border-radius: 0.08rem;
		overflow: hidden;
		margin-bottom: 0.15rem;
		background: #fff;
		position: relative;
		padding: 0.3rem;
		box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);
	}
	.header {
		display: flex;
		justify-content: space-between;
		position: relative;
		padding-bottom: 0.2rem;
		line-height: 0.38rem;
		.title {
			font-size: 0.28rem;
			color: #333;
			font-weight: 700;
		}
		.mark_msg {
			font-size: 0.28rem;
			color: #FA693D;
		}
	}

	.dish_list {
		padding: 0.15rem 0;
		.dish_item {
			height: 0.9rem;
			// background-color: green;
			display: flex;
			align-items: center;
			line-height: 0.3rem;
		}

		.dish_img_box {
			width: 0.7rem;
			height: 0.7rem;
			border-radius: 0.05rem;
			overflow: hidden;
			margin-right: 0.15rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.dish_name {
			width: 3.7rem;
			font-size: 0.28rem;
			margin-right: 0.15rem;
		}

		.order_count {
			width: 0.7rem;
			height: 100%;
			line-height: 0.45rem;
			.times_sign {
				font-size: 0.28rem;
				margin-right: 0.07rem;
				font-weight: 500;
			}
			.count {
				font-size: 0.28rem;
				font-weight: 500;
			}
		}
	}

	.price_box {
		flex: 1;
		height: 100%;
		line-height: 0.45rem;
		text-align: right;
		
		.price {
			font-size: 0.3rem;
			font-weight: 500;
		}
	}

	.rmb_sign {
		font-size: 0.24rem;
		margin-right: 0.02rem;
		font-weight: 500;
	}

	.top_title {
		font-size: 0.3rem;
		text-align: center;
		margin-bottom: 0.15rem;
		font-weight: 700;
	}

	.order_time {
		font-size: 0.24rem;
		color: #999;
		text-align: center;
		margin-bottom: 0.3rem;
	}

	// .order_top_info {
		
	// }
	.info_item {
		display: flex;
		justify-content: space-between;
		position: relative;
		padding-bottom: 0.2rem;
		line-height: 0.38rem;
		.label {
			font-size: 0.28rem;
			color: #333;
		}
		.value {
			font-size: 0.28rem;
			color: #666;
		}
		.price_box {
			height: 0.34rem;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			span{
				color: #FA693D;
			}
		}
	}
	.info_item:last-child {
		padding-bottom: 0;
	}

	.total_price_box {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 0.34rem;
		.label {
			font-size: 0.28rem;
			margin-right: 0.1rem;
		}
		.rmb_sign {
			line-height: 0.34rem;
		}
		.total_price {
			font-weight: 600;
			font-size: 0.35rem;
		}
	}
}
</style>