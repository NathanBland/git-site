<template>
  <main class="main-view" role="main">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'mainView',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.main-view
  flex: 1
  width: 100%
  display: flex
  margin-left: auto
  margin-right: auto
  z-index: 1
  max-height: 89.5vh
  overflow-y: auto
  flex-flow: column nowrap
  
@media (max-width: 600px)
  .main-view
    overflow-y: unset
</style>
