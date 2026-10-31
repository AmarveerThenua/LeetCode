/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
    let max = 0
    for(let i =1; i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            let profit = arr[i] - arr[i-1];
            max += profit;
        }
    }
    return max
};