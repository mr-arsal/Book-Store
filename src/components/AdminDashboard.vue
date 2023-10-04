<template>
    <!-- Admin Navbar -->
    <AdminNav></AdminNav>

    <!-- Books -->
    <v-row>
        <v-col cols="3" v-for="book of books" :key="book.id" class="mt-7">
            <v-card class="mx-auto elevation-5" max-width="350">
                <v-img class="align-end text-white" height="400" :src="book.cover_image_url" cover>
                </v-img>
                <v-card-text class="card-title card-title-size"
                    style="text-decoration: underline; text-decoration-color: #00695C">
                    <div><strong>{{ book.title }}</strong></div>
                </v-card-text>
                <v-card-text class="pb-0">
                    <div class="card-subheadings"><Strong>Price:</Strong> ${{ book.price }}</div>
                </v-card-text>
                <v-card-text class="pb-5 pt-4">
                    <div class="card-subheadings"><Strong>Description: </Strong>{{ book.description }}</div>
                </v-card-text>
                <v-card-text id="book-author">
                    <div class="card-subheadings"><Strong>Author: </Strong>{{ book.author }}</div>
                </v-card-text>

                <v-card-actions>
                    <v-btn @click="deleteBook(book.id)" prepend-icon="mdi-cart" color="teal-darken-3 ma-2" variant="tonal">
                        Delete
                    </v-btn>

                    <router-link :to="{ name: 'EditBook', params: { id: book.id } }" class="text-decoration-none">
                        <v-btn color="teal-darken-3 ma-2" variant="tonal">
                            Edit Book
                        </v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </v-col>

        <!-- Show success message -->

        <v-snackbar v-model="showSnackbar" :timeout="snackbarTimeout">
            {{ snackbarMessage }}
        </v-snackbar>
    </v-row>
</template>
  
<script>

import AdminNav from "@/components/AdminNav.vue";

export default {
    name: "AdminDashboard",
    components: {
        AdminNav,
    },
    data() {
        return {
            showSnackbar: false,
            snackbarMessage: "Book has been deleted.",
            snackbarTimeout: 4000,
        }
    },
    computed: {
        books() {
            return this.$store.state.books;
        }
    },
    mounted() {
        this.$store.dispatch('allBooks')
    },
    methods: {
        deleteBook(bookId) {
            this.$store.dispatch('deleteBook', bookId);
            this.showSnackbar = true;
        },
    }
};
</script>