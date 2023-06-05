<template>
    <div>
        <Photoshoot />
        <LoadingTo  />
    </div>
</template>

<script>

import LoadingTo from '~/components/UI/modals/LoadingTo.vue';
import Photoshoot from '~/components/admin/Photoshoot.vue'

export default {
    layout: 'admin',
    components: {
        Photoshoot,
        LoadingTo
    },
    mounted() {
        if (this.$route.name === 'admin') {
            document.querySelector('body').style.background = '#FEFFD2'
        }
    },
}
</script>