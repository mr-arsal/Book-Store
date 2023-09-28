<template>
    <div>
        <!-- Navbar Component -->
        <NavBar></NavBar>

        <!-- SingleProductDetails Component -->


        <div>
            <v-container class=" mb-6">
                <v-row align="center" no-gutters style="height: 100vh;" v-if="bookDetails"> 
                    <v-col cols="12" xs="12" md="6" lg="6">
                        <v-sheet class="pa-2 ma-2">
                            <h1>{{ bookDetails.title }}</h1>
                        </v-sheet>
                        <v-sheet class="pa-2 ma-2">
                            {{ bookDetails.description }}
                        </v-sheet>

                        <v-sheet class="pa-2 ma-2 text-h5">
                            <strong>Price:</strong> {{ bookDetails.author }}
                        </v-sheet>

                        <v-sheet class="pa-2 ma-2 text-h5">
                            <strong>Price:</strong> {{ bookDetails.price }}
                        </v-sheet>
                        <v-btn prepend-icon="mdi-cart" class="mt-8" color="teal-darken-3 me-3">Add to cart</v-btn>
                        <v-btn prepend-icon="mdi-heart" class="mt-8" color="teal-darken-3 me-3">Purchase</v-btn>
                    </v-col>
                    <v-col cols="12" xs="12" md="6" lg="6">
                        <v-img class="align-end text-white" height="400"
                            :src="bookDetails.cover_image_url"
                            cover>
                        </v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <!-- Product Reviews and Rating Component -->

        <BookReviews></BookReviews>

        <!-- Footer Component -->
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import SingleProductDetails from "@/components/SingleProductDetails.vue";
import Footer from "@/components/Footer.vue";
import BookReviews from "@/components/BookReviews.vue";

export default {
    name: 'ProducDetails',
    props: ['id'],
    components: {
        NavBar,
        // SingleProductDetails,
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