<template>
    <div class="admin-header">
        <div class="container">
            <div class="admin-header__wrap">
                <nuxt-link to="/" class="admin-header__logo">
                    <img src="@/assets/imgs/logo.png" alt="">
                </nuxt-link>
                <div class="admin-header__btns">
                    <nuxt-link to="/admin" :class="`admin-header__btn ${$route.path === '/admin' ? 'active' : ''}`">
                        Фотосессии
                    </nuxt-link>
                    <nuxt-link to="/admin/settings"
                        :class="`admin-header__btn ${$route.path === '/admin/settings' ? 'active' : ''}`">
                        Настройки
                    </nuxt-link>
                    <nuxt-link to="" @click.native="logout" class="admin-header__btn">
                        Выйти
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('user/logout')
            this.$router.push({ name: 'login' })
        }
    },
}
</script>