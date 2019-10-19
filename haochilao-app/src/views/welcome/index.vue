<template>
  <my-page ref="myPage">
    <div class="welcome_page">
      <div class="store_info_box">
        <img src="../../assets/border/text_border2.png" class="store_logo" />
        <span class="store_name">好吃佬</span>
      </div>

      <div class="welcome_words">欢迎光临本店！</div>

      <div class="order_btn_box">
        <van-button color="#E02200" @click="startOrder">开始点餐</van-button>
      </div>
    </div>
  </my-page>
</template>
<script>
import MyPage from "@/components/myPage";

export default {
  name: "welcome",
  components: {
    MyPage
  },
  // data() {
  //   return {

  //   }
  // },
  methods: {
    startOrder() {
      this.$router.replace('/choosePeopleCount');
    }
  }
};
</script>
<style lang="stylus" scoped>
.welcome_page {
  padding: 4rem 0.15rem 0.15rem;

  .store_info_box {
    text-align: center;
    position: relative;

    .store_logo {
      width: 60%;
    }

    .store_name {
      position: absolute;
      top: 50%;
      left: 53%;
      transform: translate(-50%, -50%);
      font-size: 0.45rem;
      color: #fff;
    }
  }

  .welcome_words {
    font-size: 0.28rem;
    padding: 0.2rem 0.15rem;
    text-align: center;
    border-radius: 0.2rem;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 0.15rem auto 1rem;
    width: 60%;
  }

  .order_btn_box {
    text-align: center;
  }

  >>>.van-button {
    padding: 0;
    font-size: 0.32rem;
    width: 3.1rem;
    height: 0.75rem;
    line-height: 0.75rem;
    text-align: center;
    border-radius: 0.08rem;
  }
}
</style>