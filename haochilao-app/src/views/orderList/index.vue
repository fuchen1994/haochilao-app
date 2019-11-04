<template>
	<my-page ref="myPage">
		<div class="order_list">

			<div class="order_wrapper">
				<div
          v-for="(item, i) in orderList"
          :key="i" 
					@click="goOrderDetail(item)"
          class="order_item">
					<div class="order_header tiny_line_bottom">
						<div class="header_left">
							<div class="title">{{ item.isTakeOut ? '外卖送餐' : `${ item.tableNumber }号桌订单` }}</div>
							<div class="desc">{{ item.orderTime }}</div>
						</div>

						<div class="header_right">
							<div :class="[
								'status_text',
								{ success: item.status == 6 },
								{ cancel: item.status == 7 }
								]">{{ statusText(item.status) }}
							</div>
							<div class="num">{{ item.mealNumber }}号</div>
						</div>
					</div>

					<div class="order_body">
						<div class="dish_info_box">

							<span class="dish_msg">

                <span v-if="item.orderDishs.length >= 3">
                  <span v-for="(cell, j) in item.orderDishs.slice(0, 2)" :key="j" class="dish_name">{{ cell.dishName }}</span>等{{ item.orderDishs.length }}个菜
                </span>

                <span v-else>
                  <span v-for="(cell, j) in item.orderDishs" :key="j" class="dish_name">{{ cell.dishName }}</span>{{ item.orderDishs.length }}个菜
                </span>
                
              </span>

							<span class="order_price">
								<span class="rmb_icon">¥</span>
								<span class="price_blod">10025</span>.00
							</span>

						</div>
					</div>

					<div class="order_footer">

						<van-button 
							round 
							size="small" 
							v-if="item.status < 6"
							@click.stop="openConfirmCancelOrderDialog(item)">
							取消订单
						</van-button>

						<van-button 
							round 
							size="small" 
							v-if="item.status >= 6"
							@click.stop="deleteOrder(item)">
							删除订单
						</van-button>

						<van-button 
						v-if="item.status == 2 || item.status == 3"
						round 
						@click.stop="reminderOrder(item)"
						size="small">
							催单
						</van-button>

						<van-button 
						v-if="!item.isPayment && item.status < 6"
						round 
						size="small" 
						color="#FA693D">
							结算
						</van-button>

						<van-button 
							round 
							size="small" 
							v-if="item.status >= 6"
							@click.stop="repeatOrder(item)">
							再来一单
						</van-button>

					</div>
				</div>
			</div>

		</div>

		<template slot="fixed">
			<div>

				<GoBackBtn @click="goLastPage"/>

        <!-- 取消订单确认框 -->
        <ConfirmDialog 
          ref="ConfirmCancelOrderDialog" 
          contentText="您确定要取消订单吗？"
          confirmText="确定"
          cancelText="取消"
          @confirm="cancelOrder"/>

			</div>
		</template>
	</my-page>
</template>
<script>
import MyPage from "@/components/myPage";
import GoBackBtn from "@/components/goBackBtn";
import ConfirmDialog from "@/components/confirmDialog";

import data from "@/data/order.js";

export default {
	name: "orderList",
	components: {
		MyPage,
    GoBackBtn,
    ConfirmDialog
	},
	data() {
		return {
      orderList: [],
      statusTextObj: {
        1: '订单确认',
        2: '正在备餐',
        3: '正在出餐',
        4: '出餐完毕',
        5: '正在送餐',
        6: '已完成',
        7: '已取消'
			},
			currentOrderItem: null
    };
  },
  created() {
    this.getOrderList();
  },
	methods: {
		goLastPage() {
			this.$router.replace(this.$store.state.lastRouterPath);
		},
		// 催单
		reminderOrder(item) {
			console.log('催单', item)
		},
		goOrderDetail(item) {
			this.$router.replace("/orderDetail")
		},
		// 再来一单
		repeatOrder(item) {
			console.log('再来一单')
		},
		// 删除订单
		deleteOrder(item) {
			console.log('删除订单')
		},
		// 打开取消订单确认框
    openConfirmCancelOrderDialog(item) {
			this.currentOrderItem = item;
      this.$refs.ConfirmCancelOrderDialog.open();
		},
		// 确认取消订单
    cancelOrder() {
			console.log('取消了订单')
			if (this.currentOrderItem.status <= 2) {
				this.$toast('订单已取消')
			} else {
				this.$toast('很抱歉，厨房已经出餐了，此时无法取消订单，如需帮助，请联系本店服务员')
			}
    },
    statusText(status) {
      return this.statusTextObj[status];
    },
    getOrderList() {
      setTimeout(() => {
        this.orderList = data.orderList;
        console.log('获取订单列表', this.orderList)
        // 获取到数据后，需要重置滑动容器
        this.$refs.myPage.rebuildScroll();
			}, 500);
    }
  }
};
</script>
<style lang="stylus" scoped>
.order_list {
	padding: 1rem 0.15rem;

	.order_item {
		border-radius: 0.2rem;
		overflow: hidden;
		margin-bottom: 0.4rem;
		background: #fff;
		position: relative;
		padding: 0.3rem;
		box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);

		.order_header {
			position: relative;
			padding-bottom: 0.2rem;
			display: flex;
			justify-content: space-between;
			line-height: 0.38rem;
		}

		.header_left {
			width: 60%;

			.title {
				font-size: 0.28rem;
				font-weight: 500;
				color: #333;
				margin-bottom: 0.05rem;
			}

			.desc {
				font-size: 0.24rem;
				color: #999;
			}
		}

		.header_right {
			text-align: right;

			.status_text {
				font-size: 0.28rem;
				color: #FA693D;
				// color: #ee0a24;
				margin-bottom: 0.03rem;
			}

			.status_text.success {
				color: #ff976a;
			}

			.status_text.cancel {
				color: #999;
			}

			.num {
				font-size: 0.28rem;
				color: #666;
			}
		}

		.order_body {
			padding: 0.3rem 0;
		}

		.dish_info_box {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.dish_msg {
			width: 70%;
			font-size: 0.26rem;
			line-height: 0.32rem;
		}

		.order_price {
			font-size: 0.25rem;
			line-height: 0.32rem;
		}

		.price_blod {
			font-size: 0.32rem;
		}

		.rmb_icon {
			margin-right: 0.03rem;
		}

		.order_footer {
			// padding-top: 0.3rem;
			font-size: 0.25rem;
			display: flex;
			justify-content: flex-end;

			>>>.van-button+.van-button {
				margin-left: 0.15rem;
			}

      >>>.van-button {
        padding: 0;
        width: 1.3rem;
        height: 0.6rem;
        line-height: 0.6rem;
        // border-radius: 0.3rem;
        // overflow: hidden;
        // display: block;
        .van-button__text {
          font-size: 0.24rem;
          // border-radius: 0.3rem;
          // height: 100%;
			    // width: 100%;
          // line-height: 0.6rem;
        }
      }
		}
	}
  .dish_msg > span .dish_name {
    margin-right: 0.15rem;
  }
  .dish_msg > span .dish_name:last-child {
    margin-right: 0;
  }
}
</style>