# Codewars, 7k: Even numbers in an array

def even_numbers(arr, n):
    even = []
    
    for i in arr:
        if i % 2 == 0:
            even.append(i)
    
    return even[::-1][0:n][::-1]