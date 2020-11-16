import { getAccessorType } from 'typed-vuex'

import * as artists from './modules/artists'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const accessorType = getAccessorType({
  state,
  modules: {
    artists,
  },
})
