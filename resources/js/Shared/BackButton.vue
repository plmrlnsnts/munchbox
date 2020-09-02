<template>
    <button @click="clicked" type="button" class="text-indigo-500 focus:outline-none">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
    </button>
</template>

<script>
export default {
    methods: {
        clicked () {
            window.history.back()
        }
    }
}
</script>
