<template>
  <div id="app">
    <ul class="nav">
      <li><router-link :to="{name: 'home'}" exact>home</router-link></li>
      <li><router-link :to="{name: 'router'}">router</router-link></li>
    </ul>
    <router-view class="router-wrap"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import url('./scss/main.scss');

.nav {
  border-bottom: 1px solid rgba(0,0,0,0.52);
  margin: 0 15px 15px;
  padding: 15px 0;
  li {
    display: inline-block;
    margin-right: 10px;
    a {
      display: inline-block;
      padding: 10px 15px;
      text-decoration: none;
      border:1px solid rgba(0,0,0,0.28);
      color: rgba(0,0,0,0.52);
      &.is-active {
        background: rgba(0,0,0,0.52);
        color: #fff;
      }
    }
  }
}
.router-wrap {
  padding: 0 15px;
}
</style>
