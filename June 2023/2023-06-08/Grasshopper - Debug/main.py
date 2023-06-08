# Codewars, 8k: Grasshopper - Debug

def weather_info(c):
    converted = convert_to_celsius(c)
    if converted > 0:
        return (str(converted) + " is above freezing temperature")
    else:
        return (str(converted) + " is freezing temperature")
    
def convert_to_celsius (temperature):
    return (temperature - 32) * (5 / 9)