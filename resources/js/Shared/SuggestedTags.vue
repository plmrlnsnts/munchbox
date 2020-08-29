<template>
    <div class="flex flex-wrap">
        <button @click="select(i)" v-for="(tag, i) in tags" :key="`tags-${tag}`" class="inline-flex mr-1 focus:outline-none">
            <span class="text-sm leading-5 text-indigo-600">{{ tag }}</span>
            <span class="text-sm leading-5 text-gray-500" v-if="i < tags.length">,</span>
        </button>
    </div>
</template>

<script>
export default {
    data: vm => ({
        tags: [
            'Quick & Easy',
            'Sweets',
            'Beverage',
            'Filipino',
            'Spicy',
            'Chicken',
            'Yogurt',
            'Healthy',
            'Budget Friendly',
            'Original'
        ],
    }),

    methods: {
        select (index) {
            this.$emit('selected', this.tags[index])
            this.tags.splice(index, 1)
        }
    }
}
</script>
