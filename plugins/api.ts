export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const lastFmApi = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  })

  // Set baseURL to something different
  lastFmApi.setBaseURL(process.env.LAST_FM_API_URL)

  // Inject to context as $api
  inject('api', lastFmApi)
}
