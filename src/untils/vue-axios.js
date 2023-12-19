export default {
    install(Vue,axios) {
        Vue.prototype.$http = axios
        Vue.prototype.axios = axios
    }
}