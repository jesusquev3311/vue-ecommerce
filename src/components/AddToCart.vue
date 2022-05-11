<template>
    <div class="columns">
        <div class="column">
            <label
                class="sr-only"
                for="inlineFormInputName2"
            >
                Quantity
                <input
                    v-model="quantity"
                    type="number"
                    class="form-control mb-2 mr-sm-2"
                    name="quantity"
                >
            </label>
        </div>
        <button
            v-if="!isInCardProp"
            type="button"
            class="btn btn-primary btn-lg btn-block col-9"
            @click.stop="addCart({product, quantity})"
        >
            ADD TO CART
        </button>

        <button
            v-else
            type="button"
            class="btn btn-primary btn-lg btn-block col-9"
            @click.stop="removeCart(product.id)"
        >
            REMOVE FROM CART
        </button>
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
    name: "AddToCart",
    props: {
        product: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            isInCardProp: false,
            quantity: 1,
        };
    },
    watch: {
        product({ id }) {
            this.isInCardProp = this.isInCart(id);
        },
        cart() {
            this.isInCardProp = this.isInCart(this.product.id);
        },
        quantity(val) {
            if (val <= 0) {
                this.quantity = 1;
            }
        },
    },
    computed: {
        ...mapState("product", ["cart"]),
    },
    methods: {
        ...mapActions("product", ["addCart", "removeCart"]),

        isInCart(id) {
            this.cart.some((product) => {
                if (product.id === id) {
                    return true;
                }
                return false;
            });
        },
    },
};
</script>
