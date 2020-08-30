<template>
    <div>
        <div class="space-y-4">
            <div class="flex justify-between">
                <div class="flex space-x-2">
                    <label class=" font-medium text-gray-700">Ingredients</label>
                    <button @click="remove" v-if="selectedIngredients.length" type="button" class="text-red-500  focus:outline-none">
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
                <li v-if="! ingredients.length" class="flex items-center space-x-2">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="text-gray-400 w-5 h-5">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                    <p class="text-gray-500 text-sm leading-5">
                        You haven't added any ingredients yet.
                    </p>
                </li>
                <li v-for="(ingredient, i) in ingredients" :key="`ingredients-${i}`">
                    <label class="inline-flex items-center space-x-2">
                        <input v-model="selectedIngredients" :value="i" type="checkbox" class="form-checkbox text-indigo-500">
                        <div class="" :class="isSelected(i) ? 'text-indigo-700' : 'text-gray-700'">
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
