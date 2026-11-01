/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (arr) {
    let left = new Array(arr.length);
    left[0] = arr[0];
    let lMax = left[0];

    let right = new Array(arr.length)
    right[right.length - 1] = arr[arr.length - 1];

    let rMax = right[right.length - 1];

    for (let i = 1; i < arr.length; i++) {
        lMax = Math.max(arr[i], lMax);
        left[i] = lMax;
    }

    for (let i = right.length - 2; i >= 0; i--) {
        rMax = Math.max(rMax, arr[i]);
        right[i] = rMax;
    }

    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        ans += Math.min(right[i], left[i]) - arr[i]
    }

    return ans;
};