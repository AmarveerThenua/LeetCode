/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let idx = -1


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max1 || nums[i] === max2) {
            continue;
        }
        if (max1 < nums[i]) {
            max2 = max1;
            max1 = nums[i]
            idx = i
        }
        else if (max2 < nums[i]) {
            max2 = nums[i];
        }
    }

    if(max1 >= max2*2){
        return idx;
    }else{
        return -1;
    }
};