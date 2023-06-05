<template>
    <div class="modal" @click="closeModal" v-if="isOpen">
        <div class="modal__content" @click.stop="">
            <button class="modal__close" @click="closeModal">
                <img src="@/assets/imgs/close.svg" alt="">
            </button>
            <h3 class="modal__title">
                Написать в службу поддержки
            </h3>
            <form class="modal__actions modal__actions--support" @submit.prevent="sendMessage">
                <input type="text" :class="`modal__input ${errMessages.name === 'name' ? 'err' : ''}`" placeholder="Имя"
                    v-model="messages.name">
                <input type="text" :class="`modal__input ${errMessages.email === 'email' ? 'err' : ''}`" placeholder="Почта"
                    v-model="messages.email">
                <input type="text" class="modal__input" v-mask="'+7 (###) ###-##-##'" placeholder="+7 (***) ***-**-**"
                    v-model="messages.phone">
                <textarea :class="`modal__input modal__input--textarea ${errMessages.message === 'message' ? 'err' : ''}`"
                    rows="5" placeholder="Сообщение" v-model="messages.message"></textarea>
                <button class="modal__btn btn" type="submit">
                    Отправить
                </button>
            </form>
            <div class="modal__thanks" v-if="messageSent">
                <h1 class="modal__title">
                    Сообщение отправлено, <br> ответ придет вам на email
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: {
                name: '',
                email: '',
                phone: '',
                message: '',
            },
            errMessages: {
                name: '',
                email: '',
                message: '',
            },
            messageSent: false
        }
    },
    computed: {
        isOpen() {
            return this.$store.getters['support/IS_OPEN']
        },
    },
    methods: {
        async sendMessage() {
            try {
                const d = await this.$axios.post('api/send-email', this.messages)
                if (d.data) {
                    this.messageSent = true
                    this.messages = {
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                    }
                    setTimeout(() => {
                        this.closeModal()
                        this.messageSent = false
                    }, 4000);
                }
            } catch (error) {
                console.log(error.response);
                const data = error.response.data.errors
                if (data.email) {
                    this.errMessages.email = 'email'
                }
                if (data.name) {
                    this.errMessages.name = 'name'
                }
                if (data.message) {
                    this.errMessages.message = 'message'
                }
                setTimeout(() => {
                    this.errMessages = {
                        name: '',
                        email: '',
                        message: '',
                    }
                }, 5000);
            }
        },
        closeModal() {
            this.$store.dispatch('support/closeModal_s')
        },
    }
}
</script>