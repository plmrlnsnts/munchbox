<template>
    <div class="h-full overflow-y-auto">
        <Portal to="header-left">
            <InertiaLink :href="$route('home')" class="text-indigo-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
            </InertiaLink>
        </Portal>
        <Portal to="header-center">
            <div class="font-bold text-lg ml-2">Recipe</div>
        </Portal>
        <div class="p-4 space-y-4 mb-10">
            <div class="flex items-center space-x-4">
                <img class="w-8 h-8 rounded-full shadow-xs object-cover bg-gray-200" :src="recipe.author.avatar" loading="lazy" />
                <div class="leading-tight overflow-hidden">
                    <h2 class="block font-semibold">{{ recipe.name }}</h2>
                    <div>
                        <span class="text-gray-700">by</span>
                        <a href="" class="font-medium text-indigo-600">{{ recipe.author.name }}</a>
                    </div>
                </div>
            </div>
            <div class="space-y-2">
                <div class="-mx-4">
                    <img class="w-full bg-gray-200" :src="recipe.thumbnail" loading="lazy">
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
            <div class="leading-tight">
                {{ recipe.description }}
            </div>
            <hr />
            <h6 class="font-semibold">Ingredients</h6>
            <ul class="space-y-4">
                <li v-for="ingredient in recipe.ingredients" :key="`ingredients-${ingredient.id}`" class="flex space-x-2">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="text-indigo-500 w-5 h-5">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    <div class="flex-1">
                        <span v-if="ingredient.quantity">{{ ingredient.quantity }}</span>
                        <span v-if="ingredient.unit">{{ ingredient.unit }}</span>
                        <span v-if="ingredient.name">{{ ingredient.name }}</span>
                    </div>
                </li>
            </ul>
            <hr />
            <h6 class="font-semibold">Instructions</h6>
            <div class="leading-tight space-y-4" v-html="recipe.instructions"></div>
        </div>
    </div>
</template>

<script>
import Layout from '@/Shared/Layout'

export default {
    layout: Layout,

    props: {
        recipe: Object,
    }
}
</script>
