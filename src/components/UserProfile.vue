<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" sm="4">
                <div class="text-center text-h4 font-weight-medium" style="margin: 30px;">Your <span
                        style="color: #00695C;">Profile</span></div>

                <!-- User Profile -->
                <form @submit.prevent="updateProfile">
                    <v-text-field v-model="name" label="Name"></v-text-field>
                    <v-text-field v-model="email" label="Email"></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                    <v-btn type="submit" color="teal-darken-3">
                        Edit Profile
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

export default {
    data() {
        return {
            name: '',
            email: '',
            showSnackbar: false,
            snackbarMessage: "Your Profile Has Been Updated.",
            snackbarTimeout: 4000,
        };
    },
    mounted() {
        const userToken = localStorage.getItem('token');

        if (userToken) {
            axios.get('http://10.0.10.211:3300/api/user/profile', {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
                .then((response) => {
                    // console.log(response.data)
                    this.name = response.data.name;
                    this.email = response.data.email;
                })
                .catch((error) => {
                    console.error('Error fetching profile data:', error);
                });
        } else {
            console.warn('User token not found in local storage. Please log in.');
        }
    },

    methods: {
        updateProfile() {
            const userToken = localStorage.getItem('token');

            if (!userToken) {
                console.warn('User token not found in local storage. Please log in.');
                return;
            }

            const userData = {
                name: this.name,
                email: this.email,
                password: this.password,
            };

            axios.put('http://10.0.10.211:3300/api/updateUser', userData, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
                .then((response) => {
                    console.log('User updated successfully:', response.data.message);
                })
                .catch((error) => {
                    console.error('Error updating user profile:', error);
                });
            // Show the snackbar
            this.showSnackbar = true;
        },
    },
};
</script>
  
<style>
/* Add scoped styles here */
</style>
  