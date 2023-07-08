# Codewars, 7k: Anagram Detection

def is_anagram(test, original):
    test = sorted(test.lower())
    original = sorted(original.lower())
    
    return ('').join(test) == ('').join(original)