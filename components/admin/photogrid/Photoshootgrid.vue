<template>
    <div class="admin-photoshoot__grid" @click.stop="" v-if="data">
        <div class="admin-photoshoot__qnty" v-if="data.items">
            В базе сайта {{ data.items.length }} альбомов:
        </div>
        <div class="admin-photoshoot__actions">
            <div class="admin-photoshoot__action">
                <div v-if="status > 1" style="color: #026106;">
                    <img src="@/assets/imgs/tick.svg" alt="">
                    Номера добавленны
                </div>
                <div v-else>
                    <img src="@/assets/imgs/untick.svg" alt="">
                    Номера не добавлены
                </div>
                <button @click="addNumber(data)" v-if="!loader" v-show="status <= 1">
                    Добавить
                </button>
                <loader-btn v-if="loader" />
            </div>
            <div :class="`admin-photoshoot__action `">
                <div v-if="status > 2" style="color: #026106;">
                    <img src="@/assets/imgs/tick.svg" alt="">
                    На яндекс диск выгруженны
                </div>
                <div v-else>
                    <img src="@/assets/imgs/untick.svg" alt="">
                    На яндекс диск не выгруженны
                </div>

                <button @click="loadToDisc(data)" v-if="!loaded" v-show="status <= 2">
                    Выгрузить
                </button>
                <loader-btn v-if="loaded" />
            </div>
            <div :class="`admin-photoshoot__action `">
                <div v-if="status >= 3" style="color: #026106;">
                    <img src="@/assets/imgs/tick.svg" alt="">
                    Документация сформирована
                </div>
                <button @click="loadToDocument(data)" v-if="!loadedDocument" v-show="status >= 3">
                    Скачать
                </button>
                <loader-btn v-if="loadedDocument" />
            </div>
        </div>
        <div class="admin-photoshoot__albums">
            <div class="admin-photoshoot__album" v-for="item in data.items" :key="item.id">
                <h5 class="admin-photoshoot__album-title">
                    {{ item.name }}
                </h5>
                <div class="admin-photoshoot__album-list">
                    <div class="admin-photoshoot__album-item" v-for="(item, index) in formats(item.sizes)" :key="index"
                        v-show="item[1] > 0">
                        <div class="admin-photoshoot__album-format">
                            Формат: {{ item[0] }}
                        </div>
                        <div class="admin-photoshoot__album-qnty">
                            {{ item[1] }} шт
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'status'],
    data() {
        return {
            loader: false,
            loaded: false,
            loadedDocument: false
        }
    },
    computed: {
    },
    methods: {
        async addNumber(data) {
            this.$store.dispatch('photos/getText', 'server')
            this.$store.dispatch('photos/openModal')
            this.loader = true
            let count = 0
            const photos = data.items
            for (let i = 0; i < photos.length; i++) {
                const element = photos[count];
                this.$store.dispatch('photos/getAlbumName', element.name)
                try {
                    let loadPhoto = await this.$axios.get(`/api/initPhotos/${element.id}`)
                    if (loadPhoto) {
                        count++
                        if (photos.length <= count) {
                            this.$store.dispatch('photos/getData')
                            this.$store.dispatch('photos/getAlbumName', '')
                            this.$store.dispatch('photos/openModal')
                            this.loader = false
                        }
                    }
                } catch (error) {
                    console.error(error);
                    // this.addNumber()
                    return error
                }
                // finally {
                //     this.$store.dispatch('photos/openModal')
                // }
            }
        },
        async loadToDisc(data) {
            this.$store.dispatch('photos/getText', 'disc')
            this.$store.dispatch('photos/openModal')
            this.loaded = true
            let count = 0
            const photos = data.items
            for (let i = 0; i < photos.length; i++) {
                const element = photos[count];
                this.$store.dispatch('photos/getAlbumName', element.name)
                try {
                    let loadPhoto = await this.$axios.get(`/api/loadPhotos/${element.id}`)
                    if (loadPhoto) {
                        count++
                        if (photos.length <= count) {
                            this.$store.dispatch('photos/getData')
                            this.$store.dispatch('photos/getAlbumName', '')
                            this.$store.dispatch('photos/openModal')
                            this.loaded = false
                        }
                    }
                } catch (error) {
                    if (error.message.includes('ConnectException')) {
                        this.addNumber()
                    }
                    return error
                }
                // finally {
                //     this.$store.dispatch('photos/openModal')
                // }
            }
        },
        async loadToDocument(el) {
            this.loadedDocument = true
            try {
                const file = await this.$axios.get(`api/createDocuments/${el.currentPhotoshoots.id}`)

                if (file) {
                    const href = file.data.url
                    const a = document.createElement("a");
                    a.href = href
                    a.target = '_blanc'
                    a.download = href;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    this.loadedDocument = false
                }

            } catch (error) {
                console.log(error);
            }

        },
        formats(el) {
            let d = Object.entries(el)
            let b = d.filter(el => {
                if (el[1]) {
                    return el
                }
            })
            return b
        }
    },
}
</script>