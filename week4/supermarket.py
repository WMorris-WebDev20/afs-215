
class Checkout():

    # Discount class ****
    class Discount:
        def __init__(self, price, count):
            self.count = (1 - count)
            self.price = price

    def __init__(self):
        self.prices = dict()
        self.discounts = dict()
        self.items = dict()
        self.itemized = dict()

    def discount(self, item, price, amount):
        discount = self.Discount(amount, price)
        self.discounts[item] = discount

    def add_item(self, item):
        if item in self.items:      
            self.items[item] += 1
        else:
            self.items[item] = 1

    def add_price(self, item, price):
        self.prices[item] = price

    def calculate_total(self):
        total = 0
        for item , qty in self.items.items():
            total += self.item_total(item, qty)
        return total

    def item_total(self, item, qty):
        total = 0
        if item  in self.discounts:
            discount = self.discounts[item]
            if qty >= discount.count:
                total += round((self.prices[item] * qty * discount.count) , 2)
                self.itemized[item] = total
            else:
                total += self.prices[item] * qty 
                self.itemized[item] = total
        else: 
            total =+ self.prices[item] * qty
            self.itemized[item] = total
        
        return total
