# Codewars, 7k: Bumps in the Road

def bumps(road):
    leng = road.replace(f'_', '')
    return 'Woohoo!' if len(leng) <= 15 else 'Car Dead'