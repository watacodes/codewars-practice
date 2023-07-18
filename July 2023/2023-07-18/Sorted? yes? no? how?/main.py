# Codewars, 7k: Sorted? yes? no? how?

def is_sorted_and_how(arr):
    asc = sorted(arr)
    des = sorted(arr)[::-1]
    
    if asc == arr:
        return 'yes, ascending'
    elif des == arr:
        return 'yes, descending'
    else:
        return 'no'