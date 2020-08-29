<template>
    <div class="text-gray-900 antialiased h-screen flex flex-col">
        <TheHeader />
        <main class="flex-1">
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

    methods: {
        url () {
            return location.pathname.substr(1)
        }
    }
};
</script>
