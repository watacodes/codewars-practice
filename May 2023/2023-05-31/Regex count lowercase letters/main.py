# Codewars, 8k: Regex count lowercase letters

def lowercase_count(str):
    count = 0
    for i in str:
        if i.islower():
            count += 1
    return count