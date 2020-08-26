<template>
    <div class="text-gray-900 antialiased min-h-screen flex flex-col">
        <TheHeader />
        <main class="flex-1">
            <slot />
        </main>
        <TheFooter :key="url()" />
    </div>
</template>

<script>
import TheHeader from '@/Shared/TheHeader'
import TheFooter from '@/Shared/TheFooter'

export default {
    components: {
        TheHeader,
        TheFooter
    },

    methods: {
        url () {
            return location.pathname.substr(1)
        }
    }
};
</script>
