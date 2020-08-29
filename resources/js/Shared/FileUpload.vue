<template>
    <div>
        <button @click="$refs.file.click()" type="button" class="relative border-2 border-dashed border-gray-400 bg-white rounded-xl overflow-hidden h-56 w-full block focus:outline-none">
            <div v-if="preview" class="absolute inset-0 flex items-center justify-center">
                <img class="w-full h-full object-cover" :class="{ 'opacity-25': isLoading }" :src="preview" alt="File preview">
                <svg v-if="isLoading" class="w-10 h-10 text-black absolute animate-spin" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
            </div>
            <div v-else class="absolute inset-0 flex flex-col items-center justify-center space-y-2 ">
                <svg viewBox="0 0 20 20" fill="currentColor" class="text-gray-500 w-8 h-8">
                    <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>
                <p class="text-gray-900 text-lg font-semibold">Upload an image</p>
                <p class="text-gray-700 text-sm leading-5">1600x1200 or larger recommended, up to 10mb</p>
            </div>
        </button>
        <input type="file" ref="file" class="hidden" @change="upload">
    </div>
</template>

<script>
export default {
    props: {
        value: String
    },

    data: vm => ({
        state: 'idle',
        preview: vm.value,
    }),

    computed: {
        isLoading () {
            return this.state === 'loading'
        }
    },

    methods: {
        upload (event) {
            this.state = 'loading'
            const file = event.target.files[0]
            this.preview = URL.createObjectURL(file)
            setTimeout(() => this.state = 'idle', 3000)
        }
    }
}
</script>
