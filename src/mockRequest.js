const { stub } = require('sinon')

const mockRequest = (options = {}) => ({
  body: {},
  cookies: {},
  query: {},
  params: {},
  headers: {},
  get: stub(),
  ...options
})

module.exports = mockRequest
