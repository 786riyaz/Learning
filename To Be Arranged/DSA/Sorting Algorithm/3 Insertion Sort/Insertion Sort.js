/*
Best case time:  O(n)
Average and worst case time: O(n^2)
Space complexity: O(1)
*/

// Example usage:
let arr = [7, 12, 9, 11, 3, 5, 3, 7, 1];
insertionSortPrintStages(arr);

function insertionSortPrintStages(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;

    // Print the array state after each pass
    console.log(`After pass ${i}:`, arr.join(" "));
  }

  // Final sorted array
  console.log("Sorted array:", arr.join(" "));
}
