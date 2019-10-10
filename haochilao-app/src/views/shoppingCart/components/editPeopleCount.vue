<template>
  <div class="edit_people_count">
    <van-dialog
      v-model="show"
      message-align="left"
      show-cancel-button
      confirm-button-color="#FF6F43"
      cancel-button-color="#999"
    >
      123465
    </van-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    openDialog() {
      this.show = true;
    },
    closeDialog() {
      this.show = false;
    }
  }
  
}
</script>
<style lang="stylus" scoped>
  
</style>