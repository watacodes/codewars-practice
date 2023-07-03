# Codewars, 7k: Jaden Casing Strings

def to_jaden_case(string):
    str_arr = string.split(' ')
    quotes = []
    
    for i in str_arr:
        quotes.append(i.capitalize())    
    
    return (' ').join(quotes)