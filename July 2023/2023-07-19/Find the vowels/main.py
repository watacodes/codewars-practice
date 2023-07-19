# Codewars, 7k: Find the vowels

def vowel_indices(word):
    res = []
    vowels = 'aiueoy'
    
    for i in range(len(word)):
        if word[i].lower() in vowels:
            res.append(i + 1)
    
    return res