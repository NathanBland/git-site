<template>
  <div id="app">
    <my-header></my-header>
    <main-view></main-view>
  </div>
</template>

<script>
import MyComponent from './components/Component'
import MyHeader from './components/Header'
import MainView from './components/MainView'
const Trianglify = require('trianglify')
export default {
  name: 'app',
  components: {
    MyComponent,
    MyHeader,
    MainView
  },
  mounted () {
    this.randomize()
  },
  methods: {
    randomize () {
      let myele = document.querySelector('main')
      let mySize = {
        width: window.getComputedStyle(myele).width,
        height: window.getComputedStyle(myele).height
      }
      let pattern = Trianglify({
        width: parseFloat(mySize.width),
        height: parseFloat(mySize.height),
        variance: '15',
        cell_size: 40,
        x_colors: 'random'})
      myele.style.background = 'url(' + pattern.png() + ')'
    }
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
  overflow-y: hidden
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
  padding: .25em
  margin: .25em
  border: unset
  font-family: 'Cabin', sans-serif 
  font-weight: 400
  font-size: 1.5em
  line-height: 1.25
  border: rgba(18, 75, 108, 0.1) 5px solid
  transition: border 200ms
  &:hover
    background-color: #124B6C
    color: white
    border: #0d3a54 5px solid
    transition: border 200ms
    
@media (max-width: 600px)
  body
    overflow-y: auto
  .header
    max-height: 20vh
</style>
