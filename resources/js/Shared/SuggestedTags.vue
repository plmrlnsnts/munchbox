<template>
    <div class="flex flex-wrap">
        <span v-if="! tags.length" class="text-gray-500 text-sm leading-5">Woopsie, we just ran out of suggestions.</span>
        <button @click="select(i)" v-for="(tag, i) in paginatedTags" :key="`tags-${tag}`" class="inline-flex mr-1 focus:outline-none">
            <span class="text-sm leading-5 text-indigo-600">{{ tag }}</span>
            <span class="text-sm leading-5 text-gray-500" v-if="i < (paginatedTags.length - 1)">,</span>
        </button>
    </div>
</template>

<script>
import { shuffle } from 'lodash'

export default {
    data: vm => ({
        tags: shuffle([
            'Appetizers',
            'Asian',
            'Beas and Peas',
            'Beef',
            'Beverage',
            'Breads & Rolls',
            'Breakfast',
            'Budget Friendly',
            'Cakes',
            'Cheese',
            'Chicken',
            'Desserts',
            'Exotic',
            'Filipino',
            'Healthy',
            'Indian',
            'Italian',
            'Main Dish',
            'Meat and Poultry',
            'Mexican',
            'Original',
            'Pasta',
            'Pork',
            'Quick & Easy',
            'Salads',
            'Salmon',
            'Seafood',
            'Slow Cooker',
            'Smoothies',
            'Soups',
            'Southern',
            'Spicy',
            'Sweets',
            'Vegan',
            'Vegetables',
            'Vegetarian',
        ],)
    }),

    computed: {
        paginatedTags () {
            return this.tags.slice(0, 9)
        }
    },

    methods: {
        select (index) {
            this.$emit('selected', this.tags[index])
            this.tags.splice(index, 1)
        }
    }
}
</script>
