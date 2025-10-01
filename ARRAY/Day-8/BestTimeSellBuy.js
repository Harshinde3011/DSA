// array = [7,1,4,5,6,3] here at 1st day price is 7, 2nd day price is 1, 3rd day price 4
// so find maximum profit between buy and sell day, sell day should not be earlier than buy day


const array =[7,1,5,3,6,4];

function bestSellAndBuy(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price
        }

        let profit = price - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit
        }
    }

    return maxProfit;
}

console.log(bestSellAndBuy(array));
