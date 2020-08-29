<template>
    <div class="flex flex-wrap pl-3 pr-2 pt-2 sm:text-sm sm:leading-5 rounded-lg bg-gray-200 border border-gray-200 focus-within:bg-white focus-within:border-indigo-300 focus-within:shadow-outline-indigo">
        <span class="mr-1 mb-2 px-2 py-px bg-gray-700 text-white rounded" v-for="tag in tags" :key="`tags-${tag}`">{{ tag }}</span>
        <input
            ref="input"
            type="text"
            placeholder="Max of 5"
            class="mr-3 mb-2 bg-transparent flex-1 min-w-1/4 focus:outline-none"
            @keypress.enter="add($event.target.value)"
            @keypress.tab="add($event.target.value)"
        />
    </div>
</template>

<script>
export default {
    props: {
        value: Array,
    },

    data: vm => ({
        tags: vm.value || []
    }),

    methods: {
        add (value) {
            if (this.tags.includes(value)) return
            this.$refs.input.value = ''
            this.tags.push(value)
        }
    },

    watch: {
        tags: {
            deep: true,
            handler: function (value) {
                this.$emit('input', value)
            }
        }
    }
}
</script>
