<template>
    <div>
        <nav
            class="navbar is-link"
            role="navigation"
            aria-label="main navigation"
        >
            <div class="navbar-brand">
                <router-link
                    class="navbar-item"
                    to="/"
                >
                    CS-eCommerce
                </router-link>
                <a
                    role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>

            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <div v-if="user.photoURL">
                                <img
                                    class="img-thumbnail profile-image"
                                    alt=""
                                    :src="user.photoURL"
                                >

                                <router-link
                                    class="button is-primary"
                                    to="/cart"
                                >
                                    <img
                                        src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
                                        width="50"
                                        alt=""
                                    >

                                    <span class="badge badge-danger badge-pill">
                                        {{ cart.length }}
                                    </span>
                                </router-link>
                            </div>

                            <router-link
                                v-else
                                class="button is-primary"
                                to="/login"
                            >
                                Login
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <main class="page">
            <router-view />
        </main>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "BaseComponent",
    computed: {
        ...mapGetters("account", ["user"]),
        ...mapGetters("product", ["cart"]),
    },
};
</script>

<style lang="scss">
    @import "@/assets/css/main.scss";

    .profile-image {
        width: 50px;
        border-radius: 100%;
    }

    input {
        border-radius: 0%;
    }
    .btn:focus {
        background: teal;
    }

    .columns{
        flex-wrap: wrap;
    }
</style>
