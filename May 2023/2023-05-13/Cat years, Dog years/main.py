# Codewars, 8k: Cat years, Dog years

def human_years_cat_years_dog_years(h):
    if h == 1:
        return [1, 15, 15]
    elif h == 2:
        return [2, 24, 24]
    else:
        return [h, 24 + (h - 2) * 4, 24 + (h - 2) * 5]