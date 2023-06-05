<template>
    <div class="empty">
        <div class="container">
            <div class="empty__wrap">
                <nuxt-link to="/" class="empty__logo">
                    <img src="@/assets/imgs/logo.png" alt="">
                </nuxt-link>
                <div class="empty__login">
                    <h2 class="empty__title">
                        Вход в админ панель
                    </h2>
                    <form class="empty__form" @submit.prevent="login">
                        <input type="email" class="empty__input" placeholder="Email" v-model="email">
                        <input type="password" class="empty__input" placeholder="Пароль" v-model="password">
                        <button class="empty__btn btn">
                            Вход
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {

    },
    methods: {
        async login() {
            const obj = {
                email: this.email,
                password: this.password
            }
            const token = await this.$store.dispatch('user/login', obj)
            if (token) {
                this.$router.push({ path: '/admin' })
            }

            this.email = ''
            this.password = ''
        }
    },
}
</script>