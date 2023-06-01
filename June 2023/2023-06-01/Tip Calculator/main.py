# Codewars, 8k: Tip Calculator

import math

def calculate_tip(amount, rating):
    conv = {
        'terrible': 0,
        'poor': 0.05,
        'good': 0.1,
        'great': 0.15,
        'excellent': 0.20
    }

    try:
        return math.ceil(amount * conv[rating.lower()])
    except:
        return 'Rating not recognised'