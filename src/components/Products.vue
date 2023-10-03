<template>
    <div>

        <!-- Navbar Component -->

        <NavBar></NavBar>

        <!-- Categories -->

        <v-row class="bg-image">
            <v-col cols="3" v-for="book of books" :key="book.id" class="mt-7">
                <v-card class="mx-auto elevation-5" max-width="350">
                    <v-img class="align-end text-white" height="400" :src="book.cover_image_url" cover>
                    </v-img>

                    <v-card-text class="card-title card-title-size"
                        style="text-decoration: underline; text-decoration-color: #00695C">
                        <div><strong>{{ book.title }}</strong></div>
                    </v-card-text>
                    <v-card-text class="pb-0">
                        <div class="card-subheadings"><Strong>Price: </Strong>{{ book.price }}</div>
                    </v-card-text>
                    <v-card-text class="pb-5 pt-4">
                        <div class="card-subheadings"><Strong>Description: </Strong>{{ book.description }}</div>
                    </v-card-text>
                    <v-card-text id="book-author">
                        <div class="card-subheadings"><Strong>Author: </Strong>{{ book.author }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn prepend-icon="mdi-cart" color="teal-darken-3 ma-2" variant="tonal" @click="snackbar = true">
                            Add to cart
                        </v-btn>

                        <!-- Snackbar -->

                        <v-snackbar v-model="snackbar" :timeout="timeout">
                            {{ text }}

                            <template v-slot:actions>
                                <v-btn color="blue" variant="text" @click="snackbar = false">
                                    Keep Shopping
                                </v-btn>
                            </template>
                        </v-snackbar>

                        <!-- ------------ -->

                        <router-link :to="{ name: 'PoductDetails', params: { id: book.id } }" class="text-decoration-none">
                            <v-btn color="teal-darken-3 ma-2" variant="tonal">
                                Details
                            </v-btn>
                        </router-link>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- Footer Component -->

        <Footer></Footer>

    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { allBooks } from "@/store/actions";


export default {
    name: "Categories",
    components: {
        NavBar,
        Footer
    },
    data: () => ({
        snackbar: false,
        text: 'Book has added to cart.',
        timeout: 2000,
    }),
    computed: {
        books() {
            return this.$store.state.books;
        }
    },
    mounted() {
        this.$store.dispatch('allBooks')
    },
}

</script>


<style scoped>
.card-title-size {
    font-size: 20px;
    padding: 0 0 8x;
}

.card-subheadings {
    font-size: 16px;
}

.card-heart-icon {
    color: #00695C;
}

#book-author {
    padding-top: 0;
}

.bg-image {
    /* background-image: url('https://media.istockphoto.com/id/985284752/photo/abstract-blurred-books-manuals-and-textbooks-on-bookshelves-in-library-book-store-at-home-for.jpg?s=612x612&w=0&k=20&c=lQIgpDcJ_hI7Y_6ZwgiUEuymtUp27J2E60oGsB4NiCg='); */
    background-repeat: no-repeat;
    background-size: cover;
}
</style>