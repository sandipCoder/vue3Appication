<template>
<div class="col-lg-3 col-sm-6 col-12" v-for="product in $store.getters.getAllCategories" :key="product.id">
    <div class="card card-product-grid">
        <div class="img-wrap">
            <a @click="getProduct(product)">
                <img :src="product.thumbnail" />
            </a>
        </div>
        <div class="info-wrap">
            <span class="text-warning">Bestseller</span>
            <p class="title">{{ product.title }}</p>
            <div class="rating-wrap d-flex justify-content-between">
                <ul class="rating-stars">
                    <li class="stars-active">
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star-half-o"></span>
                    </li>
                </ul>
                <span class="label-rating text-warning">4.5</span>
            </div>
            <!-- rating-wrap.// -->
        </div>
        <div class="bottom-wrap">
            <button class="btn btn-primary float-end">Add to cart</button>
            <div class="price-wrap lh-sm">
                <strong class="price"> ${{ product.price }} </strong>
                <br />
                <small class="text-muted">$10 / per month </small>
            </div>
            <!-- price-wrap.// -->
        </div>
        <!-- bottom-wrap.// -->
    </div>
    <!-- card // -->
</div>
</template>

<script>
export default {
    setup(props,context) {

        const getProduct = (product) => {
            console.log("hooo")
          context.emit("getProductDetail",product)
        }

        return {
            getProduct
        }
    },
};
</script>

<style scoped>
.card.card-product-grid,
.card.card-product-list {
    box-shadow: 0 1px 2px rgb(51 51 51 / 7%);
}

.card-product-grid {
    margin-bottom: 20px;
}

.card-product-grid .info-wrap {
    padding: 1rem 1.2rem;
    overflow: hidden;
}

.img-wrap img {
    height: 100%;
    max-width: 100%;
    width: auto;
}

.card.card-product-grid .img-wrap {
    border-radius: 0.25rem 0.25rem 0 0;
}

.card-product-grid .img-wrap {
    height: 240px;
}

.img-wrap {
    position: relative;
    text-align: center;
    overflow: hidden;
    display: block;
}

.text-warning {
    color: #ff8100 !important;
}

.rating-stars {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    white-space: nowrap;
    clear: both;
}

.rating-stars li.stars-active {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

.rating-stars img {
    height: 16px;
    max-width: none;
}

.label-rating {
    margin-left: 5px;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
}

.card-product-grid .bottom-wrap {
    padding: 1rem 1.2rem;
    border-top: 1px solid #dee2e6;
}

.lh-sm {
    line-height: 1.25 !important;
}

.rating-wrap {
    width: 110px;
}

.fa {
    color: #ff8100;
}
</style>
