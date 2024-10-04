const { getStockPrices } = require('./MockApi'); // Assuming the above file is named 'stocks.js'

// Mock portfolio
let portfolio = {
    cash: 100000, 
    netProfit: 0, // Starting with $100,000
    stocks: {}  
};
let counter = 0;

let logs = [];
// Function to calculate the total portfolio value
function getPortfolioValue() {
    let totalValue = portfolio.cash;
    for (let symbol in portfolio.stocks) {
        portfolio.stocks[symbol].forEach((purchase) => {
            const quantity = purchase.quantity;
            const costPrice = getStockPrices()[symbol].price;
            totalValue += (quantity * costPrice);
        });
    }
    return totalValue;
}

// Function to sell stocks based on conditions
function sellStocks() {
    counter++;
    const stockPrices = getStockPrices();
    for (let symbol in portfolio.stocks) {
        const stock = stockPrices[symbol];
        const stockPurchases = portfolio.stocks[symbol];

        stockPurchases.forEach((purchase, index) => {
            const quantity = purchase.quantity;
            const costPrice = purchase.costPrice;

            // Calculate the profit or loss percentage
            const currentPrice = parseFloat(stock.price);
            const priceChange = ((currentPrice - costPrice) / costPrice) * 100;

            // Check the sell conditions
            if (
                (stock.type === "large-cap" && Math.abs(priceChange) >= 1) ||
                (stock.type === "mid-cap" && Math.abs(priceChange) >= 3) ||
                (stock.type === "small-cap" && Math.abs(priceChange) >= 5) ||
                stock.dec >= 8 || (stock.prev_mode == 0 && stock.curr_mode == 1 && counter > 25)
            ) {
                const saleAmount = currentPrice * quantity;
                portfolio.cash += saleAmount;
                portfolio.netProfit += (saleAmount - (costPrice * quantity));
                const logEntry = {
                    timestamp: new Date().toISOString(), // Current timestamp in ISO format
                    logValue:`Sold ${quantity} shares of ${symbol} for $${saleAmount.toFixed(2)}.`,
                };
                logs.push(logEntry);
                console.log(`Sold ${quantity} shares of ${symbol} for $${saleAmount}.`);

                // Remove the sold purchase
                stockPurchases.splice(index, 1);
            }
        });

        // Remove stock from portfolio if all shares are sold
        if (portfolio.stocks[symbol].length === 0) {
            delete portfolio.stocks[symbol];
        }
    }
}

// Function to buy stocks based on conditions
function buyStocks() {
    const stockPrices = getStockPrices();

    for (let symbol in stockPrices) {
        const stock = stockPrices[symbol];

        // Buy conditions
        if (stock.inc >= 8 || (stock.prev_mode == 1 && stock.curr_mode == 1 && counter > 25)) {
            let investment = 0;

            if (stock.type === "large-cap") {
                investment = portfolio.cash * 0.06; // 6% of total value for large-cap
            } else if (stock.type === "mid-cap") {
                investment = portfolio.cash * 0.03; // 3% of total value for mid-cap
            } else if (stock.type === "small-cap") {
                investment = portfolio.cash * 0.01; // 1% of total value for small-cap
            }

            const quantity = Math.floor(investment / stock.price);
            if (quantity > 0) {
                if (quantity * stock.price > 100) {
                    portfolio.cash -= quantity * stock.price;

                    // If the stock is already in the portfolio, add the new purchase to the list
                    if (!portfolio.stocks[symbol]) {
                        portfolio.stocks[symbol] = [];
                    }
                    
                    portfolio.stocks[symbol].push({
                        quantity,
                        costPrice: stock.price
                    });
                    const logEntry = {
                        timestamp: new Date().toISOString(), // Current timestamp in ISO format
                        logValue:`Bought ${quantity} shares of ${symbol} for $${(quantity * stock.price).toFixed(2)}.`
                    };
                    logs.push(logEntry);
                    console.log(`Bought ${quantity} shares of ${symbol} for $${quantity * stock.price}.`);
                }
            }
        }
    }
}

// Trading function to execute buying and selling strategies every time prices are updated
function executeTradingStrategy() {
    sellStocks(); // Execute selling strategy
    buyStocks();  // Execute buying strategy
    const totalValue = getPortfolioValue();
    console.log(`We have a total portfolio value of $${totalValue}, cash: $${portfolio.cash}, and net profit: $${portfolio.netProfit}`);
}

// Simulate trading after every price change (every 5 seconds, aligned with price update)
// setInterval(executeTradingStrategy, 5000);

module.exports = { portfolio, executeTradingStrategy, getPortfolioValue, logs };

