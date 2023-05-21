# Codewars, 8k: Get number from string


import re

def get_number_from_string(string):
    return int(re.sub('\D', '', string))