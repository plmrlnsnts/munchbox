<template>
    <div class="relative h-full">
        <Portal to="header-center">
            <img class="h-5 w-full" src="/logo.svg" alt="Munchbox">
        </Portal>
        <Portal to="header-right">
            <a href="" class="block relative text-indigo-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span class="w-3 h-3 border-2 border-white absolute bottom-0 right-0 bg-pink-500 rounded-full"></span>
            </a>
        </Portal>
        <div class="h-full flex flex-col items-center justify-center">
            <h6 class="text-3xl">✨</h6>
            <p>Hey Jude, don't make it bad</p>
        </div>
        <InertiaLink :href="$route('recipes.create')" class="absolute bottom-4 right-4 w-16 h-16 rounded-full shadow inline-flex items-center justify-center bg-indigo-500 text-white">
            <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z" />
            </svg>
        </InertiaLink>
    </div>
</template>

<script>
import Layout from '@/Shared/Layout'

export default {
    layout: Layout,

    data: vm => ({
        recipes: [
            {
                id: 1,
                title: 'Strawberry Pancakes',
                thumbnail: 'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&h=480&q=80',
                author: {
                    name: 'Pepper Pots',
                    avatar: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                }
            },
            {
                id: 2,
                title: 'Fish & Chips',
                thumbnail: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&h=480&q=80',
                author: {
                    name: 'Tony Stark',
                    avatar: 'https://images.unsplash.com/photo-1511546395756-590dffdcdbd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                }
            },
            {
                id: 3,
                title: 'Ceasar\'s Salad',
                thumbnail: 'https://images.unsplash.com/photo-1537215781824-73d7761029e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&h=480&q=80',
                author: {
                    name: 'Stever Rogers',
                    avatar: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                }
            },
        ]
    })
}
</script>
