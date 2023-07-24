# Codewars, 7k: esreveR

def reverse(lst):
    empty_list = list()
    idx = len(lst) - 1
    
    while idx >= 0:
        empty_list.append(lst[idx])
        idx -= 1
    
    return empty_list