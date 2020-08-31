<template>
    <div>
        <button @click="$refs.file.click()" type="button" class="relative pb-2/3 border-2 border-dashed border-gray-400 bg-white rounded-xl overflow-hidden w-full block focus:outline-none" :disabled="isLoading">
            <div v-if="preview" class="absolute inset-0 flex items-center justify-center">
                <img class="w-full h-full object-cover" :class="{ 'opacity-25': isLoading }" :src="preview" alt="File preview">
                <svg v-if="isLoading" class="w-10 h-10 text-black absolute animate-spin" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
            </div>
            <div v-else class="absolute inset-0 flex flex-col items-center justify-center space-y-1">
                <p class="text-gray-900 font-semibold">Upload an image</p>
                <p class="text-gray-700 text-sm leading-5">1600x1200 or larger recommended</p>
            </div>
        </button>
        <input type="file" ref="file" class="hidden" accept="image/*" @change="upload">
    </div>
</template>

<script>
import axios from 'axios'

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
            if (! event.target.files.length) return

            this.state = 'loading'
            const file = event.target.files[0]

            this.preview = URL.createObjectURL(file)

            const data = new FormData()
            data.append('file', file)

            axios.post(this.$route('media.store').url(), data).then(response => {
                this.state = 'idle'
                this.preview = response.data.url
                this.$emit('input', response.data.url)
            })
        },
    }
}
</script>
