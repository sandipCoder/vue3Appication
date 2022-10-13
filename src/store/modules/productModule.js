import axios from "axios";
import { createStore } from "vuex";
export default createStore({
    state: {
        product: []
    },
    // getters: {
    //     getAllProducts(state) {
    //         return state.products
    //     }
    // },
    mutations: {
        GET_PRODUCT_DESCRIPTION(state, data) {
            state.product = data
        }
    },
    actions: {
        getProduct({ commit }, id) {
            const res = axios.get(`https://dummyjson.com/products/${id}`)
            commit("GET_PRODUCT_DESCRIPTION", res.data)
            console.log(res.data)
        }
    },
});
