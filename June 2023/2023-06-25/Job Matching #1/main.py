# Codewars, 8k: Job Matching #1

def match(candidate, job):
    try:
        if candidate['min_salary'] * .9 <= job['max_salary']:
            return True
        else:
            return False
    except:
        return 'Error'