export const state = () => ({
    isOpenDL: false,
    errMessage: ''
})

export const getters = {
    IS_OPEN_DL(state) {
        return state.isOpenDL
    },
    ERR_MESSAGE(state) {
        return state.errMessage
    }
}
export const mutations = {
    modalDL_M(state) {
        state.isOpenDL = true
    },
    closeModalDL_M(state) {
        state.isOpenDL = false
    },
    setMessageErr(state, message) {
        state.errMessage = message
    }
}
export const actions = {
    modalDL_A(ctx) {
        ctx.commit('modalDL_M')
    },
    closeModalDL_A(ctx) {
        ctx.commit('closeModalDL_M')
    },
    async getLink(ctx, photoId) {
        try {
            const link = await this.$axios.get(`api/photo/${photoId}`)
            if (link) {
                const href = link.data.file
                console.log(link.data);
                const a = document.createElement("a");
                a.href = href
                a.target = '_blanc'
                a.download = link.data.name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        } catch (error) {
            console.log(error);
            const err = error.response
            if (err) {
                ctx.commit('setMessageErr', err.data.message)
                setTimeout(() => {
                    ctx.commit('setMessageErr', '')
                }, 6000)
            }
        }
    },
}

// DL & dl ====> DOWNLOAD
