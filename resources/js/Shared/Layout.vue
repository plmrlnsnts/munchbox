<template>
    <div class="flex flex-col">
        <TheHeader />
        <main class="flex-1 overflow-hidden">
            <slot />
        </main>
        <TheNavigation :key="url()" />
    </div>
</template>

<script>
import TheHeader from '@/Shared/TheHeader'
import TheNavigation from '@/Shared/TheNavigation'

export default {
    components: {
        TheHeader,
        TheNavigation
    },

    mounted () {
        this.$el.style.height = `${window.innerHeight}px`
    },

    methods: {
        url () {
            return location.pathname.substr(1)
        }
    }
};
</script>
