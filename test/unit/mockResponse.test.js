const { mockResponse } = require('../../src')
const hasProperty = require('./hasProperty')

describe('src/mockResponse', () => {
  const core = [
    'cookie',
    'clearCookie',
    'download',
    'format',
    'getHeader',
    'json',
    'jsonp',
    'send',
    'sendFile',
    'sendStatus',
    'setHeader',
    'redirect',
    'render',
    'end',
    'set',
    'type',
    'get'
  ]

  context('without options', () => {
    const req = mockResponse()
    core.forEach(hasProperty(req))
  })

  context('with options', () => {
    const req = mockResponse({ test: {} })
    ;[...core, 'test'].forEach(hasProperty(req))
  })
})
