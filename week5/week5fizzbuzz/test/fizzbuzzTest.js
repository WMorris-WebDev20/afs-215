const assert = require('chai').assert
const fizzbuzz = require('../fizzbuzz')

describe('fizzbuzz', ()=>{

    it('The result should be \"1\"', ()=> {
        let result = fizzbuzz(1)
        assert.equal(result, '1')})

    it('The result should be \"2\" ', ()=>{
        let result = fizzbuzz(2)
        assert.equal(result, '2')
    })

    it('The result should be a string', ()=> {
        let result = fizzbuzz(1)
        assert.typeOf(result, 'string' )
    })

})