<template>
  <div class="page_bottom">
    <!-- <img :src="imgUrl"> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require('../../assets/gif/naohai.gif')
    }
  },
}
</script>
<style lang="stylus" scoped>
  .page_bottom {
    height: 2.6rem;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }
</style>