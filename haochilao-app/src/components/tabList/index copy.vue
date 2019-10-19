<template>
  <div class="tab_list">
    <van-popup 
      v-model="show" 
      :style="{ height: '100%' }"
      position="bottom">
      <div class="tab_list_container">
        <div class="tab_list_top">

          <ul class="top_left_content">
            <li
              v-for="(item, i) in tabLeftList"
              :key="i">
              <van-button color="#fff" @click="close">
                <van-icon :name="item.icon" color="#ccc" size="0.5rem" info="0" />
              </van-button>
              <span class="tab_text">{{ item.text }}</span>
            </li>
          </ul>

          <ul class="top_right_content">
            <li 
              v-for="(item, i) in tabRightList"
              :key="i + 1">
              <van-button color="#fff" @click="close">
                <van-icon :name="item.icon" color="#ccc" size="0.5rem" info="0" />
              </van-button>
              <span class="tab_text">{{ item.text }}</span>
            </li>
          </ul>

        </div>

        <div class="tab_list_bottom">
          <!-- 导航按钮（带有点击效果） -->
          <van-button color="#fff" @click="close">
            <van-icon name="cross" color="#ccc" size="0.5rem" info="0" />
          </van-button>
          <span class="tab_text">关闭导航</span>
        </div>

      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      tabLeftList: [
        {
          text: '本店信息',
          icon: 'shop',
          path: ''
        },
        {
          text: '我的订单',
          icon: 'bill',
          path: ''
        },
        {
          text: '历史订单',
          icon: 'todo-list',
          path: ''
        },
        {
          text: '结账',
          icon: 'gold-coin',
          path: ''
        },
      ],
      tabRightList: [
        {
          text: '本店活动',
          icon: 'volume',
          path: ''
        },
        {
          text: '我的信息',
          icon: 'manager',
          path: ''
        },
      ]
    }
  },
  methods: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
  }
}
</script>
<style lang="stylus" scoped>
  .tab_list {

    >>>.van-popup {
      background-color: transparent;
    }

    >>>.van-button {
      width: 1.2rem;
	    height: 1.2rem;
      padding: 0;
      display: block;
		  border-radius: 50%;

      .van-button__text {
        // padding-top: 0.05rem;
        line-height: 0.4rem;
        display: flex;
        height: 100%;
        width: 100%;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        user-select: none;
      }
    }

    .tab_list_container {
      height: 100%;
      padding: 0.4rem;
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-end;
    }

    .tab_list_top {
      flex: 1;
      display: flex;
    }

    .top_left_content, .top_right_content {
      width: 50%;
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-end;
      li {
        padding-top: 0.2rem;
        display: flex;
        align-items: center;
      }
    }

    .tab_list_bottom {
      padding-top: 0.2rem;
      display: flex;
      align-items: center;
    }

    .tab_text {
      font-size: 0.3rem;
      color: #fff;
      margin-left: 0.2rem;
    }

  }
</style>