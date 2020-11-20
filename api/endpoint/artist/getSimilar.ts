import { Artist, Endpoint } from '~/types'

export type ReturnType = {
  similarartists: {
    artist: Artist[]
  }
}

export default (artist: string): Endpoint<ReturnType> => {
  let returnType!: ReturnType

  const method = 'get'

  const params = {
    artist,
    method: 'artist.getSimilar',
  }

  return {
    returnType,
    method,
    params,
  }
}
