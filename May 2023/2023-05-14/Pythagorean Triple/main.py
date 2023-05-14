# Codewars, 8k: Pythagorean Triple

def pythagorean_triple(integers):
    sorted_ints = sorted(integers)
    return sorted_ints[0] ** 2 + sorted_ints[1] ** 2 == sorted_ints[2] ** 2