# Codewars, 7k: All unique

def has_unique_chars(string):
    unique = ('').join(sorted(list(set(string))))
    return ('').join(sorted(list(string))) == unique