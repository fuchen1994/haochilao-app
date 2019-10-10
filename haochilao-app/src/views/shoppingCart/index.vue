<template>
  <my-page ref="myPage">
    <div class="shopping_cart">

      <div class="cart_list">
        <div class="border_title">点菜单</div>

        <div class="cart_list_top"></div>

        <div class="cart_list_body">

          <!-- 备注 -->
          <div class="people_count_box">

            <div class="people_count_content">
              <div class="people_count_text">当前用餐：2人</div>
              <div class="remark">备注：无</div>
            </div>

            <svg class="icon" aria-hidden="true" @click="editPeople">
              <use xlink:href="#icon-bianji"></use>
            </svg>

          </div>

          <!-- 列表 -->
          <ul class="dish_list">
            <li class="list_item" v-for="(item, i) in cartList" :key="i">

              <i class="iconfont icon-guanbi"></i>

              <div class="dish_img_box">
                <img :src="item.dishImgUrl">
              </div>

              <div class="item_info">

                <div class="title_box">
                  <span class="title_text text_over_hidden">{{ item.dishName }}</span>
                </div>

                <div class="bottom_info">

                  <div class="bottom_info_box">
                    <div class="price">
                      <span class="rmb_icon">¥</span>{{ item.dishPrice }}
                    </div>
                    <div class="order_people text_over_hidden">
                      点餐人：{{ item.orderPeople }}
                    </div>
                  </div>

                  <div>
                    <van-stepper
                      v-model="item.orderedCount"
                      min="1"
                      :input-width="stepperInputWidth"
                      :button-size="stepperButtonSize"
                      integer
                    />
                  </div>

                </div>

              </div>
            </li>
          </ul>

          <!-- 结算 -->
          <div class="account">
            一共6道菜，<span class="total_price">合计：<span class="rmb_icon">¥</span>562.00</span>
          </div>

        </div>

        <div class="cart_list_bottom"></div>

      </div>

      <div class="recommend_list">
        <dish-list :dishList="recommendList" @setDishDetailShow="setDishDetailShow"></dish-list>
      </div>

      <!-- 页尾图片 -->
      <PageBottom />

    </div>
    <template slot="fixed">
      <div>
        <!-- 详情页 -->
        <transition name="page-move">
          <DishDetail 
            v-show="isDishDetailShow" 
            @setDishDetailShow="setDishDetailShow" 
            @getPageData="getCartList"/>
        </transition>
        <!-- 编辑人数和备注 -->
        <EditPeopleCount ref="EditPeopleCount"/>
      </div>
    </template>
  </my-page>
</template>
<script>
import MyPage from '@/components/myPage'
import DishList from "@/components/dishList";
import DishDetail from '../dishDetail';
import EditPeopleCount from './components/editPeopleCount';
import PageBottom from "@/components/pageBottom";

import data from "@/data/dish";

