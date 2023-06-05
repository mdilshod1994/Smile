<template>
    <div class="container">
        <div class="admin-photoshoot">
            <h1 class="admin-photoshoot__title">
                Фотосессии
            </h1>
            <div class="admin-photoshoot__wrap">
                <PhotoshootList :photos="photos" />
            </div>
            <!-- <div class="admin-photoshoot__more">
                <button class="admin-photoshoot__more-btn btn" @click="clearAll">
                    Показать еще
                </button>
            </div> -->
        </div>
    </div>
</template>

<script>
import PhotoshootList from './photogrid/PhotoshootList.vue';

export default {
    components: { PhotoshootList },
    computed: {
        photos() {
            return this.$store.getters['photos/PHOTOS']
        },
        reRender() {
            return this.$store.getters['reRender/RENDER']
        }
    },
    methods: {
        clearAll() {
            this.$axios.get('api/clear').then(res => {
                console.log(res);
            })
        }
    },
    mounted() {
        this.$store.dispatch('photos/getData')
    },
    watch: {
        // reRender(newVal) {
        //     if (newVal) {
        //         this.$store.dispatch('photos/getData')
        //     }
        // }
    }
}
</script>