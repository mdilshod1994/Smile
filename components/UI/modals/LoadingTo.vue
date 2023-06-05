<template>
    <div class="modal" v-if="isOpen">
        <div class="modal__content">
            <h3 class="modal__title">
                Загружаем фотографии {{ text }}
            </h3>
            <p class="modal__text">
                Это может занять до 10 минут - в зависимости от количества фотографий в альбомах
            </p>
            <p class="modal__text">
                Сейчас загружаем фото из альбома: {{ name }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        name() {
            return this.$store.getters['photos/ALBUM_NAME']
        },
        isOpen() {
            return this.$store.getters['photos/IS_OPEN']
        },
        text() {
            const f = this.$store.getters['photos/FUNC_TEXT']
            if (f === 'server') {
                return 'к нам на сервер и добавляем на них номера'
            } else if (f === 'disc') {
                return 'на Яндекс Диск'
            } else {
                return ''
            }
        }
    }
}
</script>