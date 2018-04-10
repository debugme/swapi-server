'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handle = (process, type) => error => {
  const { env: { IP, PORT, NODE_ENV } } = process;
  const [level, message] = error ? ['error', error.toString()] : ['info', `[${NODE_ENV}] server running on ${IP}:${PORT}`];
  _logger2.default[level](message);
};

exports.default = handle;