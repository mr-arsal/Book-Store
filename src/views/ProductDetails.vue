<template>
    <div>
        <!-- Navbar Component -->
        <NavBar></NavBar>

        <!-- SingleProductDetails Component -->

        <div>
            <v-container class=" mb-6">
                <v-row align="center" no-gutters style="height: 100vh;" v-if="bookDetails">
                    <v-col cols="12" xs="12" md="8" lg="8">
                        <v-sheet class="pa-2 ma-2" style="text-decoration: underline; text-decoration-color: #00695C">
                            <h1>{{ bookDetails.title }}</h1>
                        </v-sheet>
                        <v-sheet class="pa-2 ma-2">
                            {{ bookDetails.description }}
                        </v-sheet>

                        <v-sheet class="pa-2 ma-2 text-h5">
                            <strong>Author:</strong> {{ bookDetails.author }}
                        </v-sheet>

                        <v-sheet class="pa-2 ma-2 text-h5">
                            <strong>Price:</strong> $ {{ bookDetails.price }}
                        </v-sheet>
                        <!-- Cart Dialoge Button -->
                        <v-btn prepend-icon="mdi-cart" class="mt-8" color="teal-darken-3 me-3" @click="openCartDialog">
                            Add to cart</v-btn>

                        <!-- Purchase Dialoge Button -->
                        <v-btn prepend-icon="mdi-heart" class="mt-8" color="teal-darken-3 me-3"
                            @click="openPurchaseDialog">Buy Now</v-btn>
                    </v-col>
                    <v-col cols="12" xs="12" md="4" lg="4">
                        <v-img class="align-end text-white" height="550" :src="bookDetails.cover_image_url">
                        </v-img>
                    </v-col>
                </v-row>

            </v-container>
        </div>

        <!-- Purchasae Dialog -->
        <v-dialog v-model="isPurchaseDialogOpen" width="800">
            <template v-slot:default>
                <v-card>
                    <v-card-title>Book Detials</v-card-title>
                    <v-row>
                        <v-col cols="6">
                            <v-card-text>
                                <h1>{{ bookDetails.title }}</h1>
                            </v-card-text>
                            <v-card-text>
                                {{ bookDetails.description }}
                            </v-card-text>
                            <v-card-text>
                                <strong>Author:</strong> {{ bookDetails.author }}
                            </v-card-text>
                            <v-card-text>
                                <strong>Price:</strong> $ {{ bookDetails.price }}
                            </v-card-text>
                            <!-- Buttons of increment and decrement -->

                            <v-btn @click="incrementPrice" color="teal-darken-3 ms-3 me-5">+</v-btn>
                            <v-btn @click="decrementPrice" color="teal-darken-3 ms-5 me-3">-</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-img class="align-end text-white" height="300" :src="bookDetails.cover_image_url">
                            </v-img>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn prepend-icon="mdi-close" class="mt-8" color="teal-darken-3 me-3" @click="closePurchaseDialog"
                            text>Close</v-btn>
                        <router-link to="/checkout"><v-btn prepend-icon="mdi-cart" class="mt-8" color="teal-darken-3 me-3"
                                text>Checkout</v-btn></router-link>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

        <!-- Add To Cart Dialogue -->

        <v-dialog v-model="isCartDialogOpen" width="500">

            <template v-slot:default>
                <v-card>
                    <v-card-title>{{ bookDetails.title }} Is Available!</v-card-title>

                    <v-row>
                        <v-col cols="6">
                            <v-card-text>
                                {{ bookDetails.title }} Is Now In Your Cart.
                            </v-card-text>
                        </v-col>
                        <v-col cols="6">
                            <v-img class="align-end text-white" height="300" :src="bookDetails.cover_image_url">
                            </v-img>
                        </v-col>
                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="closeCartDialog" text color="teal-darken-3 me-3">Keep Shopping</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

        <!-- Product Reviews and Rating Component -->

        <BookReviews></BookReviews>

        <!-- Footer Component -->
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import BookReviews from "@/components/BookReviews.vue";

export default {
    name: 'ProducDetails',
    props: ['id'],
    data() {
        return {
            isCartDialogOpen: false,
            isPurchaseDialogOpen: false,
        };
    },
    methods: {
        // Cart Dialoge

        openCartDialog() {
            this.isCartDialogOpen = true;
        },
        closeCartDialog() {
            this.isCartDialogOpen = false;
        },

        // Purcahse Dialoge
        openPurchaseDialog() {
            this.isPurchaseDialogOpen = true;
        },
        closePurchaseDialog() {
            this.isPurchaseDialogOpen = false;
        },

        // Prices
        incrementPrice() {
            this.bookDetails.price *= 2;
        },
        decrementPrice() {
            this.bookDetails.price /= 2;
        }
    },
    components: {
        NavBar,
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

<style></style>