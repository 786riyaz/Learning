// Given in the range of 0-99, print the missing numbers from a given array. If the missing numbers are more than one collate them (5-13) else just print the number (3)

console.clear();
// let inputArray = [0, 1, 2, 4, 14, 17, 28, 54, 86];
let inputArray = [4, 5, 6, 8, 10, 30, 31, 78, 89, 98, 99];

inputArray = [0, ...inputArray, 100];
inputArray = [...new Set(inputArray)]
let output = "";

for (let i = 0; i <= 99; i++) {
  if (inputArray.includes(i)) {
    let matchPosition = inputArray.indexOf(i);
    let nextNumber = inputArray[matchPosition + 1];
    // console.log("Match Position :: "+ matchPosition, " :: ", nextNumber);
    if (inputArray[matchPosition] == nextNumber - 1) {
      //   console.log(i);
      // console.log("In Single Line ::", i)
    } else {
      for (let j = i + 1; j < nextNumber; j++) {
        // console.log("In Single Group :: ", j)
      }
      if (i + 1 != (nextNumber || 99) - 1) {
        {
          output = output + (i + 1 + "-" + ((nextNumber || 100) - 1) + ", ");
        }
      } 
      //   console.log(i + 1 + "-" + ((nextNumber || 99) - 1));
    }
  } else {
    // console.log(i)
  }
}

console.log("{" + output.slice(0, -2) + "}");

// {0-3, 7, 9, 11-29, 32-77, 79-88, 90-97}
// {3, 5-13, 15-16, 18-27, 29-53, 55-85, 87-99}