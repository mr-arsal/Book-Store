<template>
    <v-container>
        <v-row>
            <!-- Left Column for Reviews -->
            <v-col cols="6">
                <h1 style="text-decoration: underline; text-decoration-color: #00695C">Reviews</h1>
                <v-list>
                    <v-list-item v-for="(review, index) in reviews" :key="index">
                        <v-list-item-title>
                            <strong>{{ review.title }}</strong>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
                <div v-if="reviews.length === 0">
                    <p>No reviews yet.</p>
                </div>
                <!-- Option to Add a Review -->
                <v-form @submit.prevent="addReview">
                    <v-text-field v-model="newReview.title" label="Review Title" required></v-text-field>
                    <v-rating v-model="newReview.rating" background-color="grey" color="teal-darken-3"
                        :half-increments="true" label="Rating"></v-rating>
                    <div><v-btn type="submit" color="teal-darken-3" variant="outlined">Submit Review</v-btn></div>
                </v-form>
            </v-col>

            <!-- Right Column for Ratings -->
            <v-col cols="4">
                <h1 style="text-decoration: underline; text-decoration-color: #00695C">Ratings</h1>
                <!-- Display Average Rating -->
                <div>
                    <strong>Average Rating:</strong> {{ calculateAverageRating().toFixed(2) }} / 5
                </div>
                <!-- Display Rating Stars (You can use Vuetify's v-rating component here) -->
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            reviews: [
                {
                    title: "I love this product! It's amazing.",
                    rating: 5,
                },
                {
                    title: "It's good but could use some improvements.",
                    rating: 3,
                },
                {
                    title: "I expected more from this product.",
                    rating: 2,
                },
            ],
            newReview: {
                title: "",
                rating: 0,
            },
            averageRating: 0,
        };
    },
    methods: {
        addReview() {
            if (this.newReview.title && this.newReview.rating > 0) {
                this.reviews.push({
                    title: this.newReview.title,
                    rating: this.newReview.rating,
                });
                this.newReview.title = "";
                this.newReview.rating = 0;
            }
        },
        calculateAverageRating() {
            if (this.reviews.length === 0) return 0;
            const totalRating = this.reviews.length;
            const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
            return sum / totalRating;
        },
    },
};
</script>