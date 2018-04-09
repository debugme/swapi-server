import logger from './logger'

const handleError = () => ({
  urlPattern: '*',
  methodName: 'get',
  invocation: (request, response) => {
    logger.info(`[handleError.middleware] ${request.path}`)
    response.sendStatus(400).end()
  }
})

export default handleError
