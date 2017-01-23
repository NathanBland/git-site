<template>
  <div id="app">
    <my-header></my-header>
    <main-view></main-view>
  </div>
</template>

<script>
import Component from './components/Component'
import MyHeader from './components/Header'
import MainView from './components/MainView'
export default {
  name: 'app',
  components: {
    Component,
    MyHeader,
    MainView
  }
}
</script>

<style lang="sass">
body
  margin: 0
  padding: 0
  font-family: 'Raleway', sans-serif
  // background-color: #cacaca
  font-size: 16px
h1,h2,h3,h4 
  font-family: 'Cabin', sans-serif 
  font-weight: 400
  line-height: 1.25
p,a,li,span
  font-family: 'Raleway', sans-serif
  font-weight: 400
  line-height: 1.25
#app
  min-height: 100vh
  display: flex
  flex-flow: column nowrap
button
  background-color: #124B6C
  color: white
  padding: 1em 2em
  margin: .25em
  border: unset
  font-family: 'Cabin', sans-serif 
  font-weight: 400
  line-height: 1.25
  border: rgba(18, 75, 108, 0.1) 5px solid
  transition: border 200ms
  &:hover
    background-color: #124B6C
    color: white
    border: #0d3a54 5px solid
    transition: border 200ms
</style>
