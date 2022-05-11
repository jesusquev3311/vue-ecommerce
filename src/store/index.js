import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import account from "./account";
import product from "./product";

Vue.use(Vuex);

export default () => {
    const Store = new Vuex.Store({
        modules: {
            account,
            product,
        },
        strict: process.env.DEV,
        plugins: [createPersistedState()],
    });
    return Store;
};
