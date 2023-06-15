# Codewars, 8k: Playing with cubes II

class Cube(object):
    
    def __init__(self, side = 0):
        self._side = abs(side)
        
    def get_side(self):
        return self._side

    def set_side(self, new_side):
        self._side = abs(new_side)