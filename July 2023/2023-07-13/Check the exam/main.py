# Codewars, 7k: Check the exam

def check_exam(arr1,arr2):
    score = 0
    
    for i in range(len(arr1)):
        if arr1[i] == arr2[i]:
            score += 4
        elif arr2[i] == '':
            score += 0
        else:
            score -= 1

    return 0 if score <= 0 else score