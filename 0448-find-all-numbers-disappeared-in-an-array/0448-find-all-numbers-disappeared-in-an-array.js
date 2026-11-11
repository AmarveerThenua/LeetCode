var findDisappearedNumbers = function (nums) {

    let result = [];
    let set = new Set(nums)

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            result.push(i)
        }
    }

    return result;
};