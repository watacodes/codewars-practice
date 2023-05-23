# Codewars, 8k: Reversing Words in a String

import re

def reverse(st):
    res = []
    st_lis = re.sub(' +', ' ', st).split(' ')[::-1]
    return (' ').join(st_lis).strip()