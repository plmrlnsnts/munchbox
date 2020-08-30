<template>
    <div class="flex flex-col">
        <div class="h-16 bg-indigo-600 flex justify-between">
            <InertiaLink :href="$route('home')" class="inline-flex items-center px-4 text-white font-semibold">
                Cancel
            </InertiaLink>
            <button @click="submit" class="inline-flex items-center px-4 text-white font-semibold focus:outline-none" :class="{ 'opacity-50': ! canSubmit }" :disabled="! canSubmit">
                {{ isLoading ? 'Saving' : 'Save' }}
            </button>
        </div>
        <div class="flex-1 overflow-y-auto">
            <div class="p-4 space-y-4 mb-10">
                <h2 class="font-medium text-center">Publish your recipe</h2>
                <form @submit.prevent="submit">
                    <div class="space-y-6">
                        <FileUpload v-model="form.thumbnail" />
                        <div class="space-y-1">
                            <label class="font-medium text-gray-700">Name</label>
                            <FormField name="name">
                                <input v-model="form.name" type="text" class="px-3 py-2 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear" />
                            </FormField>
                        </div>
                        <div class="space-y-1">
                            <label class="font-medium text-gray-700">Tags</label>
                            <FormField name="tags">
                                <TagsInput v-model="form.tags" />
                            </FormField>
                        </div>
                        <div class="space-y-2">
                            <div class="text-xs leading-5 font-semibold uppercase tracking-wide text-gray-700">Suggested Tags</div>
                            <SuggestedTags @selected="form.tags.push($event)" />
                        </div>
                        <div class="space-y-1">
                            <label class="font-medium text-gray-700">Description</label>
                            <FormField name="description">
                                <textarea v-model="form.description" placeholder="Tell us something about this recipe" class="px-3 py-2 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear" rows="4"></textarea>
                            </FormField>
                        </div>
                        <hr class="-mx-4">
                        <IngredientList v-model="form.ingredients" />
                        <hr class="-mx-4">
                        <div class="space-y-1">
                            <label class="font-medium text-gray-700">Preparations</label>
                            <FormField name="instructions">
                                <textarea v-model="form.instructions" placeholder="Steps for making this awesome recipe" class="px-3 py-2 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear" rows="8"></textarea>
                            </FormField>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import FormField from '@/Shared/FormField'
import TagsInput from '@/Shared/TagsInput'
import FileUpload from '@/Shared/FileUpload'
import SuggestedTags from '@/Shared/SuggestedTags'
import IngredientList from '@/Shared/IngredientList'

export default {
    components: {
        FormField,
        TagsInput,
        FileUpload,
        SuggestedTags,
        IngredientList,
    },

    mounted () {
        this.$el.style.height = `${window.innerHeight}px`
    },

    data: vm => ({
        state: 'idle',
        form: {
            name: '',
            tags: [],
            description: '',
            ingredients: [],
            instructions: '',
            thumbnail: null,
        }
    }),

    computed: {
        isValid () {
            if (! this.form.name) return false
            if (! this.form.tags.length) return false
            if (! this.form.description) return false
            if (! this.form.ingredients.length) return false
            if (! this.form.instructions) return false
            if (! this.form.thumbnail) return false
            return true
        },

        isLoading () {
            return this.state === 'loading'
        },

        canSubmit () {
            if (! this.isValid) return false
            if (this.isLoading) return false
            return true
        }
    },

    methods: {
        async submit () {
            this.state = 'loading'
            await this.$inertia.post(this.$route('recipes.store'), this.form)
            this.state = 'idle'
        }
    }
}
</script>
