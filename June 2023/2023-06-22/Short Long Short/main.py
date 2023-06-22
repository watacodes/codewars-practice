# Codewars, 8k: Short Long Short

def solution(a, b):
    shorter = a
    longer = b
    
    if len(a) >= len(b):
        shorter = b
        longer = a
    return shorter + longer + shorter