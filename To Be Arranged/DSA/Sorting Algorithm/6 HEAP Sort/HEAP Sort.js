/*
Time complexity: O(n log n) for best, average, and worst cases
Space complexity: O(1) (in-place sort)
*/

// Example usage:
let arr = [7, 12, 9, 11, 3, 5, 3, 7, 1];
console.log("Original array:", arr.join(" "));
heapSortPrintStages(arr);
console.log("Sorted array:", arr.join(" "));

function heapSortPrintStages(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  console.log("After building max heap:", arr.join(" "));

  // One by one extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);

    // Print array state after each extraction
    console.log(`After extracting element ${n - i}:`, arr.join(" "));
  }
}

function heapify(arr, heapSize, rootIndex) {
  let largest = rootIndex;
  let left = 2 * rootIndex + 1;
  let right = 2 * rootIndex + 2;

  if (left < heapSize && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < heapSize && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== rootIndex) {
    [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
    heapify(arr, heapSize, largest);
  }
}
