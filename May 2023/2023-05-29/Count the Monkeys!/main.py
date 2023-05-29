# Codewars, 8k: Count the Monkeys!

def monkey_count(n):
    queue = []
    for i in range(1, n + 1):
        queue.append(i)
    return queue