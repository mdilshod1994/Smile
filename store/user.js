export const state = () => ({
    user: null
})

export const getters = {
}

export const mutations = {
    setData(state, data) {
        state.user = data
    },
    clearToken(state) {
        state.user = null
    }
}

export const actions = {
    async login(ctx, obj) {
        try {
            const res = await this.$axios.post('api/login', obj)
            ctx.commit('setData', res.data.token)
            if (res.data.token) {
                sessionStorage.setItem('token', res.data.token)
                return res.data.token
            }
        } catch (error) {
            console.error(error)
        }
    },
    logout(ctx) {
        sessionStorage.removeItem('token')
        ctx.commit('clearToken')
    }
}