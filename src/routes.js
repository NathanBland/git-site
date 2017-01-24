export default [
  {
    path: '/landing',
    name: 'home-view',
    component: require('components/LandingView')
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: require('components/AboutMe')
  },
  {
    path: '/blog',
    name: 'blog',
    component: require('components/BlogListView')
  },
  {
    path: '/article/:date/:title/:link',
    name: 'article',
    component: require('components/ArticleView')
  },
  {
    path: '*',
    redirect: '/landing'
  }
]
