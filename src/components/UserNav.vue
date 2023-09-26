<template>
    <v-card class="h-screen">
        <v-layout>
            <v-navigation-drawer expand-on-hover rail>
                <v-list>
                    <v-list-item
                        prepend-avatar="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                        title="User Account" subtitle="sandra_a88@gmailcom"></v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-folder" title="User Profile" value="myfiles"
                        @click="navigateToUserProfile"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-multiple" title="Order List" value="shared"></v-list-item>
                    <v-list-item prepend-icon="mdi-star" title="Track Your Order" value="starred"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 250px"></v-main>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    name: 'UserNav',
    methods: {
        navigateToUserProfile() {
            // Use router.push to navigate to the desired route
            this.$router.push({ name: 'UserProfile' }); // Replace 'UserProfile' with your actual route name
        },

        // Other methods for navigation to different routes
    },
}
</script>