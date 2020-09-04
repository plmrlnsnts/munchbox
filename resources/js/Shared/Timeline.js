import Vue from 'vue'
import axios from 'axios'

const state = Vue.observable({
    recipes: [],
    status: 'idle',
    nextPage: route('recipes.index').url(),
})

export const getters = {
    recipes: () => state.recipes,
    isLoading: () => state.status === 'loading'
}

export const mutations = {
    update (id, newValues) {
        const index = state.recipes.findIndex(recipe => recipe.id === id)

        if (index > -1) {
            const oldValues = state.recipes[index]
            state.recipes.splice(index, 1, { ...oldValues, ...newValues })
        }
    }
}

export const actions = {
    fetch () {
        state.status = 'loading'

        axios.get(state.nextPage).then(({ data }) => {
            state.recipes = state.recipes.concat(data.data)
            state.nextPage = data.next_page_url
            state.status = 'idle'
        })
    }
}
