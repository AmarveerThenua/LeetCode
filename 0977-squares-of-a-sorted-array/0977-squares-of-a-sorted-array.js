/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let res = new Array(nums.length);
    let r = nums.length - 1;
    let l = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        let val;
        if (Math.abs(nums[l]) > Math.abs(nums[r])) {
            val = nums[l];
            l++;
        } else {
            val = nums[r];
            r--;
        }
        res[i] = val * val
    }
    
    return res;
}