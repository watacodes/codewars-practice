# Codewars, 7k: Volume of a cup

from math import pi

def cup_volume(d1, d2, height):
    return round(height / 12.0 * pi * (d1 ** 2 + d1 * d2 + d2 ** 2), 2)