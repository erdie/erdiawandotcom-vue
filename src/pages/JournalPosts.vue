<template>
    <div>
        <Navigation></Navigation>
        <NavigationMobile></NavigationMobile>
        <section id="blog">
            <div class="container">
                <div class="blog item">
                    <div class="d:item__4 t:item__6 m:item__12" v-for="post in posts" :key="post.id">
                        <!-- <a v-bind:href="post.link"> -->
                            <div class="blog-card">
                                <router-link :to="'/journal/'+post.id">
                                <img v-bind:src="post.jetpack_featured_media_url" alt="">
                                </router-link>
                                <div class="blog-title">
                                    <h2>{{post.title.rendered}}</h2>
                                </div>
                                <div class="blog-author">
                                    <small><strong>Posted on </strong> {{post.date_gmt.substring(0,10)}}</small>
                                </div>
                                <div class="blog-desc">
                                    <p>{{post.excerpt.rendered.substring(0,200)+".."}}</p>
                                </div>
                            </div>
                        <!-- </a> -->
                    </div>
                </div>
            </div>
        </section>
        <Pagination :pagination="pagination"
                    @prev="--postsData.page; getPosts();"
                    @next="postsData.page++; getPosts();">
        </Pagination>
        <Footer></Footer>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import NavigationMobile from '../components/Navigation-Mobile.vue'
import Journal from '../components/Journal.vue'
import Pagination from '../components/Pagination.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navigation,
        NavigationMobile,
        Journal,
        Pagination,
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
            },
            pagination: {
                prevPage: '',
                nextPage: '',
                totalPages: '',
                from: '',
                to: '',
                total: '',
            },
        }
    },
    methods: {
        getPosts() {
            axios.get(this.postsUrl, {params: this.postsData})
                .then((response) => {
                    this.posts = response.data;
                    this.configPagination(response.headers);
                })
                .catch( (error) => {
                    console.log(error);
                });
        },
        configPagination(headers) {
            this.pagination.total = +headers['x-wp-total'];
            this.pagination.totalPages = +headers['x-wp-totalpages'];
            this.pagination.from = this.pagination.total ? ((this.postsData.page - 1) * this.postsData.per_page) + 1 : ' ';
            this.pagination.to = (this.postsData.page * this.postsData.per_page) > this.pagination.total ? this.pagination.total : this.postsData.page * this.postsData.per_page;
            this.pagination.prevPage = this.postsData.page > 1 ? this.postsData.page : '';
            this.pagination.nextPage = this.postsData.page < this.pagination.totalPages ? this.postsData.page + 1 : '';
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