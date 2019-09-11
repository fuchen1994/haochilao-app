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
          <img :src="item.imgUrl" class="dish_img">

          <!-- 菜品信息 -->
          <div class="dish_info_box">

            <div class="dish_title">
              {{ item.name }}
              <svg class="hot_dish_icon" aria-hidden="true" v-for="(cell, j) in item.zan" :key="j">
                <use xlink:href="#icon-dianzan"></use>
              </svg>
            </div>
            <div class="dish_price">
              <span class="rmb_symbol">¥</span>{{ item.price }}
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
      <li>
        <div class="">

        </div>
        <div class="mark_box">

        </div>
      </li>

      <li>
        <div class="">

        </div>
        <div class="mark_box">

        </div>
      </li>

      <li>
        <div class="">

        </div>
        <div class="mark_box">

        </div>
      </li>


    </ul>

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
          name: '麻婆豆腐',
          imgUrl: require('@/assets/bg/bg-01.jpg'),
          price: '12.00',
          zan: 2
        },
        {
          name: '辣椒炒肉',
          imgUrl: require('@/assets/bg/bg-10.jpg'),
          price: '15.00',
          zan: 1
        },
        {
          name: '金牌叉烧饭',
          imgUrl: require('@/assets/bg/bg-03.jpg'),
          price: '11.00',
          zan: 3
        },
        {
          name: '蒜香鸡汁块',
          imgUrl: require('@/assets/bg/bg-05.jpg'),
          price: '14.00',
          zan: 5
        },
      ],
      scroll: null,  // BScroll实例对象
    }
  },
  created() {
    this.$nextTick(() => {
      this.InitTabScroll()
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

      .rmb_symbol {
        margin-right 0.05rem
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
        height 2.9rem
        background-color #fff
        // padding 0.15rem 0 0 0.08rem
        padding-top 0.15rem
        margin-right 0.15rem
        margin-bottom 0.4rem
      }

      li:last-child {
        margin-right 0
      }

    }
  }
</style>