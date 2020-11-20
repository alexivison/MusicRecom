import { InjectKey } from 'vue/types/options'

export type Inject<P> = (name: InjectKey, property: P) => void

export type Endpoint<T> = {
  returnType: T
  method: 'get' | 'post'
  params: any
}

export interface ArtistImage {
  text: string
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega'
}

export interface Artist {
  image: ArtistImage[]
  match: string
  name: string
  url: string
  mbid: string
  streamable: '0' | '1'
}

export interface Album {
  name: string
  url: string
}
