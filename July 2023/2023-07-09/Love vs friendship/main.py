# Codewars, 7k: Love vs friendship

def words_to_marks(s):
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    counter = 0
    
    for i in s:
        counter += alpha.index(i) + 1
    
    return counter