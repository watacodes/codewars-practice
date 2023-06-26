# Codewars, 7k: Compare 2 digit numbers

def compare(a, b):
    a_str, b_str = sorted(str(a)), sorted(str(b))
    
    if a_str == b_str or a_str == b_str[::-1]:
        return '100%'
    elif a_str[0] in b_str or a_str[1] in b_str:
        return '50%'
    else:
        return '0%'