<template>
<div>
    <CarouselView />
    <div class="mt-3">
        <div class="container">
            <div class="row">
                <h2>Products</h2>
                <hr class="my-4" />
                <All_Products />
            </div>
        </div>
     
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import All_Products from "../components/products_categories/All_Products.vue"
import CarouselView from "../components/CarouselView.vue"
export default {
    name: "HomeView",
    components: {
        All_Products,
        CarouselView
    },
    setup() {
        return {

        }
    }

};
</script>
