# Codewars, 8k: Return the day

def whatday(num):
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if num > 0 and num <= 7:
        return days[num - 1]
    else:
        return 'Wrong, please enter a number between 1 and 7'