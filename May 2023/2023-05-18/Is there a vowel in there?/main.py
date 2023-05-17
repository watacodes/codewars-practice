# Codewars, 8k: Is there a vowel in there?

def is_vow(inp):
    res = []
    vowels = ['a', 'i', 'u', 'e', 'o']
    for i in inp:
        if chr(i) in vowels:
            res.append(chr(i))
        else:
            res.append(i)
    return res