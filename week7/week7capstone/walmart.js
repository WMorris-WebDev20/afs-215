class Walmart{

    constructor(){
        this.cart = []   
        this.discount = []
        this.item = [] 
    }

    // Adds items to the cart
    addToCart = (product, count) => {
        let check = this.cart.map(item => item.name).indexOf(product)

        let qty = this.cart.filter(item => item.name === product? item.count: 0 )
        let newQty = qty.map(item => item.count)

        let productCost = this.item.find(val => val.name === product)
        if(check != -1 && productCost != undefined){

            let newDiscount = this.calculateDiscount(product, count)            
            let cost = this.item.map(item => item.name === product ? item.price : null )
            let itemPrice = Math.round((productCost.price * newDiscount * (count + newQty[0]) ) * 100 )/ 100
            this.cart[check] = {name: product, price: itemPrice, count: newQty[0] + count}

        }else if(check === -1 && productCost != undefined){

            let newDiscount = this.calculateDiscount(product, count)
            let itemPrice = Math.round((productCost.price * newDiscount * count) * 100 )/ 100
            this.cart = [ ...this.cart , {name: product, price: itemPrice, count: count }]           

        }
        else{
            throw new Error('Not an item')
        }

        return this.cart


    }
    //Returns the total of the cart
    getTotal = () => {
        let total = 0
        this.cart.map(item => total += item.price)

        return total
    }

    //Adds an item to the item array
    addItem = (product, price) => {
        if (price != undefined){
        this.item = [...this.item, {name: product, price: price}]
        }else{
            throw new Error("No price")
        }

    }

    // Returns the item array
    getItems = () => {
        return this.item
    }

    //Returns the contents of the cart
    getCart = () => {
        return this.cart
    }

    //Adds or changes a price of an item
    addPrice = (product, price) => {

        let check = this.item.map(item => item.name).indexOf(product)

        if (check != -1){
            this.item[check].price = price
        }
        else{
            throw new Error("Item does not exist to add price")
        }

    }

    //Adds Discount rules
    addDiscount = (item, count, disc) => {
        this.discount = [...this.discount, {name: item , count: count, discount: disc}]
        
    }

    //Calculates Discount
    calculateDiscount = (item, count) => {
        
        let dis = this.discount.filter(disc => disc.name === item && disc.count <= count
        )
          return dis!= 0 ? dis[0].discount : 1
      }


}

module.exports = Walmart