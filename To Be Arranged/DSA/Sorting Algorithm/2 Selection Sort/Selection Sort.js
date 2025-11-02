/*
Best case time:  O(n^2)
Average and worst case time: O(n^2)
Space complexity: O(1)
*/

// Example usage:
let arr = [7, 12, 9, 11, 3, 5, 3, 7, 1];
selectionSortPrintStages(arr);

function selectionSortPrintStages(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum with the first unsorted element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    // Print the array state after each pass
    console.log(`After pass ${i + 1}:`, arr.join(" "));
  }

  // Final sorted array
  console.log("Sorted array:", arr.join(" "));
}
