<template>
  <div class="home-page">
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-in-love"></use>
    </svg> -->
    <div class="bg-cover"></div>

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

    <!-- <div class="recommend-container">
      <i class="separate-title-line"></i>
      <span class="title separate-title">店家推荐</span>
      <i class="separate-title-line"></i>
    </div> -->

    <van-divider 
      :style="{ color: '#333', borderColor: '#555', padding: '0 1.8rem' }">
      店家推荐
    </van-divider>

    <!-- 横向滚动 -->
    <div class="tab-wrapper" ref="tabWrapper">
      <ul class="tab-content" ref="tabContent">
        <li class="tab-item" v-for="(item, i) in bannerList" :key="i" ref="tabItem">

          <!-- 菜品主图 -->
          <img :src="item.dishImgUrl" class="dish_img">

          <!-- 菜品信息 -->
          <div class="dish_info_box">

            <div class="dish_title">
              {{ item.dishName }}
              <svg class="hot_dish_icon" aria-hidden="true" v-for="(cell, j) in item.praiseDegree" :key="j">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
            </div>
            <div class="dish_price">
              <span class="rmb_symbol">¥</span>{{ item.dishPrice }}
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
    </div>

    <ul class="dish_list_container">
      <li v-for="(item, i) in dishRecommendationList" :key="i">
        <div class="dish_content">

          <!-- 上部分 -->
          <div class="dish_img_box">
            <!-- 菜图 -->
            <img :src="item.dishImgUrl" >

            <!-- 辣椒图标,好评度图标 -->
            <div class="dish_icon_box">

              <svg class="dish_icon" aria-hidden="true" v-if="item.isSpicy">
                <use xlink:href="#icon-lajiao"></use>
              </svg>

              <svg class="dish_icon" aria-hidden="true" v-for="(cell, j) in item.praiseDegree" :key="j">
                <use xlink:href="#icon-dianzan"></use>
              </svg>

            </div>

          </div>

          <!-- 下部分 -->
          <div class="dish_info">
            <div class="dish_name text_over_hidden">
              {{ item.dishName }}
            </div>
            <div class="dish_price">
              <span class="rmb_symbol">¥</span>{{ item.dishPrice }}  
            </div>
          </div>

        </div>

        <!-- 热门标签 -->
        <div class="mark_box">
          <span class="mark_text">{{ item.markName }}</span>
        </div>

        <!-- 角标（已点的数量） -->
        <span class="ordered_count_mark" v-if="Number(item.orderedCount)">
          {{ item.orderedCount }}
        </span>

      </li>

    </ul>

    <!-- 搜索按钮 -->
    <div class="search_btn" :style="{ opacity: searchOpacity, display: searchDisplay }">

      <!-- 搜索关键字输入框 -->
      <input 
        type="text" 
        :class="['search_input', { input_change: isSearchInputShow }]" 
        v-model="keywords"
        placeholder="请输入想要点的菜名">

      <!-- 搜索图标 -->
      <svg class="search_icon" aria-hidden="true" @click="searchDishes">
        <use xlink:href="#icon-icon-test"></use>
      </svg>

    </div>

    <!--  -->
    <div class="">

    </div>

  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'home',
  data() {
    return {
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
      scroll: null,  // BScroll实例对象
      dishRecommendationList: [  // 菜品推荐列表
        {
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: false,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-02.jpg'),
          dishPrice: '16.00'
        },
        {
          markName: '本月新品',  // 标签名字
          orderedCount: 2,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 3,  // 好评度
          dishName: '韩式肥牛辛拉米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-03.jpg'),
          dishPrice: '15.00'
        },
        {
          markName: '本店招牌',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: false,  // 是否是辣的
          praiseDegree: 2,  // 好评度
          dishName: '金牌牛肉饼',
          dishImgUrl: require('@/assets/bg/bg-08.jpg'),
          dishPrice: '25.00'
        },
        {
          markName: '本月新品',  // 标签名字
          orderedCount: 12,   // 已点数量
          isSpicy: true,  // 是否是辣的
          praiseDegree: 5,  // 好评度
          dishName: '招牌江西米粉份粉份粉份粉份粉',
          dishImgUrl: require('@/assets/bg/bg-04.jpg'),
          dishPrice: '14.00'
        },
        {
          markName: '本月新品',  // 标签名字
          orderedCount: 0,   // 已点数量
          isSpicy: false,  // 是否是辣的
          praiseDegree: 1,  // 好评度
          dishName: '日式脆骨面',
          dishImgUrl: require('@/assets/bg/bg-07.jpg'),
          dishPrice: '11.00'
        },
        {
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
    }
  },
  created() {
    this.$nextTick(() => {
      this.InitTabScroll()
    })
    window.addEventListener('scroll', function () {
      let scrollTop = document.documentElement.scrollTop
      console.log('scrollTop', scrollTop)
      if (scrollTop > 65) {
        this.searchDisplay = 'visible'
        let disCount = scrollTop - 65
        if (disCount > 100) {
          this.searchOpacity = 1
        } else {
          this.searchOpacity = (disCount / 100).toFixed(1)
          console.log('searchOpacity', searchOpacity)
        }
      } else {
        this.searchOpacity = 0
        this.searchDisplay = 'none'
      }
    })
  },
  computed: {
    rootRemToPx () {
      let fontSize = document.documentElement.style.fontSize
      console.log('rem-font-zie', fontSize)
      return parseFloat(fontSize)
    }
  },
  methods: {
    // 点击搜索菜品按钮
    searchDishes () {
      if (this.isSearchInputShow) {
        this.isSearchInputShow = false
        // 调用搜索接口

      } else {
        this.isSearchInputShow = true
      }
    },
    // 滚动轮播
    InitTabScroll () {
      let width = 0
      for (let i = 0; i < this.bannerList.length; i++) {
        // getBoundingClientRect() 返回元素的大小及其相对于视口的位置
        // 动态计算出滚动区域的大小
        width += this.$refs.tabItem[0].getBoundingClientRect().width + 0.2 * this.rootRemToPx
      }
      this.$refs.tabContent.style.width = width - 0.2 * this.rootRemToPx + 'px'
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tabWrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh() // 如果dom结构发生改变调用该方法
        }
      })
    }
  },
}
</script>
<style lang="stylus" scoped>
  .home-page {
    min-height 100vh
    padding 0.4rem 0.15rem 0

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
      // display flex
      // align-items center
      // justify-content center
      .title {
        font-size 0.3rem
        margin 0 0.5rem
      }

      .separate-title-line {
        height 1px
        width 1rem
        background-color #666
      }
    }
    // 横向滑动banner
    .tab-wrapper {
      height 5rem
      width 100%
      overflow hidden

      .tab-content {
        // display flex
        white-space nowrap
        height 100%
      }

      .tab-item {
        width 90vw
        height 100%
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

      .dish_title {
        font-size 0.35rem
        letter-spacing 0.05rem
        color #ffffff
        // font-weight bold
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

    .dish_list_container {
      padding-top 0.8rem
      display flex
      flex-flow row wrap
      
      li {
        width 2.3rem
        height 3.1rem
        // padding 0.15rem 0 0 0.08rem
        padding-top 0.15rem
        margin-right 0.15rem
        margin-bottom 0.4rem
        position relative
      }

      li:nth-child(3n) {
        margin-right 0
      }

      .dish_content {
        height 100%
        background-color #fff
        border-bottom-left-radius 0.07rem
        border-bottom-right-radius 0.07rem
        overflow hidden
      }

      .dish_img_box {
        height 1.64rem
        overflow hidden
        position relative
        img {
          height 100%
          width 100%
          object-fit cover
          background-color #eee
        }
      }

      .dish_info {
        height calc(100% - 1.64rem)
        padding 0.15rem 0.11rem 0
      }

      .dish_name {
        font-size 0.29rem
        width 100%
        margin-bottom 0.22rem
        font-weight 600
      }

      .dish_price {
        font-size 0.25rem
        color #666
      }

      .mark_box {
        position absolute
        top 0
        left 0
        width 1.1rem
        height 0.5rem
        background url('../../assets/text_mark/mark_02.png') left top no-repeat
        background-size 100%
        padding-left 0.14rem
        .mark_text {
          font-size 0.2rem
          color #fff
          vertical-align top
          position relative
          top 0.02rem
        }
      }

      .ordered_count_mark {
        position absolute
        top 0
        right 0
        padding 0.05rem 0.15rem
        background-color #EC313D
        font-size 0.25rem
        border-radius 0.2rem
        color #fff
      }

      .dish_icon_box {
        position absolute
        bottom 0
        left 0
        height 0.5rem
        width 100%
        // background-color #fff
        line-height 0.2rem
        padding-left 0.11rem
        .dish_icon {
          width 0.3rem
          height 0.3rem
          // vertical-align -0.02rem
          fill currentColor
          overflow hidden
          margin-right 0
        }
      }
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
      display flex
      align-items center
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
    
  }
</style>