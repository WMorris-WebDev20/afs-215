import unittest

from week1.kata import fizzbuzz

class Test_Kata(unittest.TestCase):
    def test_get_one(self):
        self.assertEqual(fizzbuzz(1), "1")
    def test_get_two(self):
        self.assertEqual(fizzbuzz(2), "2")

if __name__ == '__main__':
    unittest.main()