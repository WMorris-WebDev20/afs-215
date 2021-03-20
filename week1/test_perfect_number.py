import unittest

from week1.perfect_number import get_perfect_number

class Test_perfection(unittest.TestCase):
    def test_perfect_number(self):
        self.assertTrue(get_perfect_number(6))

    def test_not_perfect_number(self):
        self.assertFalse(get_perfect_number(27)) 

if __name__ == '__main__':
    unittest.main()