<template>
    <div>
        <Hero></Hero>
        <Portfolio></Portfolio>
        <Footer></Footer>
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Portfolio from '../components/Portfolio.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Hero,
        Portfolio,
        Footer
    },
    metaInfo: {
      title: 'Anna Erdiawan Personal Site',
      titleTemplate: null,
      meta: [
            { name: 'description', content: 'Anna Erdiawan Personal Site, Anna Erdiawan Linkedin, Anna Erdiawan Resume, Anna Erdiawan Portfolio' }
        ]
    }
}
</script>