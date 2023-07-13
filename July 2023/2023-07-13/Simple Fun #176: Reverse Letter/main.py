# Codewars, 7k: Simple Fun #176: Reverse Letter

def reverse_letter(string):
    rev = string[::-1]
    only_alpha = ('').join(filter(str.isalpha, rev))
    return only_alpha