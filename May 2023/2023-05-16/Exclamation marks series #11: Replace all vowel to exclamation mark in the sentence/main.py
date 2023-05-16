# Codewars, 8k: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

def replace_exclamation(s):
    res = []
    alpha = ['a', 'i', 'u', 'e', 'o']
    for i in range(len(s)):
        if s[i].lower() in alpha:
            res.append('!')
        else:
            res.append(s[i])
    return ('').join(res)