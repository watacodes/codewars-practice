# Codewars, 8k: Calculate average

def find_average(num):
    try:
        return sum(num) / len(num)
    except:
        return 0