/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = +Infinity
    let i = 0;
    while (i < prices.length) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
        if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
        i++
    }
    return maxProfit
};