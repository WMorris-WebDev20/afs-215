import unittest
from supermarket import Checkout  

class new():
    pass

class TestClass(unittest.TestCase):

    def setUp(self):
        self.checkClass = Checkout()   
        self.new = new  
    
    # Can create an instance of the Checkout class
    def test_isInstance(self):        
        message = "the object is not instance of Checkout."
        self.assertIsInstance(self.checkClass, Checkout, message)   
   
   # Can add an item
    def test_CanAddItem(self):
        self.checkClass.add_item("beans")
        print("--Question 2 -- Items:",self.checkClass.items)

# Can add an item price
    def test_CanAddItemPrice(self):
        self.checkClass.add_price("Tocos",2.99)
        self.assertEqual(self.checkClass.prices["Tocos"], 2.99)
        print("--Question 3 -- Price", self.checkClass.prices)

# Can calculate the current total
    def test_CanculateTotal(self):
        self.checkClass.add_item("Tocos" )
        self.checkClass.add_price("Tocos", 2.99)
        total = self.checkClass.calculate_total()  
        print("-- Question 4 -- Total:", self.checkClass.calculate_total())
    
# Can add multiple items and get correct total
    def test_CanculateMultipleTotals(self):
        self.checkClass.add_item("Tocos" )
        self.checkClass.add_item("Chicken" )
        self.checkClass.add_price("Tocos", 2.99)
        self.checkClass.add_price("Chicken", 3.01)
        total = self.checkClass.calculate_total()  
        print("-- Question 5 -- Total:", total ) 
        self.assertEqual(total, 6)

# Can add discount rules
    def test_DiscountRule(self):
        self.checkClass.discount("chicken", 3 , 2)

# Can apply discount rules to the total
    def test_ApplyDiscount(self):
        # Discount item, percent off, items
        self.checkClass.discount("chicken", .20 , 3 )
        self.checkClass.add_price("chicken", 2.99)
        self.checkClass.add_price("beef", 2.99)
        self.checkClass.add_item("chicken")
        self.checkClass.add_item("chicken")
        self.checkClass.add_item("chicken")
        self.checkClass.add_item("beef")
        
        print("Total:",self.checkClass.calculate_total())
        print("Itemized:", self.checkClass.itemized)
    
 # Exception is Thrown for Item Added without a Price


if __name__ == '__main__':
    unittest.main()