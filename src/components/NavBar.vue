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
                <v-tab prepend-icon="mdi-heart">Favourites</v-tab>
                <v-tab prepend-icon="mdi-login">
                    <router-link to="/login" class="text-decoration-none text-white">Login</router-link>
                </v-tab>
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
};
</script>