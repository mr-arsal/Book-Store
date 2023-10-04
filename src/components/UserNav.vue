<template>
    <v-app-bar color="teal-darken-3">
        <v-toolbar-title class="text-center"><router-link to="/" class="text-decoration-none text-white">Book
                Store</router-link></v-toolbar-title>
        <template v-slot:extension>
            <v-tabs class="mx-auto" align-with-title>
                <router-link to="/userdashboard/profile" class="text-decoration-none text-white">User
                    Profile</router-link> &nbsp;&nbsp;| &nbsp;&nbsp;

                <router-link to="/userdashboard/orderlist" class="text-decoration-none text-white">Order
                    List</router-link> &nbsp;&nbsp;| &nbsp;&nbsp;

                <!-- Conditions for login and logout button -->
                <router-link to="/login" class="text-decoration-none text-white" v-if="!isLoggedIn">Login</router-link>
                <router-link to="/" v-else class="text-decoration-none text-white" @click="logout">Logout</router-link>

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
    },
};
</script>