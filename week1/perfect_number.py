
def get_perfect_number(n):
    sum = 0
    for x in range(1, n):
        if n % x == 0 :
            sum += x
    print(sum,"is perfect:", sum == n)
    return sum == n

