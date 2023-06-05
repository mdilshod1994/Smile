<template>
    <main class="admin">
        <Header />
        <Nuxt />
    </main>
</template>
<script>
import Header from '@/components/admin/Header.vue'

export default {

    name: "Admin",
    middleware: 'auth',
    components: {
        Header
    },
    data() {
        return {
        }
    },
    computed: {
    },
    mounted() {
    },

    methods: {
    }
}


</script>