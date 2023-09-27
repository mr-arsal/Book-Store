<template>
  <div>

    <!-- Navbar Component -->

    <NavBar></NavBar>

    <!-- Carousal -->

    <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover" class="h-screen">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">

        <!-- Image -->

        <v-img :src="slide.imageSrc" height="100%" cover>

          <!-- Transparent overlay for text -->

          <v-sheet color="rgba(0, 0, 0, 0.5)" height="100%">

            <div class="d-flex flex-column fill-height justify-center landing-page-title">

              <!-- Heading text -->

              <h2 class="text-h2 text-left" style="color: white">{{ slide.heading }}</h2>
              <p class="text-white mt-3 mr-7">{{ slide.text }}</p>

              <!-- Button -->

              <router-link to="/products" class="text-decoration-none">
                <v-btn prepend-icon="mdi-cart" class="mt-8" color="teal-darken-3 me-3">Explore Products</v-btn>
              </router-link>
            </div>
          </v-sheet>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <!--  -->

    <!-- Products Heading -->

    <div class="text-center mb-5 mt-7 text-h4 font-weight-medium"
      style="text-decoration: underline; text-decoration-color: #00695C">Best Selling Products</div>

    <!-- Products Component -->

    <HomeProducts></HomeProducts>

    <!-- Explore products Button -->

    <!-- <router-link to="/products" class="text-decoration-none">
      <v-btn prepend-icon="mdi-cart" class="mt-8" color="teal-darken-3 me-3">Explore Products</v-btn>
    </router-link> -->

    <!-- Footer Component -->

    <Footer></Footer>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomeProducts from "@/components/HomeProducts.vue";
import Footer from "@/components/Footer.vue";

export default {

  name: "Home",
  components: {
    NavBar,
    HomeProducts,
    Footer
  },
  data() {
    return {
      slides: [{
        imageSrc: "https://images.pexels.com/photos/4866041/pexels-photo-4866041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image URL
        heading: "Discover Bestsellers",
        text: `Explore our selection of top-rated books that readers can't get enough.`
      },
      {
        imageSrc: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image URL
        heading: "Explore Genre Classics",
        text: "Journey through the ages and across genres with our collection of timeless literary classics."
      },
      {
        imageSrc: "https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image URL
        heading: "New Arrivals of Book",
        text: "Stay up-to-date with the latest additions to our bookshelves."
      },
      ],
    };
  },
};
</script>

<style>
.landing-page-title {
  margin-left: 10%;
}

.mdi-circle::before {
  color: white;
}
</style>
