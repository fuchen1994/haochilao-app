<template>
  <div id="app">
    <transition :name="transitionName" @after-enter="beforeTransition">

      <keep-alive v-if="$route.meta.keepAlive">
        <router-view ref="routerViewComponent" class="router_view_position"></router-view>
      </keep-alive>

      <router-view v-else ref="routerViewComponent" class="router_view_position"></router-view>

    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: ''
    }
  },
  mounted() {
    let fontSize = document.documentElement.style.fontSize
    let size = parseFloat(fontSize)
    this.$store.commit('setRootRemToPx', size)
  },
  watch: {
    $route (to, from) {
      console.log('app监听路由-to', to)
      console.log('app监听路由-from', from)
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'

      // if(to.meta > from.meta){
      //   this.transitionName = "slide-left"
      // }else{
      //   this.transitionName = "slide-right"
      // }
    }
  },
  computed: {
   
  },
  methods: {
    beforeTransition () {
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
}
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease-out;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.page-move-enter, .page-move-leave-active {
  transform: translate(100%, 0);
}
   
.page-move-enter-active, .page-move-leave-active {
  transition: transform .3s ease-out;
}
    
.router_view_position {
  position: absolute !important;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  color:#333;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
