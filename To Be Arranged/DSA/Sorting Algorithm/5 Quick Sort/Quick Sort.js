/*
Average and best case time: O(n log n)
Worst case time: O(n^2) (when pivot picks poorest possible splits)
Space complexity: O(log n) due to recursion stack (in-place sort)
*/

// Example usage:
let arr = [7, 12, 9, 11, 3, 5, 3, 7, 1];
console.log("Original array:", arr.join(" "));
quickSortPrintStages(arr, 0, arr.length - 1);
console.log("Sorted array:", arr.join(" "));

function quickSortPrintStages(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);

    // Print the array state after partitioning
    console.log(`After partitioning with pivot at index ${pi} (value ${arr[pi]}):`, arr.join(" "));

    quickSortPrintStages(arr, low, pi - 1);
    quickSortPrintStages(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high]; // Choosing last element as pivot
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
