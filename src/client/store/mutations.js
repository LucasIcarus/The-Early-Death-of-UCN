// export const NAV_BUTTON_TOGGLE = (state) => {
// 	state.nav.button = !state.nav.button
// }
//
// export const NAV_VISIBLE_TOGGLE = (state) => {
// 	state.nav.visible = !state.nav.visible
// }
//
// export const NAV_FIXED_TOGGLE = (state) => {
// 	state.nav.fixed = !state.nav.fixed
// }

export const SET_INDEX = (state, json) => {
    state.index = json
}

export const SCROLL_DOWN = (state) => {
    state.firstScreen = false
}

export const SCROLL_UP = (state) => {
    state.firstScreen = true
}
