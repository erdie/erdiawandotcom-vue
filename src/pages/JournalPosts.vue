<template>
    <div>
        <Navigation></Navigation>
        <NavigationMobile></NavigationMobile>
        <section id="blog">
            <div class="container">
                <div class="blog item">
                    <div class="d:item__4 t:item__6 m:item__6" v-for="post in posts" :key="post.id">
                        <a v-bind:href="post.link">
                            <div class="blog-card">
                                <img v-bind:src="post.jetpack_featured_media_url" alt="">
                                <div class="blog-title">
                                    <h2>{{post.title.rendered}}</h2>
                                </div>
                                <div class="blog-author">
                                    <small>{{post.date_gmt}}</small>
                                </div>
                                <div class="blog-desc">
                                    <p>{{post.excerpt.rendered.substring(0,200)+".."}}</p>
                                </div>
                            </div>
                        </a>
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
import Journal from '../components/Journal.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navigation,
        NavigationMobile,
        Journal,
        Footer
    },
    mounted() {
        this.getPosts()
    },
    data() {
        return {
            postsUrl: 'https://chromplex.com/wp-json/wp/v2/posts',
            posts: [],
            postsData: {
                per_page: 9,
                page: 1
            }
        }
    },
    methods: {
        getPosts() {
            axios.get(this.postsUrl, {params: this.postsData})
                .then((response) => {
                    this.posts = response.data;
                })
                .catch( (error) => {
                    console.log(error);
                });
        }
    },
    metaInfo: {
        title: 'Anna Erdiawan - Journal',
        titleTemplate: null,
        meta: [
            { name: 'description', content: 'Anna Erdiawan Personal Site, Anna Erdiawan Linkedin, Anna Erdiawan Resume, Anna Erdiawan Portfolio, Anna Erdiawan Journal' }
        ],
        link: [
            { rel: 'shortcut icon', href: './static/favicon.png' } 
        ]
    }
}
</script>