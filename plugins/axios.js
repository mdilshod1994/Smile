export default function ({ $axios, app, redirect, store }, inject) {
    $axios.onRequest(request => {
        const accessData = sessionStorage.getItem('token')
        if (accessData) {
            $axios.setToken(accessData, 'Bearer')
        }
        return request
    }, er => console.log(er))
    $axios.onResponseError(error => {
        const code = parseInt(error.response.status)
        if (code === 401) {
            store.dispatch('user/logout')
            redirect('/login')
        }
        return Promise.reject(error)
    })
}