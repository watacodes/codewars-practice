# Codewars, 8k: Circles in Polygons

from math import tan, pi

def circle_diameter(sides, side_length):
    return side_length / tan(pi / sides)