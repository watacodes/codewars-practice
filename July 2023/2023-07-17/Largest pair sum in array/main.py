# Codewars, 7k: Largest pair sum in array

def largest_pair_sum(numbers): 
    return sum(sorted(numbers)[-2:])