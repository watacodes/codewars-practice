# Codewars, 8k: Check same case

def same_case(a, b): 
    if a.isalpha() == False or b.isalpha() == False:
        return -1
    elif (a == a.lower() and b == b.lower()) or (a == a.upper() and b == b.upper()):
        return 1
    else:
        return 0