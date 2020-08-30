<template>
    <div class="space-y-1">
        <div class="relative">
            <slot />
            <div v-if="error" class="pointer-events-none absolute right-0 inset-y-0 px-3 mt-2 text-red-500">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>
        <p v-if="error" class="text-red-500 text-sm leading-5">
            {{ error }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
    },

    computed: {
        error () {
            return this.$page.errors[this.name]
                ? this.$page.errors[this.name][0]
                : null
        }
    }
}
</script>
