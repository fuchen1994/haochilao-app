<template>
	<my-page ref="myPage">
		<div class="choosePeopleCount_page">
			<div class="page_title">用餐人数</div>
			<ul class="people_count_list">
				<li
					@click="choosePeopleCount(item, i)"
					:class="[
            'people_count_item',
            { active: currentCountIndex == i }
          ]"
					v-for="(item, i) in peopleCountList"
					:key="i"
				>{{ item }}人</li>
				<li
					:class="[
            'people_count_item',
            { active: isMoreCount }
          ]"
					@click="openEditPeopleCountDialog"
				>{{ morePeopleCountText }}</li>
			</ul>
		</div>

		<template slot="fixed">
			<div>
				<!-- 修改人数弹框 -->
				<EditPeopleCount ref="EditPeopleCount" @changeMsg="setPeopleCount" />
			</div>
		</template>
	</my-page>
</template>
<script>
import MyPage from "@/components/myPage";
import EditPeopleCount from "./components/chooseCountDialog";
import Bus from "@/utils/bus.js";

export default {
	name: "welcome",
	components: {
		MyPage,
		EditPeopleCount
	},
	data() {
		return {
			peopleCountList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			currentCountIndex: null,
			peopleCount: null,
      isMoreCount: false,
      morePeopleCountText: '更多...'
		};
	},
	watch: {
		peopleCount(val) {
			if (val) {
				Bus.$emit("setBtnDisable", false);
        this.$store.commit("setPeopleCount", val);
        if (val >= 12) {
          this.isMoreCount = true;
          this.morePeopleCountText = val + '人';
        } else {
          this.isMoreCount = false;
          this.morePeopleCountText = '更多...';
        }
				//  调用修改用餐人数的接口
			} else {
				Bus.$emit("setBtnDisable", true);
			}
		}
	},
	computed: {
		// 之所以这样写，因为抛出警告Computed property "morePeopleCountText" was assigned to but it has no setter
		// morePeopleCountText: {
		// 	get() {
		// 		if (this.peopleCount >= 12) {
		// 			this.isMoreCount = true;
		// 			return `${this.peopleCount}人`;
		// 		} else {
		// 			this.isMoreCount = false;
		// 			return "更多...";
		// 		}
		// 	},
		// 	set() {}
		// }
	},
	methods: {
		setPeopleCount(count) {
			this.peopleCount = count;
		},
		// 点击更多按钮
		openEditPeopleCountDialog() {
			this.currentCountIndex = null;
			this.peopleCount = null;
			this.$refs.EditPeopleCount.open();
		},
		// 点击人数按钮
		choosePeopleCount(item, index) {
			if (this.currentCountIndex === index) return false;
			this.currentCountIndex = index;
			this.peopleCount = item;
		}
	}
};
</script>
<style lang="stylus" scoped>
.choosePeopleCount_page {
	padding: 1rem 0.15rem 0.15rem;

	.page_title {
		font-size: 0.3rem;
		padding: 0.2rem 0.15rem;
		text-align: center;
		border-radius: 0.2rem;
		color: #fff;
		background-color: rgba(255, 255, 255, 0.3);
		margin: 0.15rem auto 1rem;
		width: 50%;
	}

	.people_count_list {
		width: 100%;
		display: flex;
		flex-flow: row wrap;
		background-color: rgba(255, 255, 255, 0.3);
		padding: 0.7rem 0.2rem 0.6rem;
		border-radius: 0.2rem;

		.people_count_item {
			width: 23.5%;
			margin-right: 2%;
			margin-bottom: 2%;
			border: 1px solid #FBEAD6;
			height: 0.7rem;
			line-height: 0.7rem;
			border-radius: 0.07rem;
			font-size: 0.25rem;
			text-align: center;
			color: #41403E;
		}

		.people_count_item:nth-child(4n) {
			margin-right: 0;
		}

		.people_count_item.active {
			background-color: #EC313D;
			border-color: #EC313D;
			color: #fff;
		}
	}
}
</style>