<template>
    <div class="h-full p-6 flex flex-col items-center justify-center space-y-8">
        <div v-if="$page.errors.email" class="absolute top-0 inset-x-0 bg-red-600 text-white text-center p-4 font-medium text-sm leading-5">
            {{ $page.errors.email[0] }}
        </div>
        <img class="h-6 w-auto" src="/images/logo.svg" alt="Munchbox">
        <form class="w-full space-y-4" @submit.prevent="submit">
            <div class="space-y-2">
                <label class="font-medium">Email address</label>
                <input v-model="form.email" type="text" class="form-input block w-full" autocomplete="email" required>
            </div>
            <div class="space-y-2">
                <label class="font-medium">Password</label>
                <input v-model="form.password" type="password" class="form-input block w-full" autocomplete="current-password" required>
            </div>
            <div class="space-y-2 flex items-center justify-between">
                <label class="inline-flex items-center space-x-2">
                    <input type="checkbox" class="form-checkbox text-indigo-500">
                    <span class="text-gray-700">Remember</span>
                </label>
                <a href="" class="text-indigo-500 font-medium">Forgot</a>
            </div>
            <button type="submit" class="py-2 block w-full bg-pink-500 rounded-lg text-white font-medium focus:outline-none" :class="{ 'opacity-50': isLoading }" :disabled="isLoading">
                {{ isLoading ? 'Signing In' : 'Sign In' }}
            </button>
        </form>
        <div class="w-full relative flex items-center justify-center">
            <div class="absolute px-2 bg-white text-gray-700 font-medium">Or, continue with</div>
            <hr class="w-full" />
        </div>
        <div class="w-full flex space-x-2">
            <a href="" class="w-full py-3 space-x-2 flex items-center justify-center rounded-lg bg-white border border-gray-400">
                <img class="h-5 w-auto" src="/images/google.svg" alt="">
            </a>
            <a href="" class="w-full py-3 space-x-2 flex items-center justify-center rounded-lg bg-white border border-gray-400">
                <img class="h-5 w-auto" src="/images/facebook.svg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data: vm => ({
        state: 'idle',
        form: {
            email: '',
            password: '',
        }
    }),

    computed: {
        isLoading () {
            return this.state === 'loading'
        }
    },

    methods: {
        async submit () {
            this.state = 'loading'

            await this.$inertia.post(this.$route('login'), this.form)

            this.state = 'idle'
        }
    }
}
</script>
