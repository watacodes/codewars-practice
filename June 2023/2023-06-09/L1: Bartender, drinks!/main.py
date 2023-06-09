# Codewars, 8k: L1: Bartender, drinks!

def get_drink_by_profession(param):
    order = {
        'jabroni': 'Patron Tequila',
        'school counselor': 'Anything with Alcohol',
        'programmer': 'Hipster Craft Beer',
        'bike gang member': 'Moonshine',
        'politician': 'Your tax dollars',
        'rapper': 'Cristal',
    }
    
    try:
        return order[param.lower()]
    except:
        return 'Beer'