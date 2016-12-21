import { fetchIndexData } from '../../core/fetch'
//
// export const NAV_BUTTON_CLICK = ({ commit }) => commit('NAV_BUTTON_TOGGLE')
//
// export const NAV_VISIBLE_CHANGE = ({ commit }) => commit('NAV_VISIBLE_TOGGLE')
//
// export const NAV_FIXED_CHANGE = ({ commit }) => commit('NAV_FIXED_TOGGLE')

// export const FETCH_SERVER_DATA = ({ commit }) => {
// 	return fetchTest().then(val => commit('TEST_TEST', val))
// }

export const LEAVE_FISRT_SCREEN = ({ commit }) => {
    commit('SCROLL_DOWN')
}

export const INTO_FIRST_SCREEN = ({ commit }) => {
    commit('SCROLL_UP')
}

export const FETCH_INDEX_JSON = ({ commit }) => {
    return fetchIndexData().then(indexJSON => commit('SET_INDEX', indexJSON))
}
