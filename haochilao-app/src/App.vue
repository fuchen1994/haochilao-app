<template>
	<div id="app">
		<MyButton 
			v-if="$route.name === 'home' || $route.name === 'shoppingCart'"
			@click="openTabList"/>

		<MyButton
			v-if="$route.name === 'home'"
			@click="goShoppingCartPage"
			position="right"
			text="点菜单"
			iconClass="icon-945caidan_jiyao"
		/>

		<MyButton
			v-if="$route.name === 'shoppingCart'"
			@click="goHomePage"
			position="center"
			text="点餐"
			iconClass="icon-diancan"
		/>

		<MyButton
			v-if="$route.name === 'shoppingCart'"
			position="right"
			text="下单"
			iconClass="icon-querenfangan"
			@click="openOrderConfirmDialog"
		/>

		<MyButton
			v-if="$route.name === 'choosePeopleCount'"
			@click="startOrder"
			:position="choosePeopleCountBtnIsDisable ? 'disable_center' : 'center'"
			text="点餐"
			iconClass="icon-diancan"
		/>

		<!-- 导航菜单 -->
		<TabList ref="TabList"/>

		<transition :name="transitionName" @after-enter="beforeTransition">
			<keep-alive v-if="$route.meta.keepAlive">
				<router-view ref="routerViewComponent" class="router_view_position"></router-view>
			</keep-alive>

			<router-view v-else ref="routerViewComponent" class="router_view_position"></router-view>
		</transition>

	</div>
</template>

<script>
import MyButton from "@/components/myButton";
import TabList from "@/components/tabList";
import Bus from '@/utils/bus.js'

export default {
	name: "app",
	components: {
		MyButton,
		TabList
	},
	data() {
		return {
			transitionName: "",
			choosePeopleCountBtnIsDisable: true
		};
	},
	created() {
		let that = this;
		Bus.$on('setBtnDisable', msg => {
			// console.log('Bus---', msg);
			that.choosePeopleCountBtnIsDisable = msg;
		});
	},
	mounted() {
		this.setRootRemToPx();
		this.hideToolbarAndMenu();
	},
	watch: {
		$route(to, from) {
			console.log("app监听路由-to", to);
			console.log("app监听路由-from", from);
			// const toDepth = to.path.split("/").length;
			// const fromDepth = from.path.split("/").length;
			// this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";

			if(to.meta.pageIndex > from.meta.pageIndex){
			  this.transitionName = "slide-left"
			}else{
			  this.transitionName = "slide-right"
			}
		}
	},
	computed: {
		disableTransition() {
			console.log("this.$route.matched", this.$route.matched[0].name);
			if (this.$route.matched[0].name == "dish") {
				return true;
			}
			return false;
		}
	},
	methods: {
		openTabList() {
			this.$refs.TabList.open();
		},
		startOrder() {
			if (this.choosePeopleCountBtnIsDisable) {
				return this.$toast('请选择正确的用餐人数');
			} else {
				this.$router.replace("/home");
			}
		},
		openOrderConfirmDialog() {
			console.log('openOrderConfirmDialog')
			this.$nextTick(() => {
				this.$refs.routerViewComponent.$refs.ConfirmOrderDialog.open();
			})
		},
		// 隐藏微信分享按钮和底部导航栏
		hideToolbarAndMenu() {
			document.addEventListener(
				"WeixinJSBridgeReady",
				function onBridgeReady() {
					// 通过下面这个API隐藏底部导航栏
					WeixinJSBridge.call("hideToolbar");
					// 通过下面这个API隐藏右上角按钮
					WeixinJSBridge.call("hideOptionMenu");
				}
			);
		},
		// 保存根字体大小
		setRootRemToPx() {
			let fontSize = document.documentElement.style.fontSize;
			let size = parseFloat(fontSize);
			this.$store.commit("setRootRemToPx", size);
		},
		goHomePage() {
			this.$router.push("/home");
		},
		goShoppingCartPage() {
			this.$router.push("/shoppingCart");
		},
		beforeTransition() {
			// console.log('页面动画执行前')
			// this.$root.$emit('triggerScroll')
			// if (this.$route.path == '/home') {
			//   if (this.$refs.routerViewComponent) {
			//     console.log('routerViewComponent', this.$refs.routerViewComponent)
			//     this.$refs.routerViewComponent.setScrollTop()
			//   }
			//   console.log('执行了滚动')
			//   }
			// },
			// // afterLeave () {
			//   this.$root.$emit('triggerScroll')
		}
	}
};
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	transition: all 0.3s ease-out;
}

.slide-right-enter {
	/* opacity: 0; */
	transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-to {
	/* opacity: 0.5; */
	transform: translate3d(25%, 0, 0);
}
.slide-left-enter {
	/* opacity: 0; */
	transform: translate3d(100%, 0, 0);
}
.slide-left-leave-to {
	/* opacity: 0.5; */
	transform: translate3d(-25%, 0, 0);
}

.page-move-enter,
.page-move-leave-active {
	transform: translate(100%, 0);
}

.page-move-enter-active,
.page-move-leave-active {
	transition: transform 0.3s ease-out;
}

.router_view_position {
	position: absolute !important;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	overflow: hidden;
	box-shadow: 0 0 0.15rem 0.1rem rgba(0, 0, 0, 0.5);
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	color: #333;
}

#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	max-width: 750px;
	/* overflow-y: scroll;
  -webkit-overflow-scrolling: touch; */
	margin: 0 auto;
}

li {
	list-style: none;
}

.icon {
	width: 0.35rem;
	height: 0.35rem;
	vertical-align: -0.07rem;
	fill: currentColor;
	overflow: hidden;
	margin-right: 0.1rem;
}

.text_over_hidden {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

/* 1px上边框 */
.tiny_line_top::before {
	position: absolute;
	box-sizing: border-box;
	content: " ";
	pointer-events: none;
	right: 0;
	top: 0;
	left: 0;
	border-top: 1px solid #ebedf0;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

/* 1px下边框 */
.tiny_line_bottom::after {
	position: absolute;
	box-sizing: border-box;
	content: " ";
	pointer-events: none;
	right: 0;
	bottom: 0;
	left: 0;
	border-bottom: 1px solid #ebedf0;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

/* 比1px更细的线 */
.separate-title-line {
	height: 1px;
	width: 1rem;
	background-color: #333;
	transform: scaleY(0.5);
}
</style>
