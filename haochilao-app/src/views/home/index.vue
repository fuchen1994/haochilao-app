<template>
  <div class="home-page">
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-in-love"></use>
    </svg>-->
    <!-- 背景图 -->
    <img src="../../assets/bg/bg-09.jpg" class="bg_img" />

    <div class="scroll_wrapper" ref="homePageContent">
      <cube-scroll
        ref="scroll"
        :options="options"
        :scroll-events="['scroll', 'scroll-end']"
        @scroll="scrollHandler"
        @scroll-end="scrollEndHandler"
        @pulling-down="onPullingDown"
      >
        <!-- 通告栏 -->
        <!-- 在betterscroll下，使用框架组件或自定义组件，只要使用animation，就会导致整个页面滑动卡顿，不知是何原因，于是采用相对定位去写滚动，这种不会导致滑动卡顿 -->
        <!-- <div class="marquee_wrapper">
					<div class="marquee_box" ref="marqueeBox">
						<div ref="marqueeInner" class="marquee" :style="{
							paddingLeft: marqueePL + 'px',
							animationDuration: marqueeDuration + 'ms'
						}">
							今天有新菜推荐，酱板鸭好吃的不得了欢迎尝试试试！
						</div>
					</div>
        </div>-->

        <div class="marquee_wrapper" v-show="isMarqueeShow">
          <van-icon name="cross" color="#ed6a0c" size="0.29rem" @click="closeMarquee" />
          <div class="marquee_box" ref="marqueeBox">
            <span class="empty" ref="marqueeEmpty"></span>
            <div
              ref="marqueeInner"
              class="text"
              :style="{ left: -marqueeLeft + 'px' }"
            >今天有新菜推荐，酱板鸭好吃的不得了欢迎尝试吃，还有好多好吃的菜，请慢慢享用！</div>
          </div>
        </div>

        <!-- <div class="marquee_component">
					<van-notice-bar
						mode="closeable"
						text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
					/>
        </div>-->

        <div class="scroll_content">
          <!-- 顶部tab栏 -->
          <div class="tab-container">
            <van-button color="transparent">
              <div class="tab-icon-box">
                <svg class="tab-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan1" />
                </svg>
              </div>
              <div class="title">喜欢的菜</div>
            </van-button>

            <van-button color="transparent">
              <div class="tab-icon-box">
                <svg class="tab-icon" aria-hidden="true">
                  <use xlink:href="#icon-remen" />
                </svg>
              </div>
              <div class="title">热销榜</div>
            </van-button>

            <van-button color="transparent">
              <div class="tab-icon-box">
                <svg class="tab-icon" aria-hidden="true">
                  <use xlink:href="#icon-chakanlishi-default" />
                </svg>
              </div>
              <div class="title">点过的菜</div>
            </van-button>

            <van-button color="transparent">
              <div class="tab-icon-box">
                <svg class="tab-icon" aria-hidden="true">
                  <use xlink:href="#icon-icon_canyin" />
                </svg>
              </div>
              <div class="title">服务铃</div>
            </van-button>
          </div>

          <div v-for="(item, i) in pageData" :key="i" ref="listItem">
            <!-- 推荐标题 -->
            <!-- <div class="recommend-container">
							<i class="separate-title-line"></i>
							<span class="title separate-title"></span>
							<i class="separate-title-line"></i>
            </div>-->

            <div class="recommend_box">
              <div class="border">
                <span class="title">{{ item.title }}</span>
              </div>
            </div>

            <!-- <van-divider 
              :style="{ color: '#fc9153', borderColor: '#555', padding: '0 1.8rem' }">
              {{ item.title }}
            </van-divider>-->

            <!-- 横向滚动列表 -->
            <cube-scroll
              ref="horizontalScroll"
              v-if="item.bannerList"
              direction="horizontal"
              class="tab-wrapper"
            >
              <ul class="tab-content" ref="tabContent">
                <li class="tab-item" v-for="(cell, j) in item.bannerList" :key="j" ref="tabItem">
                  <!-- 菜品主图 -->
                  <img v-lazy="cell.dishImgUrl" class="dish_img" />

                  <!-- 菜品信息 -->
                  <div class="dish_info_box">
                    <div class="dish_title_box">
                      <span class="title_text">{{ cell.dishName }}</span>

                      <!-- <svg class="hot_dish_icon" aria-hidden="true" v-for="(one, q) in cell.praiseDegree" :key="q">
                        <use xlink:href="#icon-dianzan"></use>
                      </svg>-->

                      <van-icon
                        name="good-job"
                        color="#FFD31C"
                        size="0.4rem"
                        v-for="(one, q) in cell.praiseDegree"
                        :key="q"
                      />
                    </div>
                    <div class="dish_price">
                      <span class="rmb_symbol">¥</span>
                      {{ cell.dishPrice }}
                    </div>
                  </div>

                  <!-- 文字标签 -->
                  <div class="mark_box">
                    <!-- <img src="@/assets/text_mark/mark_01.png" alt="" class="mark_img">
                    <div class="mark_text_box">-->
                    <svg class="award_icon" aria-hidden="true">
                      <use xlink:href="#icon-jiangzhang" />
                    </svg>
                    <span class="mark_text">本店招牌</span>
                    <!-- </div> -->
                  </div>
                </li>
              </ul>
            </cube-scroll>

            <!-- 菜品列表 -->
            <div class="dish_list">
              <dish-list :dishList="item.dishs" @setDishDetailShow="setDishDetailShow"></dish-list>
            </div>
          </div>
        </div>

        <!-- 页尾图片 -->
        <page-bottom></page-bottom>
      </cube-scroll>
    </div>

    <!-- 搜索按钮 -->
    <div class="search_btn" :style="{ opacity: searchOpacity, display: searchDisplay }">
      <!-- 搜索关键字输入框 -->
      <input
        type="text"
        :class="['search_input', { input_change: isSearchInputShow }]"
        v-model="keywords"
        @blur="searchDishes"
        placeholder="请输入想要点的菜名"
      />

      <!-- 搜索图标 -->
      <svg class="search_icon" aria-hidden="true" @click="searchDishes">
        <use xlink:href="#icon-icon-test" />
      </svg>
    </div>

    <!-- 左侧分类导航 -->
    <LeftPopupBar
      :dishClassifyList="classifyList"
      :currentActiveIndex="currentActiveIndex"
      @labelChange="activeLabelChange"
    />

    <!-- 详情页 -->
    <transition name="page-move">
      <DishDetail
        v-show="isDishDetailShow"
        @setDishDetailShow="setDishDetailShow"
        @getPageData="getPageData"
      />
    </transition>
  </div>
