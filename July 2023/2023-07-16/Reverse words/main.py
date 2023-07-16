# Codewars, 7k: Reverse words


def reverse_words(text):
    res = []
    
    for i in text.split(' '):
        res.append(i[::-1])
    
    return (' ').join(res)