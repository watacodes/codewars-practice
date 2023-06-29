# Codewars, 7k: Highest and Lowest

def high_and_low(numbers):
    numbers = numbers.split(' ')
    new_nums = []
    
    for i in numbers:
        new_nums.append(int(i))    
    
    max_n , min_n = max(new_nums), min(new_nums)
    
    return f'{max_n} {min_n}'