import { getAccessorType } from 'typed-vuex'

import * as artists from './artists'

export const accessorType = getAccessorType({
  modules: {
    artists,
  },
})
