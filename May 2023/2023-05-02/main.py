# Codewars, 8k: Abbreviate a Two Word Name

def abbrev_name(name):
    full_name = name.upper().split(' ')
    return full_name[0][0] + '.' + full_name[1][0]