# Codewars, 8k: simple calculator

def calculator(x, y, op):
    if type(x) != int or type(y) != int:
        return 'unknown value'
    elif op == '+':
        return int(x) + int(y)
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op =='/':
        return x / y
    return 'unknown value'