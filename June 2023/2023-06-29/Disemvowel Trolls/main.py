# Codewars, 7k: Disemvowel Trolls

import re

def disemvowel(string_):
    return re.sub(r'[aiueoAIUEO]', '', string_)