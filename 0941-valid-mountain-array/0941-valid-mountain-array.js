/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let n = arr.length - 1;
    let i = 0;

    while (i  < n && arr[i] < arr[i + 1]) {
        i++
    }
    if (i == n || i == 0) {
        return false
    }

    while (arr[i] > arr[i + 1] && i  < n) {
        i++;
    }

    return i == n 

};