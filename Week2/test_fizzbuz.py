import unittest
from fizzbuzz import fizzbuz 


check = fizzbuz(15)
class Test_Fizzbuzz(unittest.TestCase):   

    def test_mod3(self):
        print("Start testing for mod of 3 *******")
        self.assertEqual(check.mod3(), 0)
    def test_mod5(self):
        print("Start testing for mod of 5 *******")
        self.assertEqual(check.mod5(), 0)
    def test_for_fizzbuzz(self):
        print("Testing for Mod 3 and Mod 5 for fizzbuzz")
        self.assertEqual(check.fizzbuzz(), "fizzbuzz")

    def test_for_fizz(self):
        print("Testing for Mod 3 resulting in fizz *****")
        self.assertNotEqual(check.fizzbuzz(), "fizz")

    def test_for_buzz(self):
        print("Testing for Mod 5 resulting in buzz *****")
        self.assertNotEqual(check.fizzbuzz(), "buzz")


if __name__ == '__main__':
    unittest.main()