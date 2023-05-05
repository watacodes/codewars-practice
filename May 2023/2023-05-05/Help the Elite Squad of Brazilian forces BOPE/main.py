# Codewars, 8k: Help the Elite Squad of Brazilian forces BOPE

from typing import Tuple
from math import ceil

wp = {
    'PT92': 17,
    'M4A1': 30,
    'M16A2': 30,
    'PSG1': 5
}

def mag_number(info: Tuple[str, int]) -> int:
    return ceil(info[1] * 3 / wp[info[0]])