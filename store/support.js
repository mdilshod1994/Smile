export const state = () => ({
    isOpen: false
})

export const getters = {
    IS_OPEN(state) {
        return state.isOpen
    }
}
export const mutations = {
    modal(state) {
        state.isOpen = true
    },
    closeModal(state) {
        state.isOpen = false
    },
}
export const actions = {
    modal_s(ctx) {
        ctx.commit('modal')
    },
    closeModal_s(ctx) {
        ctx.commit('closeModal')
    },
}
