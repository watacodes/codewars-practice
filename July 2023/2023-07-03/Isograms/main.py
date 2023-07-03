# Codewars, 7k: Isograms

def is_isogram(string):
    string = string.lower()
    
    for i in range(0, len(string) - 1):
        if string[i] in string[i+1:]:
            return False
    
    return True