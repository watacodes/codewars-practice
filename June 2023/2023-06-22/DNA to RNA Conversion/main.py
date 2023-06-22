# Codewars, 8k: DNA to RNA Conversion

import re

def dna_to_rna(dna):
    return re.sub(r'[T]', 'U', dna)