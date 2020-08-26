<template>
    <footer class="bg-white h-16 border-t flex">
        <InertiaLink href="/" class="w-1/4 inline-flex items-center justify-center">
            <svg v-if="isActive('home')" viewBox="0 0 20 20" fill="currentColor" class="text-indigo-500 w-6 h-6"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            <svg v-else fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-gray-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        </InertiaLink>
        <InertiaLink href="/explore" class="w-1/4 inline-flex items-center justify-center">
            <svg v-if="isActive('explore')" viewBox="0 0 20 20" fill="currentColor" class="text-indigo-500 w-6 h-6"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            <svg v-else fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-gray-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </InertiaLink>
        <InertiaLink href="/notifications" class="w-1/4 inline-flex items-center justify-center">
            <svg v-if="isActive('notifications')" viewBox="0 0 20 20" fill="currentColor" class="text-indigo-500 w-6 h-6"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            <svg v-else fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-gray-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </InertiaLink>
        <InertiaLink href="/calendar" class="w-1/4 inline-flex items-center justify-center">
            <svg v-if="isActive('calendar')" viewBox="0 0 20 20" fill="currentColor" class="text-indigo-500 w-6 h-6"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            <svg v-else fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-gray-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        </InertiaLink>
    </footer>
</template>

<script>
export default {
    methods: {
        isActive (route) {
            return this.$route().current(route)
        }
    },
}
</script>
