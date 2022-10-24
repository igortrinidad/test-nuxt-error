import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  stringifyQuery: (query) => {
    console.log(query)
    const keys = Object.keys(query)
    return keys.map(key => `${key}=${encodeURIComponent(query[key] as string)}`).join('&')
  }
}