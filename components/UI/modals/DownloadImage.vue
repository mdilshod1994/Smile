<template>
    <div class="modal" @click="closeModal" v-if="isOpen">
        <div class="modal__content" @click.stop="">
            <button class="modal__close" @click="closeModal">
                <img src="@/assets/imgs/close.svg" alt="">
            </button>
            <h3 class="modal__title">
                Скачать фотографию
            </h3>
            <p class="modal__text">
                Чтобы получить фотографию в электронном виде, пожалуйста, укажите номер фотографии, который находится в
                нижнем
                углу фотографии. Получение электронных версий доступно только для купленных
                фотографий.
            </p>
            <div class="modal__actions">
                <input type="number" :class="`modal__input modal__input--number ${errMessage ? 'err' : ''}`"
                    placeholder="Цифры с нижнего угла фотографии" v-model="photoId">
                <div class="modal__btn btn" @click="downLoadImage">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.5 20C4.98333 20 3.68733 19.475 2.612 18.425C1.53667 17.375 0.999334 16.0917 1 14.575C1 13.275 1.39167 12.1167 2.175 11.1C2.95833 10.0833 3.98333 9.43335 5.25 9.15001C5.63333 7.80001 6.346 6.66668 7.388 5.75001C8.43 4.83335 9.634 4.27501 11 4.07501V12.15L9.4 10.6L8 12L12 16L16 12L14.6 10.6L13 12.15V4.07501C14.7167 4.30835 16.146 5.07935 17.288 6.38801C18.43 7.69668 19.0007 9.23401 19 11C20.15 11.1333 21.1043 11.6293 21.863 12.488C22.6217 13.3467 23.0007 14.3507 23 15.5C23 16.75 22.5623 17.8127 21.687 18.688C20.8117 19.5633 19.7493 20.0007 18.5 20H6.5Z"
                            fill="#383838" />
                    </svg>
                    Скачать
                </div>
                <p>
                    {{ errMessage }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photoId: null
        }
    },
    computed: {
        isOpen() {
            return this.$store.getters['download-img/IS_OPEN_DL']
        },
        errMessage() {
            return this.$store.getters['download-img/ERR_MESSAGE']
        }
    },
    methods: {
        closeModal() {
            this.$store.dispatch('download-img/closeModalDL_A')
        },
        downLoadImage() {
            this.$store.dispatch('download-img/getLink', this.photoId)
            this.photoId = ''
        }
    },
}
</script>