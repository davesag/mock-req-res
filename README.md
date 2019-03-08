# mock-req-res

Simple, yet extensible, mock `req` / `res` objects for use in unit tests of [`ExpressJS`](https://expressjs.com) controller and middleware functions.

[![Greenkeeper badge](https://badges.greenkeeper.io/davesag/mock-req-res.svg)](https://greenkeeper.io/)

## Branches

| Branch | Status | Coverage | Notes |
| ------ | ------ | -------- | - |
| `develop` | [![CircleCI](https://circleci.com/gh/davesag/mock-req-res/tree/develop.svg?style=svg)](https://circleci.com/gh/davesag/mock-req-res/tree/develop) | [![codecov](https://codecov.io/gh/davesag/mock-req-res/branch/develop/graph/badge.svg)](https://codecov.io/gh/davesag/mock-req-res) | Work in progress |
| `master` | [![CircleCI](https://circleci.com/gh/davesag/mock-req-res/tree/master.svg?style=svg)](https://circleci.com/gh/davesag/mock-req-res/tree/master) | [![codecov](https://codecov.io/gh/davesag/mock-req-res/branch/master/graph/badge.svg)](https://codecov.io/gh/davesag/mock-req-res) | Latest stable release |

[![NPM](https://nodei.co/npm/mock-req-res.png)](https://nodei.co/npm/mock-req-res/)

## Prerequisites

This library assumes:

1. You are using NodeJS 8+
2. You write properly isolated unit tests of route controllers and ExpressJS middleware functions
3. You use [`sinon`](https://sinonjs.org) version 5 or better.

## Install

Add `mock-req-res` as a `devDependency`:

    npm i -D mock-req-res

## Mocking `req`.

To test a controller or middleware function you need to mock a request object.

Do this with:

```
const req = mockRequest(options)
```

The `options` can be anything you wish to attach or override in the request.

The vanilla `mockRequest` gives you the following properties.

```
body: {},
cookies: {},
query: {},
params: {},
get: stub()
```

## Mocking `res`.

To test a route controller or middleware function you also need to mock a response object.

Do this with:

```
const res = mockResponse(options)
```

The `options` can be anything you wish to attach or override in the request.

The vanilla `mockResponse` gives you the following functions, in the form of [`sinon`](https://sinonjs.org) spies and stubs.

```
clearCookie: spy(),
cookie: spy(),
download: spy(),
end: spy(),
format: spy(),
json: spy(),
jsonp: spy(),
redirect: spy(),
render: spy(),
send: spy(),
sendFile: spy(),
sendStatus: spy(),
setHeader: spy(),
set: spy(),
type: spy(),
get: stub(),
status: stub().returns(res), // returns itself, allowing chaining
vary: stub().returns(res) // returns itself, allowing chaining
```

**Note** you can always add other spies or stubs as needed via the `options`.

## Example

Let's say you have a route controller like this:

```
const save = require('../../utils/saveThing') // assume this exists.

const createThing = async (req, res) => {
  const { name, description } = req.body
  if (!name || !description) throw new Error('Invalid Properties')
  const saved = await save({ name, description })
  res.json(saved)
}
```

To unit test this you could use [`Mocha`](https://mochajs.org), [`Chai`](http://www.chaijs.com), [`Sinon`](https://sinonjs.org), and [`Proxyquire`](https://github.com/thlorenz/proxyquire) as follows:

```
const { expect } = require('chai')
const { stub, match } = require('sinon')
const { mockRequest, mockResponse } = require('mock-req-res')
const proxyquire = require('proxyquire')

describe('src/api/things/createThing', () => {
  const mockSave = stub()

  const createThing = proxyquire('../../src/api/things/createThing', {
    '../../utils/saveThing': mockSave
  })

  const res = mockResponse()

  const resetStubs = () => {
    mockSave.resetHistory()
    res.json.resetHistory()
  }

  context('happy path', () => {
    const name = 'some name'
    const description = 'some description'

    const req = mockRequest({ body: { name, description }})
    const expected = { name, description, id: 1 }
    before(async () => {
      save.returns(expected)
      await createThing(req, res)
    })

    after(resetStubs)

    it('called save with the right data', () => {
      expect(save).to.have.been.calledWith(match({ name, description }))
    })

    it('called res.json with the right data', () => {
      expect(res.json).to.have.been.calledWith(match(expected))
    })
  })

  // and also test the various unhappy path scenarios.
})
```

## See also

* [The Express Request object](https://expressjs.com/en/api.html#req) — `req`
* [The Express Response object](https://expressjs.com/en/api.html#res) - `res`

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
