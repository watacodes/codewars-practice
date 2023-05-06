# Codewars, 8k: Draw stairs

def draw_stairs(n):
    staircase = ''
    space_count = 0
    for i in range(n):
        staircase += str(' ' * space_count) + 'I' + '\n'
        space_count += 1
    return staircase.strip()