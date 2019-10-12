<template>
    <div>
        <Navigation></Navigation>
        <NavigationMobile></NavigationMobile>
        <Journal></Journal>
        <Footer></Footer>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import NavigationMobile from '../components/Navigation-Mobile.vue'
import Journal from '../components/Journal.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navigation,
        NavigationMobile,
        Journal,
        Footer
    }
}
</script>