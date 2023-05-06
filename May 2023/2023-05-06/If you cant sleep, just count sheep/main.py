# Codewars, 8k: If you can't sleep, just count sheep!!

def count_sheep(n):
    mumble = ''
    for i in range(1, n + 1):
        mumble += f"{i} sheep..."
    return mumble