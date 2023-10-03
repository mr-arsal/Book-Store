<template>
    <AdminNav></AdminNav>

    <v-container>
        <form @submit.prevent="submit">
            <v-text-field v-model="title" label="Title"></v-text-field>
            <v-text-field v-model="author" label="Author"></v-text-field>
            <v-text-field v-model="price" label="Price"></v-text-field>
            <v-text-field v-model="description" label="Description"></v-text-field>
            <v-text-field v-model="cover_image_url" label="Image url"></v-text-field>
            <v-btn class="me-4" type="submit" prepend-icon="mdi-login" color="teal-darken-3 me-3">
                Add Book
            </v-btn>
        </form>

        <!-- Snackbar to show success message -->
        <v-snackbar v-model="showSnackbar" :timeout="snackbarTimeout">
            {{ snackbarMessage }}
        </v-snackbar>
    </v-container>
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
            title: "",
            author: "",
            price: "",
            description: "",
            cover_image_url: "",
            showSnackbar: false,
            snackbarMessage: "Book has been added.",
            snackbarTimeout: 4000,
        };
    },
    methods: {
        submit() {
            const bookData = {
                title: this.title,
                author: this.author,
                price: this.price,
                description: this.description,
                cover_image_url: this.cover_image_url,
            };
            this.$store.dispatch('addBook', bookData);

            // Clear the input fields
            this.title = "";
            this.author = "";
            this.price = "";
            this.description = "";
            this.cover_image_url = "";

            // Show the snackbar
            this.showSnackbar = true;
        },
    },
};
</script>
  