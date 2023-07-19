# Codewars, 7k: Maximum Product

def adjacent_element_product(array):
    max = -1000000
    
    for i in range(len(array) - 1):
        if array[i] * array[i+1] > max:
            max = array[i] * array[i+1]
    
    return max