<template>
	<div class="dish_detail_container">

    <div class="go_back_btn" @click="goBack">
      <span class="iconfont icon-jiantou2"></span>
      <span class="go_back_text">返回</span>
    </div>

		<van-swipe :autoplay="3000" :height="swiperHeight" indicator-color="#fff">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image" class="dish_img"/>
			</van-swipe-item>
		</van-swipe>

    <div class="dish_info_box">

      <div class="dish_name">香干肉丝饭</div>

      <div class="sale_count_box">
        <span>月售350份</span>
        <span>好评率94%</span>
      </div>

      <div class="dish_price_box">
        <span class="price">¥13.8</span>
        <span class="origin_price">¥16.8</span>
        <span class="discount">8.6折</span>
        <span class="remind">每单限1份优惠</span>
      </div>

      <div class="material">
        <span>主要原料：</span>
        <span>香干，猪肉</span>
      </div>
    </div>
	</div>
</template>
<script>
export default {
	data() {
		return {
      images: [
        require('@/assets/bg/bg-07.jpg'),
        require('@/assets/bg/bg-08.jpg'),
        require('@/assets/bg/bg-09.jpg')
      ],
    }
  },
  computed: {
    rootRemToPx () {
      let fontSize = document.documentElement.style.fontSize
      console.log('rem-font-zie', fontSize)
      return parseFloat(fontSize)
    },
    swiperHeight () {
      let height = 7.5
      return this.rootRemToPx * height
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
};
</script>
<style lang="stylus" scoped>
.dish_detail_container {
  background-color #ffffff

  .go_back_btn {
    position absolute
    top 0.2rem
    left 0.2rem
    width 1.4rem
    height 0.6rem
    line-height 0.6rem
    border-radius 0.5rem
    background-color rgba(0, 0, 0, 0.3)
    color #fff
    font-size 0.3rem
    text-align center
    z-index 999

    .go_back_text {
      margin-right 0.1rem
    }
  }

  >>>.van-swipe-item .dish_img{
    width 100%
    height 100%
    object-fit cover
  }

  .dish_info_box {
    padding 0.3rem 0.2rem

    .dish_name {
      font-size 0.4rem
      font-weight 600
      margin-bottom 0.1rem
      letter-spacing 0.02rem
    }

    .sale_count_box {
      font-size 0.24rem
      margin-bottom 0.1rem
      color #666
      span+span {
        margin-left 0.1rem
      }
    }

    .dish_price_box {
      margin-bottom 0.2rem
      height 0.5rem
      display flex
      align-items flex-end
      vertical-align bottom
      .price {
        color #EC6045
        font-size 0.35rem
        margin-right 0.15rem
      }
      .price~span {
        margin-right 0.1rem
      }
      .origin_price {
        font-size 0.28rem
        color #999999
        text-decoration line-through
      }
      .discount {
        display inline-block
        font-size 0.22rem
        color #DB6D58
        border 1px solid #F3D3CC
        padding 0 0.04rem
      }
      .remind {
        font-size 0.22rem
        color #E07A76
      }
    }

    .material {
      color #666666
      font-size 0.24rem
    }
  }
}
</style>