# Codewars, 7k: Largest 5 digit number in a series

def solution(digits):
    max_val = -1
    
    for i in range(len(digits) - 4):
        curr = int(digits[i:i+5])
        if curr > max_val:
            max_val = curr
        
    return max_val