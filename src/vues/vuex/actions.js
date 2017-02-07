import * as types from './mutation-types'

export const increment = ({commit}) => {
    commit(types.ROOT_INCREMENT)
}

export const incrementAsync = ({commit}) => {
    setTimeout(() => {
        commit(types.ROOT_INCREMENT)
    }, 1000)
}

export const decrement = ({commit}) => {
    commit(types.ROOT_DECREMENT)
}