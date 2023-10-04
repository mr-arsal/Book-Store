<template>
    <!-- Admin Navbar -->
    <AdminNav></AdminNav>

    <!-- Edit Book -->
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" sm="4">
                <div class="text-center text-h4 font-weight-medium" style="margin: 30px;">Edit <span
                        style="color: #00695C;">Book</span></div>
                <form @submit.prevent="updateBook">
                    <v-text-field v-model="title" label="Title"></v-text-field>
                    <v-text-field v-model="author" label="Author"></v-text-field>
                    <v-text-field v-model="price" label="Price"></v-text-field>
                    <v-text-field v-model="description" label="Description"></v-text-field>
                    <v-text-field v-model="cover_image_url" label="Image url"></v-text-field>
                    <v-btn type="submit" color="teal-darken-3">
                        Edit Book
                    </v-btn>
                </form>
            </v-col>
        </v-row>

        <!-- Snackbar to show success message -->
        <v-snackbar v-model="showSnackbar" :timeout="snackbarTimeout">
            {{ snackbarMessage }}
        </v-snackbar>
    </v-container>
</template>
  
<script>
import axios from 'axios';
import AdminNav from "@/components/AdminNav.vue";

export default {
    name: "EditBook",
    components: {
        AdminNav,
    },
    data() {
        return {
            title: '',
            author: '',
            price: '',
            description: '',
            cover_image_url: '',

            showSnackbar: false,
            snackbarMessage: "Your Book Has Been Updated.",
            snackbarTimeout: 4000,
        };
    },
    mounted() {
        const userToken = localStorage.getItem('token');
        const book_id = this.$route.params.id;

        if (userToken) {
            axios.get(`http://10.0.10.211:3300/api/showbooks/${book_id}`, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
                .then((response) => {
                    console.log(response.data)
                    this.title = response.data.title;
                    this.author = response.data.author;
                    this.price = response.data.price;
                    this.description = response.data.description;
                    this.cover_image_url = response.data.cover_image_url;
                })
                .catch((error) => {
                    console.error('Error fetching profile data:', error);
                });
        } else {
            console.warn('User token not found in local storage. Please log in.');
        }
    },

    methods: {
        updateBook() {
            const userToken = localStorage.getItem('token');
            const book_id = this.$route.params.id;

            if (!userToken) {
                console.warn('User token not found in local storage. Please log in.');
                return;
            }

            const bookData = {
                title: this.title,
                author: this.author,
                price: this.price,
                desccription: this.description,
                cover_image_url: this.cover_image_url,
            };

            console.log(bookData);

            axios.put(`http://10.0.10.211:3300/api/updatebooks/${book_id}`, bookData, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
                .then((response) => {
                    console.log('Book updated successfully:', response.data.message);
                })
                .catch((error) => {
                    console.error('Error updating book:', error);
                });
            this.showSnackbar = true;
        },
    },

};
</script>
  
