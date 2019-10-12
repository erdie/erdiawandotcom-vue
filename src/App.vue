<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Anna Erdiawan Personal Site',
    titleTemplate: null,
    meta: [
          { name: 'description', content: 'Anna Erdiawan Personal Site, Anna Erdiawan Linkedin, Anna Erdiawan Resume, Anna Erdiawan Portfolio' }
      ],
    link: [
      { rel: 'shortcut icon', href: './static/favicon.png' } 
    ]
  }
}
</script>