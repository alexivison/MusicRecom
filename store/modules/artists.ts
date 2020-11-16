import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'
import { Artist } from '~/types'

export type ArtistsState = {
  data: Artist[]
  loading: boolean
  error: null | Error
}

// initial state
export const state = (): ArtistsState => ({
  data: [],
  loading: false,
  error: null,
})

// Getters
export const getters = getterTree(state, {})

// Mutations
export const mutations = mutationTree(state, {
  fetchArtistsSuccess(state, artists: Artist[]) {
    state.loading = false
    state.data = artists
  },
  fetchArtistsFailure(state, error: Error) {
    state.loading = false
    state.error = error
  }
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchArtists({ commit }) {
      const artists = await this.$axios.$get('/')
      console.log({ artists })
      commit('fetchArtistsSuccess', artists)
    },
  }
)
