/*
Best case time:  O(n)
Average and worst case time: O(n^2)
Space complexity: O(1)
*/

// Example usage:
let arr = [7, 12, 9, 11, 3, 5, 3, 7,1];
bubbleSortPrintStages(arr);

function bubbleSortPrintStages(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // Track if any swap happened in this pass.
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // Print the array state after each pass
    console.log(`After pass ${i + 1}:`, arr.join(" "));
    // If no swaps, array is sorted
    if (!swapped) break;
  }
  
  // Final sorted array
  console.log("Sorted array:", arr.join(" "));
}
