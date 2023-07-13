# Codewars, 7k: Summing a number's digits

def sum_digits(number):
    res = 0
    number = ('').join(filter(str.isnumeric, str(number)))
    
    for i in number:
        res += int(i)

    return res