import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import Homepage from '@/pages/Home'
import Journal from '@/pages/Journal'
import JournalDetail from '@/pages/JournalDetail'
import JournalPosts from '@/pages/JournalPosts'

Vue.use(Router)
Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/journal-posts',
      name: 'Journal',
      component: Journal
    },
    // {
    //   path: '/journal-detail',
    //   name: 'JournalDetail',
    //   component: JournalDetail
    // },
    {
      path: '/journal/:id',
      name: 'JournalDetail',
      component: JournalDetail
    },
    {
      path: '/journal',
      name: 'JournalPosts',
      component: JournalPosts
    },
  ]
})