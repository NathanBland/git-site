<template>
  <nav class="menu">
    <ul>
      <li><router-link :to="'/home'">Home</router-link></li>
      <li><router-link :to="'/about-me'">About Me</router-link></li>
      <li><router-link :to="'/blog'">Developer Blog</router-link></li>
      <li><a href="https://github.com/NathanBland/" title="GitHub" target="_blank">GitHub</a></li>
      <li><a href="https://twitter.com/NathanABland" title="Twitter" target="_blank">Twitter</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
nav
  flex: 1
  ul
    width: 75%
    text-shadow: 0px 0px 5px black
    display: flex
    justify-content: center
    text-decoration: none
    list-style: none
    padding: 0
    li a
      color: white
      text-decoration: none
      padding: .75em
      text-align: center
.router-link-active
  border-bottom-color: white
  border-bottom-width: 5px
  border-bottom-style: solid
@media (max-width: 600px)
  nav
    ul
      display: block
      .router-link-active
        border-bottom-color: unset
        border-bottom-width: unset
        border-bottom-style: unset
        box-shadow: 0px 0px 0px 2px white
        padding: .5em
    li
      min-width: 50vw
      padding-left: 1em
      padding-right: 1em
      padding-top: 1em
      a 
        width: 100%
      
</style>
