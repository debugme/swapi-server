#!/usr/bin/env node

import express from 'express'

import dataCaching from './dataCaching'
import starWarsApi from './starWarsApi'
import handleError from './handleError'
import install from './install'
import handle from './handle'

const server = express()

const {
  env: {
    PORT
  }
} = process

const middlewareList = [
  dataCaching(),
  starWarsApi(),
  handleError()
]

middlewareList
  .map(install(server))

server
  .listen(PORT, handle(process, 'rest'))
