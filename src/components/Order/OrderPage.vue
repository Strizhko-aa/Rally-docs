<template>
  <div>
    <h2>Заявка</h2>
    <div class="order-main-block">
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-bind="userSecondName" type="text" id="dynamic-label-input" placeholder="Фамилия">
          <label for="dynamic-label-input">Фамилия</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-bind="userFirstName" type="text" id="dynamic-label-input" placeholder="Имя">
          <label for="dynamic-label-input">Имя</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-bind="userLastName" type="text" id="dynamic-label-input" placeholder="Отчество">
          <label for="dynamic-label-input">Отчество</label>
        </div>
      </div>
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
@import "../../assets/css/main.scss";

.inputs-block {
  width: 50%;
}
.order-button {
  margin-left: 20px;
}
.fix-form-group {
  padding-left: 10px;
}
</style>
