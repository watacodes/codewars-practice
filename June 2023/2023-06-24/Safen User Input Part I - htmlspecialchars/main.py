# Codewars, 8k: Safen User Input Part I - htmlspecialchars

def html_special_chars(data): 
    conv = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;'
    }
    
    res = ''
    
    for i in data:
        try:
            res += conv[i]
        except:
            res += i
            
    return res