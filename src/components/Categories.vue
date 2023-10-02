<template>
    <div>
        <NavBar></NavBar>

        <!-- Categories -->

        <v-row>
            <v-col v-for="(slide, i) in slides" :key="i" class="mt-7">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" :src="slide.imageSrc" cover>
                        <v-card-title>{{ slide.heading }}</v-card-title>
                    </v-img>

                    <v-card-text>
                        <div>{{ slide.heading }}</div>

                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="teal-darken-3">
                            Explore
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>


    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";


export default {
    name: "Categories",
    components: {
        NavBar,
    },
    data() {
        return {
            slides: [{
                imageSrc: "https://images.pexels.com/photos/4866041/pexels-photo-4866041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image URL
                heading: "Discover Bestsellers",
                text: `Explore our selection of top-rated books that readers can't get enough.`
            },
            {
                imageSrc: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image URL
                heading: "Explore Genre Classics",
                text: "Journey through the ages and across genres with our collection of timeless literary classics."
            },
            {
                imageSrc: "https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image URL
                heading: "New Arrivals of Book",
                text: "Stay up-to-date with the latest additions to our bookshelves."
            },
            ],
        };
    },
}

</script>