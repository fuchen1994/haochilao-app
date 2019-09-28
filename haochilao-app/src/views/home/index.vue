<template>
  <div class="home-page">
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-in-love"></use>
    </svg> -->
    <div class="bg-cover"></div>

    <div class="page_wrapper" ref="homePageContent">

      <cube-scroll
        ref="scroll"
        :options="options"
        :scroll-events="['scroll', 'scroll-end']"
        @scroll="scrollHandler"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp">

        <div class="page_content">
        
          <!-- 顶部tab栏 -->
          <div class="tab-container">

            <div>
              <div class="tab-icon-box">
                <svg class="tab-icon" aria-hidden="true">
                  <use xlink:href="#icon-jilu"></use>
                </svg>
              </div>
              <div class="title">随便点</div>
            </div>

            <div>
              <div class="tab-icon-box">
                <svg class="tab-icon" aria-hidden="true">
                  <use xlink:href="#icon-remen"></use>
                </svg>
              </div>
              <div class="title">热销榜</div>
            </div>

            <div>
              <div class="tab-icon-box">
                <svg class="tab-icon" aria-hidden="true">
                  <use xlink:href="#icon-chakanlishi-default"></use>
                </svg>
              </div>
              <div class="title">点过的菜</div>
            </div>

            <div>
              <div class="tab-icon-box">
                <svg class="tab-icon" aria-hidden="true">
                  <use xlink:href="#icon-icon_canyin"></use>
                </svg>
              </div>
              <div class="title">服务铃</div>
            </div>

          </div>

          <div v-for="(item, i) in pageData" :key="i">

            <div class="recommend-container">
              <i class="separate-title-line"></i>
              <span class="title separate-title">{{ item.title }}</span>
              <i class="separate-title-line"></i>
            </div>

            <!-- <van-divider 
              :style="{ color: '#fc9153', borderColor: '#555', padding: '0 1.8rem' }">
              {{ item.title }}
            </van-divider> -->

            <!-- 横向滚动列表 -->
            <cube-scroll
              ref="horizontalScroll"
              v-if="item.bannerList"
              direction="horizontal"
              class="tab-wrapper">
          
              <ul class="tab-content" ref="tabContent">
                <li class="tab-item" v-for="(cell, j) in item.bannerList" :key="j" ref="tabItem">

                  <!-- 菜品主图 -->
                  <img v-lazy="cell.dishImgUrl" class="dish_img">

                  <!-- 菜品信息 -->
                  <div class="dish_info_box">

                    <div class="dish_title_box">
                      <span class="title_text">{{ cell.dishName }}</span>

                      <!-- <svg class="hot_dish_icon" aria-hidden="true" v-for="(one, q) in cell.praiseDegree" :key="q">
                        <use xlink:href="#icon-dianzan"></use>
                      </svg> -->

                      <van-icon 
                        name="good-job" 
                        color="#FFD31C" 
                        size="0.4rem" 
                        v-for="(one, q) in cell.praiseDegree" 
                        :key="q"
                      />

                    </div>
                    <div class="dish_price">
                      <span class="rmb_symbol">¥</span>{{ cell.dishPrice }}
                    </div>

                  </div>

                  <!-- 文字标签 -->
                  <div class="mark_box">
                    <!-- <img src="@/assets/text_mark/mark_01.png" alt="" class="mark_img">
                    <div class="mark_text_box"> -->
                      <svg class="award_icon" aria-hidden="true">
                        <use xlink:href="#icon-jiangzhang"></use>
                      </svg>
                      <span class="mark_text">本店招牌</span>
                    <!-- </div> -->
                  </div>
                  
                </li>
              </ul>
          
            </cube-scroll>

            <!-- 菜品列表 -->
            <div class="dish_list">
              <dish-list :dishList="item.dishs"></dish-list>
            </div>

          </div>
        
        </div>
      
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
        placeholder="请输入想要点的菜名">

      <!-- 搜索图标 -->
      <svg class="search_icon" aria-hidden="true" @click="searchDishes">
        <use xlink:href="#icon-icon-test"></use>
      </svg>

    </div>

    <!-- 导航按钮 -->
    <!-- <div class="navigation_btn">
      <span class="iconfont icon-917caidan_fenlei"></span>
      <div class="navigation_text"></div>
    </div> -->

    <!-- 导航按钮（带有点击效果） -->
    <div class="fixed_btn_box navigation_btn2">
      <van-button color="transparent" >
        <span class="iconfont icon-917caidan_fenlei"></span>
        <span class="navigation_text">导航</span>
      </van-button>
    </div>

    <!-- 购物车按钮 -->
    <div class="fixed_btn_box shopping_cart_btn">
      <van-button color="transparent" >

        <span class="iconfont icon-gouwuche1"></span>

        <!-- <svg class="shopping_cart_icon" aria-hidden="true">
          <use xlink:href="#icon-gouwuche4"></use>
        </svg> -->

        <span class="navigation_text">点菜单</span>

      </van-button>
    </div>

    <LeftPopupBar/>
    
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import DishList from '@/components/dishList'
import data from '@/data/dishList'
// import { delayAction } from '@/utils/common.js'
import { ease } from '@/utils/ease.js'
import { mapGetters, mapMutations } from 'vuex'
import LeftPopupBar from '@/components/leftPopupBar'

