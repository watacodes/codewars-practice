# Codewars, 7k: Last Survivor

def last_survivor(letters, coords):
    for i in coords:
        letters = letters[:i] + letters[i + 1:]
    return letters