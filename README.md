### Stock Price Generation Mechanism

1. *Fluctuation Based on Stock Type*:
   - *Large-cap stocks*: Price changes are limited to ±0.2%.
   - *Mid-cap stocks*: Price changes are within ±0.5%.
   - *Small-cap stocks*: These experience more volatility, with changes of up to ±1%.

2. *Bias and Trend Influence*:
   - Every 15 minutes, each stock’s bias is updated with a random value between 0 and 1.
   - If *bias > 0.6*, the stock has a 75% chance of positive price changes.
   - If *bias < 0.4*, the stock has a 75% chance of negative price changes.
   - If *bias* falls between 0.4 and 0.6, the probability of positive and negative changes is equal.

This bias-based mechanism drives the price fluctuations and trends in the simulation, allowing for dynamic stock movements.


### Trading Algorithms and Mechanism

#### 1. *Basic Selling Mechanism*
After every price change, we try to sell stocks based on the following criteria:
- *Large-cap stocks*: Sell when profit or loss reaches ±1%.
- *Mid-cap stocks*: Sell when profit or loss reaches ±3%.
- *Small-cap stocks*: Sell when profit or loss reaches ±5%.

This helps in booking profits or cutting losses, depending on the stock's performance.

#### 2. *Algo 1: Momentum Trading*
Momentum trading involves tracking the last 10 price changes of a stock:
- If there are *8 or more negative changes*, the stock is in a negative trend, and we sell it.
- If there are *8 or more positive changes*, the stock is in a positive trend, and we buy more of it.

This algorithm identifies strong price movements and acts accordingly.

#### 3. *Algo 2: Moving Average Trading*
This algorithm compares the stock’s current price with its moving average for the last hour:
- If the *current price* crosses *above* the moving average, a new positive trend is detected, and we buy the stock.
- If the *current price* crosses *below* the moving average, a negative trend is detected, and we sell the stock.

#### 4. *Buying Mechanism*
To balance risk, we invest a fixed percentage of available cash:
- *6%* in large-cap stocks.
- *3%* in mid-cap stocks.
- *1%* in small-cap stocks.

This strategy stabilizes the portfolio while capturing growth across different stock categories.

### API Endpoints and Mechanism in index.js

The index.js file in the backend folder contains two important API endpoints, providing access to portfolio and transaction data:

---

*1. /portfolio Endpoint:*

- *Purpose*: This endpoint returns the complete status of the user's portfolio.
  
- *What It Returns*:
  - *Total Value of Portfolio*: The current total value of all stocks held.
  - *Net Profit*: The net profit (or loss) by comparing current value with the investment.
  - *Stocks in Portfolio*: A list of stocks in the portfolio, showing stock names, quantities, and current prices.
  - *Profit Percentage*: The percentage of total profit or loss based on investment.

- *Use Case*: Helps in monitoring the performance of the portfolio, tracking growth or loss.

---

*2. /logs Endpoint:*

- *Purpose*: This endpoint provides a record of all transactions (buys/sells) performed by the bot.

- *What It Returns*:
  - *Transaction Details*: Each transaction (buy/sell) with stock symbol, quantity, price, and type of transaction.
  - *Timestamps*: The exact time at which each transaction occurred.

- *Use Case*: Helps in reviewing the trade history, understanding patterns, and tracking each decision the bot has made with timestamps.

Frontend: Portfolio and Logs Display

This React component dynamically fetches and displays real-time portfolio data and transaction logs from the backend. It communicates with two API endpoints: /portfolio and /logs, updating the display every 5 seconds to keep the information current.
Key Features

    Portfolio Data Fetching:
        The component retrieves data from the /portfolio API, including:
            Net Profit: Total profit or loss.
            Total Portfolio Value: The current value of all investments.
            Cash in Hand: The amount of remaining cash.
            Profit Percentage: Calculated based on an initial investment of $100,000.

    Transaction Logs Fetching:
        From the /logs API, it fetches and displays transaction logs, showing:
            Timestamp: When the transaction occurred.
            Log Details: Information about each buy/sell transaction.
        The last 20 transactions are shown in the logs table.

    Data Refresh:
        The component automatically refreshes the portfolio and logs every 5 seconds using setInterval, providing a near real-time experience.

    Styling:
        The layout is styled with an imported Portfolio.css file, ensuring a clean and responsive interface.

Setup

Install dependencies with npm install, ensure the backend is running at http://localhost:3000, and start the frontend server using npm start. The application will continuously update the portfolio and logs on the user interface.
