// import Vuex from 'vuex'

export const state = () => ({
  headerTheme: 'hero'
})

export const mutations = {
  SET_HEADER_THEME(state, payload) {
    state.headerTheme = payload
  }
}

export const actions = {
  setHeaderTheme(vuexContext, payload) {
    vuexContext.commit('SET_HEADER_THEME', payload)
  }
}
