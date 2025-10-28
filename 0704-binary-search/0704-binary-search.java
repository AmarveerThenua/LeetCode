class Solution {
    public int search(int[] nums, int target) {
        int first =  0;
        int last = nums.length-1;
       
        while(first <= last){
            int mid  = (last+first)/2;

            if(target>nums[mid]){
                first = mid+1;
            }
            else if(nums[mid]>target){
                last = mid -1;
            }
            else if (target==nums[mid]){
                return mid;
            }
        }
        return -1;

    }
}