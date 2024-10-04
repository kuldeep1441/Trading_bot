// Import necessary modules
const express = require('express');
const { portfolio, executeTradingStrategy, getPortfolioValue, logs } = require('./Trading.js'); // Require the trading.js file
const cors = require('cors');
const app = express();
const { getStockPrices } = require('./MockApi');
const PORT = 3000;
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Start the trading strategy execution
setInterval(executeTradingStrategy, 5000); // Run trading strategy every 5 seconds

// Sample route to check server status
app.get('/portfolio', (req, res) => {
    let totalInvestments = {};
    console.log("Your portfolio !!");
    totalInvestments["cash"] = portfolio.cash;
    totalInvestments["netProfit"] = portfolio.netProfit;
    totalInvestments["totalPortpholioValue"] = getPortfolioValue();

    for (let symbol in portfolio.stocks) {
        const stockEntries = portfolio.stocks[symbol];
        let totalInvestment = 0;

        for (const entry of stockEntries) {
            totalInvestment += entry.quantity * entry.costPrice; // Sum up total investment
        }

        totalInvestments[symbol] = totalInvestment; // Store total investment in new object
        console.log(`${symbol}  -  ${totalInvestment}`);
    }

    // Send total investments as a JSON response
    res.json(totalInvestments);
});

// Route to fetch logs
app.get('/logs', (req, res) => {
    res.json(logs);
});

// Corrected route to fetch stock prices
app.get('/prices', (req, res) => {
    const prices = getStockPrices();
    res.json(prices);  // Corrected json method
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
