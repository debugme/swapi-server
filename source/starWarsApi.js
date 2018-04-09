import fetch from './fetch'
import logger from './logger'

const starWarsApi = () => ({
  urlPattern: '/api/people/:id',
  methodName: 'get',
  invocation: (request, response) => {
    logger.info(`[starWarsApi.middleware] ${request.path}`)
    const { params: { id } } = request
    const url = `https://swapi.co/api/people/${id}`
    fetch(url)
      .then((json) => response.json(json))
      .catch((error) => response.error(error).end())
  }
})

export default starWarsApi
