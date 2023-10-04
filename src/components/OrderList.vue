<template lang="">
<v-container class="mt-3 mb-3">
    <v-table class="h-screen">
        <thead>
            <tr>
                <th class="text-left">No</th>
                <th class="text-left">Order Id</th>
                <th class="text-left">User Id</th>
                <th class="text-left">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(order, index) in userOrders" :key="order.id">
                <td>{{ index + 1 }}</td>
                <td>{{ order.id }}</td>
                <td>{{ order.user_id }}</td>
                <td>{{ order.status }}</td>
            </tr>
        </tbody>
    </v-table>
</v-container>
</template>

<script>
export default {
    name: "Order List",
    computed: {
        userOrders() {
            return this.$store.state.userOrders;
        }
    },
    mounted() {
        this.$store.dispatch('userOrders')
    },
};
</script>