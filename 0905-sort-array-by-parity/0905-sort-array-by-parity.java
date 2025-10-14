class Solution {
    public int[] sortArrayByParity(int[] nums) {
        int num[] = new int[nums.length];
        int j= 0;
        
        for(int i = 0; i<nums.length;i++){
            if(nums[i]%2 ==0){
                num[j] = nums[i];
                j++;
            }
        }
        int k = j;
        for(int i=0; i<nums.length;i++){
            if(nums[i] %2 != 0){
                num[k] = nums[i];
                k++;
            }
        }
        
        return num;
    }
}