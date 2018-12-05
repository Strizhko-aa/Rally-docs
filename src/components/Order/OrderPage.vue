<template>
  <div>
    <h3>Заявка</h3>
    <div class="order-main-block">
      <input type="text" class="order-input" v-model="userLastName" placeholder="Фамилия"><br>
      <input type="text" class="order-input" v-model="userFirstName" placeholder="Имя"><br>
      <input type="text" class="order-input" v-model="userSecondName" placeholder="Отчество"><br>
      <button class="button order-button" @click="sendData()">Далее</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userFirstName: '',
      userLastName: '',
      userSecondName: ''
    }
  },
  methods: {
    sendData () {
      let userData = {
        firstName: this.userFirstName,
        secondName: this.userSecondName,
        lastName: this.lastName
      }
      console.log(JSON.stringify(userData))
    }
  }
}
</script>

<style lang="scss" scoped>
.order-main-block {
  // display: flex;

}
.order-input {
  padding: 5px;
  margin: 20px;
}
.order-button {
  margin-left: 20px;
}
</style>
