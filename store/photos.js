export const state = () => ({
    photos: [],
    name: '',
    isOpen: false,
    funcText: '',
})

export const getters = {
    PHOTOS(state) {
        return state.photos
    },
    ALBUM_NAME(state) {
        return state.name
    },
    IS_OPEN(state) {
        return state.isOpen
    },
    FUNC_TEXT(state) {
        return state.funcText
    }
}

export const mutations = {
    setData(state, data) {
        state.photos = data
    },
    setAlbumName(state, name) {
        state.name = name
    },
    toglleOpenModal(state) {
        state.isOpen = !state.isOpen
    },
    setText(state, text) {
        state.funcText = text
    }
}

export const actions = {
    async getData(ctx) {
        try {
            const res = await this.$axios.get('api')
            ctx.commit('setData', res.data)
            if (res) {
                ctx.dispatch('reRender/getRender', {}, { root: true })
            }

        } catch (error) {
            console.error(error)
        }
    },
    getAlbumName(ctx, name) {
        ctx.commit('setAlbumName', name)
    },
    openModal(ctx) {
        ctx.commit('toglleOpenModal')
    },
    getText(ctx, text) {
        ctx.commit('setText', text)
    }
}