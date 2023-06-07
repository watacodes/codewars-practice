# Codewars, 8k: Invalid Login - Bug Fixing #11

def validate(username, password):
    database = Database()
    return database.login(username, password)