# Codewars, 8k: Calculate BMI

def bmi(weight, height):
    res = weight / height ** 2
    if res <= 18.5:
        return 'Underweight'
    elif res <= 25:
        return 'Normal'
    elif res <= 30:
        return 'Overweight'
    return 'Obese'