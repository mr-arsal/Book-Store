<template>
    <UserNav></UserNav>
    <v-app>



        <v-main>

            <router-view></router-view>

        </v-main>

    </v-app>
</template>
  
  
  
<script>

import UserNav from "@/components/UserNav.vue";

export default {



    name: "UserDashboard",



    components: {

        UserNav,

    },

};

</script>