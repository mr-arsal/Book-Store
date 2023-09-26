<template>
    <v-app>


        <!-- User Navbar Component -->

        <UserNav></UserNav>

        <!-- Rendered Children Component -->
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import UserNav from "@/components/UserNav.vue";

export default {
    name: 'UserDashboard',
    components: {
        UserNav,
    },
}
</script>