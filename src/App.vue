<template>
  <div id="app">
    <div class="nav-bar">NAVIGATION MENU</div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 60px;
  z-index: 100;
  background-color: blue;
  margin: 0;
  padding: 10px;
}
</style>

<style lang="scss">
body{
  margin: 0;
}
</style>
