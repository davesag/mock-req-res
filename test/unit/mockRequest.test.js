const { mockRequest } = require('../../src')
const hasProperty = require('./hasProperty')

describe('src/mockRequest', () => {
  const core = [
    'accepts',
    'acceptsCharsets',
    'acceptsEncodings',
    'acceptsLanguages',
    'app',
    'baseUrl',
    'body',
    'cookies',
    'fresh',
    'get',
    'headers',
    'hostname',
    'ip',
    'ips',
    'is',
    'method',
    'originalUrl',
    'params',
    'path',
    'protocol',
    'query',
    'range',
    'route',
    'secure',
    'signedCookies',
    'stale',
    'subdomains',
    'xhr'
  ]

  context('without options', () => {
    const req = mockRequest()
    core.forEach(hasProperty(req))
  })

  context('with options', () => {
    const req = mockRequest({ test: {} })
    ;[...core, 'test'].forEach(hasProperty(req))
  })
})
