<template>
  <div class="tabbar-container">

    <div class="tabbar-box">
      <van-button type="default" @click="openTabbar">默认按钮</van-button>

      <div class="modal"></div>
      <div :class="[
        'modal-content',
        { bounceInLeft: isTabbarShow }
      ]">

        <div class="inner-content">
          <div class="dish-classify-title">菜品分类</div>

          <ul class="fast-order">
            <li>优惠</li>
            <li>本店销量</li>
            <li>我点过的菜</li>
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

        <!-- 打开分类按钮 -->
        <div class="open-tabbar-btn" @click="openTabbar">
          分类
        </div>
      </div>
      
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
  data() {
    return {
      isTabbarShow: false,
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
      ],
      currentDishClassifyId: null  // 当前选择的菜品分类
    }
  },
  methods: {
    // 打开菜单栏
    openTabbar () {
      this.isTabbarShow = !this.isTabbarShow
    },
    // 选择菜品
    chooseDishClassify (item) {
      this.currentDishClassifyId = item.id
    }
  },
}
</script>
<style lang="stylus" scoped>
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
    -webkit-transform: translate3d(3.7rem, 0, 0);
    transform: translate3d(3.7rem, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(3rem, 0, 0);
    transform: translate3d(3rem, 0, 0);
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
      .modal-content.hide {
        left -3.2rem
      }
      // 分类按钮
      .open-tabbar-btn {
        position absolute
        top 50vh
        right -24%
        transform translateY(-50%)
        background-color #fff
        width 1.2rem
        height 1.2rem
        border-radius 50%
        font-size 0.28rem
        z-index 2022
      }
      // 分类框
      .inner-content {
        background-color #eeeeee
        position relative
        z-index 2023
        height 100vh
        width 3.9rem
        overflow-y scroll
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
  }




</style>