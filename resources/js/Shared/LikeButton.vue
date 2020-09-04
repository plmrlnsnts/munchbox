<template>
    <button @click="submit" type="button" class="focus:outline-none">
        <svg v-if="isLiked" viewBox="0 0 20 20" fill="currentColor" class="text-red-500 w-6 h-6">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
        </svg>
        <svg v-else fill="none" viewBox="0 0 24 24" stroke="currentColor" class="text-gray-700 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
    </button>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        value: [Boolean, Number],
        model: String,
        id: Number,
    },

    data: vm => ({
        isLiked: !! vm.value
    }),

    methods: {
        submit () {
            this.isLiked ? this.unlike() : this.like()
            this.isLiked = ! this.isLiked
            this.$emit('liked', this.isLiked)
        },

        like () {
            axios.post(this.$route('likes.store', [this.model, this.id]).url())
        },

        unlike () {
            axios.delete(this.$route('likes.destroy', [this.model, this.id]).url())
        }
    }
}
</script>
