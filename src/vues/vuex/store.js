import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'
import * as getters from './getters'
import * as actions from './actions'

import cart from './modules/cart'

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'

//根级别的state和mutations
const state = {
    count: 0,
    msg: 'msg in vuex store.js'
}
const mutations = {
    [types.ROOT_INCREMENT] (state) {
        state.count++
    },
    [types.ROOT_DECREMENT] (state) {
        state.count--
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        cart
    },
    strict: debug,
})
