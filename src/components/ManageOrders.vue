<template lang="">
    <!-- Admin Navbar -->
<AdminNav></AdminNav>


<v-container class="mt-3 mb-3">
    <v-table class="h-screen">
        <thead>
            <tr>
                <th class="text-left">No</th>
                <th class="text-left">Order Id</th>
                <th class="text-left">User Id</th>
                <th class="text-left">Status</th>
                <th class="text-left">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(order, index) in showOrders" :key="order.id">
                <td>{{ index + 1 }}</td>
                <td>{{ order.id }}</td>
                <td>{{ order.user_id }}</td>
                <td>{{ order.status }}</td>
                <td class="">
                    <v-btn color="error" class="mr-2">Edit</v-btn>
                </td>
            </tr>

        </tbody>
    </v-table>
</v-container>
</template>

<script>
import AdminNav from "@/components/AdminNav.vue";

export default {
    name: "ManageOrders",
    components: {
        AdminNav,
        // HomeProductss
    },
    computed: {
        showOrders() {
            return this.$store.state.showOrders;
        }
    },
    mounted() {
        this.$store.dispatch('showOrders')
    },

};
</script>