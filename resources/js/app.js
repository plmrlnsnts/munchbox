import { InertiaApp } from '@inertiajs/inertia-vue'
import PortalVue from 'portal-vue'
import Vue from 'vue'

Vue.use(InertiaApp)
Vue.use(PortalVue)

Vue.mixin({ methods: { $route: window.route } })

const app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
