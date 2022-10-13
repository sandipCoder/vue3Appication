<template>
<ProductView v-for="product in $store.state.products" :key="product.id" :product="product" />
<PaginationView @nextPageShow="nextPageShow" @PreviousBtnClick="PreviousBtnClick" />
</template>

<script>
import {
    onMounted,
    ref
} from 'vue';
import axios from 'axios';
import ProductView from './ProductView.vue';
import PaginationView from "./PaginationView.vue"
import {
    useStore
} from 'vuex';
export default {
    setup() {
        const store = useStore()
        const page = ref(0)
        const perpage = ref(20)
        onMounted(async () => {
            const res = await axios.get(`https://dummyjson.com/products?limit=20`)
            store.state.products = res.data.products
        })

        async function nextPageShow(val) {
            const res = await axios.get(`https://dummyjson.com/products?limit=20&skip=${val}`)
            store.state.products = res.data.products
            console.log(res.data)
        }
        const PreviousBtnClick = async (val) => {
            console.log(val)
            const res = await axios.get(`https://dummyjson.com/products?limit=20&skip=${val}`)
            store.state.products = res.data.products
              console.log(res.data)
        }
        return {
            nextPageShow,
            page,
            perpage,
            PreviousBtnClick
        };
    },
    components: {
        ProductView,
        PaginationView
    }
}
</script>

<style lang="scss" scoped>

</style>
