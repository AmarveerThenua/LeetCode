/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buy = Infinity;

    for(let i=0;i<prices.length;i++){
        if(buy>prices[i]){
            buy = prices[i]
        }
        if(buy<prices[i]){
            profit += prices[i] - buy;
            buy = prices[i]
        }
    }
   return profit
};