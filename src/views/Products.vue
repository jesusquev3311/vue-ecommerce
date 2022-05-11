<template>
    <div class="produtcs">
        <div class="container">
            <div class="columns">
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="column is-one-quarter"
                >
                    <ProductCard :product="product" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
    name: "ProductsComponent",
    components: { ProductCard },
    computed: {
        ...mapGetters("product", ["products"]),
    },
    mounted() {
        this.getProducts();
    },
    methods: {
        ...mapActions("product", ["getProducts", "addCart", "removeCart"]),
    },
};
</script>

<style lang="scss" scoped>
    .products{
        padding: 25px;
    }
</style>
