# Codewars, 7k: Odd-Even String Sort

def sort_my_string(s):
    odd, even = [], []
    
    for i in range(len(s)):
        if i % 2:
            odd.append(s[i])
        else:
            even.append(s[i])
    
    return ('').join(even) + ' ' + ('').join(odd)