<template>
  <header class="header">
    <img src="../assets/avatar.png">
    <h1><router-link :to="'home'">Nathan Bland</router-link></h1>
    <header-menu></header-menu>
  </header>
</template>

<script>
import HeaderMenu from './Menu'

export default {
  name: 'header',
  components: {
    HeaderMenu
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.header
  display: flex
  min-height: 4em
  box-shadow: 0px 2px 5px #1e1e1e
  flex-flow: row wrap
  align-items: baseline
  margin: 0
  background-color: #124B6C
  color: white
  padding-left: 1em
  h1 a
    text-decoration: none
    color: white
img 
  padding: .5em
  height: 2em
  align-self: center
</style>
