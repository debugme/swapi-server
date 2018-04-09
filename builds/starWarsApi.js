'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const starWarsApi = () => ({
  urlPattern: '/api/people/:id',
  methodName: 'get',
  invocation: (request, response) => {
    _logger2.default.info(`[starWarsApi.middleware] ${request.path}`);
    const { params: { id } } = request;
    const url = `https://swapi.co/api/people/${id}`;
    (0, _fetch2.default)(url).then(json => response.json(json)).catch(error => response.error(error).end());
  }
});

exports.default = starWarsApi;