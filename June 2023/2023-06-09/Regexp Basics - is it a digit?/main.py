# Codewars, 8k: Regexp Basics - is it a digit?

import re

def is_digit(n):
    return bool(re.fullmatch(r'\d', n))w