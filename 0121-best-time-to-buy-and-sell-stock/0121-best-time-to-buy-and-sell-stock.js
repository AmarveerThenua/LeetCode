/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minimum = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if(prices[i]<minimum) minimum = prices[i];
        let profit  = prices[i] - minimum;
        maxProfit = Math.max(maxProfit,profit)
    }

    return maxProfit;
};