</template>
<script>
let marqueeTimer;
import BScroll from "better-scroll";
import DishList from "@/components/dishList";
import LeftPopupBar from "@/components/leftPopupBar";
import PageBottom from "@/components/pageBottom";
import DishDetail from "../dishDetail";
import { mapGetters, mapMutations } from "vuex";
import { ease } from "@/utils/ease.js";

import data from "@/data/dish";
// import { delayAction } from '@/utils/common.js'

export default {
  name: "home",
  components: {
    DishList,
    LeftPopupBar,
    DishDetail,
    PageBottom
  },
  data() {
    return {
      pageData: [],
      classifyList: [], // 分类列表
      isSearchInputShow: false, // 搜索栏输入框是否显示
      keywords: "", // 搜索关键字
      searchOpacity: 0, // 搜索框透明度
      searchDisplay: "none", // 搜索框是否显示
      scrollToY: 0,
      scrollY: 0, // 当前的页面滚动位置
      scrollToTime: 700,
      scrollToEasing: "bounce",
      scrollToEasingOptions: [
        {
          text: "bounce",
          value: "bounce"
        },
        {
          text: "swipe",
          value: "swipe"
        },
        {
          text: "swipeBounce",
          value: "swipeBounce"
        }
      ],
      isDishDetailShow: false,
      leftActiveIndex: "", // 左侧导航选中项（子组件传过来的）
      currentViewIndex: "", // 当前显示的菜单项
      currentActiveIndex: "", // 当前滑动停止，显示的菜单项
      isJumping: false,
      scrollSpeed: 750,
      // marqueePL: 0,
      // marqueeDuration: 5000,
      marqueeLeft: 0,
      maxLeft: 0,
      isMarqueeShow: true // 是否显示通知
    };
  },
  created() {},
  mounted() {
    this.getPageData();
    this.rebuildScroll();
    // this.initMarquee();
    this.setMaxLeft();
    marqueeTimer = setInterval(this.setMarquee, 18);
    if (this.home.pageScrollY) {
      this.scrollY = this.home.pageScrollY;
      this.setSearchDisplay();
    }
  },
  beforeDestroy() {
    if (marqueeTimer) clearInterval(marqueeTimer);
  },
  computed: {
    ...mapGetters(["home", "rootRemToPx"]),
    options() {
      return {
        pullDownRefresh: false,
        pullUpLoad: false, // 上拉加载更多
        startY: -this.home.pageScrollY,
        scrollbar: {
          fade: true
        }
      };
    }
  },
  watch: {
    searchOpacity(newVal) {
      if (newVal > 0) {
        this.searchDisplay = "block";
      } else {
        this.searchDisplay = "none";
      }
    },
    leftActiveIndex(newVal) {
      this.jumpToArea(newVal);
    }
  },
  // 离开路由时把页面位置存起来
  beforeRouteLeave(to, from, next) {
    console.log("离开时的scrollTop", this.scrollY);
    this.setPageScrollY(this.scrollY);
    next();
  },
  methods: {
    closeMarquee() {
      this.isMarqueeShow = false;
    },
    setMarquee() {
      this.marqueeLeft++;
      if (this.marqueeLeft > this.maxLeft) {
        this.marqueeLeft = 0;
      }
    },
    setMaxLeft() {
      this.$nextTick(() => {
        let E_width = this.$refs.marqueeEmpty.offsetWidth;
        let M_width = this.$refs.marqueeInner.offsetWidth;
        this.maxLeft = E_width + M_width;
      });
    },
    initMarquee() {
      this.$nextTick(() => {
        let M_width = this.$refs.marqueeInner.offsetWidth;
        console.log("M_width", M_width);

        this.marqueePL = this.$refs.marqueeBox.offsetWidth;
      });
    },
    // 点击了左侧分类
    activeLabelChange(index) {
      this.isJumping = true;
      this.leftActiveIndex = index;
      this.currentViewIndex = index;
      this.currentActiveIndex = index;
    },
    // 跳到指定类别区域
    jumpToArea(index) {
      let items = this.$refs.listItem;
      let currentItem = items[index];
      // console.log(currentItem)
      this.$refs.scroll.scrollToElement(currentItem, this.scrollSpeed, 0, 0);
    },
    getIndex(item) {
      let index;
      this.classifyList.forEach((cell, i) => {
        if (cell === item) {
          index = i;
        }
      });
      return index;
    },
    // 显示详情
    setDishDetailShow(bool) {
      this.isDishDetailShow = bool;
    },
    // 获取页面数据
    getPageData() {
      if (this.scrollY) {
        this.setPageScrollY(this.scrollY);
      }
      setTimeout(() => {
        this.pageData = data.dishList;
        // 取出分类列表
        this.classifyList = this.pageData.map(item => item.title);
        // // 判断是否有滑动
        // if (this.home.leftActiveLabel) {
        //   this.leftActiveLabel = this.home.leftActiveLabel;
        // } else {
        //   this.leftActiveLabel = this.classifyList[0]
        // }
        // 获取到数据后，需要重置滑动容器
        this.rebuildScroll();
      }, 500);
    },
    // 监听下拉页面滚动
    scrollHandler(pos) {
      // console.log('scroll', pos)
      this.scrollY = -pos.y;
      this.setSearchDisplay();
    },
    // 设置搜索框的显示与隐藏
    setSearchDisplay() {
      let limitHeight = parseInt(1.6 * this.rootRemToPx);
      if (this.scrollY > limitHeight) {
        let disCount = this.scrollY - limitHeight;
        if (disCount > 60) {
          this.searchOpacity = 1;
        } else {
          this.searchOpacity = disCount / 60;
        }
      } else {
        this.searchOpacity = 0;
      }
    },
    rebuildScroll() {
      this.$nextTick(() => {
        this.$refs.scroll.destroy();
        this.$refs.scroll.initScroll();
      });
    },
    scrollTo() {
      this.$refs.scroll.scrollTo(
        0,
        this.scrollToY,
        this.scrollToTime,
        ease[this.scrollToEasing]
      );
    },
    scrollEndHandler() {
      console.log("触发了scrollEnd");
      if (this.isJumping) {
        this.isJumping = false;
        return;
      }
      let items = this.$refs.listItem;
      let index = this.leftActiveIndex;
      let currentItem = items[index];

      // 不能使用forEach，会报错，因为这是一个类数组
      let top = 0;
      let currentIndex = 0;
      for (let key in items) {
        if (top < this.scrollY) {
          top += items[key].offsetHeight;
          currentIndex = parseInt(key);
        }
      }
      console.log("currentIndex111111111----", currentIndex);
      console.log("top110", top);
      console.log("this.scrollY", this.scrollY);

      this.currentActiveIndex = currentIndex;
    },
    onPullingDown() {
      console.log("触发了下拉刷新");
      // 模拟更新数据
      setTimeout(() => {
        // if (Math.random() > 0.5) {
        //   // 如果有新数据
        //   // this.items.unshift(_foods[1])
        // } else {
        //   // 如果没有新数据
        //   this.$refs.scroll.forceUpdate()
        // }
        this.$refs.scroll.forceUpdate();
      }, 1000);
    },
    // 点击搜索菜品按钮
    searchDishes() {
      if (this.isSearchInputShow) {
        this.isSearchInputShow = false;
        // 调用搜索接口
        this.getPageData();
      } else {
        this.isSearchInputShow = true;
      }
    },
    ...mapMutations(["setPageScrollY"])
  }
};
</script>
<style lang="stylus" scoped>
.home-page {
  // min-height 100vh
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  // .bg-cover {
  // position: fixed;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  // z-index: -1;
  // background: url('../../assets/bg/bg-10.jpg') center top no-repeat;
  // background-size: cover;
  // filter: blur(12px);
  // }
  .bg_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(12px);
  }

  // 解决ios固定定位失效（输入框获取焦点之后）
  .scroll_wrapper {
    // height 100%
    // margin 0 auto
    position: absolute;
    // padding 0.4rem 0.15rem 0
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    // overflow-y: scroll;
    // width 100%
    // height auto
    // -webkit-overflow-scrolling: touch;
    z-index: 2;

    >>>.cube-pulldown .cube-pulldown-loaded {
      font-size: 0.3rem;
    }
  }

  .scroll_content {
    padding: 0.4rem 0.15rem 0;
    position: relative;
  }

  .tab-container {
    height: 1.3rem;
    background-color: #ffffff;
    border-radius: 0.08rem;
    box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);
    display: flex;
    text-align: center;
    overflow: hidden;
    margin-bottom: 0.15rem;

    >>>.van-button {
      padding: 0;
      width: 25%;
      height: 100%;
      display: block;

      // border-right: 1px solid #eeeeee;
      .van-button__text {
        padding-top: 0.11rem;
        line-height: 0.4rem;
        display: flex;
        height: 100%;
        width: 100%;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        user-select: none;
      }
    }

    >div:last-child {
      border: 0;
    }

    .title {
      padding-top: 0.07rem;
      color: #333;
      font-size: 0.25rem;
    }
  }

  .tab-icon {
    width: 0.5rem;
    height: 0.5rem;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
    margin-right: 0;
  }

  .recommend-container {
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 0.3rem;
      margin: 0 0.5rem;
      color: #333;
    }

    .separate-title-line {
      height: 1px;
      width: 1rem;
      background-color: #333;
      transform: scaleY(0.5); // 比1px更细的线
    }
  }

  .recommend_box {
    height: 1.5rem;

    .border {
      height: 100%;
      width: 2.5rem;
      margin: 0 auto;
      background: url('../../assets/border/text_border2.png') center top no-repeat;
      background-size: 100%;
      padding-left: 0.35rem;
      padding-top: 0.07rem;
      text-align: center;
    }

    .title {
      font-size: 0.3rem;
      color: #a44d1f;
    }
  }

  // 横向滑动banner
  .tab-wrapper {
    height: 5rem;
    width: 100%;
    overflow: hidden;
    margin-bottom: 0.8rem;

    >>>.cube-scroll-content {
      display: inline-block;
    }

    .tab-content {
      // display flex
      white-space: nowrap;
      height: 100%;
    }

    .tab-item {
      width: 90vw;
      // height 100%
      height: 5rem;
      // overflow hidden
      display: inline-block;
      margin-right: 0.2rem;
      vertical-align: top;
      position: relative;
      // padding 0.2rem 0 0 0.105rem
      padding-top: 0.2rem;
    }

    .tab-item:last-child {
      margin-right: 0;
    }

    .dish_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.1rem;
      box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);
    }

    .dish_info_box {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      // width calc(100% - 0.105rem)
      height: 1.1rem;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.3rem;
      border-bottom-left-radius: 0.1rem;
      border-bottom-right-radius: 0.1rem;
      z-index: 3;
    }

    .dish_title_box {
      font-size: 0.35rem;
      letter-spacing: 0.05rem;
      color: #ffffff;

      // font-weight bold
      >>>.van-icon {
        vertical-align: -0.06rem;
      }

      .title_text {
        font-weight: 600;
      }
    }

    .dish_price {
      font-size: 0.32rem;
      color: #ffffff;
    }

    .hot_dish_icon {
      width: 0.4rem;
      height: 0.4rem;
      vertical-align: -0.08rem;
      fill: currentColor;
      overflow: hidden;
      margin-right: 0;
    }

    .mark_box {
      position: absolute;
      top: 0;
      left: 0;
      height: 1rem;
      width: 1.7rem;
      background: url('../../assets/text_mark/mark_02.png') left top no-repeat;
      background-size: 100%;
      // line-height 0.02rem
      z-index: 4;
      padding-left: 0.15rem;

      // .mark_img {
      // width 1.5rem
      // vertical-align top
      // }
      // .mark_text_box {
      // position absolute
      // top 0
      // left 0
      // // height 100%
      // // width 100%
      // }
      .award_icon {
        width: 0.4rem;
        height: 0.4rem;
        // vertical-align -0.08rem
        vertical-align: top;
        // line-height 0.55rem
        fill: currentColor;
        overflow: hidden;
        margin-right: 0;
        margin-top: 0.02rem;
      }

      .mark_text {
        font-size: 0.22rem;
        color: #fff;
        vertical-align: top;
        line-height: 0.47rem;
      }
    }
  }

  .dish_list {
    // padding-top 0.8rem
  }

  .rmb_symbol {
    margin-right: 0.05rem;
  }

  .search_btn {
    position: fixed;
    top: 0.4rem;
    right: 0.4rem;
    z-index: 100;
    min-width: 0.9rem;
    height: 0.9rem;
    border-radius: 0.9rem;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0.08rem 0.1rem rgba(0, 0, 0, 0.3);
    text-align: center;
    // line-height 0.9rem
    // padding 0 0.6rem 0 0.3rem
    padding-right: 0.85rem;
    // display flex  使用了display block,此属性被覆盖，失效
    // align-items center
    line-height: 0.4rem;
    overflow: hidden;

    .search_input {
      height: 0.5rem;
      border-radius: 0.9rem;
      outline: none;
      font-size: 0.25rem;
      border: 0;
      letter-spacing: 0.02rem;
      transition: all 0.3s ease-out;
      padding: 0;
      width: 0;
    }

    .input_change {
      width: 3rem;
      padding: 0 0.1rem;
      margin-left: 0.3rem;
    }

    .search_icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.14rem;
      width: 0.6rem;
      height: 0.6rem;
      // vertical-align -0.1rem
      fill: currentColor;
      overflow: hidden;
    }
  }
}

// @keyframes marquee {
// 0%  { transform: translateX(0); }
// 100% { transform: translateX(-100%);}
// }
.marquee_wrapper {
  width: 100%;
  padding: 0.22rem 0.7rem 0.2rem 0.15rem;
  background-color: #fffbe8;
  font-size: 0.28rem;
  position: relative;

  >>>.van-icon-cross {
    position: absolute;
    top: 0.2rem;
    right: 0.25rem;
  }
}

.marquee_box {
  width: 100%;
  height: 0.32rem;
  overflow: hidden;
  white-space: nowrap;

  .text {
    display: inline-block;
    position: relative;
    top: 0.02rem;
    color: #ed6a0c;
  }

  .empty {
    display: inline-block;
    width: 100%;
  }
}
</style>