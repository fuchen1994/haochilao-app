<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
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
