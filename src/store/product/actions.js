import axios from "axios";

const URL = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";

export const getProducts = ({ commit }) => {
    axios.get(URL).then(({ data }) => {
        commit("setProducts", data);
    }).catch((error) => {
        console.error(error);
    });
};

export const productDetails = ({ commit }, id) => {
    axios.get(URL, { params: { id } }).then(({ data }) => {
        commit("setProduct", data[0]);
    }).catch((error) => {
        console.error(error);
    });
};

export const addCart = ({ commit, getters }, payload) => {
    const { cart } = getters;
    cart.push(payload);
    commit("setCart", cart);
};

export const removeCart = ({ commit, getters }, id) => {
    const { cart } = getters;

    if (id) {
        cart.splice(id, 1);
    }

    commit("setCart", cart);
};
