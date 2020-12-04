// CREATE A FUNCTION stairCase WHICH ACCEPTS X AS AN INPUT
//THE GOAL OF THE FUNCTION IS TO CREATE A STAIRCASE OF # CHARACTERS WITH X AMOUNT OF ROWS AND COLS
//YOU MUST ENSURE THAT THE SPACES ARE ALSO INCLUDED IN EVERY ROW//

//   stairCase(2)
//       '# '
//       '##'
//   stairCase(3)
//       '#  '
//       '## '
//       '###'
//   stairCase(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function stairCase(x) {
//   for (let row = 0; row < x; row++) {
//     let stairRow = "";
//     for (let col = 0; col < x; col++) {
//       if (col <= row) {
//         stairRow += "#";
//       } else {
//         stairRow += " ";
//       }
//     }
//     console.log(stairRow);
//   }
// }

// stairCase(4);

function stairCase(x, row = 0, stairRow = "") {
  if (row === x) {
    return;
  }

  if (x === stairRow.length) {
    console.log(stairRow);
    return stairCase(x, row + 1);
  }

  if (stairRow.length <= row) {
    stairRow += "#";
  } else {
    stairRow += " ";
  }
  stairCase(x, row, stairRow);
}

stairCase(4);

module.exports = stairCase;
