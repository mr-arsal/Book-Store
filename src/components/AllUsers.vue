<template>
    <AdminNav></AdminNav>
    <!-- <HomeProducts></HomeProducts> -->

    <v-container class="mt-3 mb-3">
        <v-table class="h-screen">
            <thead>
                <tr>
                    <th class="text-left">No</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in showUsers" :key="user.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td class="">
                        <v-btn color="error" class="mr-2" @click="deleteUser(user.id)">Delete</v-btn>
                    </td>
                </tr>

            </tbody>
        </v-table>

        <!-- Snackbar to show success message -->
        <v-snackbar v-model="showSnackbar" :timeout="snackbarTimeout">
            {{ snackbarMessage }}
        </v-snackbar>
    </v-container>
</template>
  
  
<script>

import AdminNav from "@/components/AdminNav.vue";
// import HomeProducts from "@/components/HomeProducts.vue";

export default {
    name: "AdminDashboard",
    components: {
        AdminNav,
        // HomeProducts
    },
    data() {
        return {
            showSnackbar: false,
            snackbarMessage: "User has been deleted.",
            snackbarTimeout: 4000,
        }
    },
    computed: {
        showUsers() {
            return this.$store.state.showUsers;
        }
    },
    mounted() {
        this.$store.dispatch('showUsers')
    },
    methods: {
        deleteUser(userId) {
            this.$store.dispatch('deleteUser', userId)
                .then(() => {
                    this.$store.dispatch('showUsers');
                })
                .catch(error => {
                    console.error('Error deleting user:', error);
                });
            //  Show the snackbar
            this.showSnackbar = true;
        },
    },

};

</script>