export default {
  components: {
    MyPage,
    DishList,
    DishDetail,
    PageBottom,
    EditPeopleCount
  },
  data() {
    return {
      value: 4,
      cartList: [],
      recommendList: [],  // 推荐列表
      isDishDetailShow: false
    }
  },
  mounted() {
    this.getCartList();
    this.getRecommendList();
  },
  computed: {
    stepperInputWidth() {
			let width = 0.7;
			return this.rootRemToPx * width;
		},
		stepperButtonSize() {
			let size = 0.7;
			return this.rootRemToPx * size;
    },
    rootRemToPx() {
      return this.$store.state.rootRemToPx;
    }
  },
  methods: {
    editPeople() {
      this.$refs.EditPeopleCount.openDialog();
    },
    goHomePage() {
      this.$router.push('/home');
    },
    // 显示详情
    setDishDetailShow(bool) {
      this.isDishDetailShow = bool
    },
    getCartList() {
      setTimeout(() => {
				this.cartList = data.cartList;
				// 获取到数据后，需要重置滑动容器
				this.$refs.myPage.rebuildScroll();
			}, 500);
    },
    getRecommendList() {
      setTimeout(() => {
				this.recommendList = data.dishList[0].dishs.slice(0, 5);
				
			}, 500);
    }
  }
}
</script>
<style lang="stylus" scoped>
  .shopping_cart {
    padding-top: 0.8rem;
    .cart_list {
      position: relative;
    }
    .border_title {
      position: absolute;
      top: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 3.6rem;
      height: 1.3rem;
      line-height: 1.3rem;
      background: url('../../assets/border/border-title2.png') center top no-repeat;
      background-size: 100%;
      font-size: 0.4rem;
      color: #fff;
      text-align: center;
      // font-weight: 600;
      letter-spacing: 0.05rem;
    }
    .cart_list_top {
      height: 0.9rem;
      background: url('../../assets/border/border1-top.png') center top no-repeat;
      background-size: 100%;
    }
    .cart_list_body {
      // height: 2rem;
      background: url('../../assets/border/border1-body.png') center top no-repeat;
      background-size: 100% 100%;
      padding: 0 0.6rem;
      margin-bottom: -1px;
    }
    .cart_list_bottom {
      height: 0.8rem;
      background: url('../../assets/border/border1-bottom.png') center top no-repeat;
      background-size: 100%;
      background-position: 0 -0.1rem;
    }

    .people_count_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.15rem;
      // padding:0 0.3rem;
      // height: 0.5rem;
      // background-color: rgba(255, 255, 255, 0.3);
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        vertical-align: -0.8rem;
        fill: currentColor;
        overflow: hidden;
        margin-right: 0;
        margin-left: 0.15rem;
      }
      .remark {
        font-size: 0.27rem;
        color: #666;
        line-height: 0.35rem;
      }
      .edit {
        width: 1rem;
        font-size: 0.22rem;
      }
    }

    .people_count_content {
      flex: 1;
    }

    .people_count_text {
      font-size: 0.27rem;
      color: #A44D1F;
      margin-bottom: 0.15rem;
    }

    .dish_list {
      li.list_item:last-child {
        margin-bottom: 0;
      }

    }

    .list_item {
      height: 2rem;
      display: flex;
      align-items: center;
      // padding-top: 0.1rem;
      padding: 0 0.15rem;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 0.12rem;
      position: relative;
      margin-bottom: 0.2rem;
      .dish_img_box {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 0.15rem;
        overflow: hidden;
        margin-right: 0.15rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .item_info {
        // width: clac(100% - 1.35rem);
        flex: 1;
        // width: 75%;
        padding-top: 0.06rem;
      }
      .title_box {
        font-size: 0.3rem;
        letter-spacing: 0.02rem;
        line-height: 0.34rem;
        margin-bottom: 0.1rem;
        // width: 100%;
        display: flex;
      }
      .title_text {
        max-width: 4rem;
        color: #666;
        font-weight: 600;
      }
      .icon-guanbi {
        color: #999;
        font-size: 0.3rem;
        position: absolute;
        top: 0.15rem;
        right: 0.15rem;
      }
      .bottom_info {
        display: flex;
        justify-content: space-between;
      }
      .bottom_info_box {
        max-width: 2.25rem;
      }
      .price {
        color: #EC6045;
        font-size: 0.3rem;
        margin-bottom: 0.1rem;
      }
      .order_people {
        font-size: 0.28rem;
        color: #999;
      }
    }

    >>>.van-stepper__minus, >>>.van-stepper__plus {
			color: #EC313D;
		}

		>>>.van-stepper__minus--disabled, >>>.van-stepper__plus--disabled {
			color: #c8c9cc !important;
			background-color: #f7f8fa;
		}

    .rmb_icon {
      margin-right: 0.04rem;
    }

    .account {
      padding:0.3rem;
      font-size: 0.27rem;
      color: #666;
      line-height: 0.35rem;
    }
    .total_price {
      font-size: 0.3rem;
      color: #EC6045;
    }

    .recommend_list {
      padding: 0.15rem 0.15rem 0;
    }
  }

</style>