# Codewars, 8k: Grasshopper - Array Mean

def find_average(nums):
    try:
        return sum(nums) / len(nums)
    except:
        return 0