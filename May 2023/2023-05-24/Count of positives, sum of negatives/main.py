# Codewars, 8k: Count of positives / sum of negatives

def count_positives_sum_negatives(arr):
    pos = 0
    neg = 0
    if len(arr) == 0:
        return []
    for i in arr:
        if i < 0:
            neg += i
        elif i > 0:
            pos += 1
    return [pos, neg]