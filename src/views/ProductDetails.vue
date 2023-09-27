<template>
    <div>
        <!-- Navbar Component -->
        <NavBar></NavBar>

        <!-- SingleProductDetails Component -->
        <SingleProductDetails></SingleProductDetails>

        <!-- Product Reviews and Rating Component -->

        <BookReviews></BookReviews>

        <!-- Footer Component -->
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SingleProductDetails from "@/components/SingleProductDetails.vue";
import Footer from "@/components/Footer.vue";
import BookReviews from "@/components/BookReviews.vue";

export default {
    name: 'ProducDetails',
    props: ['id'],
    components: {
        NavBar,
        SingleProductDetails,
        Footer,
        BookReviews
    },
    computed: {
        bookDetails() {
            return this.$store.state.bookDetails;
        }
    },
    mounted() {
        this.$store.dispatch('getBookDetails', this.id)
    },
}

</script>