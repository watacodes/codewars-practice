# Codewars, 7k: Find the capitals

def capitals(word):
    caps = []
    
    for w in range(len(word)):
        if word[w].isupper():
            caps.append(w)
    
    return caps