<template>
    <div class="admin-photoshoot__item" v-if="photo" :key="reRender">
        <div class="admin-photoshoot__item-top">

            <h3 class="admin-photoshoot__item-title">
                <div :class="`form-group ${photo.photo.pay && ifPayed ? 'payed' : ''}`" @click="togglePay(photo.photo)">
                    <input type="checkbox" id="html" disabled :checked="photo.photo.pay && ifPayed > 0">
                    <label for="html">
                        <svg fill="#383838" width="800px" height="800px" viewBox="0 0 32 32" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" v-if="payedLoader">
                            <path
                                d="M16 0.75c-0.69 0-1.25 0.56-1.25 1.25v0 8c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-8c0-0.69-0.56-1.25-1.25-1.25v0zM16 20.75c-0.69 0-1.25 0.56-1.25 1.25v8c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-8c-0-0.69-0.56-1.25-1.25-1.25h-0zM11.25 16c0-0.69-0.56-1.25-1.25-1.25v0h-8c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h8c0.69 0 1.25-0.56 1.25-1.25v0zM30 14.75h-8c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h8c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM6.984 5.217c-0.226-0.226-0.539-0.366-0.884-0.366-0.69 0-1.25 0.56-1.25 1.25 0 0.345 0.14 0.658 0.366 0.884v0l5.657 5.657c0.226 0.226 0.539 0.366 0.884 0.366 0.69 0 1.25-0.56 1.25-1.25 0-0.345-0.14-0.658-0.366-0.884v0zM21.127 19.357c-0.226-0.225-0.538-0.364-0.882-0.364-0.691 0-1.251 0.56-1.251 1.251 0 0.344 0.139 0.656 0.364 0.882l5.658 5.658c0.227 0.228 0.541 0.369 0.888 0.369 0.691 0 1.251-0.56 1.251-1.251 0-0.347-0.141-0.661-0.369-0.887l-0-0zM10.874 19.357l-5.657 5.658c-0.227 0.226-0.367 0.539-0.367 0.885 0 0.691 0.56 1.251 1.251 1.251 0.345 0 0.658-0.14 0.884-0.366v0l5.657-5.658c0.227-0.226 0.367-0.539 0.367-0.885 0-0.691-0.56-1.251-1.251-1.251-0.345 0-0.658 0.14-0.884 0.366v0zM20.242 13.008c0.001 0 0.001 0 0.002 0 0.345 0 0.657-0.14 0.883-0.366l5.658-5.657c0.226-0.226 0.366-0.539 0.366-0.884 0-0.691-0.56-1.251-1.251-1.251-0.346 0-0.658 0.14-0.885 0.367v0l-5.658 5.657c-0.226 0.226-0.366 0.539-0.366 0.884 0 0.69 0.56 1.25 1.25 1.25 0 0 0.001 0 0.001 0h-0z">
                            </path>
                        </svg>
                    </label>
                </div>
                <span @click="synchronize(photo)">
                    {{ photo.photo.name }}
                </span>
            </h3>
            <div class="admin-photoshoot__item-btns" @click.stop="">
                <p class="admin-photoshoot__item-steps" v-if="photo.photo.status > 0">
                    Этап {{ photo.photo.status }} из 3
                </p>
                <button v-if="photo.photo.status === 0 && !loader" @click="synchronize(photo)">
                    Синхронизировать
                </button>
                <!-- <button style="color:#1CC8FF" disabled>
                    <img src="@/assets/imgs/btn-icon.svg" alt="">
                    Выгружен с Я.Диск
                </button> -->
                <button style="color:#00FF0A" v-if="photo.photo.status >= 1 && !isLoad" @click="synchronize(photo)">
                    <img src="@/assets/imgs/btn-icon-2.svg" alt="">
                    Синхронизирован
                </button>
                <loader-btn v-if="loader && photo.photo.status === 0" />
                <loader-btn v-if="isLoad && photo.photo.status >= 1" />
            </div>
        </div>
        <Photoshootgrid v-if="photo.photo.status > 0 && currIndex === photo.index && isOpen && show" :data="data"
            :status="photo.photo.status" />
    </div>
</template>

<script>
import Photoshootgrid from './Photoshootgrid.vue';

export default {
    components: { Photoshootgrid },
    props: ['photo'],
    data() {
        return {
            isOpen: false,
            currIndex: null,
            loader: false,
            data: {},
            isLoad: false,
            show: false,
            status: null,
            payedLoader: false,
            ifPayed: true
        }
    },
    computed: {
        reRender() {
            return this.$store.getters['reRender/RENDER']
        }
    },
    methods: {
        async synchronize(el) {
            try {
                this.currIndex = el.index
                if (el.photo.status) {
                    this.isOpen = !this.isOpen
                }
                if (this.isOpen === true) {
                    this.show = false
                    this.isLoad = true
                } else {
                    this.isLoad = false
                }
                this.loader = true
                const data = await this.$axios.get(`api/init/${el.photo.id}`)
                if (data) {
                    this.data = data.data
                    this.$store.dispatch('photos/getData')

                }
            } catch (error) {
                console.error(error)
            }
        },
        async togglePay(data) {
            let payed = data.pay === 0 ? 1 : 0, id = data.id

            if (payed) {
                this.payedLoader = true
            } else {
                this.ifPayed = false
            }
            const d = await this.$axios.put(`api/photoshoots/${id}/updatePay/${payed}`)
            if (d) {
                this.$store.dispatch('photos/getData')
            }
        }
    },
    watch: {
        reRender(newVal) {
            if (newVal) {
                this.loader = false
                this.isLoad = false
                this.show = true
                this.payedLoader = false
                this.ifPayed = true
            }
        }
    }
}
</script>
<style>
.form-group {
    display: block;
    margin-bottom: 5px;
    cursor: pointer;
    margin-right: 10px;
    width: 26px;
    height: 26px;
}

.form-group svg {
    position: absolute;
    left: auto;
    top: auto;
    width: 21px;
    height: 21px;
    animation: rotation 2s infinite linear;
    transition: 0.3s ease-in-out;
}

.form-group:hover svg {
    fill: rgb(124, 255, 129);
}


.form-group input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
}

.form-group label {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.form-group label:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #383838;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 12px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.3s ease-in-out;
}

.form-group input:checked+label:before {
    border: solid rgb(0, 255, 10);
}

.form-group:hover label:before {
    border: solid rgb(124, 255, 129);
}

.form-group input:checked+label:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid rgb(0, 255, 10);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
</style>