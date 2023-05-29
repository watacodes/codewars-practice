# Codewars, 8k: altERnaTIng cAsE <=> ALTerNAtiNG CaSe

def to_alternating_case(string):
    res = []
    for i in string:
        if i.lower() == i:
            res.append(i.upper())
        else:
            res.append(i.lower())
    return ('').join(res)