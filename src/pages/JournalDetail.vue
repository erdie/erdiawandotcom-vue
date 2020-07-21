<template>
    <div>
        <Navigation></Navigation>
        <NavigationMobile></NavigationMobile>
        <section id="blog-detail">
            <div class="container">
                <div>
                    <div class="breadcrumb">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/journal">Journal</a></li>
                            <li><a v-bind:href="content.id">{{content.title.rendered}}</a></li>
                        </ul>
                    </div>
                    <div class="blog-title">
                        <div class="title">
                            <h1>{{content.title.rendered}}</h1>
                        </div>
                    </div>
                    <div class="blog-author">
                        <div>
                            <!-- <p>Anna Erdiawan</p> -->
                        </div>
                        <div>
                            <p>Published at {{content.date_gmt.substring(0,10)}}</p>
                        </div>
                    </div>
                    <div class="blog-image">
                        <img v-bind:src="content.jetpack_featured_media_url" alt="">
                    </div>
                    <div class="blog-article" v-html="content.content.rendered">
                        {{content.content.rendered}}
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import NavigationMobile from '../components/Navigation-Mobile.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navigation,
        NavigationMobile,
        Footer
    },
    mounted() {
        this.getDetailPosts()
    },
    data() {
        return {
            content: []
        }
    },
    methods: {
        getDetailPosts() {
            axios.get(`https://chromplex.com/wp-json/wp/v2/posts/${this.$route.params.id}`)
                .then((response) => {
                    this.content = response.data;
                })
                .catch( (error) => {
                    console.log(error);
            })
        }
    }
}
</script>