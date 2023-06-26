# Codewars, 8k: Find the index of the second occurrence of a letter in a string

def second_symbol(s, symbol):
    n = 2
    start = s.find(symbol)
    
    while start >= 0 and n > 1:
        start = s.find(symbol, start + len(symbol))
        n -= 1
    
    return start