<!-- <template>
    
    <div class="text-center mb-5 mt-7 text-h5 font-weight-medium"
        style="text-decoration: underline; text-decoration-color: #00695C">Average Rating of Book 3/5</div>
    <div class="text-center mb-5 mt-7 text-h4 font-weight-medium"
        style="text-decoration: underline; text-decoration-color: #00695C">Reviews</div>
</template> -->


<template>
    <v-container>
        <div class="text-center mb-5 mt-7 text-h5 font-weight-medium"
            style="text-decoration: underline; text-decoration-color: #00695C">
            Average Rating of Book {{ averageRating }}/5
        </div>
        <div class="text-center">
            <v-rating v-model="userRating" color="#00695C" @input="updateAverageRating"></v-rating>
        </div>

        <div class="text-center mb-5 mt-7 text-h4 font-weight-medium"
            style="text-decoration: underline; text-decoration-color: #00695C">
            Reviews
        </div>
        <v-row>
            <v-col xs="12" md="8" lg="8">
                <v-text-field class="w-50" label="Book Review Here" required></v-text-field>
            </v-col>
            <v-col>

            </v-col>
        </v-row>

    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            userRating: 0, // The user's selected rating
            averageRating: 3, // Initialize with an average rating (you can set it to your actual initial value)
        };
    },
    methods: {
        updateAverageRating(newRating) {
            // Update the average rating when a new rating is selected
            this.averageRating = newRating;
        },
    },
};
</script>
  