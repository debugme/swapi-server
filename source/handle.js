import logger from './logger'

const handle = (process, type) => (error) => {
  const { env: { IP, PORT } } = process
  const [level, message] = error
    ? ['error', error.toString()]
    : ['info', `server running on ${IP}:${PORT}`]
  logger[level](message)
}

export default handle
