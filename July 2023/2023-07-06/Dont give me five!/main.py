# Codewars, 7k: Don't give me five!

def dont_give_me_five(start,end):
    res = []
    
    for i in range(start, end + 1):
        if '5' in str(i):
            pass
        else:
            res.append(i)
    
    return len(res)