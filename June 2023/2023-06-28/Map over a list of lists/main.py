# Codewars, 8k: Map over a list of lists

def grid_map(inp, op):
    return [list(map(op, x)) for x in inp]