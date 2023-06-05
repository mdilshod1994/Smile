import Vue from 'vue'
import LoaderBtn from '@/components/UI/Loader-btn.vue'

const components = { LoaderBtn }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})