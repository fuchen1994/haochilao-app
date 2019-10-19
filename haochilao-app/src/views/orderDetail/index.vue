<template>
	<my-page ref="myPage">
		<div class="order_detail">
      订单详情
    </div>
	</my-page>
</template>
<script>
import MyPage from "@/components/myPage";

export default {
  name: "orderDetail",
	components: {
    MyPage
	},
	data() {
		return {};
	}
};
</script>
<style lang="stylus" scoped>

</style>