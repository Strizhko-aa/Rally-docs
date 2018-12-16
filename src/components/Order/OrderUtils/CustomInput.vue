<template>
  <div class="main-block">
    <div class="form-group fix-form-group">
      <input class="input" v-on:input="sendValue" v-model="inputValue" type="text" id="dynamic-label-input" v-bind:placeholder="lableText" >
      <label for="dynamic-label-input">{{  lableText }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customInput',
  props: ['lableText'],
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    sendValue () {
      this.$emit('inputValue', this.inputValue)
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  outline: none;
  width: 100%;
  padding: 5px 10px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-size: 12pt;
}

.form-group {
  position: relative;
  padding-top: 1.5rem;
  margin: 30px 0;
}

label {
  position: absolute;
  top: 0;
  left: 18px;
  font-size: 10pt;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.2s ease-out;
}

input:placeholder-shown + label {
  opacity: 0;
  transform: translateY(1rem);
}
</style>
