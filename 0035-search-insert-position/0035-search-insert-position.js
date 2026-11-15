/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let n = nums.length;

    let start = 0;
    let end = n;

    while (start <= end) {
        let mid = Math.trunc(start + (end - start) / 2)

        if (nums[mid] > target) {
            end = mid - 1;
        }
        else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
           return mid
        }
    }

 
        return start
  

};