<template>
  <div id="app">
    <div class="nav-bar">
      <button class="nav-bar-button">Главная</button>
      <button class="nav-bar-button">Документы</button>
      <button class="nav-bar-button">Подать заявку</button>
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
$color-first: #004080;
$color-second: #020080;
.nav-bar {
  width: 100%;
  height: 50px;
  z-index: 100;
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
  padding: 20px;
  text-align: left;
}
</style>

<style lang="scss">
body{
  margin: 0;
}
</style>
