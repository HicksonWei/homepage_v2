// import Vuex from 'vuex'

export const state = () => ({
  headerColor: 'transparent'
})

export const mutations = {
  SET_HEADER_COLOR(state, payload) {
    state.headerColor = payload
  }
}

export const actions = {
  setHeaderColor(vuexContext, payload) {
    vuexContext.commit('SET_HEADER_COLOR', payload)
  }
}

export const getters = {
  darkTheme(state) {
    if (state.headerColor === 'transparent') {
      return false
    } else {
      return true
    }
  }
}
