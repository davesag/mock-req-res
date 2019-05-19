const { spy, stub } = require('sinon')

const mockResponse = (options = {}) => {
  const res = {
    cookie: spy(),
    clearCookie: spy(),
    download: spy(),
    format: spy(),
    getHeader: spy(),
    json: spy(),
    jsonp: spy(),
    send: spy(),
    sendFile: spy(),
    sendStatus: spy(),
    setHeader: spy(),
    redirect: spy(),
    render: spy(),
    end: spy(),
    set: spy(),
    type: spy(),
    get: stub(),
    ...options
  }
  res.status = stub().returns(res)
  res.vary = stub().returns(res)
  return res
}

module.exports = mockResponse
