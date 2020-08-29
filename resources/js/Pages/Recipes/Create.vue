<template>
    <div class="flex flex-col">
        <div class="h-16 bg-gray-900 flex justify-between">
            <InertiaLink :href="$route('home')" class="inline-flex items-center px-4 text-white font-semibold sm:text-sm sm:leading-5">
                Cancel
            </InertiaLink>
            <button class="inline-flex items-center px-4 text-white font-semibold sm:text-sm sm:leading-5 opacity-50 focus:outline-none">
                Save
            </button>
        </div>
        <div class="flex-1 overflow-y-auto">
            <div class="p-4 space-y-4 mb-10">
                <h2 class="font-medium text-center">Publish your recipe</h2>
                <form>
                    <div class="space-y-6">
                        <FileUpload v-model="form.thumb" />
                        <div class="space-y-1">
                            <label class="sm:text-sm sm:leading-5 font-medium text-gray-700">Name</label>
                            <input type="text" class="px-3 py-2 sm:text-sm sm:leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear" />
                        </div>
                        <div class="space-y-1">
                            <label class="sm:text-sm sm:leading-5 font-medium text-gray-700">Tags</label>
                            <TagsInput v-model="form.tags" />
                        </div>
                        <div class="space-y-2">
                            <div class="text-sm leading-5 font-medium text-gray-700">Suggested Tags</div>
                            <SuggestedTags @selected="form.tags.push($event)" />
                        </div>
                        <div class="space-y-1">
                            <label class="sm:text-sm sm:leading-5 font-medium text-gray-700">Description</label>
                            <textarea placeholder="How would you describe your recipe" class="px-3 py-2 sm:text-sm sm:leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear" rows="4"></textarea>
                        </div>
                        <hr class="-mx-4">
                        <IngredientList v-model="form.ingredients" />
                        <hr class="-mx-4">
                        <div class="space-y-1">
                            <label class="sm:text-sm sm:leading-5 font-medium text-gray-700">Cooking Instructions</label>
                            <textarea placeholder="Steps for making this awesome recipe" class="px-3 py-2 sm:text-sm sm:leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear" rows="8"></textarea>
                        </div>
                        <div class="space-y-1">
                            <label class="sm:text-sm sm:leading-5 font-medium text-gray-700">Video (optional)</label>
                            <div class="relative">
                                <input type="text" placeholder="Youtube embed url" class="pl-10 pr-3 py-2 sm:text-sm sm:leading-5 rounded-lg block w-full bg-gray-200 border border-gray-200 focus:bg-white focus:border-indigo-300 focus:outline-none focus:shadow-outline-indigo transition-shadow duration-100 ease-linear" />
                                <div class="pointer-events-none flex items-center absolute inset-0 px-3">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="text-gray-400 w-5 h-5">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import TagsInput from '@/Shared/TagsInput'
import FileUpload from '@/Shared/FileUpload'
import SuggestedTags from '@/Shared/SuggestedTags'
import IngredientList from '@/Shared/IngredientList'

export default {
    components: {
        TagsInput,
        FileUpload,
        SuggestedTags,
        IngredientList,
    },

    mounted () {
        this.$el.style.height = `${window.innerHeight}px`
    },

    data: vm => ({
        form: {
            name: '',
            tags: [],
            description: '',
            ingredients: [],
            instructions: '',
            video_url: '',
            thubmnail: null,
        }
    }),
}
</script>
