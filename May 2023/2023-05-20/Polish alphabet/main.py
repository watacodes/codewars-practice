# Codewars, 8k: Polish alphabet

def correct_polish_letters(st): 
    polish_alpha = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ż': 'z',
        'ź': 'z',
    }
    
    res = []
    
    for i in st:
        try:
            res.append(polish_alpha[i])
        except:
            res.append(i)
    return ('').join(res)