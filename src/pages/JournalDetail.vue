<template>
    <div>
        <Navigation></Navigation>
        <NavigationMobile></NavigationMobile>
        <section id="blog-detail">
            <div class="container">
                <div class="breadcrumb">
                    <ul>
                        <li>Home</li>
                        <li>Journal</li>
                        <li>Framework JavaScript yang Cocok dengan Kepribadian Kamu</li>
                    </ul>
                </div>
                <div class="blog-title">
                    <div class="title">
                        <h1>Framework JavaScript yang Cocok dengan Kepribadian Kamu</h1>
                    </div>
                </div>
                <div class="blog-author">
                    <div>
                        <p>Anna Erdiawan</p>
                    </div>
                    <div>
                        <p>Published at 1 October 2019</p>
                    </div>
                </div>
                <div class="blog-image">
                    <img src="../assets/img/code.jpg" alt="">
                </div>
                <div class="blog-article">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas congue quisque egestas diam in arcu cursus euismod. Elementum curabitur vitae nunc sed velit dignissim sodales. Est lorem ipsum dolor sit amet. At consectetur lorem donec massa sapien. Sagittis orci a scelerisque purus semper eget duis at. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Tincidunt tortor aliquam nulla facilisi cras. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Amet nisl suscipit adipiscing bibendum est. Diam ut venenatis tellus in metus vulputate.</p>
                    <p>Eleifend mi in nulla posuere. Diam donec adipiscing tristique risus nec feugiat. Consectetur purus ut faucibus pulvinar elementum integer. Quisque non tellus orci ac auctor augue mauris augue neque. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Velit euismod in pellentesque massa placerat duis. Urna et pharetra pharetra massa massa. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Vel pharetra vel turpis nunc eget. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Id diam vel quam elementum pulvinar etiam. Massa sed elementum tempus egestas sed sed risus pretium quam. Mattis aliquam faucibus purus in massa. Morbi tristique senectus et netus et malesuada fames ac turpis. Faucibus in ornare quam viverra. Sit amet massa vitae tortor condimentum lacinia quis vel. Scelerisque fermentum dui faucibus in ornare quam viverra. Sed elementum tempus egestas sed sed. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae.</p>
                    <p>Nisl pretium fusce id velit ut tortor pretium viverra. Porttitor leo a diam sollicitudin tempor id. Egestas diam in arcu cursus euismod quis viverra. Aliquam sem et tortor consequat id porta nibh venenatis cras. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sed libero enim sed faucibus turpis in eu. Pretium fusce id velit ut tortor. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Vivamus arcu felis bibendum ut tristique et egestas quis. Felis bibendum ut tristique et egestas. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Venenatis urna cursus eget nunc. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Elementum tempus egestas sed sed risus pretium quam vulputate. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Rhoncus aenean vel elit scelerisque mauris.</p>
                    <p>Id ornare arcu odio ut sem. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Cursus eget nunc scelerisque viverra. Bibendum enim facilisis gravida neque convallis. Dignissim sodales ut eu sem. Purus in massa tempor nec. Non nisi est sit amet. Eu nisl nunc mi ipsum faucibus vitae. Vel pretium lectus quam id leo in. Lobortis feugiat vivamus at augue eget arcu. Bibendum arcu vitae elementum curabitur vitae nunc. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Et ultrices neque ornare aenean euismod. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Egestas sed tempus urna et pharetra pharetra. Vehicula ipsum a arcu cursus.</p>
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
    }
}
</script>