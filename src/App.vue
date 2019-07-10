<template>
  <div>
    <button type="button" @click="changeComponent = 'red'">레드</button>
    <button type="button" @click="changeComponent = 'blue'">블루</button>
    <button type="button" @click="changeComponent = 'green'">그린</button>
    <!-- <Red />
    <Blue />
    <Green /> -->
    <components :is="changeComponent">
      <p>디폴트</p>
    </components>
  </div>
</template>

<script>
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';

  export default {
    name: 'App',
    components: {
      Red,
      Blue,
      Green
    },
    data() {
      return {
        changeComponent: Red
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>