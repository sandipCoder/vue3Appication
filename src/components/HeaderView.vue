<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="logo" width="30" class="img-fluid" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>

                </ul>
                <div class="float-end d-flex justify-content-between">
                    <a href="#offcanvas_cart" class="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#myModal2">
                        <i class="fa fa-shopping-cart"></i> <span class="ms-1"><span class="badge bg-dark" v-if="$store.state.carts.length>0"> {{$store.state.carts.length}} </span> My cart </span>
                    </a>
                </div>

            </div>
        </div>
    </nav>
    <!-- Modal -->
    <MyModal v-if="$store.state.carts.length>0" />
</div>
</template>

<script>
import MyModal from "./MyModal.vue"
export default {
    components: {
        MyModal
    },
    setup() {

        return {}
    }
}
</script>

<style>
.bg-dark {
    background-color: #35495e !important;
}

.modal.right .modal-dialog {
    position: fixed;
    margin: auto;
    width: 420px;
    height: 100%;

}

.modal.right .modal-content {
    height: 100%;
    overflow-y: auto;

}

.modal.right .modal-body {
    padding: 15px 15px 80px;
}

/*Right*/
.modal.right .modal-dialog {
    right: 0px;

}

.modal.right .modal-dialog {
    right: 0;
}

.modal-content {
    border-radius: 0px;
    border: 0px;
}
</style>
