"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const install = server => ({ urlPattern, methodName, invocation }) => server[methodName](urlPattern, invocation);

exports.default = install;