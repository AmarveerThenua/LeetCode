/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let ans = []
    let set1 = new Set(nums1)
    let unique = [...new Set(nums2)];

    for(let i=0;i<unique.length;i++){
        if(set1.has(unique[i])){
            ans.push(unique[i])
        }
    }

    return ans;
};