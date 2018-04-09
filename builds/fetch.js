'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('isomorphic-fetch');

var _https = require('https');

const fetch = url => {
  const options = {
    agent: new _https.Agent({ rejectUnauthorized: false }) // Only needed for self-signed certificates
  };
  return global.fetch(url, options).then(data => data.json());
};

exports.default = fetch;