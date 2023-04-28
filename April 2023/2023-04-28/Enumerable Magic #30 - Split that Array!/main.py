# Codewars, 8k: Enumerable Magic #30 - Split that Array!

def partition(arr, classifier_method):
    list1 = []
    list2 = []
    for i in arr:
        if (classifier_method(i)):
            list1.append(i)
        else:
            list2.append(i)
    return (list1, list2)