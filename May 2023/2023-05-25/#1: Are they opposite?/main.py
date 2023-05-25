# Codewars, 8k: #1: Are they opposite?

def is_opposite(s1,s2):
    status = False
    for i in range(len(s1)):
        if s1[i].lower() == s1[i]:
            if s2[i] == s2[i].upper():
                status = True
            else:
                return False
        else:
            if s2[i] == s2[i].lower():
                status = True
            else:
                return False
    return status