# Codewars, 8k: Simple validation of a username with regex

import re

def validate_usr(username):
    return re.match('^[a-z0-9_]{4,16}$', username) != None