# Codewars, 8k: Closest elevator

def elevator(left, right, call):
    if abs(left - call) >= abs(right - call):
        return 'right'
    else:
        return 'left'