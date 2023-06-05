export const state = () => ({
    render: 0
})

export const getters = {
    RENDER(state) {
        return state.render
    }
}

export const mutations = {
    setRender(state) {
        state.render += 1
    },
}

export const actions = {
    getRender(ctx) {
        ctx.commit('setRender')
    },

}
