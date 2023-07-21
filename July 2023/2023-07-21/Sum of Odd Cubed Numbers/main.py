# Codewars, 7k: Sum of Odd Cubed Numbers

def cube_odd(arr):
    res = []
    
    for i in arr:
        if type(i) != int:
            return None
        elif i % 2:
            res.append(i ** 3)
            
    return sum(res)