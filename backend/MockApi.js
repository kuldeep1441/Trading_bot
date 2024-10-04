// Initial stock data with categories, types, and historical price arrays
let stocks = {
    // Large-Cap Stocks (10)
    AAPL: { name: "Apple", price: 150, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 150, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },  
    MSFT: { name: "Microsoft", price: 310, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 310, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 }, 
    GOOGL: { name: "Google", price: 2800, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 2800, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    AMZN: { name: "Amazon", price: 3300, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 3300, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    FB: { name: "Facebook", price: 340, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 340, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    NVDA: { name: "NVIDIA", price: 650, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 650, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    BRK_B: { name: "Berkshire Hathaway", price: 420, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 420, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    JNJ: { name: "Johnson & Johnson", price: 170, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 170, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    JPM: { name: "JPMorgan Chase", price: 160, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 160, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    UNH: { name: "UnitedHealth", price: 400, type: "large-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 400, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },

    // Mid-Cap Stocks (10)
    TSLA: { name: "Tesla", price: 750, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 750, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },    
    NFLX: { name: "Netflix", price: 600, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 600, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },  
    ZM: { name: "Zoom", price: 130, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 130, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },       
    SQ: { name: "Square", price: 240, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 240, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    DOCU: { name: "DocuSign", price: 230, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 230, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    TWLO: { name: "Twilio", price: 340, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 340, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    SPOT: { name: "Spotify", price: 230, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 230, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    UBER: { name: "Uber", price: 50, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 50, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    LYFT: { name: "Lyft", price: 60, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 60, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    PYPL: { name: "PayPal", price: 250, type: "mid-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 250, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },

    // Small-Cap Stocks (10)
    PLTR: { name: "Palantir", price: 20, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 20, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 }, 
    RBLX: { name: "Roblox", price: 40, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 40, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },   
    FUBO: { name: "FuboTV", price: 12, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 12, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },   
    AMC: { name: "AMC", price: 15, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 15, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    BB: { name: "BlackBerry", price: 10, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 10, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    GME: { name: "GameStop", price: 25, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 25, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    WKHS: { name: "Workhorse Group", price: 8, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 8, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    SNDL: { name: "Sundial Growers", price: 3, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 3, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    NIO: { name: "NIO", price: 35, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 35, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 },
    SDC: { name: "SmileDirectClub", price: 6, type: "small-cap", bias: 0.5, historicalPrices: [], shortTermPrices: [], longTermAvg: 6, inc: 0, dec: 0, prev_mode: 1, curr_mode: 1 }
};




// Function to update the bias for each stock every 15 minutes
function updateStockBias() {
    for (let symbol in stocks) {
        stocks[symbol].bias = Math.random();  // Bias between 0 and 1
    }
    // Log the updated bias for AAPL
    // console.log(`Updated Bias for AAPL: ${stocks.AAPL.bias.toFixed(2)}`);
}

function simulatePriceFluctuation() {
    for (let symbol in stocks) {
        let randomChange;
        let bias = stocks[symbol].bias;

        // Simulate price fluctuations based on bias
        if (bias >= 0.6) {     
            randomChange = Math.random() * (3 - (-1)) + (-1); // Random number between -1 and 3
        } else if (bias <= 0.4) {
            randomChange = Math.random() * (1 - (-3)) + (-3); // Random number between -3 and 1
        } else {
            randomChange = Math.random() * (1 - (-1)) + (-1);
        }

        // Adjust randomChange based on stock type
        switch (stocks[symbol].type) {
            case "large-cap":
                randomChange = randomChange * 0.2;
                break;
            case "mid-cap":
                randomChange = randomChange * 0.5;
                break;
            case "small-cap":
                randomChange = randomChange * 1;
                break;
        }

        // Update the stock price
        const oldPrice = stocks[symbol].price;
        const newPrice = (parseFloat(stocks[symbol].price) + parseFloat(stocks[symbol].price) * parseFloat(randomChange) / 100).toFixed(2);
        // Update historical prices
        stocks[symbol].historicalPrices.push(parseFloat(newPrice));
        if (stocks[symbol].historicalPrices.length > 360) {
            stocks[symbol].historicalPrices.shift(); // Keep only the last 360 prices
        }

        // Update short-term prices
        stocks[symbol].shortTermPrices.push(parseFloat(newPrice));

        // Calculate long-term average
        const longTermTotal = stocks[symbol].historicalPrices.reduce((sum, price) => sum + price, 0);
        stocks[symbol].longTermAvg = (longTermTotal / stocks[symbol].historicalPrices.length).toFixed(2);
        
        if(newPrice> stocks[symbol].longTermAvg){
            stocks[symbol].prev_mode=stocks[symbol].curr_mode;
            stocks[symbol].curr_mode=0;
        }else {
            stocks[symbol].prev_mode=stocks[symbol].curr_mode;
            stocks[symbol].curr_mode=1;
        }
        // Update stock price
        stocks[symbol].price = newPrice;

        // Count increments and decrements in the last 10 price fluctuations
        const incrementsCount = stocks[symbol].shortTermPrices.reduce((count, price, index, arr) => {
            if (index > 0 && price > arr[index - 1]) count++;
            return count;
        }, 0);
        const decrementsCount = stocks[symbol].shortTermPrices.reduce((count, price, index, arr) => {
            if (index > 0 && price < arr[index - 1]) count++;
            return count;
        }, 0);

        if (stocks[symbol].shortTermPrices.length > 10) {
            stocks[symbol].shortTermPrices.shift(); // Keep only the last 10 prices
        }
        stocks[symbol].inc = incrementsCount;
        stocks[symbol].dec = decrementsCount;
    }

    // Log results for Facebook as an example
    // console.log(`Updated Price for Facebook : $${stocks.FB.price}, Long Term Avg: $${stocks.FB.longTermAvg}, Increments in Last 10 Prices: ${stocks.FB.dec} , mode: ${stocks.FB.prev_mode},${stocks.FB.curr_mode}`);
}

// Update bias every 15 minutes (900000 ms)
setInterval(updateStockBias, 900000);

// Simulate price changes every 10 seconds (10000 ms)
setInterval(simulatePriceFluctuation, 5000);

// Mock API to get the real-time stock prices
function getStockPrices() {
    return stocks;
}

// Mock API to get a specific stock price by symbol
function getStockPrice(symbol) {
    return stocks[symbol] ? stocks[symbol] : null;
}

module.exports = { getStockPrices, getStockPrice };
