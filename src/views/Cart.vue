<template>
    <div
        class="container"
        style="padding: 30px"
    >
        <div class="row d-flex justify-content-center">
            <div class="list-group col-8">
                <a
                    v-for="item in cart"
                    :key="item.id"
                    href="#"
                    class="list-group-item list-group-item-action"
                >

                    <img
                        :src="item.imageUrl"
                        height="60"
                        width="60"
                        alt=""
                    >

                    <h4 class="is-4">{{ item.name }}</h4>
                    <div class="columns">
                        <div class="mr-2">
                            <p>Unique Price</p>
                            <p>${{ item.price }}</p>
                        </div>
                        <div class="mr-2">
                            <p>Total Price</p>
                            <p>${{ item.price * item.quantity }}</p>
                        </div>
                        <div>
                            <p>Quantity</p>
                            <p>{{ item.quantity }}</p>
                        </div>
                    </div>
                </a>

                <div class="list-group-item list-group-item-action ">
                    <h4 class="is-4">
                        Total
                    </h4>
                    <div>
                        <p>Total Price</p>
                        <p>${{ totalPrice }}</p>
                    </div>
                </div>

                <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block mt-4"
                    @click="checkout()"
                >
                    Checkout
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "ShoppingCart",
    data() {
        return {
            totalPrice: 0,
        };
    },
    computed: {
        ...mapGetters("product", ["cart"]),
        ...mapGetters("account", ["user"]),
    },
    mounted() {
        this.calcPrice();
    },
    methods: {
        ...mapActions("product", ["removeCart"]),
        calcPrice() {
            this.cart.forEach((element) => {
                this.totalPrice += element.price * element.quantity;
            });
        },
        checkout() {
            const vm = this;
            setTimeout(() => {
                vm.removeCart();
                console.log("Purchase successful!");
                vm.$router.push("/");
            }, 2000);
        },
    },
};
</script>
