import { Context } from '@nuxt/types'
import { Inject } from '~/types'
import endpoints from '~/api/endpoint'

export default (_: Context, inject: Inject<typeof endpoints>) =>
  inject('endpoint', endpoints)
