# Codewars, 8k: Fuel Calculator: Total Cost

def fuel_price(litres, price_per_litre):
    discount = (litres // 2) * .05
    if litres >= 10:
        discount = .25
    return round((price_per_litre - discount) * litres, 2)