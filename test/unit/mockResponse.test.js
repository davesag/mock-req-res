const { mockResponse } = require('../../src')
const hasProperty = require('./hasProperty')

describe('src/mockResponse', () => {
  const core = [
    'app',
    'append',
    'attachment',
    'clearCookie',
    'cookie',
    'download',
    'end',
    'format',
    'get',
    'getHeader',
    'headersSent',
    'json',
    'jsonp',
    'links',
    'locals',
    'location',
    'redirect',
    'render',
    'send',
    'sendFile',
    'sendStatus',
    'set',
    'setHeader',
    'status',
    'type',
    'vary'
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
