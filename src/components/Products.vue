<template>
    <div>

        <!-- Navbar Component -->

        <NavBar></NavBar>

        <!-- Categories -->

        <v-row>
            <v-col cols="4" v-for="(card, i) in cards" :key="i" class="mt-7">
                <v-card class="mx-auto elevation-5" max-width="350">
                    <v-img class="align-end text-white" height="400" :src="card.image" cover>
                    </v-img>

                    <v-card-text class="card-title card-title-size">
                        <div><strong>{{ card.title }}</strong></div>
                    </v-card-text>
                    <v-card-text class="pb-0">
                        <div class="card-subheadings"><Strong>Price: </Strong>{{ card.price }}</div>
                    </v-card-text>
                    <v-card-text class="pb-5 pt-4">
                        <div class="card-subheadings"><Strong>Description: </Strong>{{ card.text }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn prepend-icon="mdi-cart" color="teal-darken-3 ma-2" variant="tonal">
                            Add to cart
                        </v-btn>
                        <v-btn color="teal-darken-3 ma-2" variant="tonal">
                            Details
                        </v-btn>

                        <v-icon class="card-heart-icon">mdi-heart</v-icon>

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


export default {
    name: "Categories",
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            cards: [
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9780593539279.jpg?height=500&v=v2-106211ed3da7d63be3dc17f3fca6fd89",

                    title: "Drama Free",
                    price: "$18",
                    text: "Card 1 Text Here...",
                },
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9781250859914.jpg?height=500&v=v2-c0550c118665c0ff2b2cd96638dcca56",

                    title: "No One Can Know",
                    price: "$22",
                    text: "Card 2 Text Here...",
                },
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9781250799425.jpg?height=500&v=v2-78ce685ce2858fffbdc13fca0ff22994",

                    title: "Orignal Sins",
                    price: "$18",
                    text: "Card 2 Text Here...",
                },
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9780063159488.jpg?height=500&v=v2-a81d803fedc0bc19490c0add00000000",

                    title: "Good Inside",
                    price: "$24",
                    text: "Card 2 Text Here...",
                },
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9780306829758.jpg?height=500&v=v2-7895ae85609a4d90c098130a704db59b",

                    title: "Super Powers",
                    price: "$12",
                    text: "Card 2 Text Here...",
                },
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9780814348420.jpg?height=500&v=v2-d999023305a1fe785e7fec809e7492e8",
                    title: "Memoir Trees",
                    price: "$15",
                    text: "Card 2 Text Here...",
                },
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9781400033416.jpg?height=500&v=v2",
                    title: "Beloved",
                    price: "$19",
                    text: "Card 2 Text Here...",
                },
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9781728248448.jpg?height=500&v=v2-dd58d903a7ca5a9cdbafcf8fd435b144",
                    title: "Widowland",
                    price: "$18",
                    text: "Card 2 Text Here...",
                },
                {
                    image:
                        "https://images-us.bookshop.org/ingram/9781953387165.jpg?height=500&v=v2-309db63c8144138fdef025dc11c37c3b",
                    title: "My Volcano",
                    price: "$25",
                    text: "Card 2 Text Here...",
                },
                // Add more card objects as needed

            ],
        };
    },
}

</script>


<style scoped>
/* .card-img-top {
    width: 100%;
    height: 20vw;
    object-fit: cover;
} */
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
</style>