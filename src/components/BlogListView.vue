<template>
  <div class="blog-list-view">
    Let's see that blog post content!
    
    <article v-html="contentList"></article>
  </div>
</template>

<script>
const marked = require('marked')
export default {
  name: 'blogListView',
  data () {
    return {
      contentList: ''
    }
  },
  mounted () {
    // GET /image.jpg
    console.log('making request')
    this.$http.get('/static/test.md').then((response) => {
      // resolve to Blob
      console.log('res:', response)
      this.contentList = marked(response.body)
      // return response.blob()
    // }).then(blob) => {
    //   // use image Blob
    }, (err) => {
      console.log('failed with err:', err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
</style>
