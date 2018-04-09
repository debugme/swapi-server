'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = new _winston2.default.Logger({
  transports: [new _winston2.default.transports.Console({ level: 'debug' })]
});

const log = (level, colour) => message => logger.log(level, colour(message));
const info = log('info', _chalk2.default.greenBright);
const error = log('error', _chalk2.default.redBright);
const debug = log('debug', _chalk2.default.yellowBright);

exports.default = {
  info,
  error,
  debug
};