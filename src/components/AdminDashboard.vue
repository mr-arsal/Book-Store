<template>
    <AdminNav></AdminNav>
    <HomeProducts></HomeProducts>
</template>
  
  
<script>

import AdminNav from "@/components/AdminNav.vue";
import HomeProducts from "@/components/HomeProducts.vue";

export default {
    name: "AdminDashboard",
    components: {
        AdminNav,
        HomeProducts
    },
};

</script>