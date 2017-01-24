<template>
  <div class="blog-list-view">
    <article-view v-for="(post, idx) in posts" :post="post" :isPreview="true"></article-view>
  </div>
</template>

<script>
import ArticleView from './ArticleView'
export default {
  name: 'blogListView',
  components: {
    ArticleView
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    // GET /image.jpg
    console.log('making request')
    this.$http.get('/static/index.json').then((response) => {
      // resolve to Blob
      console.log('res:', response)
      this.posts = response.body.posts.reverse()
      // this.contentList = marked(response.body)
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
.blog-list-view article
  max-width: 760px
  border-radius: 5px
  padding: 1em
  background-color: rgba(249, 249, 249, 0.75);
  margin-left: auto
  margin-right: auto
  margin-top: 1em
  box-shadow: 0px 0px 5px 0px grey
  &:last-child
    margin-bottom: 1em
</style>
