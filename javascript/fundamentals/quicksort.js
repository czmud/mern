"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let numberArray = [9, 4, 5, 1, 2, 10, 6, 7, 3, 8];
function quickSort(arr, i = 0, j = arr.length - 1) {
    if (i >= j) {
        return arr;
    }
    let p = j;
    let pivot = selectPivot(arr, i, p);
    while (i < j) {
        if (arr[i] < pivot) {
            i++;
        }
        else if (arr[j] > pivot) {
            j--;
        }
        else {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    quickSort(arr, 0, i - 1);
    quickSort(arr, i + 1, p);
    return arr;
}
function selectPivot(arr, start, end) {
    let maxVal = arr[start];
    let minVal = arr[start];
    for (let i = start; i < end; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return Math.trunc((minVal + maxVal) / 2);
}
console.log(quickSort(numberArray));
console.log(quickSort([1, 10, 5]));
