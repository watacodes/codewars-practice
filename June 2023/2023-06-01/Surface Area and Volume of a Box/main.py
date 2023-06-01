# Codewars, 8k: Surface Area and Volume of a Box

def get_size(w, h, d):
    area = w * h * 2 + h * d * 2 + d * w * 2
    volume = w * h * d
    return [area, volume]