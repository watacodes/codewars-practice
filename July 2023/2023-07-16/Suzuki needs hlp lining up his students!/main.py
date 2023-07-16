# Codewars, 7k: Suzuki needs help lining up his students!

def lineup_students(string):
    sorted_str = string.split()
    sorted_str.sort()
    s = sorted(sorted_str, key=len)
    return s[::-1]

