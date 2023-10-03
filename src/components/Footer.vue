<template>
    <v-footer class="footer-color text-center d-flex flex-column">
        <div>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 text-white mt-7 mb-7" :icon="icon" variant="text"></v-btn>
        </div>

        <v-row>

            <!-- Left-aligned content -->
            <v-col cols="12" md="6">
                <div class="pt-0 text-white mt-5 mb-5">
                    Your one-stop destination for a world of books. Explore a vast collection of literature, fiction,
                    non-fiction,
                    and more. Find your next great read with us.
                </div>
            </v-col>

            <!-- Right-aligned Newsletter Section -->

            <v-col cols="12" md="6">
                <div class="text-white text-right">
                    <!-- <h2>Subscribe to Our Newsletter</h2> -->
                    <v-form @submit.prevent="subscribeToNewsletter">

                        <v-text-field v-model="email" label="Subscribe to Our Newsletter" required outlined dense
                            class="text-white"></v-text-field>

                        <v-btn type="submit" color="teal" dark outlined>
                            Subscribe
                        </v-btn>
                    </v-form>
                </div>
            </v-col>
        </v-row>

        <v-divider></v-divider>

        <div class="text-white mt-5">
            {{ new Date().getFullYear() }} — <strong>Book Store</strong>
        </div>
    </v-footer>
</template>
  
<script>
export default {
    data() {
        return {
            icons: ['mdi-facebook', 'mdi-twitter', 'mdi-instagram', 'mdi-linkedin'],
            email: '',
        };
    },
    methods: {
        subscribeToNewsletter() {
            if (this.email) {
                alert(`Subscribed with email: ${this.email}`);
                this.email = '';
            }
        },
    },
};
</script>
  
<style scoped>
.footer-color {
    margin-top: 20px;
    background-color: #00695C;
}
</style>
  