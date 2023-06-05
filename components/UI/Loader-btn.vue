<template>
    <button disabled class="loader-btn">
        <img src="@/assets/imgs/loader.svg" alt="">
        Подождите...
    </button>
</template>
<script>
export default {
    name: "loader-btn"
}
</script>

<style lang="scss">
.loader-btn {
    display: flex !important;
    align-items: center !important;
    gap: 8px;
    img {
        animation: rotation 2s linear infinite;
        transform-origin: center !important;
    }

    pointer-events: none;

   
}
</style>