# Codewars, 8k: Color Ghost

import random

class Ghost(object):
    def __init__(self, color = 'white'):
        colors = ['white', 'yellow', 'purple', 'red']
        idx = random.randint(0, 3)
        self.color = colors[idx]