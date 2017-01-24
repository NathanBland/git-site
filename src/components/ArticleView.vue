<template>
  <article v-if="isPreview" class="article-preview">
    <h1><router-link :to="{ name: 'article', params: { title: post.title, link: post.link, date: post.date}}">{{post.title}}</router-link></h1>
    <h4>{{post.date}}</h4>
    <p v-html="previewContent"></p>
    <router-link :to="{ name: 'article', params: { title: post.title, link: post.link, date: post.date}}"><button>Read</button></router-link>
  </article>
  <article v-else class="article-view">
    <router-link to="/blog">Back to Articles</router-link>
    <h1>{{title}}</h1>
    <section v-html="content"></section>
  </article>
</template>

<script>
const marked = require('marked')
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})
export default {
  name: 'articleView',
  data () {
    return {
      previewContent: '',
      isLoading: true,
      link: '',
      title: '',
      date: '',
      content: ''
    }
  },
  created () {
    if (!this.post) {
      this.title = this.$route.params.title
      this.date = this.$route.params.date
      this.link = this.$route.params.link
      this.getPost()
      // console.log('route params:', this.$route.params)
    } else {
      this.link = this.post.link
      this.getPost()
    }
  },
  props: ['isPreview', 'post'],
  methods: {
    getPost () {
      this.$http.get('/static/' + this.link + '.md').then((response) => {
        console.log('got post:', response)
        this.previewContent = marked(response.body.split('\n')[0])
        this.content = marked(response.body)
        this.isLoading = false
      }, (err) => {
        console.log('get post failed with err:', err)
        this.isLoading = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.article-preview h1
  text-align: center
h1, h1 a
  color: #124B6C
  text-decoration: none
.article-view
  max-width: 760px
  border-radius: 5px
  padding: 1em
  background-color: rgba(249, 249, 249, 0.75)
  margin-left: auto
  margin-right: auto
  margin-top: 1em
  margin-bottom: 1em
  box-shadow: 0px 0px 5px 0px grey
  position: relative

</style>
<style lang="sass">
.article-preview p
  line-height: 1.5em
.article-view p
  line-height: 1.5em
section
  position: relative
  width: 100%
code
  box-shadow: 0px 0px 5px 1px grey
  padding: .25em .25em
  margin: 0 .25em
  border-radius: 5px
section pre
  overflow-x: auto
  max-width: 90vw
  padding: .5em
  box-shadow: 0px 0px 5px 1px grey
  border-radius: 5px
  // background-color: #002b36
  code
    box-shadow: unset
</style>
