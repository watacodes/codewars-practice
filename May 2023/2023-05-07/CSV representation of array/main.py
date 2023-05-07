# Codewars, 8k: CSV representation of array

def to_csv_text(array):
    csv = ''
    for i in range(len(array)):
        print(array[i])
        csv += ','.join(map(str, array[i])) + '\n'
    return csv.strip()