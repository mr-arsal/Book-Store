<template>
    <v-app-bar color="teal-darken-3">
        <v-toolbar-title class="text-center"><router-link to="/" class="text-decoration-none text-white">Book
                Store</router-link></v-toolbar-title>
        <template v-slot:extension>
            <v-tabs class="mx-auto" align-with-title>
                <v-tab prepend-icon="mdi-cart" @click="navigateToProducts">
                    Products
                </v-tab>
                <v-tab prepend-icon="mdi-cart" @click="navigateToCart">
                    Cart
                </v-tab>

                <!-- Conditions for login and logout button -->
                <v-tab prepend-icon="mdi-login" @click="navigateToLogin" v-if="!isLoggedIn">
                    Login
                </v-tab>

                <v-tab v-else prepend-icon="mdi-account" @click="navigateToUserDashboard">
                    Dashboard
                </v-tab>

                <v-tab prepend-icon="mdi-account" @click="navigateToSignup">
                    Signup
                </v-tab>

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
                            window.location.reload();

                        } else {
                        }
                    })
                    .catch(error => {
                        console.error('Logout failed:', error);
                    });
            }
        },

        navigateToProducts() {
            this.$router.push('/products');
        },

        navigateToCart() {
            this.$router.push('/cart');
        },

        navigateToLogin() {
            this.$router.push('/login');
        },

        navigateToUserDashboard() {
            this.$router.push('/userdashboard');
        },

        navigateToSignup() {
            this.$router.push('/signup');
        },
    },

};
</script>