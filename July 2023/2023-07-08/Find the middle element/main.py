# Codewars, 7k: Find the middle element

def gimme(input_array):
    middle = sorted(input_array)[1]
    return input_array.index(middle)