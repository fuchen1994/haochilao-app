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
          <img :src="item.imgUrl" class="tab-img">
          <div class="tab-title">{{item.name}}</div>
        </li>
      </ul>
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
          name: '麻婆豆腐',
          imgUrl: require('@/assets/bg/bg-01.jpg'),
          price: 12
        },
        {
          name: '辣椒炒肉',
          imgUrl: require('@/assets/bg/bg-10.jpg'),
          price: 15
        },
        {
          name: '金牌叉烧饭',
          imgUrl: require('@/assets/bg/bg-03.jpg'),
          price: 11
        },
        {
          name: '蒜香鸡汁块',
          imgUrl: require('@/assets/bg/bg-05.jpg'),
          price: 14
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
  methods: {
    // 滚动轮播
    InitTabScroll () {
      let width = 0
      for (let i = 0; i < this.bannerList.length; i++) {
        // getBoundingClientRect() 返回元素的大小及其相对于视口的位置
        // 动态计算出滚动区域的大小
        width += this.$refs.tabItem[0].getBoundingClientRect().width + 11 
      }
      this.$refs.tabContent.style.width = width + 'px'
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
      width: 0.5rem;
      height: 0.5rem;
      vertical-align: -0.15rem;
      fill: currentColor;
      overflow: hidden;
      margin-right: 0;
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

    .tab-wrapper {
      height 3rem
      width 100%
      overflow hidden

      .tab-content {
        display flex
      }

      .tab-item {
        width 90vw
        height 100%
        overflow hidden
      }

      .tab-img {
        width 100%
      }

      .tab-title {
        font-size 0.25rem
      }
    }
  }
</style>