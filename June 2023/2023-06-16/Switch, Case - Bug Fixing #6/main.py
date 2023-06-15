# Codewars, 8k: Switch/Case - Bug Fixing #6

def eval_object(v):
    match v['operation']:
        case "+":
            return v['a'] + v['b']
        case "-":
            return v["a"] - v["b"]
        case "/":
            return v["a"] / v["b"]
        case "*":
            return v["a"] * v["b"]
        case "%":
            return v["a"] % v["b"]
        case "**":
            return v["a"] ** v["b"]
        case _:
            return 1