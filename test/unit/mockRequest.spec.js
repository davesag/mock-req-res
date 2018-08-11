const { expect } = require('chai')

const { mockRequest } = require('../../src')
const hasProperty = require('./hasProperty')

describe('src/mockRequest', () => {
  const core = ['body', 'cookies', 'query', 'params', 'get']

  context('without options', () => {
    const req = mockRequest()
    core.forEach(hasProperty(req))
  })

  context('with options', () => {
    const req = mockRequest({ test: {} })
    ;[...core, 'test'].forEach(hasProperty(req))
  })
})
