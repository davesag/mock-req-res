const { spy, stub } = require('sinon')

/**
 *  Create a mock response object with sensible defaults.
 *
 *  @ref https://expressjs.com/en/api.html#res
 *  @param {Object} options — Optional overrides of the defaults.
 *  @return {Object} a mock response object.
 */
const mockResponse = (options = {}) => {
  const res = {
    app: {},
    headersSent: false,
    locals: {},
    append: spy(),
    attachment: spy(),
    clearCookie: spy(),
    download: spy(),
    end: spy(),
    format: spy(),
    json: spy(),
    jsonp: spy(),
    links: spy(),
    location: spy(),
    redirect: spy(),
    render: spy(),
    send: spy(),
    sendFile: spy(),
    sendStatus: spy(),
    set: spy(),
    setHeader: spy(),
    type: spy(),
    get: stub(),
    getHeader: stub(),
    ...options
  }
  ;['cookie', 'status', 'vary'].forEach(field => {
    res[field] = stub().returns(res)
  })

  return res
}

module.exports = mockResponse
