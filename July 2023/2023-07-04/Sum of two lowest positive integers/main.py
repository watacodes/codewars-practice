# Codewars, 7k: Sum of two lowest positive integers

def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])