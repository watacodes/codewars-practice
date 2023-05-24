# Codewars, 8k: Sum without highest and lowest number

def sum_array(arr):
    try:
        new_arr = sorted(arr)[1:-1]
        return sum(new_arr)
    except:
        return 0