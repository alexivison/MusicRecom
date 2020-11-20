import { accessorType } from '~/store'
import { ApiType } from '~/plugins/api'
import endpoints from '~/api/endpoint'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $api: ApiType
    $endpoint: typeof endpoints
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
    $api: ApiType
    $endpoint: typeof endpoints
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $accessor: typeof accessorType
    $api: ApiType
    $endpoint: typeof endpoints
  }
}
