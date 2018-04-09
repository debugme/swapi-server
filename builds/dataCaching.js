'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apicache = require('apicache');

var _apicache2 = _interopRequireDefault(_apicache);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dataCaching = () => ({
  urlPattern: '/',
  methodName: 'use',
  invocation: (request, response, next) => {
    _logger2.default.info(`[dataCaching.middleware] ${request.path}`);
    return _apicache2.default.middleware('24 hours')(request, response, next);
  }
});

exports.default = dataCaching;