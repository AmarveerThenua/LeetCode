/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    let n = nums.length;


    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        let k = n - 1;
        let j = i + 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum > 0) k--;
            else if (sum < 0) j++;
            else {
                ans.push([nums[i], nums[j], nums[k]])
                j++;
                k--
                while (j < k && nums[j] == nums[j - 1]) j++;
            }
        }
    }

    return ans;
};