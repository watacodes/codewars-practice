# Codewars, 7k: Vowel Count

def get_count(sentence):
    vowels = 'aiueo'
    counter = 0
    
    for i in sentence:
        if i in vowels and i.isalpha():
            counter += 1
    
    return counter