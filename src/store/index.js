
import { createStore } from "vuex";
import axios from "axios"
export default createStore({
  state: {
    products: [],
    carts: [],
    qty: 1,
    categories:""
  },
  getters: {
    getAllProducts(state) {
      return state.products.filter(item => {
        return item
      })
    },
    getAllCArtsProd(state) {
      return state.carts
    },
    getTotalCArt(state) {
      let total = 0;
      state.carts.forEach(item => {
        total += item.qty * item.product.price
      })
      return total
    },

    getAllCategories(state){
      return state.categories
    }
  },
  mutations: {
    FIND_ALL_Categries(state, prodCategories) {
      state.categories = prodCategories
    },
    SHOW_SingleProduct(state, productsingle) {
      state.product = productsingle
    },
    GET_PRODUCTS_CategoriWise(state, productdata) {
      console.log(productdata)
      state.products.push(productdata)
    },

    ADD_TO_CART(state, {product, selectitem }) {
      console.log(product)
      console.log(product.id, selectitem)
      const prodtoCart = state.carts.find(item => {
        return item.product.id === product.id
      })
      console.log("new prod", prodtoCart)

      if (prodtoCart) {
        state.qty = parseInt(selectitem)
        prodtoCart.qty += state.qty
        return;
      }
      state.carts.push({ product: product, qty: parseInt(selectitem) })
      console.log(state.carts)
    },

    DELELET_CART_ITEM(state, item) {
      const indexProd = state.carts.indexOf(item)
      if (indexProd > -1) {
        let product = state.carts[indexProd]
        if (product.qty > 1) {
          product.qty = product.qty - 1
        } else {
          state.carts.splice(indexProd, 1)
          if (state.carts.length === 0) {
            window.location.reload()
          }

        }
      }
    },
   
    GET_CATAGORIES(state,data){
         state.categories = data
    }
     
  },

  actions: {
    async getCAtegoriesdata({commit},category){
       const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
      commit("GET_CATAGORIES",res.data.products)
      console.log(res.data.products)

    }
  },
});
