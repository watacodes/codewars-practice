# Codewars, 8k: Did she say hello?

def validate_hello(greetings):
    phrases = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    for i in phrases:
        if i in greetings.lower():
            return True
    return False
