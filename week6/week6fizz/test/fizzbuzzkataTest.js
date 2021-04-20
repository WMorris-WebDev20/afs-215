const assert = require('chai').assert
const fizzbuzzkata = require('../fizzbuzzkata')

describe('fizzbuzzkata', ()=>{

    it('The result should be \"1\"', ()=> {
        let result = fizzbuzzkata(1)
        assert.equal(result, '1')})

    it('The result should be \"2\" ', ()=>{
        let result = fizzbuzzkata(2)
        assert.equal(result, '2')
    })

    it('The result should be Fizz', ()=> {
        let result = fizzbuzzkata(3)
        assert.equal(result, 'Fizz' )
    })
    it('The result should be Buzz', ()=> {
        let result = fizzbuzzkata(5)
        assert.equal(result, 'Buzz' )
    })

    it('The result should be Fizz', ()=> {
        let result = fizzbuzzkata(6)
        assert.equal(result, 'Fizz' )
    })

    it('The result should be Buzz', ()=> {
        let result = fizzbuzzkata(10)
        assert.equal(result, 'Buzz' )
    })

    it('The result should be FizzBuzz', ()=> {
        let result = fizzbuzzkata(15)
        assert.equal(result, 'FizzBuzz' )
    })

})