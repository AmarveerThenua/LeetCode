/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let totalUnit = 0
    let left = new Array(height.length);
    left[0] = height[0];


    let right = new Array(height.length);
    right[right.length - 1] = height[height.length - 1];

    let leftMax = left[0];
    let rightMax = right[right.length - 1];

    for (let i = 1; i < height.length; i++) {
        leftMax = Math.max(leftMax, height[i]);
        left[i] = leftMax;
    }

    for (let i = height.length - 2; i >= 0; i--) {
        rightMax = Math.max(rightMax, height[i])
        right[i] = rightMax;
    }

    for (let i = 0; i < height.length; i++) {
        total = Math.min(left[i], right[i]) - height[i]
        totalUnit += total
    }

    return totalUnit;
};