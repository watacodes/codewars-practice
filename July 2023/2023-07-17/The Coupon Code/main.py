# Codewars, 7k: The Coupon Code

import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    if entered_code is correct_code:
        date1 = datetime.datetime.strptime(current_date, '%B %d, %Y')
        date2 = datetime.datetime.strptime(expiration_date, '%B %d, %Y')
        return date1 <= date2
    return False