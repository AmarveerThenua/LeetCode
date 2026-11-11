var findDisappearedNumbers = function (nums) {
    let seen = new Array(nums.length + 1).fill(false);
    let result = [];

    for (let num of nums) {
        seen[num] = true;
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!seen[i]) {
            result.push(i);
        }
    }

    return result;
};