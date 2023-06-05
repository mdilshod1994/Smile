<template>
    <div class="admin-photoshoot__list" v-if="photos">
        <PhotoshootItem v-for="(photo, index) in photos" :key="photo.id" :photo="{ photo, index }" />
    </div>
</template>

<script>
import PhotoshootItem from './PhotoshootItem.vue';


export default {
    props: ['photos'],
    components: { PhotoshootItem }
}
</script>