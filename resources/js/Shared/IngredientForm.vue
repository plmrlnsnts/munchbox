<template>
    <div class="z-10 fixed inset-0 flex flex-col items-center justify-end space-y-4 bg-black bg-opacity-50">
        <button @click="close" type="button" class="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none">
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
        <form @submit.prevent="submit" class="self-stretch bg-white rounded-t-xl px-6 py-4 space-y-4">
            <h6 class="text-lg font-semibold text-center">Add a new ingredient</h6>
            <hr class="-mx-6">
            <div class="space-y-1">
                <label class="text-sm leading-5 font-medium text-gray-700">Measurements</label>
                <div class="flex space-x-2">
                    <input v-model="form.quantity" type="text" placeholder="Qty" class="px-3 py-2 text-sm leading-5 block w-20 rounded-lg border border-gray-200 bg-gray-200 focus:bg-white
                    focus:outline-none focus:shadow-outline focus:border-blue-400 transition-shadow duration-100 ease-linear">
                    <input v-model="form.unit" type="text" placeholder="Unit" class="px-3 py-2 text-sm leading-5 block w-full rounded-lg border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:shadow-outline focus:border-blue-400 transition-shadow duration-100 ease-linear">
                </div>
            </div>
            <div class="space-y-1">
                <label class="text-sm leading-5 font-medium text-gray-700">Ingredient</label>
                <input v-model="form.name" type="text" class="px-3 py-2 text-sm leading-5 block w-full rounded-lg border border-gray-200 bg-gray-200 focus:bg-white
                    focus:outline-none focus:shadow-outline focus:border-blue-400 transition-shadow duration-100 ease-linear">
            </div>
            <button type="submit" class="rounded-full px-4 py-3 text-sm leading-5 font-medium block w-full bg-pink-500 text-white focus:outline-none" :class="{ 'opacity-50 cursor-not-allowed': ! isValid }" :disabled="! isValid">Add ingredient</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        ingredient: {
            type: Object,
            default: function () {
                return {}
            }
        },
    },

    data: vm => ({
        form: {
            name: vm.ingredient.name || '',
            quantity: vm.ingredient.quantity || 1,
            unit: vm.ingredient.unit || 'pc',
        }
    }),

    computed: {
        isValid () {
            if (! this.form.quantity) return false
            if (! this.form.unit) return false
            if (! this.form.name) return false
            return true
        }
    },

    methods: {
        submit () {
            this.$emit('submit', this.form)
            this.close()
        },

        close () {
            this.$emit('close')
        }
    }
}
</script>
