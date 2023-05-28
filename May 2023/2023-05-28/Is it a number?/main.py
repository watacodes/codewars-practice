# Codewars, 8k: Is it a number?

def isDigit(str):
    try:
        float(str)
        return True
    except:
        return False