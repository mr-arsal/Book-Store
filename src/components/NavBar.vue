<template>
    <v-app-bar color="teal-darken-3">
        <!-- Removed the v-app-bar-nav-icon -->
        <v-toolbar-title class="text-center"><router-link to="/" class="text-decoration-none text-white">Book
                Store</router-link></v-toolbar-title>
        <template v-slot:extension>
            <v-tabs class="mx-auto" align-with-title>
                <v-tab prepend-icon="mdi-cart">
                    <router-link to="/products" class="text-decoration-none text-white">Product</router-link>
                </v-tab>
                <v-tab prepend-icon="mdi-cart">
                    <router-link to="/cart" class="text-decoration-none text-white">Cart</router-link>
                </v-tab>

                <!-- Conditionf for login and logout button -->
                <v-tab prepend-icon="mdi-login" v-if="!isLoggedIn">
                    <router-link to="/login" class="text-decoration-none text-white">Login</router-link>
                </v-tab>
                <v-tab v-else prepend-icon="mdi-account" @click="logout">Logout</v-tab>

                <v-tab prepend-icon="mdi-account">
                    <router-link to="/signup" class="text-decoration-none text-white">Signup</router-link>
                </v-tab>

                <!-- <v-tab prepend-icon="mdi-cart">Cart</v-tab> -->
            </v-tabs>
        </template>
    </v-app-bar>
</template>  
  
<script>
export default {
    name: 'NavBar',
    computed: {
        isLoggedIn() {
            return localStorage.getItem('userId') && localStorage.getItem('token');
        },
    },
    methods: {
        logout() {
            const userToken = localStorage.getItem('token');

            if (userToken) {
                const headers = {
                    'Authorization': `Bearer ${userToken}`,
                    'Content-Type': 'application/json',
                };

                fetch('http://10.0.10.211:3300/api/logout', {
                    method: 'POST',
                    headers: headers,
                })
                    .then(response => {
                        if (response.ok) {
                            localStorage.removeItem('userId');
                            localStorage.removeItem('token');

                        } else {

                        }
                    })
                    .catch(error => {
                        console.error('Logout failed:', error);
                    });
            }
        },
    },

};
</script>