# Codewars, 8k: Ensure question

def ensure_question(s):
    if s == '':
        return '?'
    elif s[-1] != '?':
        return s + '?'
    return s