<template>
    <div>
        <div class="space-y-4">
            <div class="flex justify-between">
                <div class="flex space-x-2">
                    <label class="sm:text-sm sm:leading-5 font-medium text-gray-700">Ingredients</label>
                    <button @click="remove" v-if="selectedIngredients.length" type="button" class="text-red-500 sm:text-sm sm:leading-5 focus:outline-none">
                        Remove
                    </button>
                </div>
                <button @click="showForm = true" type="button" class="text-gray-700 focus:outline-none">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                </button>
            </div>
            <ul class="space-y-2">
                <li v-if="! ingredients.length" class="sm:text-sm sm:leading-5 text-gray-700">
                    There are no ingredients yet.
                </li>
                <li v-for="(ingredient, i) in ingredients" :key="`ingredients-${i}`">
                    <label class="inline-flex items-center space-x-2">
                        <input v-model="selectedIngredients" :value="i" type="checkbox" class="form-checkbox text-indigo-500">
                        <div class="sm:text-sm sm:leading-5" :class="isSelected(i) ? 'text-indigo-700' : 'text-gray-700'">
                            {{ `${ingredient.quantity} ${ingredient.unit} of ${ingredient.name}` }}
                        </div>
                    </label>
                </li>
            </ul>
        </div>
        <IngredientForm
            v-if="showForm"
            @submit="save($event)"
            @close="showForm = false"
        />
    </div>
</template>

<script>
import IngredientForm from '@/Shared/IngredientForm'

export default {
    props: {
        value: Array,
    },

    components: {
        IngredientForm,
    },

    data: vm => ({
        ingredients: vm.value,
        selectedIngredients: [],
        showForm: false,
    }),

    methods: {
        save (ingredient) {
            this.ingredients.push(ingredient)
        },

        remove () {
            this.selectedIngredients.sort()

            while (this.selectedIngredients.length) {
                this.ingredients.splice(this.selectedIngredients.pop(), 1);
            }
        },

        isSelected (index) {
            return this.selectedIngredients.includes(index)
        }
    },

    watch: {
        ingredients: {
            deep: true,
            handler: function (value) {
                this.$emit('input', value)
            }
        }
    }
}
</script>
