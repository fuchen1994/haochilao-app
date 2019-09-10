<template>
  <div class="tabbar-container">

    <div class="tabbar-box">

      <div class="modal" v-show="isTabbarShow === 'show'" @click="openTabbar"></div>
      <div :class="[
        'modal-content',
        { bounceInLeft: isTabbarShow === 'show' },
        { bounceOutLeft: isTabbarShow === 'hide' },
        { transparent: isTabbarShow == null }
      ]">

        <div class="scroll-wraper">
          <div class="inner-content">

            <div class="dish-classify-title">菜品分类</div>

            <ul class="fast-order">
              <li>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-youhuiquan1"></use>
                </svg>
                优惠
              </li>
              <li>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-redu1"></use>
                </svg>
                本店销量
              </li>
              <li>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jilu1"></use>
                </svg>
                我点过的菜
              </li>
            </ul>

            <ul class="dish-classify-content">
              <li 
                v-for="(item, i) in dishClassifyList" 
                :key="i"
                :class="{ active: currentDishClassifyId == item.id }"
                @click="chooseDishClassify(item)">
                <span>{{ item.name }}</span>
                <i class="separate-line"></i>
              </li>
            </ul>
          </div>
        </div>

        <!-- 打开分类按钮 -->
        <div class="open-tabbar-btn" @click="openTabbar">
          <div class="open-btn-content">
            <div>
              <svg class="classify-icon" aria-hidden="true">
                <use xlink:href="#icon-shiwu"></use>
              </svg>
            </div>
            分类
          </div>
        </div>

      </div>
      
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  name: 'tabbar',
  data() {
    return {
      isTabbarShow: null,
      dishClassifyList: [  // 菜品分类列表
        {
          id: 1,
          name: '面食'
        },
        {
          id: 2,
          name: '汤饭汤粉'
        },
        {
          id: 3,
          name: '汤粉汤粉'
        },
        {
          id: 4,
          name: '早餐汤粉'
        },
        {
          id: 5,
          name: '煎饼汤粉汤粉'
        },
        {
          id: 6,
          name: '面食面食面食面食面食'
        },
        {
          id: 7,
          name: '煎饼煎饼煎饼煎饼煎饼煎饼'
        },
        {
          id: 8,
          name: '汤粉汤粉汤粉汤粉汤粉汤粉'
        },
        {
          id: 9,
          name: '汤粉汤粉汤粉汤粉汤粉汤粉'
        },
        {
          id: 10,
          name: '汤粉汤粉汤粉汤粉汤粉汤粉'
        },
        {
          id: 11,
          name: '汤粉汤粉汤粉汤粉汤粉汤粉'
        },
        {
          id: 12,
          name: '汤粉汤粉汤粉汤粉汤粉汤粉'
        },
      ],
      currentDishClassifyId: null,  // 当前选择的菜品分类
      // scrollTop: 0 // 原本使用原生overflow-y: scroll 的时候，这里存在一个问题：当滑动分类框里面的内容时，home页面也会跟着滑动，原本是想在打开遮罩时为body添加一个固定定位属性固定，然后当遮罩关闭时将之前的scollTop赋值给body。但是采用了BetterScroll插件，这个问题就没有了
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initBScroll()
    })
  },
  methods: {
    initBScroll () {
      let wrapper = document.querySelector('.scroll-wraper')
      console.log('wrapper', wrapper)
      let scroll = new BScroll(wrapper, {
        // 当设置为 true 的时候，可以开启纵向滚动
        scrollY: true,
        // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true
        click: true,
        // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
        // bounce: {
        //   top: true,
        //   bottom: true,
        //   left: false,
        //   right: false
        // },
        // 当快速在屏幕上滑动一段距离的时候，会根据滑动的距离和时间计算出动量，并生成滚动动画。设置为 true 则开启动画
        momentum: true  
      })
    },
    // 打开菜单栏
    openTabbar () {
      // this.isTabbarShow = !this.isTabbarShow
      if (this.isTabbarShow === null) {
        this.isTabbarShow = 'show'
        // this.scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        // document.getElementsByTagName('body')[0].className += 'disable-move'
        // console.log('scrollTop' ,this.scrollTop)
      } else if (this.isTabbarShow === 'show') {
        this.isTabbarShow = 'hide'
      } else {
        this.isTabbarShow = 'show'
      }
    },
    // 选择菜品
    chooseDishClassify (item) {
      this.currentDishClassifyId = item.id
    }
  },
}
</script>
<style lang="stylus" scoped>
@keyframes bounceOutLeft {

  0% {
    opacity: 1;
    -webkit-transform: translate3d(3.2rem, 0, 0);
    transform: translate3d(3.2rem, 0, 0);
  }

  20% {
    opacity: 1;
    -webkit-transform: translate3d(3.6rem, 0, 0);
    transform: translate3d(3.6rem, 0, 0);
  }

  to {
    opacity: 0.3;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0.3;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(3.6rem, 0, 0);
    transform: translate3d(3.6rem, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(3.1rem, 0, 0);
    transform: translate3d(3.1rem, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(3.3rem, 0, 0);
    transform: translate3d(3.3rem, 0, 0);
  }

  to {
    -webkit-transform: translate3d(3.2rem, 0, 0);
    transform: translate3d(3.2rem, 0, 0);
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

  .tabbar-container {
    position relative
    .tabbar-box {
      .modal {
        position fixed
        top 0
        left 0
        bottom 0
        right 0
        background-color rgba(0, 0, 0, 0.6)
        z-index 2020
      }
      .modal-content {
        position fixed
        // left 0
        left -3.9rem
        top 0
        min-width 0.7rem
        min-height 100%
        // transition all 0.3s ease-out
        z-index 2021
      }
      .transparent {
        opacity 0.3
      }
      // 分类按钮
      .open-tabbar-btn {
        position absolute
        top 50vh
        right -20%
        transform translateY(-50%)
        background-color #fff
        width 1.2rem
        height 1.2rem
        border-radius 50%
        font-size 0.24rem
        z-index 2022
        .open-btn-content {
          width 0.7rem
          height 1rem
          position absolute
          top 0.1rem
          right 0
          // background-color rgba(125, 125, 125, 0.3)
        }
      }
      // 分类框
      .scroll-wraper {
        background-color #eeeeee
        position relative
        z-index 2023
        height 100vh
        width 3.9rem
        // overflow-y scroll
        overflow-y hidden
      }
    }
    .dish-classify-title {
      font-size 0.28rem
      color #333
      height 0.67rem
      line-height 0.67rem
      border-bottom 1px solid #ccc
      padding-left 1rem
    }
    .fast-order {
      border-bottom 1px solid #ccc
      font-size 0.3rem
      color #1989fa
      padding-left 1rem
      li {
        height 0.8rem
        line-height 0.8rem
        border-bottom 1px solid #ccc
      }
      li:last-child{
        border 0
      }
    }
    .dish-classify-content {
      font-size 0.28rem
      li {
        padding-left 1rem
        margin-bottom 1px
        position relative
        z-index 2024
        span {
          display block
          width 100%
          padding 0.3rem 0.3rem 0.3rem 0
        }
        .separate-line {
          position absolute
          bottom -1px
          right 0
          height 1px
          background-color #ccc
          width calc(100% - 1rem)
        }
      }
      li:last-child{
        border 0
      }
      li.active {
        background-color #ffffff
      }
    }

    .classify-icon {
      width 0.5rem
      height 0.5rem
      vertical-align -0.15rem
      fill currentColor
      overflow hidden
      margin-right 0
      margin-bottom 0.07rem
    }

    .disable-move {
      position fixed
      // top 0
      height 100%
      overflow hidden
    }
  }

</style>