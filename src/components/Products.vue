<template>
    <div style="padding: 25px;">
        <div class="container">
            <div class="columns">
                <div class="column is-one-quarter" v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProductCard from './ProductCard.vue';

export default {
    components: { ProductCard },
    mounted() {
        this.getProducts();
    },
    computed: {
        ...mapGetters('product', ['products']),
    },
    methods: {
        ...mapActions('product', ['getProducts', 'addCart', 'removeCart']),
    },
};
</script>
