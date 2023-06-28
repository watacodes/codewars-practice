# Codewars, 7k: I'm everywhere!

def check_balance(w):
    cons, vow = 0, 0
    
    if len(w) == 0:
        return False
    
    for i in w:
        if i.lower() in 'aiueo':
            vow += 1
        else:
            cons += 1
    
    return [cons, vow]

def i(word):
    cv_pairs = check_balance(word)
    
    if cv_pairs == False or word[0] == 'I' or cv_pairs[1] >= cv_pairs[0]:
        return 'Invalid word'
    if word[0].lower() == word[0]:
        return 'Invalid word'
    return 'i' + word