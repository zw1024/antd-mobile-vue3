<template>
<!--  <Button>aaa</Button>-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../components/button'
import '../components/button/style'

export default defineComponent({
  name: 'App',
  components: {
    Button
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
