<template>
<!-- Modal -->
<div class="modal right animate__animated animate__slideInRight animate__faster" id="myModal2" tabindex="-1" aria-labelledby="myModal2" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="myModal2">Your Cart Item</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ol class="list-group list-group-flush">
                    <li class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
                py-3
              " v-for="item in $store.getters.getAllCArtsProd" :key="item.id">
                        <div>
                            <img :src="item.product.thumbnail" alt="product" width="80" />
                        </div>
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{{ item.product.title }}</div>
                            <p class="text-gray p-0 m-0">
                                Price ${{ item.product.price }} x Qty:{{ item.qty }}
                            </p>
                            <p class="fw-bold p-0 m-0">
                                Total ${{ item.product.price * item.qty }}
                            </p>
                        </div>
                        <button class="btn badge bg-danger rounded-pill" @click="deleteCArtItem(item)">
                            <i class="fa fa-trash"></i>
                        </button>
                    </li>

                    <li class="list-group-item align-items-start py-3">
                        <p class="mb-3 text-center">
                            Subtotal: <strong class="text-danger">$ {{$store.getters.getTotalCArt}}</strong>
                        </p>
                        <div class="d-grid gap-2 col-10 mx-auto">
                            <button class="btn btn-success btn-sm">CheckOut</button>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    useStore
} from "vuex";
export default {
    setup() {
        const store = useStore();
        const deleteCArtItem = (item) => {
            store.commit("DELELET_CART_ITEM", item);
        };
        return {
            deleteCArtItem,
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
