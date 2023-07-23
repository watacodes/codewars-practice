# Codewars, 7k: Minimize Sum Of Array (Array Series #1)

def min_sum(arr):
    min_nums = sorted(arr)[0:len(arr) // 2]
    max_nums = sorted(arr)[::-1][0:len(arr) // 2]
    
    sum = 0
    
    for i in range(len(min_nums)):
        sum += min_nums[i] * max_nums[i]
    
    return sum