<template>
  <div class="about-me">
    <h1>About Me</h1>
    <h2>A brief Musing</h2>
    <p>I'm currently a QA Engineer at Dell EMC in Colorado. On the side I love to do web design and application development.</p>
    <p>You can learn more about me by checking out some articles here, or by looking at my GitHub projects.</p>
  </div>
</template>

<script>
export default {
  name: 'aboutMe',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.about-me
  max-width: 760px
  border-radius: 5px
  padding: 1em
  background-color: #f9f9f9
  margin-left: auto
  margin-right: auto
  margin-top: 1em
  box-shadow: 0px 0px 5px 0px grey
</style>
