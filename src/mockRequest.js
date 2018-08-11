const { stub } = require('sinon')

const mockRequest = (options = {}) => ({
  body: {},
  cookies: {},
  query: {},
  params: {},
  get: stub(),
  ...options
})

module.exports = mockRequest
