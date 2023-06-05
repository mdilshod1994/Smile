<template>
    <div class="banner p-r">
        <div class="container">
            <div class="banner__wrap">
                <div class="banner__content ">
                    <h1 class="banner__title title">Фотостудия</h1>
                    <div class="banner__btn btn ">
                        Смайлик
                    </div>
                    <div class="banner__text">
                        Сохраним ваши воспоминания
                    </div>
                    <div class="banner__btn-load btn" @click="openModal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.5 20C4.98333 20 3.68733 19.475 2.612 18.425C1.53667 17.375 0.999334 16.0917 1 14.575C1 13.275 1.39167 12.1167 2.175 11.1C2.95833 10.0833 3.98333 9.43335 5.25 9.15001C5.63333 7.80001 6.346 6.66668 7.388 5.75001C8.43 4.83335 9.634 4.27501 11 4.07501V12.15L9.4 10.6L8 12L12 16L16 12L14.6 10.6L13 12.15V4.07501C14.7167 4.30835 16.146 5.07935 17.288 6.38801C18.43 7.69668 19.0007 9.23401 19 11C20.15 11.1333 21.1043 11.6293 21.863 12.488C22.6217 13.3467 23.0007 14.3507 23 15.5C23 16.75 22.5623 17.8127 21.687 18.688C20.8117 19.5633 19.7493 20.0007 18.5 20H6.5Z"
                                fill="#383838" />
                        </svg>
                        Скачать фото
                    </div>
                </div>
                <div class="banner__photos ">
                    <div class="banner__photos-left">
                        <transition-group name="list" tag="div">
                            <img v-for="item, index in imgs" :key="item.img" :src="item.img" alt="" v-show="index === 2">
                        </transition-group>
                    </div>
                    <div class="banner__photos-midle">
                        <transition-group name="list" tag="div">
                            <img v-for="item, index in imgs" :key="item.img" :src="item.img" alt="" v-show="index === 0">
                        </transition-group>
                    </div>
                    <div class="banner__photos-right">
                        <transition-group name="list" tag="div">
                            <img v-for="item, index in imgs" :key="item.img" :src="item.img" alt="" v-show="index === 1">
                        </transition-group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgs: [
                {
                    img: require('@/assets/imgs/b-0.png')
                },
                {
                    img: require('@/assets/imgs/b-1.png')
                },
                {
                    img: require('@/assets/imgs/b-2.png')
                },
            ]
        }
    },
    methods: {
        openModal() {
            this.$store.dispatch('download-img/modalDL_A')
        }
    },
}
</script>
<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>