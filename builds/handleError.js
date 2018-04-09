'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handleError = () => ({
  urlPattern: '*',
  methodName: 'get',
  invocation: (request, response) => {
    _logger2.default.info(`[handleError.middleware] ${request.path}`);
    response.sendStatus(400).end();
  }
});

exports.default = handleError;