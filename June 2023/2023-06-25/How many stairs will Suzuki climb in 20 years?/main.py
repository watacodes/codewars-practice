# Codewars, 8k: How many stairs will Suzuki climb in 20 years?

def stairs_in_20(stairs):
    val = 0
    for i in stairs:
        for k in i:
            val += k
    return val * 20