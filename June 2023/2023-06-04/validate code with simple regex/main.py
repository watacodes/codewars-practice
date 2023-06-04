# Codewars, 8k: validate code with simple regex

import re

def validate_code(code):
    return re.match('^[123]', str(code)) != None