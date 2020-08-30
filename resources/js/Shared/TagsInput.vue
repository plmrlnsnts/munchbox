<template>
    <div class="flex flex-wrap items-center pl-3 pr-2 pt-2 pb-1 rounded-lg border border-gray-200 bg-gray-200 focus-within:bg-white focus-within:border-indigo-300 focus-within:shadow-outline-indigo transition-shadow duration-100 ease-linear">
        <button v-for="(tag, i) in tags" :key="`tags-${tag}`" @click="select(i)" type="button" class="mr-1 mb-1 px-2 py-px bg-gray-700 text-sm leading-5 text-white rounded-md whitespace-no-wrap flex-shrink-0 focus:outline-none" :class="{ 'bg-pink-600': isSelected(i) }">
            {{ tag }}
        </button>
        <input
            ref="input"
            type="text"
            class="mr-1 mb-1 bg-transparent flex-1 min-w-1/4 focus:outline-none"
            @input="input"
            @keydown.tab.prevent="add($event.target.value)"
            @keydown.enter.prevent="add($event.target.value)"
            @keydown.delete="remove(selectedTag !== null ? selectedTag : (tags.length - 1))"
        />
    </div>
</template>

<script>
export default {
    props: {
        value: Array,
    },

    data: vm => ({
        tags: vm.value || [],
        selectedTag: null,
    }),

    methods: {
        select (index) {
            this.selectedTag = index
            this.$refs.input.focus()
        },

        isSelected (index) {
            return this.selectedTag === index
        },

        input (event) {
            let value = event.target.value
            if (value.endsWith(',')) {
                this.add(value.replace(',', ''))
            }
        },

        add (value) {
            if (! value) return
            if (this.tags.includes(value)) return
            this.$refs.input.value = ''
            this.tags.push(value)
        },

        remove (index) {
            if (this.$refs.input.value) return
            this.tags.splice(index, 1)
            this.selectedTag = null
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
