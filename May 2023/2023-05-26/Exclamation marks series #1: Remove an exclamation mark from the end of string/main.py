# Codewars, 8k: Exclamation marks series #1: Remove an exclamation mark from the end of string

def remove(s):
    if s.endswith('!'):
        return s[:-1]
    return s