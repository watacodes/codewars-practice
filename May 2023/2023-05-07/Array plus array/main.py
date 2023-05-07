# Codewars, 8k: Array plus array

def array_plus_array(a1, a2):
    a1_res = 0
    a2_res = 0
    for i in a1:
        a1_res += i
    for k in a2:
        a2_res += k
    return a1_res + a2_res