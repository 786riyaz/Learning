// Given in the range of 0-99, print the missing numbers from a given array. If the missing numbers are more than one collate them (5-13) else just print the number (3)
// 
console.clear();

// let inputArray = [0, 1, 2, 4, 14, 17, 28, 54, 86];
let inputArray = [4, 5, 6, 8, 10, 30, 31, 78, 89, 98, 99];

// Step 1: Sort and remove duplicates
inputArray = [...new Set(inputArray)].sort((a, b) => a - b);

let output = [];
let start = 0;

// Step 2: Check from 0 to 99
for (let i = 0; i <= 99; i++) {
  if (!inputArray.includes(i)) {
    // found missing start
    start = i;
    // find end of consecutive missing numbers
    while (i <= 99 && !inputArray.includes(i)) {
      i++;
    }
    let end = i - 1;

    // Step 3: Add range to output
    output.push(start === end ? `${start}` : `${start}-${end}`);
  }
}

console.log(`{${output.join(", ")}}`);

// {0-3, 7, 9, 11-29, 32-77, 79-88, 90-97}
// {3, 5-13, 15-16, 18-27, 29-53, 55-85, 87-99}