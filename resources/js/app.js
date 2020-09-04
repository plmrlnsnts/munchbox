import { InertiaApp } from '@inertiajs/inertia-vue'
import PortalVue from 'portal-vue'
import Vue from 'vue'

Vue.use(PortalVue)
Vue.use(InertiaApp)

Vue.mixin({ methods: { $route: window.route } })

Vue.filter('truncate', function (value, length) {
    return value.length > length
        ? value.slice(0, length) + '...'
        : value;
});

const app = document.getElementById('app')

new Vue({
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)
