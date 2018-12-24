<template>
  <div>
    <h2>Заявка</h2>
    <div class="order-main-block">
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userMark" type="text" id="dynamic-label-input" placeholder="Марка">
          <label for="dynamic-label-input">Марка</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userModel" type="text" id="dynamic-label-input" placeholder="Модель">
          <label for="dynamic-label-input">Модель</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userBodyNumber" type="text" id="dynamic-label-input" placeholder="Шасси(кузов)№">
          <label for="dynamic-label-input">Шасси(кузов)№</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userBodyYear" type="text" id="dynamic-label-input" placeholder="Год выпуска шасси(кузова)">
          <label for="dynamic-label-input">Год выпуска шасси(кузова)</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userEngineModel" type="text" id="dynamic-label-input" placeholder="Модель двигателя">
          <label for="dynamic-label-input">Модель двигателя</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userEngineYear" type="text" id="dynamic-label-input" placeholder="Год выпуска двигателя">
          <label for="dynamic-label-input">Год выпуска двигателя</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userOmologNumber" type="text" id="dynamic-label-input" placeholder="Омологационный номер ФИА РАФ">
          <label for="dynamic-label-input">Омологационный номер ФИА РАФ</label>
        </div>
      </div>
      <div class="inputs-block">
        <div class="form-group fix-form-group">
          <input class="input" v-model="userCyclinderVolume" type="text" id="dynamic-label-input" placeholder="Номинальноый объем цилиндров (см3)">
          <label for="dynamic-label-input">Омологационный номер ФИА РАФ</label>
        </div>
      </div>
      <div class="inputs-block fix-overlay">
        <div class="input category-select" @click="showCategory()">
          <p>{{ selectedCategory || 'выберите категорию' }}</p>
        </div>
        <div class="input-select-item" v-if="showCategoryFlag" @click="selectCategory(item)" v-for="item in categories" v-bind:key="item">{{ item }}</div>
      </div>
      <button class="button order-button" v-bind:class="{'button-primary': checkAllInputsFlag, 'button-disabled': !checkAllInputsFlag}" v-bind:disabled="checkAllInputsFlag" @click="goNext()">Далее</button>
    </div>

    <!-- <div class="input-select-item-overlay" v-if="showCategoryFlag" @click="showCategory()"></div> -->

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
    checkAllInputsFlag () {
      if (this.userFirstName.length >= 3 && this.userLastName.length >= 3 && this.userSecondName.length >= 3 && this.selectedCategory !== 'выберите категорию' && this.selectedCategory !== null) {
        return true
      }
      return false
    }
  },
  methods: {
    goNext () {
      orderStore.state.firstName = this.userFirstName
      orderStore.state.secondName = this.userSecondName
      orderStore.state.lastName = this.userLastName
      orderStore.state.category = this.selectedCategory
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
  cursor: pointer;
  width: 70%;
  // z-index: 100;
}
.input-select-item:hover {
  background-color: rgba(128, 128, 128, 0.658);
}
.input-select-item-overlay {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(197, 30, 169, 0.295);
}
.fix-overlay {
  z-index: 321;
}
</style>
