const { stub } = require('sinon')

/**
 *  Create a mock request object with sensible defaults.
 *
 *  @ref https://expressjs.com/en/api.html#req
 *  @param {Object} options — Optional overrides of the defaults.
 *  @return {Object} a mock request object.
 */
const mockRequest = (options = {}) => ({
  app: {},
  baseUrl: '',
  body: {},
  cookies: {},
  fresh: true,
  headers: {},
  hostname: '',
  ip: '127.0.0.1',
  ips: [],
  method: 'GET',
  originalUrl: '',
  params: {},
  path: '',
  protocol: 'https',
  query: {},
  route: {},
  secure: true,
  signedCookies: {},
  stale: false,
  subdomains: [],
  xhr: true,
  accepts: stub(),
  acceptsCharsets: stub(),
  acceptsEncodings: stub(),
  acceptsLanguages: stub(),
  get: stub(),
  is: stub(),
  range: stub(),
  ...options
})

module.exports = mockRequest
