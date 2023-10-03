<template>
    <!-- Navbar Component -->

    <NavBar></NavBar>

    <v-container class="mt-3 mb-3">
        <v-table class="h-screen">
            <thead>
                <tr>
                    <th class="text-left">No</th>
                    <th class="text-left">Book Id</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-left">Price</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book, index) in cartBook" :key="book.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ book.book_id }}</td>
                    <td>{{ book.quantity }}</td>
                    <td>{{ book.price }}</td>
                    <td class="text-center">
                        <v-btn color="error" class="mr-2" @click="deleteBook(book.id)">Delete</v-btn>
                        <v-btn color="teal-darken-3">Purchase</v-btn>
                    </td>
                </tr>

            </tbody>
        </v-table>

        <!-- Show success message -->

        <v-snackbar v-model="showSnackbar" :timeout="snackbarTimeout">
            {{ snackbarMessage }}
        </v-snackbar>
    </v-container>

    <!-- Footer Component -->
    <Footer></Footer>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Categories",
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            showSnackbar: false,
            snackbarMessage: "Book removed from the cart.",
            snackbarTimeout: 4000,
        }
    },
    methods: {
        deleteBook(cartId) {
            this.$store.dispatch('deleteFromCart', cartId);
            this.showSnackbar = true;
        }
    },
    computed: {
        cartBook() {
            return this.$store.state.cartBook;
        }
    },
    mounted() {
        this.$store.dispatch('cartBooks')
    },
}


</script>