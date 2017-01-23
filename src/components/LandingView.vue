<template>
  <article class="landing">
    <section>
      <h1>Welcome</h1>
      <p>This site serves as a development blog, and also as a personal playground. If you see some odd things here from time to time, that's why.</p>
      <p>Randomize the background?</p>
      <button @click="randomize">Randomize</button> 
    </section>
  </article>
</template>

<script>
const Trianglify = require('trianglify')
export default {
  name: 'landingView',
  data () {
    return {
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.landing
  margin-left: auto
  margin-right: auto
  margin-top: 1em
  section
    border-radius: 5px
    padding: 1em
    background-color: #cacaca
    margin-top: 1em
    box-shadow: 0px 0px 5px 0px grey
</style>
