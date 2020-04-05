const { fixtures } = require('testUtils')
const compose = require('../../compose')
const { primitiveAtom } = require('../../../atoms')

describe('actions > compose > hash', () => {
  const hashFxt = fixtures('atomic/rule/json/01-hash', 'json')

  it('should create composition for hashes', () => {
    const composition = compose({
      foo: primitiveAtom,
      bar: primitiveAtom,
      baz: primitiveAtom,
    })
    const result = composition(hashFxt)

    expect(result).toEqual(hashFxt.result)
  })
})
