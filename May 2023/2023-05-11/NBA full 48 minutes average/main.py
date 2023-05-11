# Codewars, 8k: NBA full 48 minutes average

def nba_extrap(ppg, mpg):
    if mpg == 0:
        return 0
    return round(ppg * 48 / mpg * 10) / 10