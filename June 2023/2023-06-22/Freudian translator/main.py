# Codewars, 8k: Freudian translator

import re

def to_freud(sentence):
    return re.sub(r'\S+', 'sex', sentence)