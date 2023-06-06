# Codewars, 8k: Find numbers which are divisible by given number

def divisible_by(numbers, divisor):
    res = []
    for i in numbers:
        if i % divisor == 0:
            res.append(i)
    return res