export default {
  name: 'home',
  components: {
    DishList,
    LeftPopupBar
  },
  data() {
    return {
      pageData: data.dishList,
      bannerList: [
        {
          dishName: '麻婆豆腐',
          dishImgUrl: require('@/assets/bg/bg-01.jpg'),
          dishPrice: '12.00',
          praiseDegree: 2
        },
        {
          dishName: '辣椒炒肉',
          dishImgUrl: require('@/assets/bg/bg-10.jpg'),
          dishPrice: '15.00',
          praiseDegree: 1
        },
        {
          dishName: '金牌叉烧饭',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '11.00',
          praiseDegree: 3
        },
        {
          dishName: '蒜香鸡汁块',
          dishImgUrl: require('@/assets/bg/bg-05.jpg'),
          dishPrice: '14.00',
          praiseDegree: 5
        },
      ],
      
      dishRecommendationList: [  // 菜品推荐列表
        {
          dishId: 1,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: false,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        { dishId: 2,
          markName: '本月新品',  // 标签名字
          orderedCount: 2,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 3,  // 好评度
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          dishId: 3,
          markName: '本店招牌',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: false,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '金牌牛肉饼',
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          dishId: 4,
          markName: '本月新品',  // 标签名字
          orderedCount: 12,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 5,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          dishId: 5,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: false,  // 是否是辣的
          praiseDegree: 1,  // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
          dishId: 6,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 7,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 8,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 9,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 10,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 11,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 12,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
        {
          dishId: 13,
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-06.jpg'),
          dishPrice: '13.00'
        },
      ],
      isSearchInputShow: false,  // 搜索栏输入框是否显示
      keywords: '',  // 搜索关键字
      searchOpacity: 0,  // 搜索框透明度
      searchDisplay: 'none',  // 搜索框是否显示
      scrollbar: true,
      scrollbarFade: true,
      // startY: 0,
      scrollToY: -200,
      scrollY: 0,  // 当前的页面滚动位置
      scrollToTime: 700,
      scrollToEasing: 'bounce',
      scrollToEasingOptions: [
        {
          text: 'bounce',
          value: 'bounce'
        },
        {
          text: 'swipe',
          value: 'swipe'
        },
        {
          text: 'swipeBounce',
          value: 'swipeBounce'
        }
      ],
      customPullDown: false,
      pullDownRefreshObj: {
        txt: '没有新的数据了~'
      },  // 下拉刷新页面
      pullUpLoadObj: false  // 上拉加载更多
    }
  },
  created() {
    
  },
  mounted() {
    if (this.home.pageScrollY) {
      this.scrollY = this.home.pageScrollY
      this.setSearchDisplay()
    }
  },
  computed: {
    ...mapGetters(['home', 'rootRemToPx']),
    options () {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        startY: -this.home.pageScrollY,
        scrollbar: {
          fade: true
        }
      }
    }
  },
  watch: {
    searchOpacity (newVal) {
      if (newVal > 0) {
        this.searchDisplay = 'block'
        // console.log('监听输入框显示')
      } else {
        // console.log('监听输入框隐藏')
        this.searchDisplay = 'none'
      }
    }
  },
  // scrollbarObj: {
  //   handler() {
  //     this.rebuildScroll()
  //   },
  //   deep: true
  // },
  // startY() {
  //   this.rebuildScroll()
  // },
  // beforeRouteEnter (to, from, next) {
  //   // 跳转回来的时候，回到原来的位置
  //   // console.log('跳转回来-to', to)
  //   // console.log('跳转回来-from', from)
  //   if (to.path === '/home') {
  //     next(vm => {
  //       // 通过 `vm` 访问组件实例
  //       vm.$nextTick(() => {
          
  //         // setTimeout(() => {
  //           let content = document.querySelector('.page_wrapper')
  //           var pageScrollY = vm.$store.state.pageScrollY

  //           console.log('跳回主页vuex-pageScrollY', pageScrollY)
  //           console.log('content', content)
  //           console.log('content-scrollTop', content.scrollTop)

  //           // content.scrollTop = pageScrollY
  //           // content.scroll(0, pageScrollY)

  //           console.log('content.scrollTop' , content.scrollTop)

  //         // }, 310) 
  //         // window.scroll(0, pageScrollY)
  //       })
        
  //     })
      
  //   }
  //   // next()
  // },
  // 离开路由时把页面位置存起来
  beforeRouteLeave(to, from, next) {
    console.log('离开时的scrollTop', this.scrollY)
    this.setPageScrollY(this.scrollY)
    next()
  },
  methods: {
    // 监听下拉页面滚动
    scrollHandler (pos) {
      // console.log('scroll', pos)
      this.scrollY = -pos.y
      this.setSearchDisplay()
    },
    // 设置搜索框的显示与隐藏
    setSearchDisplay () {
      let limitHeight = parseInt(1.6 * this.rootRemToPx)
      if (this.scrollY > limitHeight) {
        let disCount = this.scrollY - limitHeight
        if (disCount > 60) {
          this.searchOpacity = 1
        } else {
          this.searchOpacity = disCount / 60
        }
      } else {
        this.searchOpacity = 0
      }
    },
    rebuildScroll() {
      Vue.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    },
    scrollTo() {
      this.$refs.scroll.scrollTo(
        0,
        this.scrollToY,
        this.scrollToTime,
        ease[this.scrollToEasing]
      )
    },
    onPullingDown() {
      // 模拟更新数据
      console.log('触发了下拉刷新')
      setTimeout(() => {
        // if (Math.random() > 0.5) {
        //   // 如果有新数据
        //   // this.items.unshift(_foods[1])
        // } else {
        //   // 如果没有新数据
        //   this.$refs.scroll.forceUpdate()
        // }
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    onPullingUp() {
      console.log('触发了上拉加载更多')
      // 模拟更新数据
      // setTimeout(() => {
      //   if (Math.random() > 0.5) {
      //     // 如果有新数据
      //     let newPage = _foods.slice(0, 5)
      //     this.items = this.items.concat(newPage)
      //   } else {
      //     // 如果没有新数据
      //     this.$refs.scroll.forceUpdate()
      //   }
      // }, 1000)
    },
    // 点击搜索菜品按钮
    searchDishes () {
      if (this.isSearchInputShow) {
        this.isSearchInputShow = false
        // 调用搜索接口

      } else {
        this.isSearchInputShow = true
      }
    },
    ...mapMutations(['setPageScrollY'])
  }
}
</script>
<style lang="stylus" scoped>
  .home-page {
    // min-height 100vh

    .bg-cover {
      position fixed
      top 0
      right 0
      bottom 0
      left 0
      z-index -1
      background url('../../assets/bg/bg-10.jpg') center top no-repeat
      background-size cover
      filter blur(12px)
    }
    // 解决ios固定定位失效（输入框获取焦点之后）
    .page_wrapper {
      // height 100%
      // margin 0 auto
      position fixed
      // padding 0.4rem 0.15rem 0
      top 0
      left 0
      bottom 0
      right 0
      overflow-y scroll
      // width 100%
      // height auto
      -webkit-overflow-scrolling touch
      z-index 1
      >>>.cube-pulldown .cube-pulldown-loaded {
        font-size 0.3rem
      }
    }

    .page_content {
      padding 0.4rem 0.15rem 0
    }

    .tab-container {
      height 1.3rem
      background-color #ffffff
      border-radius 0.08rem
      display flex
      text-align center
      font-size 0.25rem
      overflow hidden
      // position relative
      // z-index 1000

      >div {
        padding-top 0.2rem
        width 25%
        border-right 1px solid #eeeeee
      }

      >div:last-child {
        border 0
      }

      .title {
        padding-top 0.07rem
      }
    }

    .tab-icon {
      width 0.5rem
      height 0.5rem
      vertical-align -0.15rem
      fill currentColor
      overflow hidden
      margin-right 0
    }

    .recommend-container {
      height 1.2rem
      display flex
      align-items center
      justify-content center
      .title {
        font-size 0.3rem
        margin 0 0.5rem
        color #333
      }

      .separate-title-line {
        height 1px
        width 1rem
        background-color #333
        transform scaleY(0.5)  // 比1px更细的线
      }
    }
    // 横向滑动banner
    .tab-wrapper {
      height 5rem
      width 100%
      overflow hidden
      margin-bottom 0.8rem
      >>>.cube-scroll-content {
        display inline-block
      }
      .tab-content {
        // display flex
        white-space nowrap
        height 100%
      }

      .tab-item {
        width 90vw
        // height 100%
        height 5rem
        // overflow hidden
        display inline-block
        margin-right 0.2rem
        vertical-align top
        position relative
        // padding 0.2rem 0 0 0.105rem
        padding-top 0.2rem
      }

      .tab-item:last-child {
        margin-right 0
      }

      .dish_img {
        width 100%
        height 100%
        object-fit cover
        border-radius 0.1rem
      }

      .dish_info_box {
        position absolute
        bottom 0
        left 0
        right 0
        // width calc(100% - 0.105rem)
        height 1.1rem
        background-color rgba(0, 0, 0, 0.3)
        display flex
        align-items center
        justify-content space-between
        padding 0 0.3rem
        border-bottom-left-radius 0.1rem
        border-bottom-right-radius 0.1rem
        z-index 1
      }

      .dish_title_box {
        font-size 0.35rem
        letter-spacing 0.05rem
        color #ffffff
        // font-weight bold
        >>>.van-icon {
          vertical-align -0.06rem
        }
        .title_text {
          font-weight 600
        }
      }

      .dish_price {
        font-size 0.32rem
        color #ffffff
      }

      .hot_dish_icon {
        width 0.4rem
        height 0.4rem
        vertical-align -0.08rem
        fill currentColor
        overflow hidden
        margin-right 0
      }

      .mark_box {
        position absolute
        top 0
        left 0
        height 1rem
        width 1.7rem
        background url('../../assets/text_mark/mark_02.png') left top no-repeat
        background-size 100%
        // line-height 0.02rem
        z-index 2
        padding-left 0.15rem
        // .mark_img {
        //   width 1.5rem
        //   vertical-align top
        // }
        // .mark_text_box {
        //   position absolute
        //   top 0
        //   left 0
        //   // height 100%
        //   // width 100%
        // }
        .award_icon {
          width 0.4rem
          height 0.4rem
          // vertical-align -0.08rem
          vertical-align top
          // line-height 0.55rem
          fill currentColor
          overflow hidden
          margin-right 0
          margin-top 0.02rem
        }
        .mark_text {
          font-size 0.22rem
          color #fff
          vertical-align top
          line-height 0.47rem
        }
      }
    }

    .dish_list {
      // padding-top 0.8rem
    }

    .rmb_symbol {
      margin-right 0.05rem
    }

    .search_btn {
      position fixed
      top 0.4rem
      right 0.4rem
      z-index 999
      min-width 0.9rem
      height 0.9rem
      border-radius 0.9rem
      background-color rgba(255, 255, 255, 0.9)
      box-shadow 0 0.08rem 0.1rem  rgba(0, 0, 0, 0.3)
      text-align center
      // line-height 0.9rem
      // padding 0 0.6rem 0 0.3rem
      padding-right 0.85rem
      // display flex  使用了display block,此属性被覆盖，失效
      // align-items center
      line-height 0.4rem
      overflow hidden

      .search_input {
        height 0.5rem
        border-radius 0.9rem
        outline none
        font-size 0.25rem
        border 0
        letter-spacing 0.02rem
        transition all 0.3s ease-out
        padding 0
        width 0
      }

      .input_change {
        width 3rem
        padding 0 0.1rem
        margin-left 0.3rem
      }

      .search_icon {
        position absolute
        top 50%
        transform translateY(-50%)
        right 0.14rem
        width 0.6rem
        height 0.6rem
        // vertical-align -0.1rem
        fill currentColor
        overflow hidden
      }
    }

    .navigation_btn {
      position fixed
      bottom 0.4rem
      left 0.4rem
      z-index 999
      width 1.2rem
      height 1.2rem
      border-radius 50%
      background-color rgba(255, 255, 255, 0.9)
      box-shadow 0 0.08rem 0.1rem  rgba(0, 0, 0, 0.3)
      overflow hidden
      display flex
      flex-flow column wrap
      justify-content center
      align-items center

      .iconfont {
        font-size 0.43rem
      }

      .navigation_text {
        padding-top 0.03rem
        font-size 0.22rem
      }
    }

    .fixed_btn_box {
      position fixed
      z-index 999
      width 1.2rem
      height 1.2rem
      border-radius 50%
      // background-color #fff
      box-shadow 0 0.08rem 0.1rem  rgba(0, 0, 0, 0.3)
      overflow hidden
    
      >>>.van-button {
        padding 0
        width 100%
        height 100%
        display block
        border-radius 50%

        .van-button__text {
          padding-top 0.05rem
          line-height 0.4rem
          display flex
          height 100%
          width 100%
          flex-flow column wrap
          justify-content center
          align-items center
          border-radius 50%
          user-select none
        }
      }

      .iconfont {
        font-size 0.43rem
      }

      .navigation_text {
        padding-top 0.03rem
        font-size 0.24rem
        letter-spacing 0.02rem
      }
    }

    .navigation_btn2 {
      bottom 0.4rem
      left 0.4rem
      background-color rgba(255, 255, 255, 0.9)

      >>>.van-button__text {
        color #333
      }
    }

    .shopping_cart_btn {
      bottom 0.4rem
      right 0.4rem
      background-color rgba(249, 64, 46, 0.9)
      // background-color rgba(227, 56, 24, 0.9)

      .iconfont {
        font-size 0.45rem
      }

      .shopping_cart_icon {
        width 0.4rem
        height 0.4rem
        // vertical-align -0.02rem
        fill currentColor
        overflow hidden
        margin-right 0
      }
    }

  }
</style>