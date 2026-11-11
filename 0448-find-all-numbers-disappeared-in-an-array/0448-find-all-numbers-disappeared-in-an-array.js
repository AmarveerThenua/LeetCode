/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let map = new Map();
    let dispears = []

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        }
        else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }

    }


    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            dispears.push(i)
        }
    }

    return dispears;
};