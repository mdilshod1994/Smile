export default function ({ store, redirect }) {
    const isAuth = sessionStorage.getItem('token')
    if (!isAuth) {
        redirect('/login')
    }
}