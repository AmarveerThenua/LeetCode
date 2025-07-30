class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = Integer.MIN_VALUE;
        int currSum = 0;
        for(int i=0; i<nums.length;i++){
            currSum += nums[i];
            maxSum = Math.max(maxSum,currSum);
            if(0>currSum){
                currSum = 0;
            }
        }
        return maxSum;
    }
}