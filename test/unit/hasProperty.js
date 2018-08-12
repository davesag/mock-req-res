const { expect } = require('chai')

const hasProperty = subject => prop => {
  it(`has the expected property ${prop}`, () => {
    expect(subject).to.have.property(prop)
  })
}

module.exports = hasProperty
