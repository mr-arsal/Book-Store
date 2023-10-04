<template>
    <div>
        <!-- Navbar COmponnet -->
        <NavBar />

        <!-- Form -->
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <div class="text-center" style="text-decoration: underline; text-decoration-color: #00695C">
                            <v-card-title>Complete Your Information</v-card-title>
                        </div>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="Full Name"></v-text-field>
                                <v-text-field label="Email"></v-text-field>
                                <v-text-field label="Address"></v-text-field>
                                <v-text-field label="City"></v-text-field>
                                <v-text-field label="Postal Code"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="teal-darken-3">Complete Checkout</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- Footer Component -->
        <Footer />
    </div>
</template>
  
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "Checkout",
    components: {
        NavBar,
        Footer,
    },
};
</script>
  
<style scoped>
.product-details {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.product-title {
    font-size: 24px;
    margin-bottom: 5px;
    font-weight: bold;
}

.product-description {
    font-size: 16px;
    margin-bottom: 20px;
}

.product-price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
}

.product-quantity {
    font-size: 18px;
    margin-top: 10px;
}</style>