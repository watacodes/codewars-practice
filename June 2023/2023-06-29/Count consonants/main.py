# Codewars, 7k: Count consonants

def consonant_count(s):
    vowels = 'aieuo'
    count = 0
    
    for i in s.lower():
        if i not in vowels and i.isalpha():
            count += 1
    
    return count