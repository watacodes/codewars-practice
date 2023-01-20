/*

Codewars, 7k: Holiday II - Plane Seating

*/

function planeSeat(seat) {
  const seatNum = Number(seat.replace(/\D/g, ''));
  const seatAlpha = seat.match(/[a-z]/gi)[0];
  let seatRow;
  if (seatNum > 0 && seatNum <= 20) {
    seatRow = 'Front-';
  } else if (seatNum > 20 && seatNum <= 40) {
    seatRow = 'Middle-';
  } else if (seatNum > 40 && seatNum <= 60) {
    seatRow = 'Back-';
  } else {
    return 'No Seat!!';
  }
  
  if (['A', 'B', 'C'].includes(seatAlpha)) {
    seatRow += 'Left';
  } else if (['D', 'E', 'F'].includes(seatAlpha)) {
    seatRow += 'Middle';
  } else if (['G', 'H', 'K'].includes(seatAlpha)) {
    seatRow += 'Right';
  } else {
    return 'No Seat!!';
  }
  return seatRow;
}