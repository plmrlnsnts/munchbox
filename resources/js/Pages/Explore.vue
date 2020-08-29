<template>
    <div class="h-full flex flex-col items-center justify-center">
        <Portal to="header-center">
            <form>
                <div class="relative">
                    <input type="text" placeholder="Search munchbox" class="pl-10 pr-3 py-2 block w-full font-medium sm:text-sm sm:leading-5 rounded-full border border-gray-200 bg-gray-200 focus:border-indigo-300 focus:bg-white focus:outline-none focus:shadow-outline-indigo" />
                    <div class="pointer-events-none absolute inset-y-0 flex items-center px-3">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-gray-500 w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>
            </form>
        </Portal>
        <Portal to="header-right">
            <a href="" class="block text-indigo-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            </a>
        </Portal>
        <h6 class="text-3xl">🧭</h6>
        <p>Take a sad song and make it better</p>
    </div>
</template>

<script>
import Layout from '@/Shared/Layout'

export default {
    layout: Layout,
}
</script>
