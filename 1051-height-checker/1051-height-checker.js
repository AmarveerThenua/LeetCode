/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let expected = new Array(heights.length)

    for (let i = 0; i < heights.length; i++) {
        expected[i] = heights[i]
    }

    expected.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != expected[i]) {
            count++;
        }
    }
    return count;
};