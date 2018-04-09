#!/usr/bin/env node
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _dataCaching = require('./dataCaching');

var _dataCaching2 = _interopRequireDefault(_dataCaching);

var _starWarsApi = require('./starWarsApi');

var _starWarsApi2 = _interopRequireDefault(_starWarsApi);

var _handleError = require('./handleError');

var _handleError2 = _interopRequireDefault(_handleError);

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

var _handle = require('./handle');

var _handle2 = _interopRequireDefault(_handle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express2.default)();

const {
  env: {
    PORT
  }
} = process;

const middlewareList = [(0, _dataCaching2.default)(), (0, _starWarsApi2.default)(), (0, _handleError2.default)()];

middlewareList.map((0, _install2.default)(server));

server.listen(PORT, (0, _handle2.default)(process, 'rest'));