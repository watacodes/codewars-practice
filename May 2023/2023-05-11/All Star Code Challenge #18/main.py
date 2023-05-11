# Codewars, 8k: All Star Code Challenge #18

def str_count(str, letter):
    counter = 0
    for i in str:
        if i == letter:
            counter += 1
    return counter