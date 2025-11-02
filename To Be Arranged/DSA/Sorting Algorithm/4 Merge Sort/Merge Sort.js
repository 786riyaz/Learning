/*
Time complexity: O(n log n) for best, average, and worst cases
Space complexity: O(n) due to auxiliary arrays used during merging
*/

// Example usage:
let arr = [7, 12, 9, 11, 3, 5, 3, 7, 1];
console.log("Original array:", arr.join(" "));
mergeSortPrintStages(arr, 0, arr.length - 1);
console.log("Sorted array:", arr.join(" "));

function mergeSortPrintStages(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);

    mergeSortPrintStages(arr, left, mid);
    mergeSortPrintStages(arr, mid + 1, right);
    merge(arr, left, mid, right);

    // Print array after each merge operation
    console.log(`After merging from index ${left} to ${right}:`, arr.slice(left, right + 1).join(" "));
  }
}

function merge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  let leftArr = new Array(n1);
  let rightArr = new Array(n2);

  for (let i = 0; i < n1; i++) leftArr[i] = arr[left + i];
  for (let j = 0; j < n2; j++) rightArr[j] = arr[mid + 1 + j];

  let i = 0, j = 0, k = left;

  while (i < n1 && j < n2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < n1) arr[k++] = leftArr[i++];
  while (j < n2) arr[k++] = rightArr[j++];
}
