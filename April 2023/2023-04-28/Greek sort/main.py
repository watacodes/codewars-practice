# Codewars, 8k: Greek sort

def greek_comparator(lhs, rhs):
    lhs_idx = greek_alphabet.index(lhs)
    rhs_idx = greek_alphabet.index(rhs)
    return lhs_idx - rhs_idx