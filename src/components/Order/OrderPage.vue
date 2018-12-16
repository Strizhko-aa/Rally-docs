<template>
  <div>
    <h2>Заявка</h2>
    <div class="order-main-block">
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userSecondName" type="text" id="dynamic-label-input" placeholder="Фамилия">
          <label for="dynamic-label-input">Фамилия</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userFirstName" type="text" id="dynamic-label-input" placeholder="Имя">
          <label for="dynamic-label-input">Имя</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userLastName" type="text" id="dynamic-label-input" placeholder="Отчество">
          <label for="dynamic-label-input">Отчество</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="input category-select" @click="showCategory()">
          <p>{{ selectedCategory || 'выберите категорию' }}</p>
        </div>
        <div class="input-select-item" v-if="showCategoryFlag" @click="selectCategory(item)" v-for="item in categories" v-bind:key="item">{{ item }}</div>
      </div>
      <button class="button order-button" @click="goNext()">Далее</button>
    </div>
  </div>
</template>

<script>
import orderStore from './orderStore'
import customInput from './OrderUtils/CustomInput'
export default {
  name: 'Order',
  components: {'customInput': customInput},
  data () {
    return {
      userFirstName: '',
      userLastName: '',
      userSecondName: '',
      categories: [
        'Ралли', 'АКГ серийный', 'АКГ формула', 'Картинг',
        'Рекордный', 'Кросс Див 1,2', 'Кросс СКА',
        'Кросс полноприводный', 'Грузовой', 'Другое'
      ],
      showCategoryFlag: false,
      selectedCategory: null
    }
  },
  computed: {
  },
  methods: {
    goNext () {
      if (this.checkInput()) {
        orderStore.state.firstName = this.userFirstName
        orderStore.state.secondName = this.userSecondName
        orderStore.state.lastName = this.userLastName
        orderStore.state.category = this.selectedCategory
      }
    },
    checkInput () {
      return true
    },
    setValue (val) {
      console.log(val)
    },
    selectCategory (value) {
      this.selectedCategory = value
      this.showCategoryFlag = false
    },
    showCategory () {
      this.showCategoryFlag = !this.showCategoryFlag
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
.category-select {
  cursor: default;
  padding: 5px 10px 0 10px;
  border-bottom: 1px solid rgb(212, 212, 212);
  color: gray;
  margin-bottom: 20px;
}
.input-select-item {
  margin-left: 10px;
  padding: 5px;
  border-radius: 3px;
}
.input-select-item:hover {
  background-color: rgba(128, 128, 128, 0.658);
}
</style>
