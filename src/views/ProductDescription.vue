<template>
<div class="">
    <section class="padding-y bg-white pt-5">
        <div class="container">
            <div class="row">
                <aside class="col-lg-6">
                    <article class="gallery-wrap gallery-vertical">
                        <a class="img-big-wrap img-thumbnail bg-light">
                            <img height="520" :src="urlsrefeflect ? state.product.thumbnail : imageUrls" class="mix-blend-multiply img-fluid" />
                        </a>
                        <!-- img-big-wrap.// -->
                        <div class="thumbs-wrap mb-3">
                            <a class="item-thumb" v-for="imgurl in state.product.images" :key="imgurl" @click="viewImage(imgurl)">
                                <img :src="imgurl" width="60" height="60" />
                            </a>
                        </div>
                        <!-- thumbs-wrap.// -->
                    </article>
                    <!-- gallery-wrap .end// -->
                </aside>
                <div class="col-lg-6">
                    <article class="ps-lg-3">
                        <h2 class="title text-dark">{{ state.product.title }}</h2>
                        <p>{{ state.product.description }}</p>
                        <div class="rating-wrap my-3 d-flex justify-content-around">
                            <ul class="rating-stars p-0 m-0">
                                <li class="stars-active">
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star-half-o"></span>
                                </li>
                            </ul>
                            <b class="label-rating text-warning">
                                {{ state.product.rating }}</b>
                            <i class="dot"></i>
                            <span class="label-rating text-muted">
                                <i class="fa fa-comment"></i> 32 reviews
                            </span>
                            <i class="dot"></i>
                            <span class="label-rating text-muted">
                                <i class="fa fa-shopping-basket"></i> 154 orders</span>
                        </div>
                        <!-- rating-wrap.// -->
                        <hr />

                        <div class="mb-4">
                            <span class="price h2">${{ state.product.price }}</span>
                            <span>/ {{ state.product.discountPercentage }}% Discount</span>
                        </div>
                        <!-- price-wrap.// -->
                        <div class="row gx-2 mb-4">
                            <div class="col-2">
                                <select class="form-select" v-model="selectitem">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <!-- col.// -->
                            <div class="col-auto">
                                <a href="#" class="btn btn-primary w-100" @click="addToCartProduct(state.product, selectitem)">
                                    <i class="me-2 fa fa-shopping-basket"></i> Add to cart
                                </a>
                            </div>
                            <!-- col.// -->
                        </div>
                    </article>
                </div>
                <!-- col.// -->
            </div>
            <!-- row.// -->
            <div class="row">
                <h2 class="my-3">{{state.product.category}} Related Items</h2>
                <hr />
                <RelatedProducts @getProductDetail="getProductDetail" />
            </div>
        </div>
        <!-- container .// -->
    </section>
</div>
</template>

<script>
import RelatedProducts from "../components/products_categories/RelatedProducts.vue"
import axios from "axios";
import {
    useRoute
} from "vue-router";
import {
    onMounted,
    reactive,
    ref
} from "vue";
import {
    useStore
} from "vuex";

export default {
    components: {
        RelatedProducts
    },
    setup() {

        const route = useRoute();
        const selectitem = ref(1);
        const store = useStore();
        const urlsrefeflect = ref(true);
        const imageUrls = ref("");
        const id = ref(route.params.id);
        const state = reactive({
            product: [],
        });
        onMounted(async () => {
            const res = await axios.get(`https://dummyjson.com/products/${id.value}`);
            state.product = res.data;
            console.log(res.data);
        });
        const addToCartProduct = (product, selectitem) => {
            store.commit("ADD_TO_CART", {
                product,
                selectitem,
            });
        };

        const getProductDetail=(prod)=>{
          state.product = prod
        }

        const viewImage = (imgurl) => {
            urlsrefeflect.value = false;
            imageUrls.value = imgurl;
            console.log(imageUrls.value);

            //urlsrefeflect.value = false
        };
        return {
            id,
            state,
            addToCartProduct,
            selectitem,
            imageUrls,
            viewImage,
            urlsrefeflect,
            getProductDetail
        };
    },

};
</script>

<style scoped>
.gallery-vertical .thumbs-wrap {
    order: 1;
    width: 60px;
    margin-right: 1rem;
}

.gallery-wrap .thumbs-wrap .item-thumb {
    width: 60px;
    height: 60px;
    border: 1px solid #dee2e6;
    border-radius: 0.35rem;
    margin: 3px;
    display: inline-block;
    overflow: hidden;
}

.gallery-wrap .thumbs-wrap img {
    max-width: 100%;
    max-height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    cursor: zoom-in;
}

.gallery-vertical .img-big-wrap {
    order: 2;
}

.gallery-vertical {
    display: flex;
}

.gallery-wrap .img-big-wrap {
    display: block;
    text-align: center;
    width: 100%;
    height: 560px;
    margin-bottom: 1rem;
    overflow: hidden;
    background-color: #fff;
    padding: 20px;
}

.gallery-wrap .img-big-wrap img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    cursor: zoom-in;
    height: 520px;
}

.stars-active {
    list-style: none;
}

.rating-wrap {
    width: 60%;
}
</style>
