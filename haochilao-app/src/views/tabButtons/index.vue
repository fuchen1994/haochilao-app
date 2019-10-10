<template>
  <div class="tab_buttons">
    <MyButton />
    <MyButton
      v-if="$route.name === 'home'"
      @click="goShoppingCartPage"
      position="right" 
      text="点菜单" 
      iconClass="icon-945caidan_jiyao"/>
    
    <MyButton 
      v-if="$route.name === 'shoppingCart'"
      @click="goHomePage"
      position="center" 
      text="点餐" 
      iconClass="icon-diancan"/>

    <MyButton
      v-if="$route.name === 'shoppingCart'"
      position="right" 
      text="下单" 
      iconClass="icon-querenfangan"/>

    <transition name="page-move">
      <router-view class="router_view_position"></router-view>
		</transition>

  </div>
</template>
<script>
import MyButton from "@/components/myButton";

export default {
  components: {
    MyButton
  },
  data() {
    return {
      
    }
  },
  methods: {
    goHomePage() {
      this.$router.push('/dish');
    },
    goShoppingCartPage() {
			this.$router.push('/dish/shoppingCart');
		}
  }
}
</script>
<style lang="stylus" scoped>
  
</style>