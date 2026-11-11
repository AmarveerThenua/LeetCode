var findDisappearedNumbers = function (nums) {
    let map = new Map();
    let disappears = [];

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], true);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            disappears.push(i);
        }
    }

    return disappears;
};