import Vuex from 'vuex'

export const store = new Vuex.Store ({
  state: {
    visitors: []
  },
  mutations: {
    ADD_VISITOR (state, visitor) {
      state.visitors = [{ content: visitor, done: false }, ...state.visitors]
    },
    REMOVE_VISITOR (state, visitor) {
      state.visitors.splice(state.visitors.indexOf(visitor), 1)
    },
    TOGGLE_VISITOR (state, visitor) {
      visitor.done = !visitor.done
    }
  }
})
