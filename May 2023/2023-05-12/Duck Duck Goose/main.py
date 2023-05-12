# Codewars, 8k: Duck Duck Goose

def duck_duck_goose(players, goose):
    if goose > len(players):
        return players[goose % len(players) - 1].name
    else:
        return players[goose - 1].name