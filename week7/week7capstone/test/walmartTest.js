const assert = require('chai').assert
const expect = require('chai').expect
const Walmart = require('../walmart')

describe("Testing Instance Of The Cart", () => {
    const checkout = new Walmart()

    it('Should be an instance of Walmart', () =>{
        expect(checkout).to.be.instanceOf(Walmart)
    } )

})

describe('Testing Add Item', () => {
    const checkout = new Walmart()
    it('Should add item', ()=>{
        checkout.addItem("Cheese", 3.99)
        assert.equal(checkout.item.filter(item => item.name === "Cheese").map(item => item.name), "Cheese")
    })
    
    describe('Testing Add Price to Item', ()=> {

        it('Should add or change price to item', () => {
            assert.equal(checkout.item.filter(item => item.name === 'Cheese').map(item => item.price), 3.99)
            checkout.addPrice('Cheese',2.15)
            assert.equal(checkout.item.filter(item => item.name === 'Cheese').map(item => item.price), 2.15)
        })

    })
})


describe('Testing Adding To The Cart', () => {
    const checkout = new Walmart()
    it('Should add items to the cart', () => {
        
        checkout.addItem('Milk', 2.99)
        checkout.addItem("Chicken", 2.99)
        checkout.addItem('Ground Beef', 5.99)
        checkout.addItem('Buns', 1.99)      
        checkout.addToCart("Chicken",10)
        checkout.addToCart("Milk", 2)
        checkout.addToCart("Ground Beef", 2)
        checkout.addToCart("Buns", 3)
        
    })
    describe('Should Get Cart', () => {
        it('Gets Items In Cart', () => {            
            checkout.getCart()         
        })    
    })

    it("Should get total in cart", ()=>{
        checkout.getTotal()
        assert.equal(checkout.getTotal(),53.83)        
    })
    
    describe('Testing Error Thrown', () => {
        it('Should Throw Not An Item Error', () => {            
            expect(() => checkout.addToCart('Not Chicken', 1)).to.throw();            
        }) 
        it('Should Throw No Price Error', () => {            
            expect(() => checkout.addItem('Not Chicken')).to.throw();            
        }) 
        it('Should Throw Item Does Not Exist To Add Price Error', () => {            
            expect(() => checkout.addPrice('Not Chicken',.99)).to.throw();     
        })   
    })

})

describe('Testing Adding Discounts', () => {
    const checkout = new Walmart()
    describe('Testing Should Add Discount', () => {
        it('Should add discounts', () => {
            checkout.addDiscount("Chicken", 5 , .5)
            checkout.addDiscount("Ground Beef",1 , .75) 
            checkout.addItem("Chicken", 2 )
            checkout.addItem('Ground Beef', 5.99)     
            checkout.addToCart("Chicken",10)
            checkout.addToCart("Ground Beef", 2)
            assert.equal(checkout.cart.filter(item => item.name === 'Chicken').map(item => item.price), 10)
            assert.equal(checkout.cart.filter(item => item.name === 'Ground Beef').map(item => item.price), 8.99)
            
        })
    
    })

})

