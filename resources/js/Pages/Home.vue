<template>
    <div class="h-full overflow-y-auto" @scroll.passive="scrolled">
        <Portal to="header-right">
            <a href="" class="block relative text-indigo-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span class="w-3 h-3 border-2 border-white absolute bottom-0 right-0 bg-pink-500 rounded-full"></span>
            </a>
        </Portal>
        <Portal to="floating-button">
            <InertiaLink :href="$route('recipes.create')" class="w-16 h-16 rounded-full shadow inline-flex items-center justify-center bg-indigo-500 text-white">
                <svg class="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22,2C22,2 14.36,1.63 8.34,9.88C3.72,16.21 2,22 2,22L3.94,21C5.38,18.5 6.13,17.47 7.54,16C10.07,16.74 12.71,16.65 15,14C13,13.44 11.4,13.57 9.04,13.81C11.69,12 13.5,11.6 16,12L17,10C15.2,9.66 14,9.63 12.22,10.04C14.19,8.65 15.56,7.87 18,8L19.21,6.07C17.65,5.96 16.71,6.13 14.92,6.57C16.53,5.11 18,4.45 20.14,4.32C20.14,4.32 21.19,2.43 22,2Z" />
                </svg>
            </InertiaLink>
        </Portal>
        <ul class="divide-y divide-gray-300 mb-10">
            <li v-for="recipe in recipes" :key="`recipes-${recipe.id}`" class="px-4 py-6 space-y-4">
                <div class="flex items-center space-x-4">
                    <img class="w-8 h-8 rounded-full shadow-xs object-cover bg-gray-200" :src="recipe.author.avatar" loading="lazy" />
                    <div class="leading-none overflow-hidden">
                        <InertiaLink :href="$route('recipes.show', recipe.id)" class="block font-semibold text-sm leading-5 truncate">{{ recipe.name }}</InertiaLink>
                        <div>
                            <span class="text-sm text-gray-700">by</span>
                            <a href="" class="font-medium text-sm text-indigo-600">{{ recipe.author.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="relative pb-2/3 rounded-xl overflow-hidden">
                        <InertiaLink :href="$route('recipes.show', recipe.id)">
                            <img class="absolute w-full h-full bg-gray-200 rounded-xl object-cover" :src="recipe.thumbnail" loading="lazy">
                        </InertiaLink>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <a href="" class="text-gray-700">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                            </a>
                            <button class="text-gray-700 focus:outline-none">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button type="button" class="text-gray-700 focus:outline-none">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <ul>
                    <li class="text-sm leading-tight">
                        <span class="font-medium">{{ recipe.author.name }}</span>
                        <span class="text-gray-700">{{ recipe.description | truncate(100) }}</span>
                    </li>
                </ul>
            </li>
            <template v-if="isLoading">
                <li v-for="index in [1, 2]" :key="`loader-${index}`" class="px-4 py-6 space-y-4">
                    <div class="flex items-center space-x-4">
                        <div class="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div class="w-32 h-8 rounded-full bg-gray-200"></div>
                    </div>
                    <div class="pb-2/3 rounded-xl bg-gray-200"></div>
                    <div class="flex items-center justify-between">
                        <div class="flex space-x-2">
                            <div class="w-6 h-6 rounded-full bg-gray-200"></div>
                            <div class="w-6 h-6 rounded-full bg-gray-200"></div>
                        </div>
                        <div class="flex space-x-2">
                            <div class="w-6 h-6 rounded-full bg-gray-200"></div>
                        </div>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Layout from '@/Shared/Layout'

export default {
    layout: Layout,

    data: vm => ({
        state: 'idle',
        recipes: [],
        nextPageUrl: vm.$route('recipes.index').url(),
    }),

    mounted () {
        this.fetch()
    },

    computed: {
        isLoading () {
            return this.state === 'loading'
        }
    },

    methods: {
        fetch () {
            if (this.state === 'loading') return

            if (! this.nextPageUrl) return

            this.state = 'loading'

            axios.get(this.nextPageUrl).then(response => {
                this.state = 'idle'
                this.nextPageUrl = response.data.next_page_url
                this.recipes = this.recipes.concat(response.data.data)
            })
        },

        scrolled (event) {
            const element = event.target
            const scrollPosition = element.offsetHeight + element.scrollTop
            const scrollHorizon = element.scrollHeight - element.scrollHeight / 4

            if (scrollPosition >= scrollHorizon) {
                this.fetch()
            }
        }
    }
}
</script>
