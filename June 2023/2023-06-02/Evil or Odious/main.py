# Codewars, 8k: Evil or Odious

def evil(n):
    bin_n = bin(n).replace('0', '')
    if len(bin_n) % 2:
        return "It's Evil!"
    else:
        return "It's Odious!"