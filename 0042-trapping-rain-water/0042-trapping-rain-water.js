/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    let right = new Array(n)
    let left = new Array(n)

    left[0] = height[0];
    right[n - 1] = height[n - 1]
    let leftMax = left[0];
    let rightMax = right[n - 1]

    for (let i = 0; i < n; i++) {
        leftMax = Math.max(leftMax, height[i])
        left[i] = leftMax;
    }
    for (let i = n - 2; i >= 0; i--) {
        rightMax =Math.max(rightMax, height[i]);
        right[i] = rightMax;
    }
    let totalUnit = 0;
    for (let i = 0; i < n; i++) {
        totalUnit += Math.min(right[i],left[i]) - height[i]
    }
    return totalUnit

};