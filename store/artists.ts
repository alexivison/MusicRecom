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
  setData(state, artists: Artist[]) {
    state.data = artists
  },
  setLoading(state, loading: boolean) {
    state.loading = loading
  },
  setError(state, error: Error) {
    state.error = error
  },
})

// Actions
export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchArtists({ commit }, query: string) {
      commit('setLoading', true)

      const endpoint = this.$endpoint.artists.getSimilar(query)
      const result = await this.$api.call(endpoint)
      const data = result.data.similarartists.artist

      commit('setData', data)
      commit('setLoading', false)
    },
  }
)
