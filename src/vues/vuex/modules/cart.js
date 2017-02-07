import * as types from '../mutation-types'

// state
const state = {
    added: [],
    totalPrice: 0
}

// getters
const getters = {
    added: state => state.added,
    totalPrice: state => state.totalPrice
}

// actions
const actions = {
    addToCart ({commit, state}, product) {
        commit(types.ADD_TO_CART, product)
    },
    clearToCart ({commit}) {
        commit(types.CLEAR_TO_CART)
    }
}

// mutations
const mutations = {
    [types.ADD_TO_CART] (state, {id, name, price}) {
        const record = state.added.find(p => p.id === id)
        if (!record) {
            state.added.push({
                id,
                name,
                quantity: 1
            })
        } else {
            record.quantity++
        }
        state.totalPrice += price
    },

    [types.CLEAR_TO_CART] (state) {
        state.added = []
        state.totalPrice = 0
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}