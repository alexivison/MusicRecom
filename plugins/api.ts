import { AxiosResponse } from 'axios'
import { Context } from '@nuxt/types'
import { Inject, Endpoint } from '~/types'

export type ApiType = {
  call: <T>(endpoint: Endpoint<T>) => Promise<AxiosResponse<T>>
}

export default ({ $axios, $config }: Context, inject: Inject<ApiType>) => {
  const api = $axios.create({
    headers: {},
    params: {
      api_key: $config.lastFmApiKey,
      format: 'json',
    },
  })

  const call = <T>({
    method,
    params,
  }: Endpoint<T>): Promise<AxiosResponse<T>> => {
    switch (method) {
      case 'get':
        return api.get($config.lastFmBaseUrl, { params })
      case 'post':
        return api.post($config.lastFmBaseUrl, { params })
    }
  }

  inject('api', { call })
}
