<template>
    <div>
        <!-- Navbar Component -->
        <NavBar></NavBar>

        <!-- SingleProductDetails Component -->
        <SingleProductDetails></SingleProductDetails>

        <!-- Footer Component -->
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SingleProductDetails from "@/components/SingleProductDetails.vue";
// import Footer from "@/components/Footer.vue";

export default {
    name: 'ProducDetails',
    components: {
        NavBar,
        SingleProductDetails,
        // Footer
    },
}

</script>