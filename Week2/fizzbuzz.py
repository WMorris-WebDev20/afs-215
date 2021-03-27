class fizzbuz():
    def __init__(self, num):
        self.num = num
    # Determins if it has a modulus of 3 or 5
    def fizzbuzz(self):        
        
        if self.num % 3 == 0 and self.num % 5 == 0 :
            print("fizzbuzz")
            return 'fizzbuzz'
        elif self.num % 3 == 0 :
            print("fizz")
            return("fizz")
        elif self.num % 5 == 0 :
            print("buzz")
            return "buzz"
        print(self.num) 

    # Used for testing purposes
    def mod3(self):
            return self.num % 3
    def mod5(self):
            return self.num % 5

x = fizzbuz(22)      
x.fizzbuzz()
print("Mod 3:",x.mod3())
print("Mod 5:",x.mod5())
