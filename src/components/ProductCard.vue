<template>
    <div class="card">
        <div class="card-image">
            <figure class="image">
                <img
                    :src="product.imageUrl"
                    class="card-img-top product-image"
                    alt=""
                >
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <h5 class="title is-5">
                    {{ product.name }}
                </h5>
                <br>
                <router-link
                    type="button"
                    class="button is-primary is-large"
                    :to="'/details/' + product.id"
                >
                    Details
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProductCard",
    props: {
        product: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
<style>
.card .product-image {
    height: 300px;
}
</style>
