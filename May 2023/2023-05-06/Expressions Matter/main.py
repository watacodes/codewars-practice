# Codewars, 8k: Expressions Matter

def expression_matter(a, b, c):
    op = [
        a * (b + c),
        a * b * c,
        (a + b) * c,
        a + b * c,
        a + b + c
    ]
    return max(op)