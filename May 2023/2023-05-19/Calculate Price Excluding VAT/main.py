# Codewars, 8k: Calculate Price Excluding VAT

def excluding_vat_price(price):
    try:
        return round(price / 1.15 * 100) / 100
    except:
        return -1