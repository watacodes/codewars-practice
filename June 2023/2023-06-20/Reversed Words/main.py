# Codewars, 8k: Reversed Words

def reverse_words(s):
    s_arr = s.split(' ')
    return (' ').join(s_arr[::-1])