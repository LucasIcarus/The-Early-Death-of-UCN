import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		firstScreen: true
	},
	actions,
	mutations,
	getters,
})

export default store
