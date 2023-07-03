# Codewars, 7k: Complementary DNA

def DNA_strand(dna):
    res = ''
    
    for i in dna:
        if i == 'A':
            res += 'T'
        if i == 'T':
            res += 'A'
        if i == 'G':
            res += 'C'
        if i == 'C':
            res += 'G'
    
    return res