# Codewars, 8k: Filter out the geese

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

def goose_filter(birds):
    res = []
    for i in birds:
        if i not in geese:
            res.append(i)
    return res