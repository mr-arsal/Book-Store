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
  