# Codewars, 8k: Training JS #18: Methods of String object--concat() split() and its good friend join()

def split_and_merge(string_, separator):
    s_arr = string_.split(' ')
    res = []
    
    for i in s_arr:
        res.append(separator.join(i))
    
    return (' ').join(res)