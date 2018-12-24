<template>
  <div id="app">
    <div class="nav-bar">
    <router-link to="/Main">
      <button class="nav-bar-button">Главная</button>
    </router-link>
    <router-link to="/Documents">
      <button class="nav-bar-button">Документы</button>
    </router-link>
    <router-link to="/Order">
      <button class="nav-bar-button">Подать заявку</button>
    </router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "./assets/css/main.scss";
.nav-bar {
  width: 100%;
  height: 50px;
  z-index: 99999;
  background-color: $color-first;
  margin: 0;
  padding: 0 10px;
}
.nav-bar-button {
  height: 50px;
  // width: 70px;
  background-color: $color-first;
  border-width: 0;
  font-size: 14pt;
  font-weight: 600;
  padding: 0 20px;
  // border-radius: 4px;
}
.nav-bar-button:hover {
  background-color: $color-second;
}
.content {
  padding: 40px;
  text-align: left;
}
</style>

<style lang="scss">
body{
  margin: 0;
}
</style>
