"use strict";
exports.__esModule = true;
var numberArray = [9, 4, 5, 1, 2, 10, 6, 7, 3, 8];
function quickSort(arr, i, j) {
    var _a;
    if (i === void 0) { i = 0; }
    if (j === void 0) { j = arr.length - 1; }
    if (i >= j) {
        return arr;
    }
    var p = j;
    var pivot = selectPivot(arr, i, p);
    console.log("pivot: " + pivot);
    while (i < j) {
        console.log(arr);
        if (arr[i] < pivot) {
            console.log(i);
            i++;
        }
        else if (arr[j] > pivot) {
            console.log(j);
            j--;
        }
        else {
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
    }
    quickSort(arr, 0, i - 1);
    quickSort(arr, i + 1, p);
    return arr;
}
function selectPivot(arr, start, end) {
    var maxVal = arr[start];
    var minVal = arr[start];
    for (var i = start; i < end; i++) {
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
console.log(quickSort([1]));
