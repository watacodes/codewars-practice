# Codewars, 8k: Convert number to reversed array of digits

def digitize(n):
    num_arr = list(str(n))
    num_arr.reverse()
    res = []
    for i in num_arr:
        res.append(int(i))
    return res