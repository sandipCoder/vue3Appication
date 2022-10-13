<template>
<nav aria-label="..." class="float-end">
    <ul class="pagination">
        <li class="page-item">
            <button class="page-link" :disabled="preDisabled" @click="previousBtn">
                Previous
            </button>
        </li>
        <li class="page-item" :class="[sizeval === 20 ? 'active' : '']">
            <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item" :class="[sizeval === 40 ? 'active' : '']">
            <span class="page-link">2</span>
        </li>
        <li class="page-item" :class="[sizeval === 60 ? 'active' : '']">
            <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item" :class="[sizeval === 80 ? 'active' : '']">
            <a class="page-link" href="#">4</a>
        </li>
        <li class="page-item" :class="[sizeval === 100 ? 'active' : '']">
            <a class="page-link" href="#">5</a>
        </li>
        <li class="page-item">
            <button class="page-link" @click="nextPage" :disabled="nextbtndisabled">
                Next
            </button>
        </li>
    </ul>
</nav>
</template>

<script>
import {
    ref
} from "vue";
export default {
    setup(props, context) {
        const sizeval = ref(20);
        const nextbtndisabled = ref(false);
        const preDisabled = ref(false);
        const activeClass = ref(true);

        const nextPage = () => {
            preDisabled.value = false;
            if (sizeval.value <= 100) {
                context.emit("nextPageShow", sizeval.value);
                sizeval.value += 20;
                console.log(sizeval.value);
                if (sizeval.value === 100) {
                    nextbtndisabled.value = true;
                }
            }
        };

        const previousBtn = () => {
            nextbtndisabled.value = false;
            // console.log(sizeval.value)
            if (sizeval.value <= 100) {
                context.emit("PreviousBtnClick", sizeval.value - 40);
                sizeval.value -= 20;
                console.log(sizeval.value);
                if (sizeval.value === 0) {
                    preDisabled.value = true;
                }
            }
        };

        return {
            nextPage,
            sizeval,
            preDisabled,
            nextbtndisabled,
            previousBtn,
            activeClass,
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
